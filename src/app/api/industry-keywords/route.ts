import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import Fuse from "fuse.js";

// Load tags from JSON file
function loadTags(): Record<string, string> {
  try {
    const tagsPath = path.join(process.cwd(), "public", "tags.json");
    const tagsData = readFileSync(tagsPath, "utf-8");
    return JSON.parse(tagsData);
  } catch (error) {
    console.error("Error loading tags.json:", error);
    return {};
  }
}

// Find best match for a single keyword using Fuse.js
function findBestMatch(
  keyword: string,
  tags: Record<string, string>,
  threshold: number = 0.3,
): { tag: string; id: string; score: number } | null {
  // Convert tags object to array of objects for Fuse.js
  const tagsArray = Object.entries(tags).map(([tag, id]) => ({
    tag,
    id,
  }));

  // Configure Fuse.js options
  const fuseOptions = {
    keys: ["tag"],
    threshold: threshold, // 0.0 = perfect match, 1.0 = very loose
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
  };

  const fuse = new Fuse(tagsArray, fuseOptions);
  const results = fuse.search(keyword);

  if (results.length > 0) {
    const bestMatch = results[0];
    if (bestMatch) {
      return {
        tag: bestMatch.item.tag,
        id: bestMatch.item.id,
        score: bestMatch.score || 0,
      };
    }
  }

  return null;
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

    // Load tags
    const tags = loadTags();

    if (Object.keys(tags).length === 0) {
      return NextResponse.json(
        { error: "Unable to load tags data" },
        { status: 500 },
      );
    }

    // Find matches for each industry
    const results = industryList.map((industry) => {
      const match = findBestMatch(industry, tags, threshold);
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

    return NextResponse.json({
      success: true,
      data: results,
      total: results.length,
      threshold,
    });
  } catch (error) {
    console.error("Error in industry keywords API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
