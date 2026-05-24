'use client'

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  delay?: number
  style?: CSSProperties
  className?: string
  as?: any // polymorphic tag support
}

export function Reveal({ children, delay = 0, style, className, as: Tag = 'div', ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal
      data-reveal-delay={delay || undefined}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}
