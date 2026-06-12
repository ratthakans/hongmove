import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const display = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const thai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Taxi VIP & Limousine ยานยนต์ไฟฟ้า 100%`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Hong Move",
    "หงส์ มูฟ",
    "Taxi VIP",
    "Limousine",
    "EV",
    "รถไฟฟ้า",
    "สนามบินหาดใหญ่",
    "AOT",
  ],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Beyond rides, a premium travel ecosystem`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.contact.email,
    telephone: site.contact.mobile,
    address: {
      "@type": "PostalAddress",
      streetAddress: "106/5 หมู่ที่ 1 ตำบลทุ่งตำเสา",
      addressLocality: "อำเภอหาดใหญ่",
      addressRegion: "สงขลา",
      postalCode: "90110",
      addressCountry: "TH",
    },
    description: site.description,
    areaServed: "TH",
  };

  return (
    <html lang="th" className={`${display.variable} ${thai.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
