import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { rateTable } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Line, Phone, Shield, Leaf, Sparkle, Plane, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Hat Yai Airport Taxi & Limousine — HONG MOVE (100% EV)",
  description:
    "Book a premium airport transfer in Hat Yai. 100% electric VIP Taxi & Limousine. The first AOT-licensed operator. Transfers to Hat Yai city, Songkhla, Pak Bara pier & Lipe Island.",
  alternates: { canonical: "/en" },
};

const features = [
  { icon: Plane, t: "First AOT-Licensed", d: "The first authorized airport transfer operator at Hat Yai Airport." },
  { icon: Shield, t: "Safe & Insured", d: "Professional licensed drivers, insured on every trip." },
  { icon: Leaf, t: "100% Electric", d: "Zero-emission EV fleet for a clean, quiet ride." },
  { icon: Sparkle, t: "Transparent Pricing", d: "Fixed fares agreed upfront — no surprises." },
];

const enRoutes = [
  { route: "Hat Yai Airport → Hat Yai City", taxi: "250", limo: "450" },
  { route: "Hat Yai Airport → Songkhla Town", taxi: "500", limo: "800" },
  { route: "Hat Yai Airport → Sadao Border", taxi: "1,000", limo: "1,500" },
  { route: "Hat Yai Airport → Pak Bara Pier (Lipe)", taxi: "1,800", limo: "2,500" },
];

export default function EnPage() {
  void rateTable;
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-crimson-radial text-white">
        <div className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-garnet/40 blur-[120px]" />
        <div className="container-x relative grid min-h-[82vh] items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-cream">
              <Plane className="h-4 w-4" />
              First AOT-licensed airport transfer at Hat Yai
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Hat Yai Airport
              <br />
              <span className="text-cream">Taxi & Limousine</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Premium 100% electric airport transfers — to Hat Yai city, Songkhla,
              the Sadao border, and Pak Bara pier for Lipe Island. Safe, comfortable,
              and fairly priced.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.links.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-base font-semibold text-white"
              >
                <Line className="h-5 w-5" /> Book on LINE
              </a>
              <a
                href={site.links.callPrimary}
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-crimson"
              >
                <Phone className="h-5 w-5" /> Call us
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
              {[
                { k: "100%", v: "Electric fleet" },
                { k: "1st", v: "AOT-licensed" },
                { k: "24/7", v: "Available" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl font-extrabold text-cream">{s.k}</div>
                  <div className="text-sm text-white/65">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white to-cloud shadow-2xl">
              <Image
                src="/images/hero-road.jpg"
                alt="HONG MOVE electric airport limousine"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-crimson/8 p-3 text-crimson">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* rates */}
      <section className="bg-cloud py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-garnet">Fares</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Popular routes</h2>
            <p className="mt-3 text-muted">Sample fares per trip (THB). Final price confirmed on booking.</p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-crimson text-white">
                  <th className="px-5 py-4 font-semibold">Route</th>
                  <th className="px-5 py-4 text-right font-semibold">Taxi VIP</th>
                  <th className="px-5 py-4 text-right font-semibold">Limousine</th>
                </tr>
              </thead>
              <tbody>
                {enRoutes.map((r, i) => (
                  <tr key={r.route} className={i % 2 ? "bg-cloud/40" : "bg-white"}>
                    <td className="px-5 py-4 font-medium text-ink/85">{r.route}</td>
                    <td className="px-5 py-4 text-right font-semibold text-crimson">฿{r.taxi}</td>
                    <td className="px-5 py-4 text-right font-semibold text-garnet">฿{r.limo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-crimson-radial px-6 py-14 text-center text-white md:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">
              Ready to book your ride?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Chat with us on LINE for an instant booking, or call our team — available 24/7.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={site.links.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-base font-semibold text-white"
              >
                <Line className="h-5 w-5" /> Book on LINE
              </a>
              <a
                href={site.links.callPrimary}
                className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-base font-semibold text-crimson-900"
              >
                <Phone className="h-5 w-5" /> {site.contact.mobile}
              </a>
            </div>
            <Link href="/" className="mt-8 inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-cream">
              ดูเว็บไซต์ภาษาไทย <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
