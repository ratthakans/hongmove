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
    "บริการ Taxi VIP และ Limousine ด้วยยานยนต์ไฟฟ้า 100% ผู้ให้บริการรับส่งสนามบินรายแรกที่ได้รับอนุญาตจาก ทอท. ณ ท่าอากาศยานหาดใหญ่",
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
  },
} as const;

/** หลักฐานความน่าเชื่อถือ — ใช้ข้อเท็จจริงที่ตรวจสอบได้จริง (ไม่ใช่รีวิวแต่ง) */
export const credentials = [
  {
    icon: "plane",
    title: "สัมปทาน ทอท. รายแรก",
    desc: "ผู้ให้บริการรับส่งผู้โดยสารรายแรกที่ได้รับอนุญาตจากท่าอากาศยานไทย ณ ท่าอากาศยานหาดใหญ่",
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
  "ได้รับอนุญาตจาก ทอท. รายแรก",
  "คนขับมืออาชีพ มีใบอนุญาต",
  "ประกันภัยทุกการเดินทาง",
  "ยานยนต์ไฟฟ้า 100%",
];

export const nav = [
  { label: "หน้าแรก", href: "/" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "บริการ", href: "/services" },
  { label: "ธุรกิจ", href: "/business" },
  { label: "นักลงทุน", href: "/investor" },
  { label: "ร่วมงานกับเรา", href: "/careers" },
  { label: "บทความ", href: "/news" },
  { label: "แกลเลอรี", href: "/gallery" },
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
    image: "/images/taxi-trails.jpg",
  },
  {
    slug: "limousine",
    title: "Limousine",
    desc: "บริการลีมูซีนพรีเมียม สำหรับการเดินทางที่หรูหราและเป็นส่วนตัว",
    image: "/images/limo-sunset.jpg",
  },
  {
    slug: "rental",
    title: "เช่ารถ EV",
    desc: "เช่ารถยนต์ไฟฟ้ารายวัน/รายเดือน พร้อมคนขับมืออาชีพ",
    image: "/images/fleet-airport.jpg",
  },
  {
    slug: "travel",
    title: "Hong Travel",
    desc: "แพ็กเกจท่องเที่ยวเชื่อมต่ออ่าวไทย–อันดามัน เกาะหลีเป๊ะ และจุดหมายเด่นภาคใต้",
    image: "/images/tour-phangnga.jpg",
  },
] as const;

/** เครือข่ายสนามบินตามแผนขยาย (AOT p5) */
export const airports = [
  { name: "หาดใหญ่", cars: "30 → 300", status: "เปิดให้บริการแล้ว", live: true },
  { name: "เชียงใหม่", cars: "250", status: "แผนขยาย", live: false },
  { name: "ดอนเมือง", cars: "150", status: "แผนขยาย", live: false },
  { name: "เชียงราย", cars: "50", status: "แผนขยาย", live: false },
  { name: "กระบี่", cars: "50", status: "แผนขยาย", live: false },
  { name: "ขอนแก่น", cars: "50", status: "แผนขยาย", live: false },
  { name: "อุดร–อุบล", cars: "150", status: "แผนขยาย", live: false },
  { name: "นครศรีฯ", cars: "50", status: "แผนขยาย", live: false },
] as const;

/** ส่วนธุรกิจ — นำเสนอระดับวิสัยทัศน์เท่านั้น (ไม่มีตัวเลขลับ) */
export const businessPillars = [
  {
    title: "สัมปทาน AOT",
    desc: "ผู้ให้บริการรับส่งผู้โดยสารรายแรกที่ได้รับอนุญาตจากท่าอากาศยานไทย ณ สนามบินหาดใหญ่",
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
    title: "เครือข่ายสนามบินทั่วประเทศ",
    desc: "ตั้งเป้าขยายบริการครอบคลุมสนามบินหลัก ขับเคลื่อนสู่ ‘เมืองสีเขียว’ และ ‘สนามบินสีเขียว’",
  },
] as const;

/** พาร์ตเนอร์ (placeholder ระหว่างรอโลโก้จริง) */
export const partners = ["AOT", "PTT", "อผศ.", "Songkhla", "Hat Yai", "EV Thailand"];
