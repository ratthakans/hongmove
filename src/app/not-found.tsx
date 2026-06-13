import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="bg-crimson-radial flex min-h-[80vh] items-center text-white">
      <div className="container-x text-center">
        <div className="text-7xl font-extrabold text-white md:text-8xl">404</div>
        <h1 className="mt-4 text-2xl font-bold md:text-3xl">ไม่พบหน้าที่คุณค้นหา</h1>
        <p className="mx-auto mt-3 max-w-md text-white/75">
          หน้าที่คุณต้องการอาจถูกย้ายหรือไม่มีอยู่แล้ว ลองกลับไปหน้าแรกหรือจองรถกับเราได้เลย
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-crimson-900 transition-colors hover:bg-cream-600"
          >
            กลับหน้าแรก
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-crimson"
          >
            จองรถเลย <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
