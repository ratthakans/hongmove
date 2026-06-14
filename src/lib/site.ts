/**
 * HONG MOVE — ข้อมูลศูนย์กลางของเว็บไซต์ (single source of truth)
 * เนื้อหาดึงจาก Brand Guideline + AOT Project Plan
 * ส่วนที่เป็นรายการ (ข่าว/ตำแหน่งงาน/แพ็กเกจ) จะย้ายไป Sanity CMS ในเฟส 3
 */

export const site = {
  name: "HONG MOVE",
  legalName: "บริษัท หงส์ มูฟ จำกัด",
  domain: "hongmove.co.th",
  url: "https://hongmove.co.th",
  tagline: "Beyond rides, a premium travel ecosystem.",
  taglineTh: "เหนือกว่าการขนส่ง คือการสร้างคุณค่า และขับเคลื่อนวัฒนธรรมท้องถิ่น",
  description:
    "บริการ Taxi VIP และ Limousine ด้วยยานยนต์ไฟฟ้า 100% ผู้พัฒนาต่อยอดสัมปทาน ทอท. รายแรก ณ ท่าอากาศยานหาดใหญ่ — จาก Mobility สู่ Mixed-Use",
  contact: {
    address: "106/5 หมู่ที่ 1 ตำบลทุ่งตำเสา อำเภอหาดใหญ่ จังหวัดสงขลา 90110",
    email: "info@hongmove.co.th",
    mobile: "+66 65 656 4800",
    tel: "+66 74 251 777",
    line: "@hongmove",
    hours: "ทุกวัน 08:00 – 22:00 น.",
  },
  links: {
    line: "https://line.me/R/ti/p/@hongmove",
    callPrimary: "tel:+66656564800",
    // ส่งข้อความถึง LINE OA โดยตรง (เติมข้อความต่อท้ายแบบ encodeURIComponent)
    lineOaMessage: "https://line.me/R/oaMessage/%40hongmove/?",
  },
} as const;

/** หลักฐานความน่าเชื่อถือ — ใช้ข้อเท็จจริงที่ตรวจสอบได้จริง (ไม่ใช่รีวิวแต่ง) */
export const credentials = [
  {
    icon: "plane",
    title: "ผู้พัฒนาต่อยอดสัมปทาน ทอท. รายแรก",
    desc: "ไม่ใช่รายแรกที่ได้สัมปทาน แต่เป็นรายแรกที่พัฒนาต่อยอดสัมปทาน ทอท. จาก Mobility สู่ Community Mall, Mixed-Use และอสังหาริมทรัพย์",
  },
  {
    icon: "shield",
    title: "จดทะเบียนถูกต้องตามกฎหมาย",
    desc: "บริษัท หงส์ มูฟ จำกัด จดทะเบียนจัดตั้งเมื่อ พ.ศ. 2567 ดำเนินกิจการภายใต้กฎหมายไทย",
  },
  {
    icon: "car",
    title: "คนขับมืออาชีพ มีใบอนุญาต",
    desc: "ผ่านการอบรม มีใบอนุญาตขับขี่สาธารณะ ตามมาตรฐานกรมการขนส่งทางบก",
  },
  {
    icon: "shield",
    title: "ประกันภัยทุกการเดินทาง",
    desc: "คุ้มครองผู้โดยสารทุกเที่ยว เพื่อความอุ่นใจตลอดเส้นทาง",
  },
  {
    icon: "leaf",
    title: "ยานยนต์ไฟฟ้า 100%",
    desc: "ฝูงรถ EV รุ่นใหม่ ปลอดภัย สะอาด ไร้มลภาวะ",
  },
  {
    icon: "sparkle",
    title: "ราคาโปร่งใส",
    desc: "แจ้งราคาชัดเจนก่อนเดินทาง ไม่มีค่าใช้จ่ายแอบแฝง",
  },
];

/** จุดสร้างความเชื่อมั่น (Trust bar) */
export const trustPoints = [
  "ผู้พัฒนาต่อยอดสัมปทาน ทอท. รายแรก",
  "คนขับมืออาชีพ มีใบอนุญาต",
  "ประกันภัยทุกการเดินทาง",
  "ยานยนต์ไฟฟ้า 100%",
];

export const nav = [
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "บริการ", href: "/services" },
  { label: "ธุรกิจ & นักลงทุน", href: "/business" },
  { label: "สมัครงาน", href: "/careers" },
  { label: "บทความ", href: "/news" },
  { label: "ติดต่อเรา", href: "/contact" },
] as const;

