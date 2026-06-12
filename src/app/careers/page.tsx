import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { jobs } from "@/lib/data";
import { site } from "@/lib/site";
import { ArrowRight, Pin, Sparkle, Shield, Leaf, Bolt } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "ร่วมงานกับเรา",
  description:
    "ร่วมเป็นส่วนหนึ่งของ HONG MOVE — รับสมัครพนักงานขับรถ Taxi VIP, พนักงานเคาน์เตอร์ และอีกหลายตำแหน่ง พร้อมสมัครร้านค้า/Vendor",
};

const perks = [
  { icon: Shield, t: "มั่นคง ปลอดภัย", d: "ประกันสังคม + ประกันอุบัติเหตุ ทุกตำแหน่ง" },
  { icon: Sparkle, t: "รายได้ดี", d: "ฐานเงินเดือน + ส่วนแบ่ง + โบนัสตามผลงาน" },
  { icon: Leaf, t: "องค์กรสีเขียว", d: "ทำงานกับยานยนต์ไฟฟ้าและพลังงานสะอาด" },
  { icon: Bolt, t: "เติบโตก้าวหน้า", d: "อบรมพัฒนาทักษะและโอกาสเลื่อนตำแหน่ง" },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="ร่วมงานกับเรา"
        title="เติบโตไปกับ HONG MOVE"
        desc="ร่วมขับเคลื่อนการเดินทางแห่งอนาคตของประเทศไทย เรากำลังมองหาคนรุ่นใหม่ที่มีใจรักงานบริการมาเป็นส่วนหนึ่งของทีม"
      />

      {/* perks */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="ทำไมต้องร่วมงานกับเรา" title="สวัสดิการและวัฒนธรรมองค์กร" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson/8 text-crimson">
                    <p.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* job listings */}
      <section id="jobs" className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="ตำแหน่งที่เปิดรับ" title="ตำแหน่งงานว่าง" />
          <div className="mt-12 space-y-4">
            {jobs.map((j, i) => (
              <Reveal key={j.slug} delay={i * 0.06}>
                <Link
                  href={`/careers/${j.slug}`}
                  className="group flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:border-crimson/30 hover:shadow-card md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-crimson/8 px-3 py-1 text-xs font-semibold text-crimson">
                        {j.dept}
                      </span>
                      <span className="rounded-full bg-cloud px-3 py-1 text-xs text-muted">{j.type}</span>
                      {j.open && (
                        <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-crimson-900">
                          เปิดรับ
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-bold transition-colors group-hover:text-crimson">
                      {j.title}
                    </h3>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                      <Pin className="h-4 w-4" /> {j.location} · {j.salary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-crimson px-5 py-2.5 text-sm font-semibold text-white transition-all group-hover:gap-2.5 md:self-auto">
                    ดูรายละเอียด <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* vendor + driver callout */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-crimson-radial p-8 text-white md:p-10">
              <h3 className="text-2xl font-bold text-white">สมัครเป็นคนขับ HONG</h3>
              <p className="mt-3 flex-1 text-white/80">
                มีรถหรือสนใจขับรถ EV รับส่งผู้โดยสาร? ร่วมเป็นพาร์ตเนอร์คนขับกับเรา
                รายได้ดี มีงานต่อเนื่องจากฐานสนามบิน
              </p>
              <Link
                href="#apply"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-crimson-900 transition-colors hover:bg-cream-600"
              >
                สมัครคนขับ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 md:p-10">
              <h3 className="text-2xl font-bold text-crimson">สมัครร้านค้า / Vendor</h3>
              <p className="mt-3 flex-1 text-muted">
                ร่วมเป็นพันธมิตรร้านค้าในเครือข่าย Community Mall และจุดบริการของ HONG MOVE
                เข้าถึงนักท่องเที่ยวและผู้โดยสารจำนวนมาก
              </p>
              <a
                href={`mailto:${site.contact.email}?subject=สมัครร้านค้า Vendor`}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-crimson-700"
              >
                ติดต่อสมัครร้านค้า <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* application form */}
      <section id="apply" className="bg-cloud py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <SectionHeading
            eyebrow="สมัครงานออนไลน์"
            title="กรอกใบสมัคร"
            desc="กรอกข้อมูลและแนบเรซูเม่ ทีมงานจะติดต่อกลับโดยเร็วที่สุด"
            align="center"
          />
          <div className="mt-10 rounded-3xl border border-line bg-white p-6 shadow-soft md:p-10">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
