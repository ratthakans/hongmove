import { NextResponse } from "next/server";
import { sendLead, type LeadType } from "@/lib/email";

const TYPES: LeadType[] = ["booking", "contact", "application"];

export async function POST(req: Request) {
  let body: Record<string, string> & { type?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { type, ...data } = body;
  if (!type || !TYPES.includes(type as LeadType)) {
    return NextResponse.json({ ok: false, error: "invalid_type" }, { status: 400 });
  }

  // ตรวจฟิลด์จำเป็น
  if (!data.name?.trim() || !data.phone?.trim()) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const result = await sendLead(type as LeadType, data);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
