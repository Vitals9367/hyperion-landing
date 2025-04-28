import type { MetadataRoute } from "next";
import { env } from "@/env";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

const ROUTE_PRIORITIES = {
  HOME: 1.0,
  SERVICES: 0.8,
  BLOG: 0.7,
  LEGAL: 0.5,
} as const;

const ROUTE_FREQUENCIES = {
  STATIC: "weekly" as const,
  BLOG: "monthly" as const,
} as const;

const staticRoutes: RouteConfig[] = [
  {
    path: "/",
    priority: ROUTE_PRIORITIES.HOME,
    changeFrequency: ROUTE_FREQUENCIES.STATIC,
  },
  {
    path: "/services/lead-generation",
    priority: ROUTE_PRIORITIES.SERVICES,
    changeFrequency: ROUTE_FREQUENCIES.STATIC,
  },
  {
    path: "/services/client-onboarding",
    priority: ROUTE_PRIORITIES.SERVICES,
    changeFrequency: ROUTE_FREQUENCIES.STATIC,
  },
  {
    path: "/services/sales-pipelines",
    priority: ROUTE_PRIORITIES.SERVICES,
    changeFrequency: ROUTE_FREQUENCIES.STATIC,
  },
  {
    path: "/terms",
    priority: ROUTE_PRIORITIES.LEGAL,
    changeFrequency: ROUTE_FREQUENCIES.STATIC,
  },
  {
    path: "/privacy",
    priority: ROUTE_PRIORITIES.LEGAL,
    changeFrequency: ROUTE_FREQUENCIES.STATIC,
  },
  //   {
  //     path: "/blog",
  //     priority: ROUTE_PRIORITIES.BLOG,
  //     changeFrequency: ROUTE_FREQUENCIES.STATIC,
  //   },
];

// const blogPosts: RouteConfig[] = [
//   {
//     path: "/blog/ai-automation-guide",
//     priority: ROUTE_PRIORITIES.BLOG,
//     changeFrequency: ROUTE_FREQUENCIES.BLOG,
//   },
//   {
//     path: "/blog/lead-generation-tips",
//     priority: ROUTE_PRIORITIES.BLOG,
//     changeFrequency: ROUTE_FREQUENCIES.BLOG,
//   },
//   {
//     path: "/blog/client-onboarding-best-practices",
//     priority: ROUTE_PRIORITIES.BLOG,
//     changeFrequency: ROUTE_FREQUENCIES.BLOG,
//   },
//   {
//     path: "/blog/sales-pipeline-optimization",
//     priority: ROUTE_PRIORITIES.BLOG,
//     changeFrequency: ROUTE_FREQUENCIES.BLOG,
//   },
// ];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL;
  const allRoutes = [...staticRoutes];

  return allRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
