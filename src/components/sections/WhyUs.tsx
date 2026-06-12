import { valueProps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkle, Shield, Leaf } from "@/components/ui/Icons";

const icons = { sparkle: Sparkle, shield: Shield, leaf: Leaf };

export function WhyUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="ทำไมต้อง HONG MOVE"
          title="มาตรฐานพรีเมียม ที่ไว้วางใจได้"
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {valueProps.map((v, i) => {
            const Icon = icons[v.icon as keyof typeof icons];
            return (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:border-crimson/20 hover:shadow-card">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson/8 text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
