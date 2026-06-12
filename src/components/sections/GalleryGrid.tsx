"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery } from "@/lib/data";
import { Close } from "@/components/ui/Icons";

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {gallery.map((g, i) => (
          <button
            key={g.src}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-2xl bg-cloud ${
              i % 5 === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <div className={`relative ${i % 5 === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
              <Image
                src={g.src}
                alt={g.caption}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 text-left text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {g.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="ปิด"
          >
            <Close className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] w-[88vw] max-w-4xl">
              <Image
                src={gallery[active].src}
                alt={gallery[active].caption}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {gallery[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
