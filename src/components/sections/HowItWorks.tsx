import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "1",
    t: "เลือกบริการ & กรอกข้อมูล",
    d: "เลือก Taxi VIP หรือ Limousine ระบุจุดรับ-ส่ง จำนวนผู้โดยสาร แล้วเลือก ‘จองทันที’ หรือนัดวันเวลา",
  },
  {
    n: "2",
    t: "ส่งคำขอจอง",
    d: "คำขอเข้าระบบทีมงานทันที และเปิดแชต LINE ให้คุณยืนยัน — สะดวก ไม่ต้องโทรซ้ำ",
  },
  {
    n: "3",
    t: "ทีมงานยืนยันราคา & รถ",
    d: "เราติดต่อกลับยืนยันราคาที่โปร่งใสและจัดคนขับมืออาชีพ พร้อมส่งเบอร์คนขับให้ทาง LINE",
  },
  {
    n: "4",
    t: "เดินทางสบายใจ",
    d: "รถยนต์ไฟฟ้ารุ่นใหม่มารับตรงเวลา สะอาด เงียบ ปลอดภัย พร้อมประกันทุกการเดินทาง",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="ง่ายใน 4 ขั้นตอน"
          title="จองรถกับ HONG MOVE อย่างไร"
          desc="ตั้งแต่กดจองจนถึงปลายทาง — สะดวก โปร่งใส ติดตามได้ทุกขั้นตอน"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-line bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-crimson text-xl font-extrabold text-white">
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <span className="absolute right-5 top-9 hidden text-2xl text-crimson/25 lg:block">→</span>
                )}
                <h3 className="mt-5 text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
