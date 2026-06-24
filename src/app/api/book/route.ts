import { NextResponse } from "next/server";

/**
 * Proxy ฝั่ง server: รับฟอร์มจองจากหน้าเว็บ → ส่งเข้า dashboard ของระบบหลังบ้าน
 * (เก็บ WEB_BOOKING_KEY ไว้ฝั่ง server เท่านั้น ไม่หลุดไปหน้าบ้าน)
 *
 * ตั้งค่าใน .env.local:
 *   BOOKING_BACKEND_URL = https://hongmoveadmin-production.up.railway.app
 *   WEB_BOOKING_KEY     = <ค่าเดียวกับฝั่ง backend>
 */

const SERVICE_TO_VEHICLE: Record<string, "sedan" | "suv" | "van"> = {
  "Taxi VIP": "sedan",
  Limousine: "suv",
  "เช่ารถ EV": "sedan",
  "แพ็กเกจทัวร์": "van",
};

export async function POST(req: Request) {
  const base = process.env.BOOKING_BACKEND_URL;
  const key = process.env.WEB_BOOKING_KEY;
  if (!base || !key) {
    // ยังไม่ได้ตั้งค่า → ไม่ถือว่า error ร้ายแรง (เว็บยังเปิด LINE ได้) แค่บอกว่าไม่ได้ส่งเข้า dashboard
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 200 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const dropoff = (body.dropoff ?? "").trim();
  if (!name || !phone || !dropoff) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const service = (body.service ?? "").trim();
  const vehicle = SERVICE_TO_VEHICLE[service] ?? "sedan";
  const date = (body.date ?? "").trim();
  const time = (body.time ?? "").trim();
  const scheduledAt = [date, time].filter(Boolean).join(" ");

  const payload = {
    customerName: name,
    customerPhone: phone,
    destination: dropoff,
    origin: (body.pickup ?? "").trim(),
    vehicle,
    serviceName: service,
    scheduledAt,
    passengers: (body.passengers ?? "").trim(),
    note: (body.note ?? "").trim(),
  };

  try {
    const r = await fetch(`${base.replace(/\/$/, "")}/api/public/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": key },
      body: JSON.stringify(payload),
      // อย่าค้างนานถ้าหลังบ้านล่ม
      signal: AbortSignal.timeout(8000),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      return NextResponse.json({ ok: false, error: data.error ?? "backend_error" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, code: data.code });
  } catch {
    return NextResponse.json({ ok: false, error: "backend_unreachable" }, { status: 502 });
  }
}
