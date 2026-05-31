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
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
