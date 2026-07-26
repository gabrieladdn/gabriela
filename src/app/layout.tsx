import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Gabriela Nunes — Psicóloga Clínica",
    default: "Gabriela Nunes — Psicoterapia Online",
  },
  description:
    "Psicoterapia online para mulheres que vivem em autocobrança, ansiedade e dificuldade de se sentir suficientes. Atendimento clínico com abordagem psicanalítica.",
  keywords: [
    "psicóloga online",
    "psicoterapia online",
    "psicanálise",
    "ansiedade",
    "autoestima",
    "saúde mental",
    "Gabriela Nunes",
    "terapia para mulheres",
  ],
  authors: [{ name: "Gabriela Nunes" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    siteName: "Gabriela Nunes | Psicóloga Clínica",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${manrope.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KL5F5S4P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KL5F5S4P');
          `}
        </Script>

        {/* Google Ads (AdWords) & Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18347937410"
          strategy="afterInteractive"
        />
        <Script id="google-adwords" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18347937410');
            ${gaId ? `gtag('config', '${gaId}');` : ""}
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
