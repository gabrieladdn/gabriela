import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import type { ServicePageContent } from "@/content/services";
import { DynamicTestimonials } from "@/components/ui/DynamicTestimonials";

interface ServicePageTemplateProps {
  content: ServicePageContent;
}

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero-grid">
          <Reveal>
            <p className="service-kicker">
              {content.slug === "avaliacao-cirurgia-bariatrica"
                ? "Corpo, Alimentação e Imagem Corporal"
                : content.slug === "sofrimento-psiquico-instabilidade-emocional-e-vinculos"
                  ? "Sofrimento Psíquico e Vínculos"
                  : content.slug === "ansiedade-e-psicossomatica"
                    ? "Ansiedade e Psicossomática"
                    : "Autoestima e Autoimagem"}
            </p>
            <h1 className="service-title">{content.title}</h1>
            <p className="service-lead">{content.heroHighlight}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="service-button"
            >
              {content.heroCtaLabel}
            </a>
          </Reveal>

          <Reveal delay={1}>
            <div className="service-hero-image-wrap">
              <Image
                src={content.heroImage.src}
                alt={content.heroImage.alt}
                width={1024}
                height={1024}
                className="service-hero-image"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="service-why">
        <div className="container">
          <Reveal>
            <h2 className="service-section-title">{content.whyTitle}</h2>
            <p className="service-section-copy">{content.whyDescription}</p>
          </Reveal>

          <div className="service-benefits-grid">
            {content.benefits.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 3) as 0 | 1 | 2}
                className="service-benefit-card"
              >
                <h3 className="service-benefit-title">{item.title}</h3>
                <p className="service-benefit-description">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-importance">
        <div className="container service-importance-grid">
          <Reveal>
            <h2 className="service-section-title">{content.importanceTitle}</h2>
            <div className="service-richtext">
              {content.importanceParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="service-importance-images">
              {content.importanceImages.map((image, index) => (
                <div
                  key={image.src}
                  className={index === 0 ? "service-image-square" : "service-image-portrait"}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={index === 0 ? 857 : 684}
                    height={index === 0 ? 857 : 1024}
                    className="service-section-image"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="service-process">
        <div className="container service-process-grid">
          <Reveal>
            <h2 className="service-section-title">{content.processTitle}</h2>
            <div className="service-richtext">
              {content.processParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="service-inline-link"
            >
              {content.processCtaLabel}
            </a>
          </Reveal>

          <Reveal delay={1} className="service-testimonials-panel">
            <p className="service-testimonial-heading">{content.testimonialsTitle}</p>
            <DynamicTestimonials limit={2} variant="service" />
          </Reveal>
        </div>
      </section>

      <section className="service-bottom-cta">
        <div className="container service-bottom-cta-content">
          <Reveal>
            <p className="service-bottom-cta-text">{content.footerCtaText}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="service-button service-button-inverse"
            >
              {content.footerCtaLabel}
            </a>
          </Reveal>
          <Reveal delay={1}>
            <p className="service-internal-links">
              Explore também <Link href="/">a página inicial</Link> e{" "}
              <Link href="/blog">os artigos</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <style>{`
        .service-hero,
        .service-why,
        .service-importance,
        .service-process,
        .service-bottom-cta {
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
        }

        .service-hero {
          padding-top: clamp(72px, 10vh, 110px);
          background: linear-gradient(180deg, #fff4ec 0%, var(--color-background) 100%);
        }

        .service-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(28px, 4vw, 56px);
          align-items: center;
        }

        .service-kicker {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin-bottom: 16px;
        }

        .service-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.25rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--color-on-surface);
          margin-bottom: 18px;
        }

        .service-lead {
          font-size: 1.0625rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
          max-width: 56ch;
          margin-bottom: 30px;
        }

        .service-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
          border-radius: 999px;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--color-secondary);
          color: #fff;
          box-shadow: 0 8px 32px rgba(143, 75, 66, 0.22);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .service-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(143, 75, 66, 0.3);
        }

        .service-button-inverse {
          background: #fff;
          color: var(--color-secondary);
        }

        .service-hero-image-wrap {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--shadow-hero);
          background: var(--color-surface-container-low);
        }

        .service-hero-image,
        .service-section-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-section-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--color-on-surface);
          margin-bottom: 14px;
        }

        .service-section-copy,
        .service-richtext p {
          font-size: 1.03rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
        }

        .service-richtext p + p {
          margin-top: 14px;
        }

        .service-benefits-grid {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .service-benefit-card {
          background: #fff;
          border: 1px solid rgba(199, 199, 191, 0.5);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow-card);
          height: fit-content;
        }

        .service-benefit-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: var(--color-on-surface);
          margin-bottom: 10px;
        }

        .service-benefit-description {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--color-on-surface-variant);
        }

        .service-importance {
          background: var(--color-surface-container-low);
        }

        .service-importance-grid,
        .service-process-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(28px, 4vw, 52px);
          align-items: start;
        }

        .service-importance-images {
          display: grid;
          grid-template-columns: 1fr 0.82fr;
          gap: 14px;
          align-items: start;
        }

        .service-image-square,
        .service-image-portrait {
          overflow: hidden;
          border-radius: 20px;
          min-height: 220px;
          box-shadow: var(--shadow-card);
        }

        .service-image-square {
          aspect-ratio: 1 / 1;
        }

        .service-image-portrait {
          aspect-ratio: 2 / 3;
        }

        .service-process {
          background: var(--color-background);
        }

        .service-inline-link {
          display: inline-flex;
          margin-top: 20px;
          color: var(--color-secondary);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-size: 0.8rem;
        }

        .service-testimonials-panel {
          background: #fff;
          border: 1px solid rgba(199, 199, 191, 0.48);
          border-radius: 24px;
          padding: 28px;
          box-shadow: var(--shadow-card);
        }

        .service-testimonial-heading {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--color-on-surface);
          margin-bottom: 18px;
        }

        .service-testimonials-list {
          display: grid;
          gap: 14px;
        }

        .service-testimonial-card {
          border-radius: 16px;
          background: var(--color-surface-container-low);
          padding: 16px;
        }

        .service-testimonial-quote {
          font-size: 0.96rem;
          line-height: 1.65;
          color: var(--color-on-surface-variant);
        }

        .service-testimonial-author {
          margin-top: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-secondary);
        }

        .service-bottom-cta {
          background: var(--color-secondary);
          color: #fff;
          text-align: center;
        }

        .service-bottom-cta-text {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 3vw, 2rem);
          margin-bottom: 24px;
        }

        .service-internal-links {
          margin-top: 20px;
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .service-internal-links a {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @media (max-width: 960px) {
          .service-hero-grid,
          .service-importance-grid,
          .service-process-grid {
            grid-template-columns: 1fr;
          }

          .service-benefits-grid {
            grid-template-columns: 1fr;
          }

          .service-importance-images {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .service-importance-images {
            grid-template-columns: 1fr;
          }

          .service-image-square,
          .service-image-portrait {
            aspect-ratio: 4 / 3;
          }

          .service-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
