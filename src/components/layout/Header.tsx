"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, Close, ArrowRight } from "@/components/ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // home page has a crimson hero → transparent header until scroll.
  // inner pages → solid header from the start for guaranteed readability.
  const solid = scrolled || pathname !== "/";
  const isEn = pathname.startsWith("/en");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link href="/" className="relative z-10 flex items-center" aria-label={site.name}>
          <Image
            src={solid ? "/brand/logo-crimson.png" : "/brand/logo-white.png"}
            alt={site.name}
            width={150}
            height={70}
            priority
            className="h-10 w-auto transition-all md:h-11"
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  solid ? "text-ink/80 hover:text-crimson" : "text-white/90 hover:text-white",
                  active && (solid ? "text-crimson" : "text-white"),
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={isEn ? "/" : "/en"}
            className={cn(
              "text-sm font-semibold transition-colors",
              solid ? "text-ink/70 hover:text-crimson" : "text-white/90 hover:text-white",
            )}
          >
            {isEn ? "ไทย" : "EN"}
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-crimson-700"
          >
            จองรถเลย
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="เมนู"
          className={cn(
            "relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            solid || open ? "text-crimson" : "text-white",
          )}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-0 bg-crimson-radial transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="container-x flex h-full flex-col justify-center gap-1 pt-20">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-2xl font-semibold text-white"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-4 text-base font-semibold text-crimson-900"
          >
            จองรถเลย <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href={isEn ? "/" : "/en"}
            onClick={() => setOpen(false)}
            className="mt-3 text-center text-sm font-semibold text-white/80"
          >
            {isEn ? "ดูภาษาไทย" : "View in English (EN)"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
