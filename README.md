# Gabriela Nunes — Site Clínico

Site profissional de psicoterapia construído com **Next.js 15** e **MDX local**, com design editorial minimalista e blog alimentado por arquivos em `content/posts`.

---

## Stack

| Camada              | Tecnologia                                |
| ------------------- | ----------------------------------------- |
| Framework           | Next.js 15 (App Router)                   |
| Conteúdo            | MDX local (`content/posts`)               |
| Editor de rich text | MDX                                       |
| Estilização         | CSS Variables + inline styles             |
| Fontes              | Playfair Display + Manrope (Google Fonts) |
| Deploy              | Vercel                                    |

---

## Estrutura do projeto

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx           # Listagem de artigos + filtro por categoria
│   │   └── [slug]/page.tsx    # Artigo individual
│   ├── layout.tsx             # Layout global (Navbar + Footer + fontes)
│   └── page.tsx               # Home page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Header sticky com menu mobile e active section
│   │   └── Footer.tsx         # Footer com links e redes sociais
│   ├── sections/              # Seções da home page
│   │   ├── HeroSection.tsx
│   │   ├── IdentificationSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PsychoanalysisSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   ├── blog/
│   │   └── BlogCard.tsx       # Card de artigo com imagem, categoria, meta
│   └── ui/
│       └── Reveal.tsx         # Animação de scroll reveal (IntersectionObserver)
│
├── lib/
│   ├── posts.ts               # Leitura de MDX e metadados do blog
│   └── useScrollReveal.ts     # Hook alternativo de scroll reveal
├── styles/
│   └── globals.css            # Design tokens, reset, tipografia, prose
└── content/
    └── posts/                 # Artigos do blog em MDX
```

---

## Início rápido

### 1. Pré-requisitos

- Node.js ≥ 20.9

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

- Site: http://localhost:3000

---

## Publicar artigos

O blog é atualizado por arquivos MDX em `content/posts`.

### Criar um novo artigo

1. Adicione um arquivo `content/posts/seu-artigo.mdx`
2. Inclua frontmatter com `title`, `excerpt`, `category`, `publishedAt` e `readingTime`
3. Escreva o conteúdo em MDX
4. Salve o arquivo — o dev server recompila automaticamente

### Exemplo de frontmatter

```mdx
---
title: "O que é autocobrança"
excerpt: "Entenda como a autocobrança aparece no seu dia a dia e como começar a transformar essa voz interna."
category: "autoconhecimento"
publishedAt: "2025-09-12"
readingTime: 5
---

Seu conteúdo aqui...
```

---

## Conteúdo local e blog

O frontend lê os arquivos em `content/posts` usando `src/lib/posts.ts` e renderiza os artigos com `next-mdx-remote`.

---

## Design System

Todas as cores, tipografia e espaçamentos estão como CSS variables em `src/styles/globals.css`.

| Token                   | Valor                               |
| ----------------------- | ----------------------------------- |
| `--color-secondary`     | `#8f4b42` (terracota — CTA, ênfase) |
| `--color-background`    | `#fff8f4` (fundo principal)         |
| `--font-display`        | Playfair Display (títulos)          |
| `--font-body`           | Manrope (corpo)                     |
| `--section-gap-desktop` | `120px`                             |
| `--container-max`       | `1200px`                            |

---

## Deploy (Vercel)

1. Configure `NEXT_PUBLIC_SERVER_URL` no Vercel
2. Faça push para a branch principal — o Vercel faz deploy automático

---

## Checklist antes do go-live

- [ ] Definir variável de ambiente `NEXT_PUBLIC_WHATSAPP_PHONE` (ex: `5513982007343`)
- [ ] Substituir `@gabriela.psic` pelo @ real do Instagram
- [ ] Substituir `contato@gabrielanunes.com.br` pelo e-mail real
- [ ] Preencher CRP real no footer e nas páginas
- [ ] Adicionar foto real da Gabriela nas seções Hero e Sobre
- [ ] Publicar primeiros artigos em `content/posts`
- [ ] Configurar domínio `gabrielanunes.com.br` no Vercel
