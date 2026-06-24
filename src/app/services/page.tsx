import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { VehicleCapacity } from "@/components/sections/VehicleCapacity";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site";
import { fleet } from "@/lib/data";
import { Sparkle, Shield, Leaf, Bolt, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "บริการของเรา",
  description:
    "Taxi VIP, Limousine, เช่ารถ EV และ Hong Travel — พร้อมตารางเปรียบเทียบอัตราค่าบริการ Taxi VIP และ Limousine",
};

const features = [
  { icon: Sparkle, t: "ราคาโปร่งใส", d: "แจ้งราคาชัดเจนก่อนเดินทาง ไม่มีค่าใช้จ่ายแอบแฝง" },
  { icon: Shield, t: "ปลอดภัยมีประกัน", d: "คนขับมืออาชีพ มีใบอนุญาต พร้อมประกันภัยทุกการเดินทาง" },
  { icon: Leaf, t: "ยานยนต์ไฟฟ้า 100%", d: "ไร้มลภาวะ ลดคาร์บอน เพื่อสิ่งแวดล้อมที่ยั่งยืน" },
  { icon: Bolt, t: "บริการ 24 ชั่วโมง", d: "พร้อมให้บริการรับส่งสนามบินตลอดเที่ยวบิน" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="บริการ"
        title="ครบทุกการเดินทาง ในระบบเดียว"
        desc="ตั้งแต่รับส่งสนามบินระดับ VIP ลีมูซีนพรีเมียม เช่ารถ EV ไปจนถึงแพ็กเกจท่องเที่ยว — ทุกบริการขับเคลื่อนด้วยพลังงานสะอาด"
      />

      {/* service cards */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/60 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-crimson">
                    {s.badge}
                  </span>
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">{s.title}</h3>
                </div>
                <p className="p-5 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* features */}
      <section className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="มาตรฐานบริการ" title="คุณภาพที่คุณวางใจได้" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson/8 text-crimson">
                    <f.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* fleet */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="ฝูงรถของเรา" title="ยานยนต์ไฟฟ้าหลากหลายรุ่น" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {fleet.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.08}>
                <div className="h-full overflow-hidden rounded-2xl border border-line bg-white">
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-white to-cloud">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-crimson/8 px-3 py-1 text-xs font-semibold text-crimson">
                        {v.type}
                      </span>
                      <span className="text-xs text-muted">{v.seats}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold">{v.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* passenger & luggage capacity infographic */}
      <VehicleCapacity />

      {/* rates link */}
      <section className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-crimson-radial p-8 text-white md:flex-row md:items-center md:p-12">
              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  อัตราค่าบริการ
                </span>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                  ดูราคา Taxi VIP และ Limousine แบบละเอียด
                </h2>
                <p className="mt-3 text-white/80">
                  Taxi VIP คิดตามมิเตอร์ เริ่มต้น 150 บาท · Limousine เหมาตามปลายทาง — ดูตารางราคาเต็มได้ที่นี่
                </p>
              </div>
              <Button href="/rates" variant="cream" className="shrink-0 px-7 py-3.5 text-base">
                ดูอัตราค่าบริการ <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
