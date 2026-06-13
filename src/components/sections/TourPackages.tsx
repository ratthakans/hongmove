import Image from "next/image";
import { tourPackages } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Pin } from "@/components/ui/Icons";

export function TourPackages() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Hong Travel"
            title="แพ็กเกจท่องเที่ยวอันดามัน"
            desc="เชื่อมสนามบินสู่จุดหมายปลายทางสุดพิเศษ ด้วยรถ EV และทีมงานมืออาชีพ"
          />
          <Button href="/booking" variant="ghost" className="hidden sm:inline-flex">
            จองแพ็กเกจ <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tourPackages.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/90 via-crimson-900/20 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-cream px-3 py-1 text-xs font-bold text-crimson-900">
                    {t.duration}
                  </span>
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <h3 className="text-lg font-bold leading-snug">{t.name}</h3>
                    <div className="mt-1 text-sm">
                      <span className="text-xs text-white/70">เริ่มต้น</span>{" "}
                      <span className="text-xl font-extrabold text-white">฿{t.price}</span>
                      <span className="text-xs text-white/70"> /ท่าน</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-1.5 p-5">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-muted">
                      <Pin className="h-3.5 w-3.5 shrink-0 text-garnet" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
