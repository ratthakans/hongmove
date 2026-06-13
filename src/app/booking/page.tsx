import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BookingForm } from "@/components/forms/BookingForm";
import { trustPoints, site } from "@/lib/site";
import { Shield, Phone } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "จองรถ",
  description: "จองรถ Taxi VIP หรือ Limousine ยานยนต์ไฟฟ้า 100% รับส่งสนามบินหาดใหญ่ ราคาโปร่งใส จองง่ายผ่าน LINE",
};

export default function BookingPage() {
  return (
    <>
      <PageHeader
        eyebrow="จองรถ"
        title="จองรถง่าย ใน 1 นาที"
        desc="กรอกข้อมูลการเดินทาง ทีมงานจะติดต่อกลับเพื่อยืนยัน หรือจองด่วนผ่าน LINE ได้ทันที"
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft md:p-10">
            <BookingForm />
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl bg-crimson-radial p-7 text-white">
              <h2 className="text-lg font-bold text-white">ทำไมต้องจองกับเรา</h2>
              <ul className="mt-4 space-y-3">
                {trustPoints.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-white/85">
                    <Shield className="h-5 w-5 shrink-0 text-white" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={site.links.callPrimary}
              className="flex items-center gap-3 rounded-3xl border border-line bg-white p-6 transition-colors hover:border-crimson/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson/8 text-crimson">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <div className="text-xs text-muted">โทรจองด่วน</div>
                <div className="text-lg font-bold text-crimson">{site.contact.mobile}</div>
              </div>
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
