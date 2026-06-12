import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { jobs } from "@/lib/data";
import { Pin, ArrowRight } from "@/components/ui/Icons";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  return {
    title: job ? job.title : "ตำแหน่งงาน",
    description: job?.summary,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      <PageHeader eyebrow={job.dept} title={job.title} crumb={job.title} />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* details */}
          <div>
            <div className="flex flex-wrap gap-2">
              <Tag>{job.type}</Tag>
              <Tag>
                <Pin className="h-3.5 w-3.5" /> {job.location}
              </Tag>
              <Tag>{job.salary}</Tag>
            </div>

            <Block title="รายละเอียดงาน">
              <p className="text-[15px] leading-relaxed text-muted">{job.summary}</p>
            </Block>

            <Block title="คุณสมบัติผู้สมัคร">
              <ul className="space-y-2.5">
                {job.qualifications.map((q) => (
                  <li key={q} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                    {q}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="สวัสดิการ">
              <div className="flex flex-wrap gap-2">
                {job.benefits.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-cream/40 px-4 py-1.5 text-sm font-medium text-crimson-900"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Block>

            <Link
              href="/careers"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson hover:gap-2.5 transition-all"
            >
              ← กลับไปดูตำแหน่งงานทั้งหมด
            </Link>
          </div>

          {/* apply form */}
          <aside>
            <div className="sticky top-24 rounded-3xl border border-line bg-white p-6 shadow-soft md:p-8">
              <h2 className="text-xl font-bold">สมัครตำแหน่งนี้</h2>
              <p className="mt-1.5 text-sm text-muted">กรอกข้อมูลด้านล่างเพื่อสมัครงาน</p>
              <div className="mt-6">
                <ApplicationForm defaultRole={job.title} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* other jobs */}
      <section className="border-t border-line bg-cloud py-16">
        <div className="container-x">
          <h2 className="text-xl font-bold">ตำแหน่งอื่น ๆ</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((j) => j.slug !== job.slug)
              .map((j) => (
                <Link
                  key={j.slug}
                  href={`/careers/${j.slug}`}
                  className="group rounded-2xl border border-line bg-white p-5 transition-all hover:border-crimson/30 hover:shadow-card"
                >
                  <span className="text-xs font-semibold text-garnet">{j.dept}</span>
                  <h3 className="mt-1.5 font-bold transition-colors group-hover:text-crimson">
                    {j.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
                    ดูรายละเอียด <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/8 px-4 py-1.5 text-sm font-medium text-crimson">
      {children}
    </span>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
