import Image from "next/image";
import { airports } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Plane } from "@/components/ui/Icons";

export function AirportNetwork() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-20">
      <Image
        src="/images/hero-airport.jpg"
        alt="ท่าอากาศยานหาดใหญ่"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-crimson-900/90" />
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-garnet/30 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="เครือข่ายของเรา"
          title="ขยายสู่สนามบินหลักทั่วประเทศ"
          desc="เริ่มต้นที่ท่าอากาศยานหาดใหญ่ พร้อมแผนขยายเครือข่ายบริการครอบคลุมสนามบินยุทธศาสตร์ทั่วไทย"
          light
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {airports.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.05}>
              <div
                className={`relative h-full rounded-2xl border p-5 backdrop-blur transition-colors ${
                  a.live
                    ? "border-cream/50 bg-cream/10"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Plane className="h-5 w-5 text-cream" />
                  {a.live && (
                    <span className="rounded-full bg-cream px-2.5 py-0.5 text-[10px] font-bold text-crimson-900">
                      เปิดแล้ว
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  สนามบิน{a.name}
                </h3>
                <div className="mt-1 text-2xl font-extrabold text-cream">
                  {a.cars}
                  <span className="ml-1 text-sm font-medium text-white/60">คัน</span>
                </div>
                <div className="mt-1 text-xs text-white/55">{a.status}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
