import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/lib/site";
import { vision, missions, timeline, projectHighlights } from "@/lib/data";
import { Shield } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "บริษัท หงส์ มูฟ จำกัด — ผู้ให้บริการ Taxi VIP และ Limousine ด้วยยานยนต์ไฟฟ้า 100% ภายใต้แนวคิด Smart Mobility & Green Transportation",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="เกี่ยวกับเรา"
        title="วิวัฒนาการ และความภาคภูมิใจ"
        desc="บริษัท หงส์ มูฟ จำกัด ดำเนินธุรกิจระบบขนส่งมวลชนสมัยใหม่ มุ่งเน้นบริการ Taxi VIP และ Limousine ด้วยยานยนต์ไฟฟ้า 100% ภายใต้แนวคิด ‘Smart Mobility & Green Transportation’"
      />

      {/* intro */}
      <section className="py-16 md:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/fleet-night.jpg"
                alt="ฝูงรถ HONG MOVE"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="จุดเริ่มต้น"
              title="ยกระดับการเดินทางสาธารณะของไทย"
            />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                บริษัท หงส์ มูฟ จำกัด จดทะเบียนจัดตั้งเมื่อวันที่ 27 กันยายน พ.ศ. 2567
                เพื่อดำเนินธุรกิจระบบขนส่งมวลชนสมัยใหม่ ด้วยยานยนต์ไฟฟ้า 100%
                เพื่อให้การเดินทางสาธารณะสะดวก ปลอดภัย เข้าถึงง่าย และเป็นมิตรต่อสิ่งแวดล้อม
              </p>
              <p>
                บริษัทเริ่มเปิดให้บริการอย่างเป็นทางการเมื่อ 17 ตุลาคม พ.ศ. 2568
                ณ ท่าอากาศยานหาดใหญ่ จังหวัดสงขลา พร้อมพัฒนาโครงสร้างพื้นฐานด้านพลังงานสะอาดควบคู่กันไป
              </p>
              <p>
                ปัจจุบันครอบคลุมหลายธุรกิจ ทั้งบริการ Taxi VIP และ Limousine, สถานีอัดประจุไฟฟ้า (EV Charger Station),
                โครงการ Community Mall และ Mixed-Use Project เพื่อรองรับเมืองและสนามบินสีเขียวในอนาคต
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* vision / mission */}
      <section className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="h-full rounded-3xl bg-crimson-radial p-8 text-white md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                  วิสัยทัศน์ · Vision
                </span>
                <p className="mt-5 text-xl font-semibold leading-relaxed md:text-2xl">
                  “{vision}”
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-white p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-garnet">
                  พันธกิจ · Mission
                </span>
                <ul className="mt-5 space-y-3">
                  {missions.map((m) => (
                    <li key={m} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cream ring-2 ring-crimson/20" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="เส้นทางการเติบโต"
            title="วิวัฒนาการของ HONG MOVE"
            align="center"
          />
          <div className="mx-auto mt-14 max-w-3xl">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crimson text-sm font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < timeline.length - 1 && (
                      <span className="mt-2 w-px flex-1 bg-line" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <span className="text-sm font-semibold text-garnet">{t.date}</span>
                    <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* highlights */}
      <section className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="จุดเด่นโครงการ" title="ทำไมโครงการของเราจึงน่าเชื่อถือ" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectHighlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.05}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-crimson/8 text-crimson">
                    <Shield className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-ink/80">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 rounded-2xl border border-line bg-white p-6 text-center text-sm text-muted">
              สำนักงานใหญ่: {site.contact.address}
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
