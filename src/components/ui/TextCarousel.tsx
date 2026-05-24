"use client"

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export interface TextCarouselProps {
  items: string[]
  // If `interval` is provided, it's used as a fixed duration (ms) per slide.
  // If omitted, duration is computed proportionally to the text length.
  interval?: number
  autoplay?: boolean
  showDots?: boolean
  showControls?: boolean
  className?: string
}

export default function TextCarousel({
  items,
  interval,
  autoplay = true,
  showDots = true,
  showControls = true,
  className = '',
}: TextCarouselProps) {
  const [index, setIndex] = useState(0)
  const [textHeight, setTextHeight] = useState<number | null>(null)
  const measureRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const viewportRef = useRef<HTMLDivElement | null>(null)

  const formatItem = (item: string) => `${item}.`

  useLayoutEffect(() => {
    const updateHeight = () => {
      const heights = measureRefs.current
        .map((element) => element?.offsetHeight ?? 0)
        .filter((height) => height > 0)

      if (!heights.length) return

      setTextHeight(Math.max(...heights))
    }

    updateHeight()

    if (!viewportRef.current || typeof ResizeObserver === 'undefined') return

    const observer = new ResizeObserver(() => {
      updateHeight()
    })

    observer.observe(viewportRef.current)

    return () => observer.disconnect()
  }, [items])

  // Compute slide duration. If `interval` prop is provided, use it as a fixed
  // duration (milliseconds). Otherwise compute proportional time based on
  // text length (words * msPerWord) clamped between min and max.
  useEffect(() => {
    if (!autoplay || items.length <= 1) return

    const computeDuration = (text = '') => {
      const words = String(text).trim().split(/\s+/).filter(Boolean).length
      const msPerWord = 400 // average milliseconds per word
      const minMs = 1500
      const maxMs = 10000
      const ms = Math.round(words * msPerWord)
      return Math.min(maxMs, Math.max(minMs, ms || minMs)) + 1000
    }

    const getDuration = () => {
      if (typeof interval === 'number') return interval
      return computeDuration(items[index] ?? '')
    }

    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % items.length)
    }, getDuration())

    return () => clearTimeout(id)
  }, [autoplay, interval, items, index])

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <div className={`text-carousel ${className}`}>
     <div className="carousel-viewport" ref={viewportRef} style={textHeight ? { height: `${textHeight}px` } : undefined}>
       <p className="carousel-text">{formatItem(items[index] ?? '')}</p>


       <div className="carousel-measurement" aria-hidden="true">
         {items.map((item, i) => (
           <p
             key={`${item}-${i}`}
             ref={(element) => {
               measureRefs.current[i] = element
             }}
             className="carousel-text"
           >
             {formatItem(item)}
           </p>
         ))}
       </div>
     </div>

             {showDots && (
        <div className="carousel-dots">
            {items.map((_, i) => (
            <button
                key={i}
                className={`dot-btn ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Ir para ${i + 1}`}
            />
            ))}
        </div>
        )}
        {showControls && (
            <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">‹</button>
            <span className="carousel-index">{index + 1}/{items.length}</span>
            <button className="carousel-btn next" onClick={next} aria-label="Próximo">›</button>
            </div>
        )}

    <style>{`
        .carousel {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.86);
          padding: 12px;
          border-radius: 12px;
          box-shadow: var(--shadow-ambient);
        }

        .carousel-slide {
          flex: 1 1 auto;
          padding: 8px 12px;
          min-height: 68px;
        }

        .carousel-index {
          display: block;
          font-size: 0.8rem;
          color: var(--color-on-surface-variant);
          text-align: center;
        }

        .carousel-text {
          font-size: 2rem;
          line-height: 1.5;
          color: var(--color-on-surface);
          margin: 0;
          text-align: center;
          font-weight: 600;
        }

        .carousel-viewport {
          position: relative;
          width: 100%;
          align-content: center;
        }

        .carousel-measurement {
          position: absolute;
          inset: 0;
          visibility: hidden;
          pointer-events: none;
          overflow: hidden;
        }

        .carousel-measurement .carousel-text {
          width: 100%;
        }

        .text-carousel {
            display: grid;
            grid-template-rows: 1fr auto auto;
            padding: 36px 28px;
            border-radius: 24px;
            border: 1px solid rgba(253, 235, 220, 0.7);
            background: var(--color-surface-container);
            cursor: default;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .carousel-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }

        .carousel-btn {
          background: transparent;
          border: none;
          font-size: 1.6rem;
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--color-secondary);
          cursor: pointer;
        }

        .carousel-dots {
          margin-top: 10px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .dot-btn {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(0,0,0,0.12);
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .dot-btn.active {
          background: var(--color-secondary);
        }    
    `}</style>
    </div>

  )
}
