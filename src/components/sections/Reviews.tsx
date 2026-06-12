import { reviews } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "@/components/ui/Icons";

export function Reviews() {
  return (
    <section className="bg-cloud py-16 md:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="เสียงจากลูกค้า"
          title="ลูกค้าไว้วางใจเรา"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <div className="flex gap-0.5 text-cream">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/80">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <div className="font-bold text-ink">{r.name}</div>
                  <div className="text-xs text-muted">{r.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
