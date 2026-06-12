import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bolt, Plane } from "@/components/ui/Icons";

const stats = [
  { k: "100%", v: "ยานยนต์ไฟฟ้า" },
  { k: "8+", v: "สนามบินเป้าหมาย" },
  { k: "24/7", v: "พร้อมให้บริการ" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-crimson-radial text-white">
      <div className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-garnet/40 blur-[120px]" />

      <div className="container-x relative grid min-h-[84vh] items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="animate-in inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-cream backdrop-blur">
            <Plane className="h-4 w-4" />
            ผู้ให้บริการรับส่งสนามบินรายแรกที่ได้รับอนุญาตจาก ทอท.
          </div>

          <h1
            className="animate-in mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.08s" }}
          >
            เหนือกว่าการเดินทาง
            <br />
            <span className="text-cream">คือการสร้างคุณค่า</span>
          </h1>

          <p
            className="animate-in mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            บริการ Taxi VIP และ Limousine ด้วยยานยนต์ไฟฟ้า 100% สะดวก ปลอดภัย
            ราคาโปร่งใส เพื่อเมืองและสนามบินสีเขียวอย่างยั่งยืน
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
            className="animate-in mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6"
            style={{ animationDelay: "0.32s" }}
          >
            {stats.map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-extrabold text-cream">{s.k}</div>
                <div className="text-sm text-white/65">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in relative" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white to-cloud shadow-2xl">
            <Image
              src="/images/hero-car.jpg"
              alt="รถยนต์ไฟฟ้า HONG MOVE Taxi VIP"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-2"
            />
          </div>
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-ink shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-crimson-900">
              <Bolt className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold">EV 100% · ไร้มลภาวะ</div>
              <div className="text-xs text-muted">เดินทางเป็นมิตรกับสิ่งแวดล้อม</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
