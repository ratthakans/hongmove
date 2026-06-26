import { NextResponse } from "next/server";

/**
 * Proxy อ่านสถานะการเรียกรถจากระบบหลังบ้าน (fleet) ผ่าน token เดาไม่ได้
 * เก็บ BOOKING_BACKEND_URL ไว้ฝั่ง server + เลี่ยง CORS
 * contract ฝั่ง backend: GET /api/public/bookings/:token
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  const base = process.env.BOOKING_BACKEND_URL;
  if (!base) return NextResponse.json({ error: "not_configured" }, { status: 503 });
  if (!/^[A-Za-z0-9]+$/.test(token)) return NextResponse.json({ error: "bad_token" }, { status: 400 });

  try {
    const r = await fetch(`${base.replace(/\/$/, "")}/api/public/bookings/${token}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (r.status === 404) return NextResponse.json({ error: "not_found" }, { status: 404 });
    if (!r.ok) return NextResponse.json({ error: "backend_error" }, { status: 502 });
    const data = await r.json();
    return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "backend_unreachable" }, { status: 502 });
  }
}
