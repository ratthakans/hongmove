import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { jobs, articles } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/business", "/careers", "/news", "/gallery", "/contact", "/booking", "/en"];
  const staticPages = routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const jobPages = jobs.map((j) => ({
    url: `${site.url}/careers/${j.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const articlePages = articles.map((a) => ({
    url: `${site.url}/news/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticPages, ...jobPages, ...articlePages];
}
