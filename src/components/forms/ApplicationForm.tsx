"use client";

import { useState } from "react";
import { jobs } from "@/lib/data";
import { submitLead } from "@/lib/leads";

export function ApplicationForm({ defaultRole }: { defaultRole?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const ok = await submitLead("application", e.currentTarget);
    if (ok) setSent(true);
    else setStatus("error");
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-crimson/20 bg-crimson/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-crimson">ส่งใบสมัครเรียบร้อย</h3>
        <p className="mt-2 text-sm text-muted">
          ขอบคุณที่สนใจร่วมงานกับ HONG MOVE ทีมงานจะติดต่อกลับโดยเร็วที่สุด
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="ชื่อ-นามสกุล" name="name" required />
        <Field label="เบอร์โทรศัพท์" name="phone" type="tel" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="อีเมล" name="email" type="email" />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/80">
            ตำแหน่งที่สมัคร <span className="text-crimson">*</span>
          </label>
          <select
            name="role"
            required
            defaultValue={defaultRole ?? ""}
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
          >
            <option value="" disabled>
              เลือกตำแหน่ง
            </option>
            {jobs.map((j) => (
              <option key={j.slug} value={j.title}>
                {j.title}
              </option>
            ))}
            <option value="อื่น ๆ">อื่น ๆ</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80">
          ข้อความ / ประสบการณ์โดยย่อ
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
        />
      </div>
      <p className="rounded-xl border border-dashed border-line bg-cloud px-4 py-3 text-sm text-muted">
        📄 แนบเรซูเม่: ส่งไฟล์ของคุณมาที่{" "}
        <a href="mailto:info@hongmove.co.th?subject=สมัครงาน — แนบเรซูเม่" className="font-semibold text-crimson underline">
          info@hongmove.co.th
        </a>{" "}
        หรือทีมงานจะติดต่อขอเพิ่มเติมหลังได้รับใบสมัคร
      </p>
      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          ส่งไม่สำเร็จ กรุณาลองใหม่ หรือติดต่อเราทาง LINE / โทรศัพท์
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-crimson px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-700 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "sending" ? "กำลังส่ง…" : "ส่งใบสมัคร"}
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
