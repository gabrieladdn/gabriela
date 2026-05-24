import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { Reveal } from '@/components/ui/Reveal'
import { HoverLink } from '@/components/ui/HoverLink'

const categoryLabels: Record<string, string> = {
  ansiedade: 'Ansiedade',
  autoestima: 'Autoestima',
  relacionamentos: 'Relacionamentos',
  psicanalise: 'Psicanálise',
  autoconhecimento: 'Autoconhecimento',
  'corpo-e-alimentacao': 'Corpo e Alimentação',
  'saude-mental': 'Saúde Mental',
}

// MDX custom components — mantém o visual do RichText anterior
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        fontWeight: 700,
        color: 'var(--color-on-surface)',
        letterSpacing: '-0.01em',
        lineHeight: 1.3,
        marginTop: '2.5rem',
        marginBottom: '1rem',
      }}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: 'var(--color-on-surface)',
        lineHeight: 1.4,
        marginTop: '2rem',
        marginBottom: '0.75rem',
      }}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      style={{
        fontSize: '1.0625rem',
        lineHeight: 1.8,
        color: 'var(--color-on-surface-variant)',
        marginBottom: '1.5rem',
      }}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className={`blockquote-accent ${props.className ?? ''}`.trim()}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      style={{
        paddingLeft: '1.5rem',
        marginBottom: '1.5rem',
        color: 'var(--color-on-surface-variant)',
        lineHeight: 1.8,
        fontSize: '1.0625rem',
      }}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      style={{
        paddingLeft: '1.5rem',
        marginBottom: '1.5rem',
        color: 'var(--color-on-surface-variant)',
        lineHeight: 1.8,
        fontSize: '1.0625rem',
      }}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} style={{ fontWeight: 700, color: 'var(--color-on-surface)' }} />
  ),
  hr: () => (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--color-outline-variant)',
        marginBlock: '2.5rem',
      }}
    />
  ),
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Artigo não encontrado' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: String(post.publishedAt),
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: 'clamp(64px, 10vh, 100px)',
          paddingBottom: 'clamp(48px, 6vh, 72px)',
          background: 'var(--color-background)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8125rem',
              color: 'var(--color-outline)',
              marginBottom: '40px',
            }}
          >
            <Link href="/" style={{ color: 'inherit' }}>Home</Link>
            <span>›</span>
            <Link href="/blog" style={{ color: 'inherit' }}>Artigos</Link>
            <span>›</span>
            <span style={{ color: 'var(--color-on-surface-variant)' }}>
              {categoryLabels[post.category] || post.category}
            </span>
          </div>

          <div style={{ maxWidth: '720px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(143,75,66,0.1)',
                color: 'var(--color-secondary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: '9999px',
                marginBottom: '20px',
              }}
            >
              {categoryLabels[post.category] || post.category}
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--color-on-surface)',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                marginBottom: '24px',
              }}
            >
              {post.title}
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--color-on-surface-variant)',
                fontStyle: 'italic',
                marginBottom: '32px',
              }}
            >
              {post.excerpt}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid var(--color-outline-variant)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--color-surface-container)',
                  flexShrink: 0,
                }}
              />
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-on-surface)' }}>
                  Gabriela Nunes
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-outline)', marginTop: '2px' }}>
                  {formattedDate} · {post.readingTime} min de leitura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover placeholder */}
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          paddingInline: 'var(--gutter)',
          marginBottom: '-48px',
        }}
      >
        <div
          style={{
            aspectRatio: '16/6',
            borderRadius: '24px',
            overflow: 'hidden',
            background:
              'linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container))',
          }}
        />
      </div>

      {/* Content */}
      <section
        style={{ paddingBlock: 'clamp(80px, 12vh, 120px)', background: 'var(--color-background)' }}
      >
        <div className="container">
          <div style={{ margin: '0 auto', maxWidth: '720px' }}>
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Author box */}
          <div
            style={{
              maxWidth: '720px',
              margin: '80px auto 0',
              padding: '32px',
              background: 'var(--color-surface-container-low)',
              borderRadius: '20px',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--color-surface-container)',
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-secondary)',
                  marginBottom: '6px',
                }}
              >
                Escrito por
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                  marginBottom: '8px',
                }}
              >
                Gabriela Nunes
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: 'var(--color-on-surface-variant)',
                }}
              >
                Psicóloga clínica com abordagem psicanalítica. Especializada no atendimento a
                mulheres que vivem em autocobrança e ansiedade.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: '720px', margin: '48px auto 0', textAlign: 'center' }}>
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-secondary)',
                letterSpacing: '0.04em',
              }}
            >
              ← Voltar para artigos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingBlock: '80px',
          background: 'var(--color-secondary)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '24px',
            }}
          >
            Esse texto tocou em algo?
          </p>
          <HoverLink href="https://wa.me/5513982007343">Agendar uma conversa</HoverLink>
        </div>
      </section>
    </>
  )
}
