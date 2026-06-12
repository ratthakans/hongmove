# HONG MOVE — แผนพัฒนาเว็บไซต์ใหม่ (Next.js, Professional Grade)

> ย้ายจาก WordPress (`hongmove.co.th`) มาเป็น Next.js ระดับ production
> ปรับแบรนด์ตาม **HONG_MOVE_002.pdf** (Brand Guideline) และเนื้อหาตาม **Hong Move Mobility AOT Project.pdf**

**ขอบเขตที่ยืนยันแล้ว:** Full ecosystem · ภาษาไทยอย่างเดียว · ทีมแก้เนื้อหาเองได้ (Headless CMS) · ฟอนต์ฟรีใกล้เคียงแบรนด์

---

## 1. Tech Stack

| ด้าน | เทคโนโลยี | เหตุผล |
|---|---|---|
| Framework | **Next.js 15 (App Router) + React 19 + TypeScript** | SSR/SSG, SEO ดี, performance สูง, มาตรฐานอุตสาหกรรม |
| Styling | **Tailwind CSS v4** + design tokens จากแบรนด์ | คุมสี/ระยะ/ฟอนต์ตาม guideline ได้แม่นยำ |
| Components | **shadcn/ui (Radix UI)** | เข้าถึงง่าย (a11y), ปรับแต่งได้เต็มที่ |
| Animation | **Framer Motion** | งาน premium: reveal, parallax, hover ที่ลื่นไหล |
| CMS | **Sanity (Headless, hosted)** | ทีมแก้ข่าว/แพ็กเกจทัวร์/รูป/รถ ได้เองผ่าน Studio ภาษาไทย ฟรี tier ใหญ่ |
| ฟอนต์ | `next/font` — EN: **Montserrat**, TH: **IBM Plex Sans Thai / Noto Sans Thai** | ใกล้ Gotham + DB Heavent, โหลดเร็ว, self-host |
| ฟอร์ม | Server Actions + **Resend** (อีเมล) + reCAPTCHA | ฟอร์มสมัครร้านค้า/ติดต่อ/สมัครคนขับ |
| Deploy | **Vercel** | CI/CD อัตโนมัติ, edge, รองรับ Next.js เต็มรูปแบบ |
| SEO/Analytics | Metadata API, sitemap, JSON-LD, OG images, **GA4 + Vercel Analytics** | |

---

## 2. Brand System (จาก Brand Guideline)

**สี (Color tokens)**
| Token | HEX | สัดส่วน | ใช้กับ |
|---|---|---|---|
| `velvet-crimson` (primary) | `#6B0000` | 40% | โทนหลัก, header, ปุ่มหลัก |
| `deep-garnet` (secondary) | `#8D1B11` | 20% | จุดเน้น, hover, gradient |
| `cream-yellow` (accent) | `#FFD54F` | 10% | CTA, ไฮไลต์, ราคา |
| `pure-white` | `#FFFFFF` | 30% | พื้นหลัง, ความโปร่ง |

**Typography:** หัวข้อ = Montserrat/IBM Plex Sans Thai Bold · เนื้อหา = น้ำหนัก Regular/Light
**โลโก้:** ใช้ asset จาก PDF (เวอร์ชันสีหลักบนพื้นสว่าง / สีขาวบนพื้นเข้ม) + กฎ clear space & minimum size ตาม guideline
**Tone:** *"Beyond rides, a premium travel ecosystem" · "เหนือกว่าการขนส่ง คือการสร้างคุณค่า และขับเคลื่อนวัฒนธรรมท้องถิ่น"*

---

## 3. Information Architecture (Sitemap)

Nav ตามแบรนด์: **หน้าแรก · เกี่ยวกับเรา · บริการ · ธุรกิจ · ร่วมงานกับเรา · แกลเลอรี · ติดต่อเรา**

