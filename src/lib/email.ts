import "server-only";

/**
 * ส่งอีเมลแจ้งเตือน lead (จองรถ / ติดต่อ / สมัครงาน) เข้าบริษัท
 * ใช้ Resend — ทำงานเมื่อมี RESEND_API_KEY เท่านั้น
 * ถ้ายังไม่ตั้งค่า key จะ log ไว้และถือว่า "รับเรื่องแล้ว" (flow ไม่สะดุดตอน dev)
 */

export type LeadType = "booking" | "contact" | "application";

const LABELS: Record<LeadType, string> = {
  booking: "คำขอจองรถ",
  contact: "ข้อความติดต่อ",
  application: "ใบสมัครงาน",
};

const FIELD_LABELS: Record<string, string> = {
  service: "ประเภทบริการ",
  pickup: "จุดรับ",
  dropoff: "จุดส่ง",
  date: "วันที่",
  time: "เวลา",
  passengers: "ผู้โดยสาร",
  name: "ชื่อ",
  phone: "เบอร์โทร",
  email: "อีเมล",
  topic: "เรื่อง",
  role: "ตำแหน่ง",
  message: "ข้อความ",
  note: "หมายเหตุ",
};

function toHtml(type: LeadType, data: Record<string, string>) {
  const rows = Object.entries(data)
    .filter(([, v]) => v && v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#6b5d62;font-weight:600">${
          FIELD_LABELS[k] ?? k
        }</td><td style="padding:6px 12px;color:#1a1115">${v}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:sans-serif">
    <h2 style="color:#6b0000">HONG MOVE — ${LABELS[type]}ใหม่</h2>
    <table style="border-collapse:collapse">${rows}</table>
  </div>`;
}

export async function sendLead(
  type: LeadType,
  data: Record<string, string>,
): Promise<{ ok: boolean; emailed: boolean }> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || "info@hongmove.co.th";
  const from = process.env.LEAD_FROM_EMAIL || "HONG MOVE <onboarding@resend.dev>";

  if (!key) {
    console.warn(`[lead:${type}] RESEND_API_KEY ไม่ได้ตั้งค่า — ยังไม่ส่งอีเมล`, data);
    return { ok: true, emailed: false };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email || undefined,
      subject: `[${LABELS[type]}] ${data.name ?? ""} ${data.phone ?? ""}`.trim(),
      html: toHtml(type, data),
    });
    if (error) {
      console.error(`[lead:${type}] ส่งอีเมลไม่สำเร็จ`, error);
      return { ok: false, emailed: false };
    }
    return { ok: true, emailed: true };
  } catch (e) {
    console.error(`[lead:${type}] error`, e);
    return { ok: false, emailed: false };
  }
}
