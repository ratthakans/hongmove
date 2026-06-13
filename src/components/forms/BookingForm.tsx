"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { submitLead } from "@/lib/leads";
import { Line } from "@/components/ui/Icons";

const services = ["Taxi VIP", "Limousine", "เช่ารถ EV", "แพ็กเกจทัวร์"];

export function BookingForm() {
  const [sent, setSent] = useState(false);
  const [lineUrl, setLineUrl] = useState<string>(site.links.line);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const g = (k: string) => (fd.get(k) ?? "").toString().trim();

    const msg = [
      "🚕 ขอจองรถ HONG MOVE",
      `บริการ: ${g("service")}`,
      `จาก: ${g("pickup")}`,
      `ไป: ${g("dropoff")}`,
      `วันที่: ${g("date")}  เวลา: ${g("time")}`,
      `ผู้โดยสาร: ${g("passengers")}`,
      `ชื่อ: ${g("name")}`,
      `โทร: ${g("phone")}`,
      g("note") ? `หมายเหตุ: ${g("note")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = site.links.lineOaMessage + encodeURIComponent(msg);
    setLineUrl(url);
    // เก็บสำเนาเข้าอีเมลทีมงานไว้เป็นหลักฐาน (ไม่บล็อก UX)
    submitLead("booking", form).catch(() => {});
    // เปิด LINE OA พร้อมข้อความจอง — ต้องเรียกในจังหวะคลิกเพื่อไม่ให้โดน popup-block
    window.open(url, "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-[#06C755]/30 bg-[#06C755]/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] text-white">
          <Line className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-crimson">เปิด LINE เพื่อยืนยันการจอง</h3>
        <p className="mt-2 text-sm text-muted">
          เราเปิดแชต LINE พร้อมรายละเอียดการจองให้แล้ว — <b>กด “ส่ง” ในไลน์</b>
          เพื่อยืนยัน จากนั้นทีมงานเซลจะโทรกลับเพื่อยืนยันการจองและราคา
        </p>
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-semibold text-white"
        >
          <Line className="h-5 w-5" /> เปิด LINE อีกครั้ง
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

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-4 text-base font-semibold text-white transition-colors hover:brightness-95"
      >
        <Line className="h-5 w-5" /> จองผ่าน LINE
      </button>
      <p className="text-center text-xs text-muted">
        กดแล้วระบบจะเปิดแชต LINE พร้อมรายละเอียดการจอง — กด “ส่ง” เพื่อยืนยัน
        ทีมงานจะโทรกลับเพื่อยืนยันราคา
      </p>
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
