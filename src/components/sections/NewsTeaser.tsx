import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

/** Placeholder — จะดึงจาก Sanity CMS ในเฟส 3 */
const posts = [
  {
    slug: "official-launch-hatyai",
    title: "หงส์ มูฟ เปิดให้บริการอย่างเป็นทางการ ณ ท่าอากาศยานหาดใหญ่",
    category: "ข่าวบริษัท",
    date: "17 ต.ค. 2568",
    image: "/images/scenic-pier.jpg",
  },
  {
    slug: "ev-charging-aot",
    title: "ได้รับอนุญาตจาก ทอท. ดำเนินโครงการสถานีอัดประจุไฟฟ้า",
    category: "พลังงานสะอาด",
    date: "พ.ศ. 2568",
    image: "/images/charging.jpg",
  },
  {
    slug: "mixed-use-ptt-mall",
    title: "เดินหน้าโครงการ Mixed-Use ร่วมกับสถานี PTT และ Community Mall",
    category: "ข่าวบริษัท",
    date: "ปลายปี 2568",
    image: "/images/tour-resort.jpg",
  },
];

export function NewsTeaser() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="บทความ & ข่าวสาร" title="ความเคลื่อนไหวล่าสุด" />
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-crimson hover:gap-2.5 transition-all"
          >
            ดูทั้งหมด <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/news/${p.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-crimson px-3 py-1 text-[11px] font-semibold text-white">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <time className="text-xs text-muted">{p.date}</time>
                  <h3 className="mt-2 text-lg font-bold leading-snug transition-colors group-hover:text-crimson">
                    {p.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
