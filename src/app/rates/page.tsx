import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { Line, Phone } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "อัตราค่าบริการ",
  description:
    "อัตราค่าบริการ HONG MOVE — Taxi VIP (มิเตอร์) เริ่มต้น 150 บาท และ Limousine เหมาตามปลายทางจากท่าอากาศยานหาดใหญ่",
};

// Taxi VIP มิเตอร์: เริ่ม 150 บาท (ไม่เกิน 2 กม.) เกินกว่านั้น กม.ละ 16 บาท
const taxiRows = Array.from({ length: 29 }, (_, i) => {
  const km = i + 2;
  return { km, fare: 150 + (km - 2) * 16 };
});

export default function RatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="อัตราค่าบริการ"
        title="ราคาชัดเจน โปร่งใส ทุกการเดินทาง"
        desc="Taxi VIP คิดตามมิเตอร์ ส่วน Limousine เป็นราคาเหมาตามปลายทาง — แจ้งราคาก่อนเดินทางทุกครั้ง"
      />

      {/* Taxi VIP meter */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Taxi VIP · มิเตอร์"
            title="อัตราค่าโดยสาร Taxi VIP"
            desc="เริ่มต้น 150 บาท (ระยะทางไม่เกิน 2 กม.) จากนั้นกิโลเมตรละ 16 บาท — อ้างอิงประกาศ 27 พ.ย. 2560"
          />
          <Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm tabular-nums">
                  <thead>
                    <tr className="bg-crimson text-white">
                      <th className="px-5 py-4 font-semibold">ระยะทาง (กม.)</th>
                      <th className="px-5 py-4 text-right font-semibold">ค่าโดยสาร (บาท)</th>
                      <th className="hidden px-5 py-4 font-semibold sm:table-cell">ระยะทาง (กม.)</th>
                      <th className="hidden px-5 py-4 text-right font-semibold sm:table-cell">ค่าโดยสาร (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: Math.ceil(taxiRows.length / 2) }).map((_, i) => {
                      const a = taxiRows[i];
                      const b = taxiRows[i + Math.ceil(taxiRows.length / 2)];
                      return (
                        <tr key={i} className={i % 2 ? "bg-cloud/40" : "bg-white"}>
                          <td className="px-5 py-3 font-medium text-ink/85">{a.km}</td>
                          <td className="px-5 py-3 text-right font-semibold text-crimson">{a.fare}</td>
                          <td className="hidden px-5 py-3 font-medium text-ink/85 sm:table-cell">{b?.km ?? ""}</td>
                          <td className="hidden px-5 py-3 text-right font-semibold text-crimson sm:table-cell">{b?.fare ?? ""}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="border-t border-line px-5 py-3 text-xs text-muted">
                ระยะทางเกิน 30 กม. คิดเพิ่มกิโลเมตรละ 16 บาท
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Limousine fixed rates (official doc) */}
      <section className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Limousine · เหมาตามปลายทาง"
            title="อัตราค่าโดยสาร Limousine (ท่าอากาศยานหาดใหญ่)"
            desc="ราคาเหมาต่อเที่ยวตามปลายทาง — เอกสารอัตราค่าบริการอย่างเป็นทางการ"
          />
          <div className="mt-10 space-y-6">
            {[1, 2, 3].map((p) => (
              <Reveal key={p}>
                <div className="overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-soft">
                  <Image
                    src={`/images/rate-limo-${p}.jpg`}
                    alt={`อัตราค่าโดยสาร Limousine หน้า ${p}`}
                    width={1654}
                    height={2339}
                    sizes="(max-width:768px) 100vw, 800px"
                    className="mx-auto h-auto w-full max-w-3xl rounded-lg"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            * กรณีรับงานต่อเนื่องหรือปลายทางอื่นนอกเหนือรายการ สอบถามทีมงานได้ทาง LINE
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-crimson-radial px-6 py-12 text-center text-white md:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">สอบถามราคา / จองเดินทาง</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              แจ้งต้นทาง–ปลายทาง ทีมงานยืนยันราคาให้ก่อนเดินทางทุกครั้ง
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={site.links.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-sm font-semibold text-white"
              >
                <Line className="h-5 w-5" /> สอบถามผ่าน LINE
              </a>
              <Button href="/booking" variant="cream" className="px-7 py-3.5">
                จองรถเลย
              </Button>
              <a
                href={site.links.callPrimary}
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-crimson"
              >
                <Phone className="h-5 w-5" /> {site.contact.mobile}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
