import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";
import { Phone, Mail, Pin, Bolt } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: `ติดต่อ HONG MOVE — ${site.contact.address} · ${site.contact.mobile} · ${site.contact.email}`,
};

const contactItems = [
  { icon: Pin, label: "ที่อยู่", value: site.contact.address },
  { icon: Phone, label: "โทรศัพท์", value: `${site.contact.mobile} · ${site.contact.tel}` },
  { icon: Mail, label: "อีเมล", value: site.contact.email },
  { icon: Bolt, label: "เวลาทำการ", value: site.contact.hours },
];

const mapSrc =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("ทุ่งตำเสา หาดใหญ่ สงขลา 90110") +
  "&output=embed";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="ติดต่อเรา"
        title="พร้อมให้บริการคุณเสมอ"
        desc="สอบถามบริการ จองรถ หรือร่วมงานกับเรา ทีมงาน HONG MOVE พร้อมดูแลคุณ"
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* info */}
          <div>
            <h2 className="text-2xl font-bold">ข้อมูลติดต่อ</h2>
            <div className="mt-6 space-y-4">
              {contactItems.map((c) => (
                <div key={c.label} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crimson/8 text-crimson">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {c.label}
                    </div>
                    <div className="mt-1 text-[15px] font-medium text-ink/85">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              <iframe
                src={mapSrc}
                title="แผนที่ HONG MOVE"
                loading="lazy"
                className="h-64 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* form */}
          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft md:p-10">
            <h2 className="text-2xl font-bold">ส่งข้อความถึงเรา</h2>
            <p className="mt-1.5 text-sm text-muted">กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อกลับโดยเร็ว</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
