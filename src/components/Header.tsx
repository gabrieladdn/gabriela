"use client"

import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="bg-[color:var(--color-bg)] border-b sticky top-0 z-40"
      style={{ borderColor: 'rgba(0,0,0,0.04)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="serif-heading text-xl text-[color:var(--color-text)]">Gabriela Nunes</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-md text-[color:var(--color-text)]"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm text-[color:var(--color-text)]">
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/areas-de-escuta">Áreas</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contato" className="px-3 py-1 rounded bg-[color:var(--color-accent)] text-white">
                WhatsApp
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-[color:var(--color-bg)] border-t"
          style={{ borderColor: 'rgba(0,0,0,0.04)' }}
        >
          <div className="px-6 py-4 space-y-3">
            <Link href="/sobre" onClick={() => setOpen(false)}>
              Sobre
            </Link>
            <Link href="/areas-de-escuta">
              Áreas
            </Link>
            <Link href="/blog">
              Blog
            </Link>
            <Link href="/contato" className="inline-block mt-2 px-3 py-2 rounded bg-[color:var(--color-accent)] text-white" onClick={() => setOpen(false)}>
              WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
