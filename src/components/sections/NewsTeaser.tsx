import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

/** Placeholder — จะดึงจาก Sanity CMS ในเฟส 3 */
const posts = [
  {
    slug: "expand-ev-fleet",
    title: "HONG MOVE ขยายฝูงรถ EV เพิ่ม 50 คัน รองรับผู้โดยสารสนามบิน",
    category: "ข่าวบริษัท",
    date: "12 มิ.ย. 2569",
    image: "/images/station-photo.jpg",
  },
  {
    slug: "ev-charging-aot",
    title: "เปิดสถานีอัดประจุไฟฟ้าภายในท่าอากาศยานหาดใหญ่",
    category: "พลังงานสะอาด",
    date: "28 พ.ค. 2569",
    image: "/images/counter-staff.jpg",
  },
  {
    slug: "hong-travel-andaman",
    title: "Hong Travel เปิดเส้นทางใหม่ เชื่อมอ่าวไทย–อันดามัน สู่เกาะหลีเป๊ะ",
    category: "ท่องเที่ยว",
    date: "15 พ.ค. 2569",
    image: "/images/car-sedan.jpg",
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
