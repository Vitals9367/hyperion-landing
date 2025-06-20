import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import Fuse from "fuse.js";

// Cache for tags data to avoid reading file on every request
let tagsCache: Record<string, string> | null = null;
let tagsCacheTimestamp: number = 0;
let fuseInstanceCache: Fuse<{ tag: string; id: string }> | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache TTL

// Load tags from JSON file asynchronously with caching
async function loadTags(): Promise<Record<string, string>> {
  const now = Date.now();

  // Return cached data if still valid
  if (tagsCache && now - tagsCacheTimestamp < CACHE_TTL) {
    return tagsCache;
  }

  try {
    const tagsPath = path.join(process.cwd(), "public", "tags.json");
    const tagsData = await readFile(tagsPath, "utf-8");
    const parsedTags = JSON.parse(tagsData);

    // Update cache
    tagsCache = parsedTags;
    tagsCacheTimestamp = now;

    // Clear Fuse instance cache to force recreation with new data
    fuseInstanceCache = null;

    return parsedTags;
  } catch (error) {
    console.error("Error loading tags.json:", error);
    // Return cached data if available, even if expired
    if (tagsCache) {
      console.warn("Using expired cache due to file read error");
      return tagsCache;
    }
    return {};
  }
}

// Optimized Fuse.js configuration for better performance
const createFuseInstance = (tagsArray: Array<{ tag: string; id: string }>) => {
  return new Fuse(tagsArray, {
    keys: ["tag"],
    threshold: 0.3, // Default threshold
    includeScore: true,
    includeMatches: false,
    minMatchCharLength: 2,
    shouldSort: true,
    findAllMatches: false,
    location: 0,
    distance: 100,
    useExtendedSearch: false,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    // Performance optimizations
    isCaseSensitive: false,
  });
};

// Get or create Fuse instance with caching
function getFuseInstance(
  tags: Record<string, string>,
): Fuse<{ tag: string; id: string }> {
  if (!fuseInstanceCache) {
    const tagsArray = Object.entries(tags).map(([tag, id]) => ({
      tag,
      id,
    }));
    fuseInstanceCache = createFuseInstance(tagsArray);
  }
  return fuseInstanceCache;
}

// Find best match for a single keyword using Fuse.js
function findBestMatch(
  keyword: string,
  fuseInstance: Fuse<{ tag: string; id: string }>,
  threshold: number = 0.3,
): { tag: string; id: string; score: number } | null {
  const results = fuseInstance.search(keyword, {
    limit: 1, // Only get the best match
  });

  if (results.length > 0) {
    const bestMatch = results[0];
    if (bestMatch && (bestMatch.score || 0) <= threshold) {
      return {
        tag: bestMatch.item.tag,
        id: bestMatch.item.id,
        score: bestMatch.score || 0,
      };
    }
  }

  return null;
}

// Process multiple industries in parallel
async function processIndustries(
  industryList: string[],
  tags: Record<string, string>,
  threshold: number,
): Promise<
  Array<{
    input: string;
    match: { tag: string; id: string; score: number } | null;
  }>
> {
  // Get cached Fuse instance
  const fuseInstance = getFuseInstance(tags);

  // Process industries in parallel using Promise.all
  const promises = industryList.map(async (industry) => {
    const match = findBestMatch(industry, fuseInstance, threshold);
    return {
      input: industry,
      match: match
        ? {
            tag: match.tag,
            id: match.id,
            score: Math.round((1 - match.score) * 100) / 100, // Convert Fuse.js score to similarity (0-1)
          }
        : null,
    };
  });

  return Promise.all(promises);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const industries = searchParams.get("industries");
    const threshold = parseFloat(searchParams.get("threshold") || "0.3");

    // Validate input
    if (!industries) {
      return NextResponse.json(
        { error: "industries parameter is required" },
        { status: 400 },
      );
    }

    // Parse industries (comma-separated)
    const industryList = industries
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);

    if (industryList.length === 0) {
      return NextResponse.json(
        { error: "At least one industry must be provided" },
        { status: 400 },
      );
    }

    // Load tags asynchronously
    const tags = await loadTags();

    if (Object.keys(tags).length === 0) {
      return NextResponse.json(
        { error: "Unable to load tags data" },
        { status: 500 },
      );
    }

    // Process industries in parallel
    const results = await processIndustries(industryList, tags, threshold);

    return NextResponse.json({
      success: true,
      data: results,
      total: results.length,
      threshold,
      cacheInfo: {
        cached: tagsCache !== null,
        cacheAge: tagsCacheTimestamp ? Date.now() - tagsCacheTimestamp : null,
      },
    });
  } catch (error) {
    console.error("Error in industry keywords API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