```
/ (หน้าแรก)            Hero + แนะนำ ecosystem + บริการเด่น + ทำไมต้องหงส์มูฟ +
                       แพ็กเกจทัวร์ + ข่าว + พาร์ตเนอร์ + App "HONG" + CTA
/about (เกี่ยวกับเรา)   วิสัยทัศน์/พันธกิจ · วิวัฒนาการบริษัท · จุดเด่นโครงการ · ใบรับรอง
/services (บริการ)      Taxi VIP · Limousine · เช่ารถ · EV Charging · ทัวร์/ท่องเที่ยว
                       + ตารางเปรียบเทียบราคา Taxi VIP vs Limousine
/business (ธุรกิจ)      สัมปทาน AOT · เครือข่ายสนามบิน (แผนที่ขยาย 8+ สนามบิน) ·
                       Community Mall / Mixed-Use · สถานี PTT · EV Charging Station
/careers (ร่วมงานกับเรา) ★เน้นพิเศษ★ รายการตำแหน่งงาน (จาก CMS) · หน้ารายละเอียดตำแหน่ง
                       /careers/[slug] · ฟอร์มสมัครงานออนไลน์ (แนบไฟล์ resume) ·
                       สมัครคนขับ · สมัครร้านค้า/Vendor · LINE OA · วัฒนธรรม/สวัสดิการองค์กร
/gallery (แกลเลอรี)     ภาพรถ/เครื่องแบบ/เคาน์เตอร์/โครงการ
/contact (ติดต่อเรา)    ฟอร์ม · แผนที่ · ที่อยู่/เบอร์/อีเมล
/news/[slug]           บทความข่าว (จาก CMS)
```

**หน้าแรก — เรียงลำดับ section:**
1. Hero — ทางไลน์แบรนด์ + ปุ่ม "จองรถเลย" + รถ EV
2. แนะนำ ecosystem (Beyond rides)
3. บริการเด่น (4 การ์ด)
4. ทำไมต้องหงส์มูฟ (ใช้ง่าย / ปลอดภัยทุกกิโล / เดินทางมีคุณค่า 100% EV)
5. เครือข่ายสนามบิน AOT (แผนที่ + ตัวเลขคันรถ/เที่ยวบิน)
6. แพ็กเกจท่องเที่ยว (Hong Travel)
7. ข่าวสาร
8. พาร์ตเนอร์ทางธุรกิจ
9. แอป "HONG" — **teaser "เร็วๆ นี้ / Coming Soon"** (ยังไม่มีแอปจริง ยังไม่มีปุ่มดาวน์โหลด อาจมีฟอร์มรับแจ้งเตือนเมื่อเปิดตัว)
10. CTA ปิดท้าย + Footer

---

## 4. CMS Content Model (Sanity Studio — ทีมแก้เองได้)

- **Article/บทความ (ระบบบทความเต็มรูปแบบ ★)** — title, slug, cover, วันที่, หมวดหมู่ (category),
  tags, ผู้เขียน, บทคัดย่อ (excerpt), เนื้อหา rich text (รูป/หัวข้อ/อ้างอิง), บทความแนะนำ (featured),
  SEO รายบทความ → หน้า `/news` (รายการ + filter หมวด) และ `/news/[slug]` (อ่านเต็ม + แชร์ + บทความที่เกี่ยวข้อง)
- **Job/ตำแหน่งงาน (★เน้น)** — ตำแหน่ง, แผนก, ประเภท (ประจำ/คนขับ/พาร์ทไทม์), สถานที่, เงินเดือน,
  รายละเอียดงาน, คุณสมบัติ, สวัสดิการ, สถานะเปิดรับ → ผูกกับฟอร์มสมัครงาน
- **Tour Package/แพ็กเกจทัวร์** — ชื่อ, ราคา, ช่วงวันที่, รูป, รายละเอียด, ไฮไลต์
- **Vehicle/รถ** — รุ่น, ประเภท (Taxi VIP/Limousine), รูป, สเปก, ที่นั่ง
- **Rate/ตารางราคา** — เส้นทาง, ราคา Taxi VIP, ราคา Limousine
- **Airport/สนามบิน** — ชื่อ, จำนวนคันเป้าหมาย, เที่ยวบิน, สถานะ (เปิด/แผน)
- **Partner/พาร์ตเนอร์** — โลโก้, ชื่อ, ลิงก์
- **Gallery/อัลบั้มภาพ** — รูป + หมวด
- **Settings** — เบอร์โทร, อีเมล, ที่อยู่, LINE OA, โซเชียล (แก้ที่เดียว ใช้ทั้งเว็บ)

---

## 5. มาตรฐาน "Professional"

- **Performance:** Lighthouse ≥ 95, รูปผ่าน `next/image` (AVIF/WebP), font-display swap, lazy-load
- **SEO:** metadata รายหน้า, `sitemap.xml`, `robots.txt`, JSON-LD `LocalBusiness` + `Organization`, OG image, canonical
- **Accessibility:** WCAG 2.1 AA, semantic HTML, keyboard nav, ตรวจ contrast (เลี่ยง cream-yellow บนขาว)
- **Responsive:** mobile-first, breakpoints ครบ (รถส่วนใหญ่จองผ่านมือถือ)
- **คุณภาพโค้ด:** ESLint + Prettier + TypeScript strict, โครงสร้างคอมโพเนนต์ชัดเจน
- **Analytics & ฟอร์ม:** GA4, event tracking ปุ่มจอง, ฟอร์มส่งอีเมลเข้า info@hongmove.co.th

