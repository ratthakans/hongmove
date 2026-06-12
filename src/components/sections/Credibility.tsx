import { credentials } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Plane, Shield, Car, Leaf, Sparkle } from "@/components/ui/Icons";

const icons = { plane: Plane, shield: Shield, car: Car, leaf: Leaf, sparkle: Sparkle };

export function Credibility() {
  return (
    <section className="bg-cloud py-16 md:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="ความน่าเชื่อถือ"
          title="ทำไมต้องไว้วางใจ HONG MOVE"
          desc="มาตรฐานที่ตรวจสอบได้จริง — ไม่ใช่แค่คำพูด"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c, i) => {
            const Icon = icons[c.icon as keyof typeof icons] ?? Shield;
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-crimson/8 text-crimson">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
