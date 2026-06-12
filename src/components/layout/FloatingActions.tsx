"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { Line, Phone, Calendar } from "@/components/ui/Icons";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href={site.links.line}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="แชทผ่าน LINE"
        className="group flex items-center gap-2 rounded-full bg-[#06C755] py-3 pl-4 pr-4 text-white shadow-lg transition-all hover:pl-5"
      >
        <Line className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[7rem] group-hover:opacity-100">
          แชท LINE
        </span>
      </a>
      <a
        href={site.links.callPrimary}
        aria-label="โทรหาเรา"
        className="group flex items-center gap-2 rounded-full bg-crimson py-3 pl-4 pr-4 text-white shadow-lg transition-all hover:pl-5"
      >
        <Phone className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[7rem] group-hover:opacity-100">
          โทรเลย
        </span>
      </a>
      <Link
        href="/booking"
        aria-label="จองรถ"
        className="group flex items-center gap-2 rounded-full bg-cream py-3 pl-4 pr-4 text-crimson-900 shadow-lg transition-all hover:pl-5"
      >
        <Calendar className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[7rem] group-hover:opacity-100">
          จองรถ
        </span>
      </Link>
    </div>
  );
}
