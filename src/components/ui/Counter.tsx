"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** นับเลขขึ้นเมื่อเลื่อนถึง — สงวนความกว้างของค่าสุดท้ายไว้ ตัวเลขจึงไม่ดิ้น */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = value.match(/^(\D*)([\d,]+)(\D*)$/);
  const target = m ? parseInt(m[2].replace(/,/g, ""), 10) : 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!m) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const dur = 1200;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [m, target]);

  if (!m) return <span className={className}>{value}</span>;

  const current = `${m[1]}${n.toLocaleString("en-US")}${m[3]}`;
  return (
    <span ref={ref} className={cn("relative inline-block tabular-nums", className)}>
      {/* placeholder สงวนความกว้างเท่าค่าสุดท้าย (มองไม่เห็น) */}
      <span aria-hidden className="invisible">
        {value}
      </span>
      {/* ตัวเลขที่กำลังนับ ทับบนพื้นที่เดิม */}
      <span className="absolute inset-0">{current}</span>
    </span>
  );
}
