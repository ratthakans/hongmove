"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { submitLead } from "@/lib/leads";
import { Line } from "@/components/ui/Icons";

const services = ["Taxi VIP", "Limousine", "เช่ารถ EV", "แพ็กเกจทัวร์"];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const ok = await submitLead("booking", e.currentTarget);
    if (ok) setSent(true);
    else setStatus("error");
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-crimson/20 bg-crimson/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-crimson">รับคำขอจองแล้ว</h3>
        <p className="mt-2 text-sm text-muted">
          ทีมงานจะติดต่อกลับเพื่อยืนยันการจองโดยเร็วที่สุด หรือแชทกับเราทาง LINE เพื่อจองทันที
        </p>
        <a
          href={site.links.line}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-semibold text-white"
        >
          <Line className="h-5 w-5" /> จองด่วนผ่าน LINE
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80">ประเภทบริการ</label>
        <div className="flex flex-wrap gap-2">
          {services.map((s, i) => (
            <label key={s} className="cursor-pointer">
              <input
                type="radio"
                name="service"
                value={s}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-muted transition-colors peer-checked:border-crimson peer-checked:bg-crimson peer-checked:text-white">
                {s}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="จุดรับ (ต้นทาง)" name="pickup" placeholder="เช่น สนามบินหาดใหญ่" required />
        <Field label="จุดส่ง (ปลายทาง)" name="dropoff" placeholder="เช่น ตัวเมืองหาดใหญ่" required />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="วันที่" name="date" type="date" required />
        <Field label="เวลา" name="time" type="time" required />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/80">ผู้โดยสาร</label>
          <select
            name="passengers"
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
          >
            {["1–2", "3–4", "5–6", "7+"].map((n) => (
              <option key={n}>{n} คน</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="ชื่อผู้จอง" name="name" required />
        <Field label="เบอร์โทรศัพท์" name="phone" type="tel" required />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80">หมายเหตุ (จำนวนกระเป๋า / เที่ยวบิน)</label>
        <textarea
          name="note"
          rows={2}
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          ส่งไม่สำเร็จ กรุณาลองใหม่ หรือจองผ่าน LINE / โทรหาเรา
        </p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-crimson px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-700 disabled:opacity-60"
        >
          {status === "sending" ? "กำลังส่ง…" : "ขอจองรถ"}
        </button>
        <a
          href={site.links.line}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#06C755] px-8 py-3.5 text-sm font-semibold text-[#06C755] transition-colors hover:bg-[#06C755] hover:text-white"
        >
          <Line className="h-5 w-5" /> จองผ่าน LINE
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink/80">
        {label} {required && <span className="text-crimson">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
      />
    </div>
  );
}
