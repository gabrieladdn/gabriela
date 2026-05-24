import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'
import { BlogFilterBar } from '@/components/blog/BlogFilterBar'
import { Reveal } from '@/components/ui/Reveal'
import { HoverLink } from '@/components/ui/HoverLink'
import { WHATSAPP_URL } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Artigos',
  description:
    'Reflexões sobre saúde mental, psicanálise, ansiedade e autoconhecimento. Textos escritos por Gabriela Nunes, psicóloga clínica.',
}

const categories = [
  { value: '',                     label: 'Todos' },
  { value: 'ansiedade',            label: 'Ansiedade' },
  { value: 'autoestima',           label: 'Autoestima' },
  { value: 'relacionamentos',      label: 'Relacionamentos' },
  { value: 'psicanalise',          label: 'Psicanálise' },
  { value: 'autoconhecimento',     label: 'Autoconhecimento' },
  { value: 'corpo-e-alimentacao',  label: 'Corpo e Alimentação' },
  { value: 'saude-mental',         label: 'Saúde Mental' },
]

interface Props {
  searchParams: Promise<{ categoria?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { categoria } = await searchParams
  const active = categoria ?? ''

  const allPosts = getAllPosts()
  const filtered = active ? allPosts.filter((p) => p.category === active) : allPosts

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'clamp(64px, 10vh, 100px)',
          paddingBottom: 'clamp(48px, 6vh, 80px)',
          background: 'var(--color-background)',
          borderBottom: '1px solid var(--color-outline-variant)',
        }}
      >
        <div className="container">
          <Reveal>
            <p
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-secondary)',
                marginBottom: '16px',
              }}
            >
              Reflexões
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'var(--color-on-surface)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}
            >
              Artigos sobre saúde mental
            </h1>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '520px',
                lineHeight: 1.7,
              }}
            >
              Textos escritos com cuidado sobre ansiedade, autoconhecimento, relacionamentos e o
              cotidiano da vida emocional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter bar */}
      <div
        style={{
          paddingBlock: '24px',
          background: 'rgba(255,241,231,0.4)',
          borderBottom: '1px solid rgba(199,199,191,0.3)',
          position: 'sticky',
          top: '80px',
          zIndex: 10,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="container">
          <BlogFilterBar categories={categories} active={active} />
        </div>
      </div>

      {/* Posts grid */}
      <section
        style={{
          paddingBlock: 'clamp(48px, 8vh, 96px)',
          background: 'var(--color-background)',
        }}
      >
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  color: 'var(--color-on-surface-variant)',
                }}
              >
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              {filtered.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    publishedAt={String(post.publishedAt)}
                    readingTime={post.readingTime}
                  />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingBlock: 'clamp(48px, 8vh, 80px)',
          background: 'var(--color-surface-container-low)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <Reveal>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                marginBottom: '24px',
              }}
            >
              Identificou algo que ressoa com você?
            </p>
            <HoverLink href={WHATSAPP_URL}>
              Agendar uma conversa
            </HoverLink>
          </Reveal>
        </div>
      </section>
    </>
  )
}
