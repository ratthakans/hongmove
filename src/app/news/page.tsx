import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { NewsGrid } from "@/components/sections/NewsGrid";

export const metadata: Metadata = {
  title: "บทความ & ข่าวสาร",
  description:
    "ติดตามความเคลื่อนไหวล่าสุดของ HONG MOVE — ข่าวบริษัท พลังงานสะอาด และเรื่องราวการท่องเที่ยว",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="บทความ & ข่าวสาร"
        title="ความเคลื่อนไหวล่าสุด"
        desc="ติดตามข่าวสาร โครงการใหม่ และเรื่องราวการเดินทางจาก HONG MOVE"
      />
      <section className="py-16 md:py-20">
        <div className="container-x">
          <NewsGrid />
        </div>
      </section>
    </>
  );
}
