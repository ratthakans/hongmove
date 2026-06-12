import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "แกลเลอรี",
  description: "ภาพบรรยากาศการให้บริการ ฝูงรถ EV เครื่องแบบ และจุดบริการของ HONG MOVE",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="แกลเลอรี"
        title="ภาพบรรยากาศ HONG MOVE"
        desc="ฝูงรถยนต์ไฟฟ้า จุดบริการ ทีมงาน และเครื่องแบบ ภายใต้มาตรฐานบริการระดับพรีเมียม"
      />
      <section className="py-16 md:py-20">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
