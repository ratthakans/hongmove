import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AirportNetwork } from "@/components/sections/AirportNetwork";
import { CTASection } from "@/components/sections/CTASection";
import { Bolt, Pin, Leaf, Plane } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "ธุรกิจของเรา",
  description:
    "ระบบนิเวศธุรกิจ HONG MOVE — สัมปทาน AOT, EV Charging Station, Community Mall & Mixed-Use และเครือข่ายสนามบินทั่วประเทศ",
};

const verticals = [
  {
    icon: Plane,
    title: "สัมปทานสนามบิน AOT",
    desc: "ผู้ให้บริการรับส่งผู้โดยสารรายแรกที่ได้รับอนุญาตจากท่าอากาศยานไทย ณ สนามบินหาดใหญ่ พร้อมฐานรายได้ที่ชัดเจนและจุดให้บริการที่แน่นอน",
  },
  {
    icon: Bolt,
    title: "EV Charging Station",
    desc: "สถานีอัดประจุยานยนต์ไฟฟ้าภายในเขตท่าอากาศยาน รองรับทั้งฝูงรถของบริษัทและประชาชนทั่วไป ส่งเสริมการใช้พลังงานสะอาด",
  },
  {
    icon: Pin,
    title: "Community Mall & Mixed-Use",
    desc: "พัฒนาสถานีบริการน้ำมัน PTT ควบคู่ Community Mall เพื่อเป็นศูนย์กลางด้านพลังงาน การเดินทาง และไลฟ์สไตล์สมัยใหม่แบบครบวงจร",
  },
  {
    icon: Leaf,
    title: "เมืองและสนามบินสีเขียว",
    desc: "ขับเคลื่อนประเทศไทยสู่การเป็น ‘เมืองสีเขียว’ และ ‘สนามบินสีเขียว’ ด้วยโครงสร้างพื้นฐานพลังงานสะอาดอย่างยั่งยืน",
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHeader
        eyebrow="ธุรกิจ"
        title="มากกว่าการเดินทาง คือระบบนิเวศครบวงจร"
        desc="HONG MOVE พัฒนาโครงสร้างพื้นฐานด้านพลังงานสะอาดและไลฟ์สไตล์ ควบคู่กับบริการขนส่ง เพื่อยกระดับการเดินทางสาธารณะของไทย"
      />

      {/* verticals */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="ระบบนิเวศธุรกิจ"
            title="เสาหลักของการเติบโต"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {verticals.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full gap-5 rounded-2xl border border-line bg-white p-7 transition-all hover:border-crimson/20 hover:shadow-card">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-crimson text-white">
                    <v.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* mixed-use vision banner */}
      <section className="pb-20 md:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-0 overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-2">
              <div className="relative aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[22rem]">
                <Image
                  src="/images/counter-staff.jpg"
                  alt="โครงการ Mixed-Use ของ HONG MOVE"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-garnet">
                  วิสัยทัศน์โครงการ
                </span>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                  ศูนย์กลางพลังงาน การเดินทาง และการใช้ชีวิตสมัยใหม่
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  บริษัทอยู่ระหว่างพัฒนาโครงการสถานีบริการน้ำมันภายใต้แบรนด์ PTT
                  ควบคู่กับ Community Mall ในเขตท่าอากาศยานหาดใหญ่ เพื่อพัฒนาเป็นศูนย์กลาง
                  ด้านพลังงาน การเดินทาง และไลฟ์สไตล์แบบครบวงจร พร้อมตั้งเป้าขยายเครือข่าย
                  บริการครอบคลุมสนามบินหลักทั่วประเทศ
                </p>
                <p className="mt-4 text-xs text-muted/70">
                  * รายละเอียดเชิงพาณิชย์และแผนการลงทุนสงวนไว้สำหรับการพิจารณาเป็นรายกรณี
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AirportNetwork />
      <CTASection />
    </>
  );
}
