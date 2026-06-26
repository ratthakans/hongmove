"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { site } from "@/lib/site";
import { Line, Phone } from "@/components/ui/Icons";

type Track = {
  code?: number;
  status?: string;
  serviceName?: string;
  origin?: string;
  destination?: string;
  scheduledAt?: string;
  passengers?: string;
  customerName?: string;
  price?: number;
  driverName?: string;
  plate?: string;
  driverPhone?: string;
  cancelReason?: string;
  updatedAt?: string;
};

const STEPS = [
  { label: "รับเรื่องแล้ว", desc: "ทีมงานได้รับคำขอจองของคุณ" },
  { label: "กำลังจัดรถ", desc: "กำลังติดต่อคนขับให้คุณ" },
  { label: "คนขับรับงาน", desc: "คนขับกำลังเดินทางมารับ" },
  { label: "ถึงจุดรับแล้ว", desc: "คนขับถึงจุดนัดรับ" },
  { label: "กำลังเดินทาง", desc: "กำลังพาคุณไปยังปลายทาง" },
  { label: "ถึงปลายทางแล้ว", desc: "เดินทางสำเร็จ — ขอบคุณที่ใช้บริการ" },
];

function stepIndex(status?: string): number {
  switch (status) {
    case "pending_payment":
    case "ready":
      return 0;
    case "assigning":
      return 1;
    case "accepted":
      return 2;
    case "arrived":
      return 3;
    case "in_progress":
      return 4;
    case "completed":
      return 5;
    default:
      return 0;
  }
}

export default function TrackPage() {
  const { token } = useParams<{ token: string }>();
  const [data, setData] = useState<Track | null>(null);
  const [state, setState] = useState<"loading" | "ok" | "notfound" | "error">("loading");

  useEffect(() => {
    if (!token) return;
    let alive = true;
    let timer: ReturnType<typeof setTimeout>;

    const load = async () => {
      try {
        const r = await fetch(`/api/track/${token}`, { cache: "no-store" });
        if (!alive) return;
        if (r.status === 404) {
          setState("notfound");
          return;
        }
        if (!r.ok) {
          setState((s) => (s === "ok" ? "ok" : "error"));
        } else {
          const j = (await r.json()) as Track;
          if (!alive) return;
          setData(j);
          setState("ok");
          // หยุด poll เมื่องานจบ/ยกเลิก
          if (j.status === "completed" || j.status === "cancelled") return;
        }
      } catch {
        if (alive) setState((s) => (s === "ok" ? "ok" : "error"));
      }
      timer = setTimeout(load, 5000);
    };
    load();
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [token]);

  const cancelled = data?.status === "cancelled";
  const current = stepIndex(data?.status);

  return (
    <div className="bg-cloud py-10 md:py-14">
      <div className="container-x max-w-2xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-garnet">
            ติดตามการเรียกรถ
          </span>
          <h1 className="mt-2 text-2xl font-extrabold text-ink md:text-3xl">
            สถานะการจองของคุณ
          </h1>
          {data?.code && (
            <p className="mt-1 text-sm text-muted">หมายเลขงาน #{data.code}</p>
          )}
        </div>

        {state === "loading" && (
          <p className="mt-10 text-center text-muted">กำลังโหลดสถานะ…</p>
        )}

        {state === "notfound" && (
          <div className="mt-8 rounded-2xl border border-line bg-white p-8 text-center">
            <h2 className="text-lg font-bold text-crimson">ไม่พบการจองนี้</h2>
            <p className="mt-2 text-sm text-muted">
              ลิงก์อาจไม่ถูกต้องหรือหมดอายุ — กรุณาติดต่อทีมงานผ่าน LINE
            </p>
            <LineButton />
          </div>
        )}

        {state === "error" && !data && (
          <div className="mt-8 rounded-2xl border border-line bg-white p-8 text-center">
            <p className="text-sm text-muted">เชื่อมต่อระบบไม่ได้ชั่วคราว กำลังลองใหม่…</p>
          </div>
        )}

        {data && state === "ok" && (
          <>
            {/* สรุปการจอง */}
            <div className="mt-8 rounded-2xl border border-line bg-white p-6">
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <Info label="บริการ" value={data.serviceName} />
                <Info label="กำหนดเวลา" value={data.scheduledAt || "จองทันที (On-time)"} />
                <Info label="จุดรับ" value={data.origin} />
                <Info label="ปลายทาง" value={data.destination} />
                <Info label="ผู้โดยสาร" value={data.passengers} />
                {data.price ? <Info label="ราคา" value={`฿${data.price.toLocaleString()}`} /> : null}
              </div>
            </div>

            {cancelled ? (
              <div className="mt-6 rounded-2xl border border-crimson/30 bg-crimson/5 p-8 text-center">
                <h2 className="text-lg font-bold text-crimson">การจองถูกยกเลิก</h2>
                {data.cancelReason && (
                  <p className="mt-2 text-sm text-muted">เหตุผล: {data.cancelReason}</p>
                )}
                <LineButton />
              </div>
            ) : (
              <>
                {/* คนขับ (เมื่อจัดรถแล้ว) */}
                {data.driverName && (
                  <div className="mt-6 rounded-2xl border border-line bg-white p-6">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-garnet">
                      คนขับของคุณ
                    </h2>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-bold text-ink">{data.driverName}</p>
                        {data.plate && <p className="text-sm text-muted">ทะเบียน {data.plate}</p>}
                      </div>
                      {data.driverPhone && (
                        <a
                          href={`tel:${data.driverPhone}`}
                          className="inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-sm font-semibold text-white"
                        >
                          <Phone className="h-4 w-4" /> โทรหาคนขับ
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* timeline */}
                <div className="mt-6 rounded-2xl border border-line bg-white p-6">
                  <ol className="relative space-y-1">
                    {STEPS.map((s, i) => {
                      const done = i < current;
                      const active = i === current;
                      return (
                        <li key={s.label} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                                done
                                  ? "bg-crimson/15 text-crimson"
                                  : active
                                    ? "bg-crimson text-white"
                                    : "bg-cloud text-muted"
                              }`}
                            >
                              {done ? "✓" : i + 1}
                            </span>
                            {i < STEPS.length - 1 && (
                              <span className={`my-1 w-0.5 flex-1 ${done ? "bg-crimson/40" : "bg-line"}`} />
                            )}
                          </div>
                          <div className={`pb-5 ${active ? "" : "opacity-70"}`}>
                            <p className={`font-semibold ${active ? "text-crimson" : "text-ink"}`}>
                              {s.label}
                              {active && <span className="ml-2 animate-pulse text-xs">● กำลังดำเนินการ</span>}
                            </p>
                            <p className="mt-0.5 text-sm text-muted">{s.desc}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div className="mt-6 rounded-2xl bg-white p-5 text-center">
                  <p className="text-sm text-muted">มีคำถามหรือต้องการแก้ไขการจอง?</p>
                  <LineButton />
                </div>
              </>
            )}

            <p className="mt-6 text-center text-xs text-muted">
              หน้านี้อัปเดตสถานะอัตโนมัติ — บันทึกลิงก์นี้ไว้เพื่อติดตามการเดินทางของคุณ
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className="font-semibold text-ink">{value}</p>
    </div>
  );
}

function LineButton() {
  return (
    <a
      href={site.links.line}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-semibold text-white"
    >
      <Line className="h-5 w-5" /> ติดต่อทีมงานทาง LINE
    </a>
  );
}
