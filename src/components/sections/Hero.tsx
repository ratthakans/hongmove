import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Plane } from "@/components/ui/Icons";

const stats = [
  { k: "100%", v: "ยานยนต์ไฟฟ้า" },
  { k: "8+", v: "สนามบินเป้าหมาย" },
  { k: "24/7", v: "พร้อมให้บริการ" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* full-bleed scenic photo */}
      <Image
        src="/images/hero-station.jpg"
        alt="HONG MOVE Taxi VIP ยานยนต์ไฟฟ้า ณ ท่าอากาศยานหาดใหญ่"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      {/* brand gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-crimson-900/95 via-crimson-900/55 to-crimson-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/85 via-transparent to-crimson-900/20" />

      <div className="container-x relative w-full py-32">
        <div className="max-w-xl">
          <div className="animate-in inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-cream backdrop-blur">
            <Plane className="h-4 w-4" />
            ผู้ให้บริการรับส่งสนามบินรายแรกที่ได้รับอนุญาตจาก ทอท.
          </div>

          <h1
            className="animate-in mt-6 text-4xl font-extrabold leading-[1.05] text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.08s" }}
          >
            เหนือกว่าการเดินทาง
            <br />
            <span className="text-cream">คือการสร้างคุณค่า</span>
          </h1>

          <p
            className="animate-in mt-5 max-w-lg text-base leading-relaxed text-white/85 md:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            บริการ Taxi VIP และ Limousine ด้วยยานยนต์ไฟฟ้า 100% เชื่อมสนามบิน
            สู่เมืองและจุดหมายปลายทางทั่วภาคใต้ สะดวก ปลอดภัย ราคาโปร่งใส
          </p>

          <div
            className="animate-in mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "0.24s" }}
          >
            <Button href="/booking" variant="cream" className="px-7 py-3.5 text-base">
              จองรถเลย <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline" className="px-7 py-3.5 text-base">
              ดูบริการทั้งหมด
            </Button>
          </div>

          <div
            className="animate-in mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6"
            style={{ animationDelay: "0.32s" }}
          >
            {stats.map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-extrabold text-cream">{s.k}</div>
                <div className="text-sm text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/60 md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
