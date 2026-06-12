"use client";

import { useState } from "react";
import { submitLead } from "@/lib/leads";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const ok = await submitLead("contact", e.currentTarget);
    if (ok) setSent(true);
    else setStatus("error");
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-crimson/20 bg-crimson/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-crimson">ส่งข้อความเรียบร้อย</h3>
        <p className="mt-2 text-sm text-muted">ขอบคุณที่ติดต่อ HONG MOVE ทีมงานจะตอบกลับโดยเร็วที่สุด</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="ชื่อ-นามสกุล" name="name" required />
        <Field label="เบอร์โทรศัพท์" name="phone" type="tel" required />
      </div>
      <Field label="อีเมล" name="email" type="email" />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80">
          เรื่องที่ต้องการติดต่อ
        </label>
        <select
          name="topic"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
        >
          <option>จองรถ / สอบถามบริการ</option>
          <option>แพ็กเกจท่องเที่ยว</option>
          <option>ร่วมงาน / สมัครคนขับ</option>
          <option>สมัครร้านค้า / Vendor</option>
          <option>อื่น ๆ</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80">ข้อความ</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
        />
      </div>
      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          ส่งไม่สำเร็จ กรุณาลองใหม่ หรือโทร/แชท LINE หาเรา
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-crimson px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-700 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "sending" ? "กำลังส่ง…" : "ส่งข้อความ"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
      />
    </div>
  );
}
