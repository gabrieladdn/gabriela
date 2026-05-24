"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt?: string;
  readingTime?: number;
  coverImageUrl?: string;
  coverImageAlt?: string;
}

const categoryLabels: Record<string, string> = {
  ansiedade: "Ansiedade",
  autoestima: "Autoestima",
  relacionamentos: "Relacionamentos",
  psicanalise: "Psicanálise",
  autoconhecimento: "Autoconhecimento",
  "corpo-e-alimentacao": "Corpo e Alimentação",
  "saude-mental": "Saúde Mental",
};

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  publishedAt,
  readingTime,
  coverImageUrl,
  coverImageAlt,
}: BlogCardProps) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <Link href={`/blog/${slug}`} className="blog-card">
      <div className="blog-card-cover">
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={coverImageAlt || title}
            fill
            className="blog-card-cover-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="blog-card-cover-placeholder" />
        )}
        <span className="blog-card-category">{categoryLabels[category] || category}</span>
      </div>

      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>

        <div className="blog-card-meta">
          {formattedDate && <span>{formattedDate}</span>}
          {readingTime && <span>· {readingTime} min de leitura</span>}
        </div>
      </div>

      <style>{`
        .blog-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(253,235,220,0.7);
          border-radius: 20px;
          background: #fff;
          box-shadow: var(--shadow-card);
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(143,75,66,0.12);
        }

        .blog-card-cover {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: var(--color-surface-container);
        }

        .blog-card-cover-image {
          object-fit: cover;
          transition: transform 0.5s;
        }

        .blog-card:hover .blog-card-cover-image {
          transform: scale(1.04);
        }

        .blog-card-cover-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container));
        }

        .blog-card-category {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 5px 12px;
          border-radius: 9999px;
          background: rgba(255,248,244,0.95);
          backdrop-filter: blur(8px);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-secondary);
        }

        .blog-card-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 12px;
          padding: 28px 28px 32px;
        }

        .blog-card-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.4;
          color: var(--color-on-surface);
        }

        .blog-card-excerpt {
          flex: 1;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-size: 0.875rem;
          line-height: 1.65;
          color: var(--color-on-surface-variant);
        }

        .blog-card-meta {
          display: flex;
          gap: 16px;
          margin-top: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--color-outline);
        }
      `}</style>
    </Link>
  );
}
