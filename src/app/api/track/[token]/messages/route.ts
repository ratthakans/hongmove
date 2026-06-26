import { NextResponse } from "next/server";

/**
 * แชทลูกค้า ↔ แอดมิน ผูกกับ booking ผ่าน token เดาไม่ได้
 * contract ฝั่ง backend:
 *   GET  /api/public/bookings/:token/messages  → { messages: [{sender, senderName?, text, createdAt}] }
 *   POST /api/public/bookings/:token/messages  body {text} → { ok: true }
 */

function backend(token: string) {
  const base = process.env.BOOKING_BACKEND_URL;
  if (!base) return null;
  return `${base.replace(/\/$/, "")}/api/public/bookings/${token}/messages`;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  if (!/^[A-Za-z0-9]+$/.test(token)) return NextResponse.json({ error: "bad_token" }, { status: 400 });
  const url = backend(token);
  if (!url) return NextResponse.json({ messages: [] });
  try {
    const r = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(8000) });
    if (!r.ok) return NextResponse.json({ messages: [] });
    const data = await r.json();
    return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ messages: [] });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  if (!/^[A-Za-z0-9]+$/.test(token)) return NextResponse.json({ error: "bad_token" }, { status: 400 });
  const url = backend(token);
  if (!url) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });

  let body: { text?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }
  const text = (body.text ?? "").trim().slice(0, 1000);
  if (!text) return NextResponse.json({ ok: false, error: "empty" }, { status: 422 });

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) return NextResponse.json({ ok: false, error: "backend_error" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "backend_unreachable" }, { status: 502 });
  }
}
