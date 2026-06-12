import type { LeadType } from "./email";

/** ส่งฟอร์มไปยัง /api/lead — ใช้ร่วมกันทุกฟอร์ม (client) */
export async function submitLead(
  type: LeadType,
  form: HTMLFormElement,
): Promise<boolean> {
  const fd = new FormData(form);
  const data: Record<string, string> = { type };
  fd.forEach((v, k) => {
    if (typeof v === "string") data[k] = v;
  });
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return res.ok && json.ok === true;
  } catch {
    return false;
  }
}
