"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles, articleCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function NewsGrid() {
  const [cat, setCat] = useState("ทั้งหมด");
  const list = cat === "ทั้งหมด" ? articles : articles.filter((a) => a.category === cat);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {articleCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              cat === c
                ? "bg-crimson text-white"
                : "border border-line bg-white text-muted hover:border-crimson/30 hover:text-crimson",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <Link
            key={a.slug}
            href={`/news/${a.slug}`}
            className="group block overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={a.image}
                alt={a.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-crimson px-3 py-1 text-[11px] font-semibold text-white">
                {a.category}
              </span>
            </div>
            <div className="p-5">
              <time className="text-xs text-muted">{a.date}</time>
              <h3 className="mt-2 text-lg font-bold leading-snug transition-colors group-hover:text-crimson">
                {a.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
