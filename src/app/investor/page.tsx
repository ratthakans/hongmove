import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
  title: "นักลงทุนสัมพันธ์",
  description:
    "โอกาสร่วมลงทุนกับ HONG MOVE — ระบบนิเวศ EV Mobility และ Mixed-Use ครบวงจร สัมปทานสนามบิน ทอท. รายแรก พร้อมแผนขยายทั่วประเทศ",
};

const icons = { car: Car, bolt: Bolt, pin: Pin, fuel: Fuel, building: Building, leaf: Leaf };

export default function InvestorPage() {
  return (
    <>
      <PageHeader
        eyebrow="นักลงทุนสัมพันธ์ · Investor Relations"
        title="ร่วมลงทุนในระบบนิเวศ EV ครบวงจร"
        desc="HONG MOVE ไม่ได้มีแค่ธุรกิจรถ — แต่คือแพลตฟอร์มการเดินทางและพัฒนาเชิงพาณิชย์ ที่ผสานสัมปทานสนามบิน พลังงานสะอาด ค้าปลีก และอสังหาริมทรัพย์เข้าด้วยกัน"
      />

      {/* highlights */}
      <section className="border-b border-line bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {investorHighlights.map((h) => (
            <div key={h.v} className="text-center">
              <div className="text-3xl font-extrabold text-crimson md:text-4xl">{h.k}</div>
              <div className="mt-1 text-sm text-muted">{h.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* revenue streams */}
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
                  <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:border-crimson/20 hover:shadow-card">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-crimson/8 text-crimson">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-bold">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* why invest */}
      <section className="bg-cloud py-16 md:py-20">
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
            <SectionHeading eyebrow="ทำไมต้อง HONG MOVE" title="จุดแข็งที่สร้างความได้เปรียบ" />
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

      {/* strategic assets */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="สินทรัพย์ยุทธศาสตร์"
            title="ที่ดินทำเลทองในเขตสนามบิน"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {investorAssets.map((a, i) => (
              <Reveal key={a.place} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <Plane className="h-6 w-6 text-garnet" />
                  <h3 className="mt-4 text-lg font-bold">{a.place}</h3>
                  <div className="mt-2 text-3xl font-extrabold text-crimson">{a.area}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* roadmap */}
      <section className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="แผนการเติบโต" title="โรดแมปการลงทุน" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {investorRoadmap.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-garnet">
                    {r.phase}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* gated download CTA */}
      <section id="deck" className="py-16 md:py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-crimson-radial px-6 py-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-garnet/40 blur-[110px]" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
              <div className="text-white">
                <span className="inline-block rounded-full border border-cream/40 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cream">
                  เอกสารโครงการฉบับเต็ม
                </span>
                <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  ขอรับ <span className="text-cream">Investor Deck</span>
                </h2>
                <p className="mt-4 max-w-md text-white/80">
                  กรอกข้อมูลเพื่อรับเอกสารแผนธุรกิจและการลงทุนฉบับเต็ม
                  รวมรายละเอียดโครงการ แผนการเงิน และโอกาสร่วมทุน
                  ทีมนักลงทุนสัมพันธ์จะติดต่อกลับโดยตรง
                </p>
              </div>
              <div>
                <InvestorForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
