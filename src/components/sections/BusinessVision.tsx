import Image from "next/image";
import { businessPillars } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

export function BusinessVision() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/charging.jpg"
              alt="เคาน์เตอร์บริการ HONG MOVE"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="ระบบนิเวศธุรกิจ"
            title="มากกว่าการเดินทาง คือระบบนิเวศครบวงจร"
            desc="HONG MOVE พัฒนาโครงสร้างพื้นฐานด้านพลังงานสะอาดและไลฟ์สไตล์ ควบคู่กับบริการขนส่ง เพื่อยกระดับการเดินทางสาธารณะของไทย"
          />
          <div className="mt-8 space-y-4">
            {businessPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-crimson/20">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/business">
              ดูแผนธุรกิจทั้งหมด <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