---

## 6. โครงสร้างโปรเจกต์

```
app/                # routes (App Router) ภาษาไทย
  (site)/page.tsx   # หน้าแรก
  about/ services/ business/ join/ gallery/ contact/
  news/[slug]/
components/          # ui/ (shadcn), sections/ (Hero, Services...), layout/ (Header, Footer)
lib/                 # sanity client, queries, utils, seo
sanity/              # schemas, studio config
public/brand/        # โลโก้, รูปจาก PDF
styles/              # tokens, globals
```

---

## 7. แผนส่งมอบเป็นเฟส

**Phase 0 — Setup (½–1 วัน):** scaffold Next.js+TS+Tailwind, brand tokens, ฟอนต์, โลโก้, Header/Footer, Sanity เปล่า
**Phase 1 — โครง + หน้าแรก (2–3 วัน):** ทุก section หน้าแรก + design system + animation
**Phase 2 — หน้าใน (3–4 วัน):** about, services (+ตารางราคา), business (+แผนที่), join (+ฟอร์ม), gallery, contact
**Phase 3 — CMS เชื่อมจริง (2 วัน):** schema ทั้งหมด, ดึงข้อมูลข่าว/ทัวร์/รถ, Studio ภาษาไทย, นำเข้าเนื้อหาจริง
**Phase 4 — Polish & Launch (1–2 วัน):** SEO, performance, a11y, ฟอร์มอีเมล, analytics, deploy Vercel, ต่อโดเมน `hongmove.co.th`

---

## 7.5 การคัดกรองเนื้อหาจาก PDF (สำคัญ — Public vs Internal)

PDF "AOT Project" เป็น **pitch deck เสนอ ทอท.** มีทั้งเนื้อหาสาธารณะและข้อมูลลับ ต้องคัดแยก:

**❌ ห้ามขึ้นเว็บสาธารณะ (ลับ/ภายใน):**
- System Architecture / tech stack ภายใน (Kafka, Keycloak, Hadoop, AI platform) — p10–12
- Feasibility การเงิน, Cashflow, IRR, กำไร — p20, 23–32
- Feasibility/รายละเอียดแปลงที่ดิน, เลขแปลง, สัญญาเช่า ทอท. — p33–63
- หนังสือรับรองบริษัท, จดหมาย AOT — p67
→ ธุรกิจเหล่านี้นำเสนอแบบ **วิสัยทัศน์/storytelling** เท่านั้น ไม่ลงตัวเลขลับ

**✅ ของจริงจาก PDF ที่นำมาใช้ (asset inventory):**
- โลโก้หงส์ "HONG MOVE" (สีหลัก/ขาว/ดำ) + กฎ clear space, min size
- Key visual หน้าแรก (brand p18): พื้น Velvet, รถมุมบน, HEADLINE/BOOK NOW
- รถ EV จริง: Sedan (Taxi VIP wrap) + **FABIZON MPV EV Super Van** → หน้า Fleet
- รูปจริง: กองรถ EV กลางคืน, เคาน์เตอร์ตั๋ว+พนักงานชุดแดง, เครื่องแบบโปโล navy/แดง → Gallery/About
- ตารางราคา Taxi VIP vs Limousine (p19) → /services
- เครือข่ายสนามบิน + จำนวนคัน/เที่ยวบิน (p5): หาดใหญ่ 30→300, เชียงใหม่ 250, ดอนเมือง 150 ฯลฯ
- App "HONG" theme: "แอปเรียกรถของคนไทย", โค้ด 50%, แอปคนขับ, LINE @hongmove → teaser Coming Soon
- ติดต่อ: 106/5 ม.1 ทุ่งตำเสา หาดใหญ่ สงขลา 90110 · info@hongmove.co.th · +66 65 656 4800 · Tel +66 74 251 777

## 8. สิ่งที่จะขอเพิ่มระหว่างทาง
- ไฟล์โลโก้ความละเอียดสูง (SVG/PNG) — ระหว่างนี้ผมจะ extract จาก PDF ไปก่อน
- รูปรถ/ทีม/สถานที่จริง (ถ้ามี) สำหรับ Hero & Gallery
- ตัวเลข/เนื้อหาล่าสุดที่ต้องการอัปเดตจากของเดิม
```
