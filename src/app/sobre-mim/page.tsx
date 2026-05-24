import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { aboutContent } from '@/content/sections'
import { buildBreadcrumbSchema, buildCanonicalUrl, buildServiceMetadata } from '@/lib/seo'

const route = '/sobre-mim/'

export const metadata: Metadata = buildServiceMetadata({
  title: 'Sobre Mim | Gabriela Nunes',
  description:
    'Conheça a trajetória de Gabriela Nunes, psicóloga clínica com abordagem psicanalítica e atuação em sofrimento emocional, corpo e alimentação.',
  pathname: route,
  image: '/images/services/bariatrica/hero.jpg',
})

export default function SobreMimPage() {
  const canonical = buildCanonicalUrl(route)

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: buildCanonicalUrl('/') },
    { name: 'Sobre Mim', url: canonical },
  ])

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriela Nunes',
    jobTitle: 'Psicóloga Clínica',
    description:
      'Psicóloga clínica com abordagem psicanalítica, com foco em sofrimento emocional, autoimagem, autoestima e relação com corpo e alimentação.',
    url: canonical,
  }

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
            <p className="about-page-lead">Psicóloga clínica com escuta psicanalítica e cuidado sensível ao seu tempo.</p>
          </Reveal>

          <Reveal delay={1}>
            <div className="about-page-image-wrap">
              <Image
                src="/images/services/bariatrica/hero.jpg"
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
        <div className="container about-page-copy">
          {aboutContent.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={(index % 3) as 0 | 1 | 2}>
              {index === 0 ? (
                <blockquote className="blockquote-accent">{paragraph}</blockquote>
              ) : (
                <p>{paragraph}</p>
              )}
            </Reveal>
          ))}
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

        .about-page-copy {
          max-width: 860px;
          display: grid;
          gap: 16px;
        }

        .about-page-copy p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--color-on-surface-variant);
        }

        @media (max-width: 960px) {
          .about-page-hero-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}