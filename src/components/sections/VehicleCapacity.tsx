import { fleet } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function PersonIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-1a7 7 0 0 1 14 0v1" />
    </svg>
  );
}

function BagIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M9 12v4M15 12v4" />
    </svg>
  );
}

/** แถวไอคอนซ้ำตามจำนวน (จำกัดไม่ให้ล้น — ตัวเลขด้านล่างคือค่าจริง) */
function IconRow({ n, max = 8, Icon }: { n: number; max?: number; Icon: typeof PersonIcon }) {
  const count = Math.min(n, max);
  return (
    <div className="flex flex-wrap gap-1 text-crimson/85">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}

export function VehicleCapacity() {
  return (
    <section className="bg-cloud py-16 md:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="ผู้โดยสาร & สัมภาระ"
          title="ความจุของรถแต่ละขนาด"
          desc="เลือกขนาดรถให้พอดีกับจำนวนผู้เดินทางและกระเป๋าของคุณ"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                <h3 className="font-bold text-ink">{v.name}</h3>
                <span className="mt-1.5 inline-block rounded-full bg-crimson/8 px-3 py-0.5 text-xs font-semibold text-crimson">
                  {v.type}
                </span>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-cloud/70 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                      <PersonIcon className="h-4 w-4 text-crimson" /> ผู้โดยสาร
                    </div>
                    <div className="mt-2.5 min-h-[20px]">
                      <IconRow n={v.pax} Icon={PersonIcon} />
                    </div>
                    <div className="mt-2 text-2xl font-extrabold leading-none text-ink">
                      {v.pax}
                      <span className="ml-1 text-sm font-medium text-muted">คน</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-cloud/70 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                      <BagIcon className="h-4 w-4 text-crimson" /> กระเป๋า
                    </div>
                    <div className="mt-2.5 min-h-[20px]">
                      <IconRow n={v.luggage} Icon={BagIcon} />
                    </div>
                    <div className="mt-2 text-2xl font-extrabold leading-none text-ink">
                      {v.luggage}
                      <span className="ml-1 text-sm font-medium text-muted">ใบ</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          * จำนวนผู้โดยสารและสัมภาระเป็นค่าโดยประมาณ ขึ้นอยู่กับขนาดกระเป๋าจริง
        </p>
      </div>
    </section>
  );
}
