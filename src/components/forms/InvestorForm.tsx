"use client";

import { useState } from "react";
import { submitLead } from "@/lib/leads";
import { Download } from "@/components/ui/Icons";

export function InvestorForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const ok = await submitLead("investor", e.currentTarget);
    if (ok) setSent(true);
    else setStatus("error");
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-white/40 bg-white/10 p-8 text-center backdrop-blur">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream text-2xl text-crimson-900">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">ได้รับคำขอแล้ว</h3>
        <p className="mt-2 text-sm text-white/75">
          ทีมงานนักลงทุนสัมพันธ์จะส่งเอกสารโครงการฉบับเต็มให้ทางอีเมลโดยเร็วที่สุด
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field label="ชื่อ-นามสกุล" name="name" required />
        <Field label="บริษัท / องค์กร" name="company" />
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field label="อีเมล" name="email" type="email" required />
        <Field label="เบอร์โทรศัพท์" name="phone" type="tel" required />
      </div>
      {status === "error" && (
        <p className="rounded-xl bg-white/15 px-4 py-3 text-sm text-white">
          ส่งไม่สำเร็จ กรุณาลองใหม่ หรือติดต่อ {`info@hongmove.co.th`}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-crimson-900 transition-colors hover:bg-cream-600 disabled:opacity-60 sm:w-auto"
      >
        <Download className="h-5 w-5" />
        {status === "sending" ? "กำลังส่ง…" : "ขอรับเอกสารฉบับเต็ม"}
      </button>
      <p className="text-xs text-white/55">
        ข้อมูลของคุณจะถูกเก็บเป็นความลับ ใช้เพื่อการติดต่อด้านการลงทุนเท่านั้น
      </p>
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
      <label className="mb-1.5 block text-sm font-medium text-white/80">
        {label} {required && <span className="text-white">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-cream"
      />
    </div>
  );
}
