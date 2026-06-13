import { partners } from "@/lib/site";

export function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-line bg-white py-12">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        พันธมิตรทางธุรกิจของเรา
      </p>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-x-14">
          {loop.map((p, i) => (
            <span
              key={i}
              className="shrink-0 text-xl font-extrabold tracking-tight text-ink/30 md:text-2xl"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
