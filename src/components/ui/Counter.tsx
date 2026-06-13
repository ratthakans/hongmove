"use client";

import { useEffect, useRef, useState } from "react";

/** นับเลขขึ้นเมื่อเลื่อนถึง (รองรับค่าที่มีตัวอักษรนำ/ตาม เช่น "8+", "1,000+", "รายแรก") */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = value.match(/^(\D*)([\d,]+)(\D*)$/);
  const target = m ? parseInt(m[2].replace(/,/g, ""), 10) : 0;
  const [n, setN] = useState(m ? 0 : -1);

  useEffect(() => {
    if (!m) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const dur = 1300;
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

  return (
    <span ref={ref} className={className}>
      {m ? `${m[1]}${n.toLocaleString("en-US")}${m[3]}` : value}
    </span>
  );
}
