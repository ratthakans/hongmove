# HONG MOVE — คู่มือตั้งค่า API / Keys

เว็บใช้งานได้เลยแม้ยังไม่ใส่ key (ฟอร์มจะ log ไว้, ยังไม่ส่งอีเมล)
ใส่ key เมื่อพร้อมใช้งานจริง — **ฟรีทั้งหมด** ใส่ได้ทีหลังตลอด

วิธีใส่: คัดลอก `.env.example` เป็น `.env.local` (ตอน dev) หรือใส่ใน **Vercel → Project → Settings → Environment Variables** (ตอน deploy)

---

## 1) Resend — ส่งอีเมลจากฟอร์ม (จองรถ/ติดต่อ/สมัครงาน) ⭐ สำคัญสุด
ทำให้ข้อมูลที่ลูกค้ากรอก ส่งเข้าอีเมลบริษัทจริง

1. สมัครฟรีที่ **https://resend.com** (ฟรี 3,000 อีเมล/เดือน, 100/วัน — พอเหลือเฟือ)
2. เมนู **API Keys → Create API Key** → คัดลอกค่า (ขึ้นต้น `re_...`)
3. ใส่ใน env:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   LEAD_TO_EMAIL=info@hongmove.co.th
   ```
4. **ผู้ส่ง (from):** เพื่อความน่าเชื่อถือ ควร verify โดเมน `hongmove.co.th` ที่เมนู **Domains** ของ Resend (เพิ่ม DNS record ตามที่ระบบบอก) แล้วตั้ง:
   ```
   LEAD_FROM_EMAIL=HONG MOVE <no-reply@hongmove.co.th>
   ```
   - ระหว่างยังไม่ verify โดเมน ใช้ `onboarding@resend.dev` ทดสอบไปก่อนได้ (อีเมลจะส่งเข้าได้เฉพาะอีเมลเจ้าของบัญชี Resend)

---

## 2) Google Analytics 4 — วัดผล/ดูสถิติผู้เข้าชม
1. เข้า **https://analytics.google.com** → สร้าง Property ของ hongmove.co.th
2. ไปที่ **Admin → Data Streams → Web** → คัดลอก **Measurement ID** (รูปแบบ `G-XXXXXXXXXX`)
3. ใส่ใน env:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

---

## 3) แผนที่ (Google Maps) — ✅ ไม่ต้องใช้ API key
หน้า "ติดต่อเรา" ใช้ Google Maps แบบ embed ฟรี ไม่ต้องตั้งค่าอะไร

## 4) LINE OA — ✅ ตั้งค่าแล้ว
ใช้ `@hongmove` (กำหนดใน `src/lib/site.ts` → `links.line`)

---

## สรุป: ต้องใช้แค่ 2 key (ฟรี) — Resend + GA4
| Key | จำเป็น | ได้จาก | ฟรี |
|---|---|---|---|
| `RESEND_API_KEY` | ⭐ ใช่ (ส่งอีเมลฟอร์ม) | resend.com | ✅ |
| `NEXT_PUBLIC_GA_ID` | แนะนำ (วัดผล) | analytics.google.com | ✅ |
| Maps | ไม่ต้อง | — | ✅ |

> Phase 3 (Sanity CMS ให้ทีมแก้เนื้อหาเอง) จะมี key เพิ่มภายหลัง — สมัครฟรีที่ sanity.io
