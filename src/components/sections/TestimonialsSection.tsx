"use client";

import { Reveal } from "@/components/ui/Reveal";
import { DynamicTestimonials } from "@/components/ui/DynamicTestimonials";

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <Reveal className="testimonials-header">
          <h2 className="testimonials-title">O que dizem os pacientes</h2>
        </Reveal>

        <DynamicTestimonials limit={3} variant="home" />
      </div>

      <style>{`
        .testimonials-section {
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
          background: var(--color-background);
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .testimonials-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          color: var(--color-on-surface);
        }

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
    </section>
  );
}
