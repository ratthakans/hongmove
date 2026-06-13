import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Bolt } from "@/components/ui/Icons";

export function AppTeaser() {
  return (
    <section className="bg-cloud py-16 md:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-crimson-radial px-6 py-12 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-garnet/40 blur-[100px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white">
                <Bolt className="h-4 w-4" /> เร็ว ๆ นี้ · COMING SOON
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                แอป <span className="text-white">“HONG”</span>
                <br />
                แอปเรียกรถของคนไทย
              </h2>
              <p className="mt-4 max-w-lg text-white/80">
                เรียกรถ EV ระดับ VIP ได้ในไม่กี่แตะ ติดตามคนขับแบบเรียลไทม์
                ราคาโปร่งใส และรับสิทธิพิเศษสำหรับผู้ใช้คนแรก
                ลงทะเบียนรับแจ้งเตือนวันเปิดตัว
              </p>
              <form className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="อีเมลของคุณ"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-cream"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-crimson-900 transition-colors hover:bg-cream-600"
                >
                  แจ้งเตือนฉัน
                </button>
              </form>
            </div>

            <Reveal className="relative mx-auto w-full max-w-xs">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/app-mockup.jpg"
                  alt="แอป HONG — แอปเรียกรถของคนไทย"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
