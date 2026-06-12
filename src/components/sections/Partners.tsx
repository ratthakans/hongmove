import { partners } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function Partners() {
  return (
    <section className="border-y border-line bg-cloud py-14">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            พันธมิตรทางธุรกิจของเรา
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <span className="text-xl font-bold tracking-tight text-ink/35 transition-colors hover:text-crimson md:text-2xl">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