/** จุดเด่น 3 ข้อ (หน้าแรก — Why Hong Move) */
export const valueProps = [
  {
    title: "ใช้ง่าย ทุกการเดินทาง",
    desc: "เรียกรถสะดวก ราคาโปร่งใส ไม่มีบวกเพิ่ม พร้อมทีมงานดูแลตลอดการเดินทาง",
    icon: "sparkle",
  },
  {
    title: "ปลอดภัยทุกกิโลเมตร",
    desc: "คนขับผ่านการอบรมมืออาชีพ มีใบอนุญาตถูกต้องตามกฎหมาย และประกันภัยระหว่างเดินทาง",
    icon: "shield",
  },
  {
    title: "เดินทางอย่างมีคุณค่า",
    desc: "ยานยนต์ไฟฟ้า 100% ไร้มลภาวะ ลดการปล่อยคาร์บอน เพื่อเมืองและสนามบินสีเขียว",
    icon: "leaf",
  },
] as const;

/** บริการหลัก (หน้าแรก + /services) */
export const services = [
  {
    slug: "taxi-vip",
    title: "Taxi VIP",
    desc: "รถแท็กซี่ไฟฟ้าระดับ VIP รับส่งสนามบิน สะดวก ปลอดภัย ราคาเป็นธรรม",
    image: "/images/taxi-vip-car.jpg",
    badge: "เปิดให้บริการแล้ว",
  },
  {
    slug: "limousine",
    title: "Limousine",
    desc: "ลีมูซีนพรีเมียม 3 รุ่น — Deepal S05, ZEEKER 009 และรถตู้ FARIZON รองรับทุกขนาดการเดินทาง",
    image: "/images/deepal-silver.jpg",
    badge: "เริ่มให้บริการ 1 ส.ค. 2569",
  },
  {
    slug: "rental",
    title: "เช่ารถ EV",
    desc: "เช่ารถยนต์ไฟฟ้า MG ES รายวัน/รายเดือน สะดวก ประหยัด เป็นมิตรต่อสิ่งแวดล้อม",
    image: "/images/mg-es-rental.jpg",
    badge: "เร็วๆ นี้",
  },
] as const;

/** เครือข่ายจุดให้บริการขนส่งมวลชนตามแผนขยาย */
export const airports = [
  { label: "ท่าอากาศยานหาดใหญ่", cars: "30 → 300", status: "เปิดให้บริการแล้ว", live: true },
  { label: "ท่าอากาศยานเชียงใหม่", cars: "250", status: "แผนขยาย", live: false },
  { label: "ขนส่งมวลชนกรุงเทพ", cars: "150", status: "แผนขยาย", live: false },
  { label: "ท่าอากาศยานเชียงราย", cars: "50", status: "แผนขยาย", live: false },
  { label: "ท่าอากาศยานกระบี่", cars: "50", status: "แผนขยาย", live: false },
  { label: "ท่าอากาศยานขอนแก่น", cars: "50", status: "แผนขยาย", live: false },
  { label: "ท่าอากาศยานอุดร–อุบล", cars: "150", status: "แผนขยาย", live: false },
  { label: "ท่าอากาศยานภูเก็ต", cars: "250", status: "แผนขยาย", live: false },
] as const;

/** ส่วนธุรกิจ — นำเสนอระดับวิสัยทัศน์เท่านั้น (ไม่มีตัวเลขลับ) */
export const businessPillars = [
  {
    title: "ต่อยอดสัมปทาน AOT",
    desc: "ผู้พัฒนาต่อยอดสัมปทาน ทอท. รายแรก ณ ท่าอากาศยานหาดใหญ่ — จาก Mobility สู่ Mixed-Use",
  },
  {
    title: "EV Charging Station",
    desc: "สถานีอัดประจุยานยนต์ไฟฟ้าภายในเขตท่าอากาศยาน รองรับการเดินทางพลังงานสะอาด",
  },
  {
    title: "Community Mall & Mixed-Use",
    desc: "ศูนย์รวมพลังงาน การเดินทาง และไลฟ์สไตล์ ควบคู่สถานีบริการน้ำมัน PTT",
  },
  {
    title: "เครือข่ายขนส่งมวลชนทั่วประเทศ",
    desc: "ตั้งเป้าขยายบริการครอบคลุมจุดให้บริการหลัก ขับเคลื่อนสู่ ‘เมืองสีเขียว’ และการขนส่งสีเขียว",
  },
] as const;

/** พาร์ตเนอร์ (placeholder ระหว่างรอโลโก้จริง) */
export const partners = ["AOT", "PTT", "อผศ.", "Songkhla", "Hat Yai", "EV Thailand"];
