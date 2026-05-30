import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/content/sections";
import { buildBreadcrumbSchema, buildCanonicalUrl, buildServiceMetadata } from "@/lib/seo";

const route = "/sobre-mim/";

export const metadata: Metadata = buildServiceMetadata({
  title: "Sobre Mim | Gabriela Nunes",
  description:
    "Conheça a trajetória de Gabriela Nunes, psicóloga clínica com abordagem psicanalítica e atuação em sofrimento emocional, corpo e alimentação.",
  pathname: route,
  image: "/images/sobre.jpeg",
});

export default function SobreMimPage() {
  const canonical = buildCanonicalUrl(route);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: buildCanonicalUrl("/") },
    { name: "Sobre Mim", url: canonical },
  ]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabriela Nunes",
    jobTitle: "Psicóloga Clínica",
    description:
      "Psicóloga clínica com abordagem psicanalítica, com foco em sofrimento emocional, autoimagem, autoestima e relação com corpo e alimentação.",
    url: canonical,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="about-page-hero">
        <div className="container about-page-hero-grid">
          <Reveal>
            <p className="about-page-kicker">Gabriela Nunes</p>
            <h1 className="about-page-title">Sobre mim</h1>
            <p className="about-page-lead">
              Psicóloga clínica com escuta psicanalítica e cuidado sensível ao seu tempo.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="about-page-image-wrap">
              <Image
                src="/images/sobre.jpeg"
                alt="Gabriela Nunes"
                width={1024}
                height={1024}
                className="about-page-image"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-page-content">
        <div className="container about-page-layout">
          {/* Parte 1: Intro */}
          <div className="about-page-block about-page-intro">
            <Reveal>
              <blockquote className="blockquote-accent">{aboutContent[0]}</blockquote>
            </Reveal>
            <Reveal delay={1}>
              <p>{aboutContent[1]}</p>
            </Reveal>
            <Reveal delay={2}>
              <p>{aboutContent[2]}</p>
            </Reveal>
          </div>

          {/* Parte 2: Grid com Imagem sobremim2 */}
          <div className="about-page-block about-page-grid about-page-grid-reverse">
            <Reveal className="about-block-image-wrap">
              <Image
                src="/images/sobremim2.jpg"
                alt="Gabriela Nunes no consultório"
                width={600}
                height={750}
                className="about-block-image"
              />
            </Reveal>
            <Reveal delay={1} className="about-block-text">
              <p>{aboutContent[3]}</p>
              <p>{aboutContent[4]}</p>
            </Reveal>
          </div>

          {/* Parte 3: Grid com Imagem sobremim3 */}
          <div className="about-page-block about-page-grid">
            <Reveal className="about-block-text">
              <p>{aboutContent[5]}</p>
              <p>{aboutContent[6]}</p>
              <p>{aboutContent[7]}</p>
            </Reveal>
            <Reveal delay={1} className="about-block-image-wrap">
              <Image
                src="/images/sobremim3.jpg"
                alt="Detalhe do ambiente de atendimento da psicóloga Gabriela Nunes"
                width={600}
                height={750}
                className="about-block-image"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        .about-page-hero,
        .about-page-content {
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
        }

        .about-page-hero {
          background: linear-gradient(180deg, #fff4ec 0%, var(--color-background) 100%);
          padding-top: clamp(72px, 10vh, 110px);
        }

        .about-page-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(28px, 4vw, 56px);
          align-items: center;
        }

        .about-page-kicker {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin-bottom: 14px;
        }

        .about-page-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          color: var(--color-on-surface);
          margin-bottom: 16px;
        }

        .about-page-lead {
          font-size: 1.06rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
          max-width: 52ch;
        }

        .about-page-image-wrap {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--shadow-hero);
        }

        .about-page-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-page-content {
          background: var(--color-background);
        }

        .about-page-layout {
          max-width: 960px;
          display: flex;
          flex-direction: column;
          gap: clamp(48px, 8vh, 80px);
        }

        .about-page-intro {
          display: grid;
          gap: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .about-page-intro p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--color-on-surface-variant);
        }

        .about-page-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(28px, 5vw, 64px);
          align-items: center;
        }

        .about-block-text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-block-text p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--color-on-surface-variant);
        }

        .about-block-image-wrap {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }

        .about-block-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 960px) {
          .about-page-hero-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-page-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .about-page-grid-reverse > *:first-child {
            order: 2; /* Moves image below text on mobile devices */
          }
        }
      `}</style>
    </>
  );
}
