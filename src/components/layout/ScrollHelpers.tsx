"use client";

import { useEffect, useState } from "react";

/** แถบความคืบหน้าการเลื่อนด้านบน + ปุ่มกลับขึ้นบน */
export function ScrollHelpers() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      setProgress(p);
      setShowTop(h.scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-crimson transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="กลับขึ้นบน"
        className={`fixed bottom-5 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink/85 text-white shadow-lg backdrop-blur transition-all hover:bg-ink ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
