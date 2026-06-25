import Link from "next/link";
import { rateTable } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Pin } from "@/components/ui/Icons";

const routes = rateTable.slice(0, 4);

export function PopularRoutes() {
  return (
    <section className="bg-cloud py-16 md:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="เส้นทางยอดนิยม"
          title="ราคาประเมินเส้นทางที่ใช้บ่อย"
          desc="ราคาโปร่งใส แจ้งก่อนเดินทาง — ดูเส้นทางและอัตราเต็มได้ที่หน้าอัตราค่าบริการ"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r, i) => (
            <Reveal key={r.route} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                <Pin className="h-6 w-6 text-crimson" />
                <h3 className="mt-3 text-base font-bold leading-snug text-ink">{r.route}</h3>
                <p className="mt-1 text-xs text-muted">ระยะทางประมาณ {r.km}</p>
                <div className="mt-4 space-y-2 border-t border-line pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Taxi VIP</span>
                    <span className="font-bold text-ink">฿{r.taxi}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Limousine</span>
                    <span className="font-bold text-crimson">฿{r.limo}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/rates" variant="outline" className="px-6 py-3">
            ดูอัตราค่าบริการทั้งหมด <ArrowRight className="h-4 w-4" />
          </Button>
          <Link href="/booking" className="text-sm font-semibold text-crimson hover:underline">
            หรือจองรถเลย →
          </Link>
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          * ราคาเป็นค่าประเมินเบื้องต้น อาจปรับตามช่วงเวลา จุดรับจริง และปริมาณสัมภาระ
        </p>
      </div>
    </section>
  );
}
