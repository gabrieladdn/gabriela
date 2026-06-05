"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface InstagramMedia {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption: string;
  duration: string;
}

export function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/gabrielanunes_psi?igsh=MWFkc2dwNm84cjhmYg==";

  const [reels, setReels] = useState<InstagramMedia[]>([
    {
      id: "fallback1",
      media_type: "VIDEO",
      media_url: "/images/ansiedade1.jpg",
      permalink: instagramUrl,
      caption:
        "Ansiedade e os sinais do corpo\nComo o sofrimento emocional se expressa fisicamente em nós.",
      duration: "Reels",
    },
    {
      id: "fallback2",
      media_type: "VIDEO",
      media_url: "/images/autoestima2.jpg",
      permalink: instagramUrl,
      caption:
        "Autocrítica e Perfeccionismo\nA busca por ideais muito exigentes e seus impactos na autoestima.",
      duration: "Reels",
    },
    {
      id: "fallback3",
      media_type: "VIDEO",
      media_url: "/images/corpo3.jpg",
      permalink: instagramUrl,
      caption:
        "O espaço da psicoterapia\nCompreender padrões repetitivos e construir novas formas de se relacionar.",
      duration: "Reels",
    },
  ]);

  useEffect(() => {
    async function loadInstagramMedia() {
      try {
        const res = await fetch("/api/instagram");
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setReels(json.data);
          }
        }
      } catch (error) {
        console.error("Failed to load Instagram media feed:", error);
      }
    }
    loadInstagramMedia();
  }, []);

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="instagram-header">
          <Reveal>
            <h2 className="instagram-title">Acompanhe no Instagram</h2>
          </Reveal>
          <Reveal delay={1}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-handle"
            >
              @gabrielanunes_psi
            </a>
          </Reveal>
        </div>

        <div className="instagram-grid">
          {reels.map((reel, idx) => {
            const captionLines = reel.caption.split("\n");
            const displayTitle = captionLines[0] || "Instagram Post";
            const displayDesc =
              captionLines.slice(1).join(" ") || reel.caption || "Acompanhe no perfil oficial";

            return (
              <Reveal key={reel.id} delay={idx + 2} className="instagram-card-reveal">
                <a
                  href={reel.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-card"
                >
                  <div className="instagram-image-wrap">
                    <Image
                      src={reel.media_url}
                      alt={displayTitle}
                      fill
                      sizes="(max-width: 900px) 100vw, 360px"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="instagram-badge">
                      <span className="instagram-badge-icon">▶</span>
                      <span className="instagram-duration">{reel.duration}</span>
                    </div>
                    <div className="instagram-overlay">
                      <div className="instagram-play-btn">
                        <span className="play-triangle">▶</span>
                      </div>
                      <div className="instagram-overlay-text">
                        <h4 className="instagram-post-title">{displayTitle}</h4>
                        <p className="instagram-post-desc">{displayDesc}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .instagram-section {
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
          background: rgba(255, 241, 231, 0.25);
          border-top: 1px solid rgba(143, 75, 66, 0.08);
        }

        .instagram-header {
          text-align: center;
          margin-bottom: clamp(32px, 5vh, 48px);
        }

        .instagram-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          color: var(--color-on-surface);
          margin-bottom: 8px;
        }

        .instagram-handle {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-secondary);
          letter-spacing: 0.02em;
          transition: opacity 0.2s;
        }

        .instagram-handle:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .instagram-card {
          display: block;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          aspect-ratio: 4 / 5;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .instagram-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hero);
        }

        .instagram-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .instagram-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 2;
          backdrop-filter: blur(4px);
        }

        .instagram-badge-icon {
          font-size: 0.65rem;
        }

        .instagram-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          opacity: 0.95;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .instagram-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.9);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
        }

        .play-triangle {
          color: var(--color-secondary);
          font-size: 1rem;
          margin-left: 3px;
        }

        .instagram-card:hover .instagram-play-btn {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .instagram-post-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .instagram-post-desc {
          font-size: 0.875rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 900px) {
          .instagram-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 420px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
