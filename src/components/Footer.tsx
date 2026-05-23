import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t py-10" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
      <div className="max-w-6xl mx-auto px-6 text-sm text-[color:var(--color-text)]">
        <p>© {new Date().getFullYear()} Gabriela Nunes — Psicologia</p>
        <p className="mt-2">
          Contato:{' '}
          <a href="mailto:contato@gabrielanunes.com.br" className="underline">
            contato@gabrielanunes.com.br
          </a>
        </p>
      </div>
    </footer>
  );
}
