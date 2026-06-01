"use client";

import { useState, useEffect } from "react";
import { testimonialsList, Testimonial } from "@/content/testimonials";

interface DynamicTestimonialsProps {
  limit?: number; // Number of testimonials shown at once (default: 3)
  variant?: "home" | "service"; // CSS styling variant
}

export function DynamicTestimonials({ limit = 3, variant = "home" }: DynamicTestimonialsProps) {
  const [displayed, setDisplayed] = useState<Testimonial[]>([]);

  // Pick random unique items once on client mount to avoid hydration mismatches
  useEffect(() => {
    const shuffled = [...testimonialsList].sort(() => 0.5 - Math.random());
    setDisplayed(shuffled.slice(0, limit));
  }, [limit]);

  if (displayed.length === 0) {
    return <div className="testimonials-skeleton" style={{ minHeight: "200px" }} />;
  }

  if (variant === "service") {
    return (
      <div className="dynamic-service-list">
        {displayed.slice(0, 2).map(({ quote, author }, idx) => (
          <article key={idx} className="service-testimonial-card">
            <p className="service-testimonial-quote">{quote}</p>
            <p className="service-testimonial-author">{author}</p>
          </article>
        ))}

        <style>{`
          .dynamic-service-list {
            display: grid;
            gap: 14px;
          }
          .service-testimonial-card {
            border-radius: 16px;
            background: var(--color-surface-container-low);
            padding: 16px;
            box-shadow: var(--shadow-card);
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
        `}</style>
      </div>
    );
  }

  // Home page variant
  return (
    <div className="testimonials-grid">
      {displayed.map(({ quote, author }, idx) => (
        <div key={idx} className="testimonials-card">
          <span aria-hidden className="testimonials-quote-mark">
            &ldquo;
          </span>

          <p className="testimonials-quote">{quote}</p>

          <div className="testimonials-author-row">
            <div className="testimonials-avatar" />
            <span className="testimonials-author">{author}</span>
          </div>
        </div>
      ))}

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .testimonials-card {
          position: relative;
          padding: 40px 32px 32px;
          border: 1px solid var(--color-surface-container-low);
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 4px 24px rgba(143,75,66,0.06);
          transition: box-shadow 0.3s, transform 0.3s;
        }

        .testimonials-card:hover {
          box-shadow: 0 12px 40px rgba(143,75,66,0.1);
          transform: translateY(-3px);
        }

        .testimonials-quote-mark {
          position: absolute;
          top: -18px;
          left: 24px;
          font-family: var(--font-display);
          font-size: 5rem;
          line-height: 1;
          color: var(--color-tertiary-fixed-dim);
          opacity: 0.35;
          user-select: none;
        }

        .testimonials-quote {
          margin-bottom: 24px;
          font-size: 0.9375rem;
          line-height: 1.75;
          font-style: italic;
          color: var(--color-on-surface-variant);
          min-height: 80px;
        }

        .testimonials-author-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .testimonials-avatar {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--color-surface-container);
        }

        .testimonials-author {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--color-secondary);
        }
      `}</style>
    </div>
  );
}
