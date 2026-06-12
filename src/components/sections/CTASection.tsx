import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Phone } from "@/components/ui/Icons";

export function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-crimson-radial px-6 py-14 text-center text-white md:px-16 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-garnet/40 blur-[110px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
                พร้อมออกเดินทางไปกับ HONG MOVE แล้วหรือยัง?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                จองรถ Taxi VIP หรือ Limousine ยานยนต์ไฟฟ้า 100% วันนี้
                ทีมงานพร้อมดูแลคุณตลอด 24 ชั่วโมง
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/booking" variant="cream" className="px-7 py-3.5 text-base">
                  จองรถเลย <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={`tel:${site.contact.mobile.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-crimson"
                >
                  <Phone className="h-4 w-4" /> {site.contact.mobile}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
