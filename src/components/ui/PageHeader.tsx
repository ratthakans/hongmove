import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  desc,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  crumb?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-crimson-radial pt-32 pb-16 text-white md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-garnet/30 blur-[120px]" />
      <div className="container-x relative">
        <nav className="mb-4 flex items-center gap-2 text-xs text-white/60">
          <Link href="/" className="transition-colors hover:text-white">
            หน้าแรก
          </Link>
          <span>/</span>
          <span className="text-white">{crumb ?? title}</span>
        </nav>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {desc && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
