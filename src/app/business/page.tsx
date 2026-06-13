import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AirportNetwork } from "@/components/sections/AirportNetwork";
import { CTASection } from "@/components/sections/CTASection";
import { InvestorForm } from "@/components/forms/InvestorForm";
import {
  investorHighlights,
  revenueStreams,
  investorAssets,
  investorWhy,
  investorRoadmap,
} from "@/lib/data";
import { Car, Bolt, Pin, Fuel, Building, Leaf, Shield, Plane } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "ธุรกิจ & นักลงทุน",
  description:
    "ระบบนิเวศธุรกิจ HONG MOVE — Taxi VIP/Limousine, EV Charging, Community Mall & Mixed-Use, สถานี PTT, อสังหาฯ สนามบิน และโอกาสร่วมลงทุน พร้อมดาวน์โหลดเอกสารโครงการ",
};

const icons = { car: Car, bolt: Bolt, pin: Pin, fuel: Fuel, building: Building, leaf: Leaf };

export default function BusinessPage() {
  return (
    <>
      <PageHeader
        eyebrow="ธุรกิจ & นักลงทุน · Business & Investor"
        title="ระบบนิเวศ EV ครบวงจร ที่พร้อมเติบโต"
        desc="HONG MOVE ไม่ได้มีแค่ธุรกิจรถ — แต่คือแพลตฟอร์มการเดินทางและพัฒนาเชิงพาณิชย์ ที่ผสานสัมปทานสนามบิน พลังงานสะอาด ค้าปลีก และอสังหาริมทรัพย์เข้าด้วยกัน"
      />

      {/* highlights — animated counters */}
      <section className="border-b border-line bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {investorHighlights.map((h) => (
            <div key={h.v} className="text-center">
              <Counter
                value={h.k}
                className="block text-4xl font-extrabold text-crimson md:text-5xl"
              />
              <div className="mt-1.5 text-sm text-muted">{h.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* revenue streams — image cards */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="โมเดลรายได้"
            title="6 ธุรกิจ ในระบบนิเวศเดียว"
            desc="รายได้หลายช่องทางที่เสริมกัน ลดความเสี่ยง และเพิ่มมูลค่าระยะยาว"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {revenueStreams.map((s, i) => {
              const Icon = icons[s.icon as keyof typeof icons] ?? Car;
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-crimson">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold text-white">
                        {s.title}
                      </h3>
                    </div>
                    <p className="p-5 text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* mixed-use vision banner */}
      <section className="pb-4">
        <div className="container-x">
          <Reveal>
            <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-2">
              <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[24rem]">
                <Image
                  src="/images/hero-station.jpg"
                  alt="โครงการ Mixed-Use ของ HONG MOVE"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 lg:self-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-garnet">
                  วิสัยทัศน์โครงการ
                </span>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                  ศูนย์กลางพลังงาน การเดินทาง และการใช้ชีวิตสมัยใหม่
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  บริษัทอยู่ระหว่างพัฒนาสถานีบริการน้ำมันภายใต้แบรนด์ PTT ควบคู่ Community Mall
                  ในเขตท่าอากาศยานหาดใหญ่ เพื่อพัฒนาเป็นศูนย์กลางด้านพลังงาน การเดินทาง
                  และไลฟ์สไตล์แบบครบวงจร พร้อมตั้งเป้าขยายเครือข่ายครอบคลุมสนามบินหลักทั่วประเทศ
                </p>
                <p className="mt-4 text-xs text-muted/70">
                  * รายละเอียดเชิงพาณิชย์และแผนการลงทุนสงวนไว้สำหรับการพิจารณาเป็นรายกรณี
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* why invest */}
      <section className="py-16 md:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/scenic-pier.jpg"
                alt="HONG MOVE EV ecosystem"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="ทำไมต้องลงทุนกับเรา" title="จุดแข็งที่สร้างความได้เปรียบ" />
            <ul className="mt-6 space-y-4">
              {investorWhy.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson text-white">
                    <Shield className="h-3.5 w-3.5" />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* strategic assets — image cards */}
      <section className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="สินทรัพย์ยุทธศาสตร์"
            title="ที่ดินทำเลทองในเขตสนามบิน"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {investorAssets.map((a, i) => (
              <Reveal key={a.place} delay={i * 0.08}>
                <div className="group h-full overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.place}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/80 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="text-xs text-white/80">{a.place}</div>
                      <div className="text-2xl font-extrabold text-white">{a.area}</div>
                    </div>
                  </div>
                  <p className="p-5 text-sm leading-relaxed text-muted">{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* expansion network */}
      <AirportNetwork />

      {/* roadmap */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="แผนการเติบโต" title="โรดแมปการลงทุน" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {investorRoadmap.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-line bg-white p-6">
                  <span className="absolute -top-3 left-6 rounded-full bg-crimson px-3 py-1 text-xs font-bold text-white">
                    {r.phase}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* gated investor deck */}
      <section id="deck" className="pb-16 md:pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-crimson-radial px-6 py-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-garnet/40 blur-[110px]" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div className="text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white">
                  <Plane className="h-4 w-4" /> เอกสารโครงการฉบับเต็ม
                </span>
                <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  ขอรับ Investor Deck
                </h2>
                <p className="mt-4 max-w-md text-white/80">
                  กรอกข้อมูลเพื่อรับเอกสารแผนธุรกิจและการลงทุนฉบับเต็ม
                  รวมรายละเอียดโครงการ แผนการเงิน และโอกาสร่วมทุน
                  ทีมนักลงทุนสัมพันธ์จะติดต่อกลับโดยตรง
                </p>
              </div>
              <InvestorForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
