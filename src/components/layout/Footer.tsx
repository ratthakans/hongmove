import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { Phone, Mail, Pin } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-crimson-radial text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Image
            src="/brand/logo-white.png"
            alt={site.name}
            width={170}
            height={80}
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {site.taglineTh}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
            เมนู
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
            บริการ
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>Taxi VIP</li>
            <li>Limousine</li>
            <li>เช่ารถ EV</li>
            <li>Hong Travel</li>
            <li>EV Charging Station</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
            ติดต่อเรา
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <Pin className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-cream" />
              <a href={`tel:${site.contact.mobile.replace(/\s/g, "")}`} className="hover:text-white">
                {site.contact.mobile}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-cream" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName} — สงวนลิขสิทธิ์
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
