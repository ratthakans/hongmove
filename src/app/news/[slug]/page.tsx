import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { articles } from "@/lib/data";
import { ArrowRight } from "@/components/ui/Icons";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return {
    title: a?.title ?? "บทความ",
    description: a?.excerpt,
    openGraph: a ? { images: [a.image], title: a.title, description: a.excerpt } : undefined,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={article.category} title={article.title} crumb="บทความ" />

      <article className="py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{article.date}</span>
            <span>·</span>
            <span>โดย {article.author}</span>
          </div>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl shadow-card">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width:768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="prose-hm mt-8 space-y-5">
            <p className="text-lg font-medium leading-relaxed text-ink/90">{article.excerpt}</p>
            {article.body.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.85] text-ink/80">
                {p}
              </p>
            ))}
          </div>

          <Link
            href="/news"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson hover:gap-2.5 transition-all"
          >
            ← กลับไปหน้าบทความ
          </Link>
        </div>
      </article>

      {/* related */}
      <section className="border-t border-line bg-cloud py-16">
        <div className="container-x">
          <h2 className="text-xl font-bold">บทความที่เกี่ยวข้อง</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-garnet">{a.category}</span>
                  <h3 className="mt-1.5 font-bold leading-snug transition-colors group-hover:text-crimson">
                    {a.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
                    อ่านต่อ <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
