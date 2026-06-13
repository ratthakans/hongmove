import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export function Services() {
  return (
    <section id="services" className="bg-cloud py-16 md:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="บริการของเรา"
          title="ครบทุกการเดินทาง ในระบบเดียว"
          desc="ตั้งแต่รับส่งสนามบินระดับ VIP ไปจนถึงแพ็กเกจท่องเที่ยว — ทุกบริการขับเคลื่อนด้วยพลังงานสะอาด"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link
                href="/services"
                className="group block h-full overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/60 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-crimson">
                    {s.badge}
                  </span>
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
                    {s.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-muted">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
                    ดูเพิ่มเติม
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
