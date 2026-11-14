# Gabriela Nunes — Site Clínico

Site profissional de psicoterapia construído com **Astro 5** (`output: "static"` + `@astrojs/mdx`), com design editorial minimalista, imagens otimizadas em build e blog alimentado por arquivos MDX em `content/posts`.

---

## Stack

| Camada      | Tecnologia                                        |
| ----------- | ------------------------------------------------- |
| Framework   | Astro 5 (SSG estático)                            |
| Conteúdo    | Astro Content Collections + MDX (`content/posts`) |
| Estilização | CSS Variables + estilos escopados Astro           |
| Fontes      | Playfair Display + Manrope (`@fontsource`)        |
| Imagens     | `astro:assets` + `sharp` (WebP responsivo)        |
| Deploy      | Netlify (site estático em `dist/`)                |

---

## Estrutura do projeto

```text
content/
└── posts/                     # Artigos do blog em MDX

src/
├── assets/
│   └── images/                # Imagens otimizadas em build via astro:assets
├── components/
│   ├── blog/                  # BlogCard e BlogFilterBar
│   ├── layout/                # Navbar e Footer
│   ├── sections/              # Seções da home page
│   ├── services/              # Template das páginas de serviço
│   └── ui/                    # Reveal, HoverLink, TextCarousel, DynamicTestimonials
├── content/                   # Textos institucionais, serviços e depoimentos
├── content.config.ts          # Schema Zod da coleção de posts MDX
├── layouts/
│   └── BaseLayout.astro       # Layout global, SEO, JSON-LD, fontes e tracking
├── lib/                       # Helpers de imagens, posts, SEO e WhatsApp
├── pages/
│   ├── blog/                  # Listagem (/blog) e artigos (/blog/[slug])
│   ├── servicos/              # Páginas dinâmicas (/servicos/[slug])
│   ├── avaliacao-cirurgia-bariatrica.astro
│   ├── faq.astro
│   ├── index.astro
│   ├── privacidade.astro
│   ├── sobre-mim.astro
│   └── termos.astro
└── styles/
    └── globals.css            # Design tokens, reset, tipografia, prose
```

---

## Início rápido

### 1. Pré-requisitos

- Node.js ≥ 20.9
- `pnpm`

### 2. Instalar dependências

```bash
pnpm install
```

### 3. Rodar em desenvolvimento

```bash
pnpm run dev
```

- Site: http://localhost:4321

### 4. Comandos de verificação e build

```bash
pnpm run check    # Type-check do Astro e TypeScript (astro check)
pnpm run lint     # Verificação ESLint (TS + Astro)
pnpm run format   # Verificação de formatação com Prettier
pnpm run build    # Type-check + build estático de produção (dist/)
pnpm run preview  # Pré-visualização local do build
```

---

## Publicar artigos

O blog é atualizado por arquivos MDX em `content/posts` e validado pelo schema em `src/content.config.ts`.

### Criar um novo artigo

1. Adicione um arquivo `content/posts/seu-artigo.mdx`
2. Inclua frontmatter com `title`, `excerpt`, `category`, `publishedAt` e `readingTime` (e `coverImage` opcional)
3. Escreva o conteúdo em MDX
4. Salve o arquivo — o dev server recompila automaticamente

### Exemplo de frontmatter

```mdx
---
title: "O que é autocobrança"
excerpt: "Entenda como a autocobrança aparece no seu dia a dia e como começar a transformar essa voz interna."
category: autoconhecimento
publishedAt: 2025-09-12
readingTime: 5
---

Seu conteúdo aqui...
```

Categorias válidas: `psicanalise`, `autoestima`, `ansiedade`, `imagem-corporal`, `relacionamentos`, `autoconhecimento`, `saude-mental`.

---

## Variáveis de ambiente

Copie `.env.example` para `.env` e configure conforme necessário:

- `PUBLIC_SERVER_URL`: URL canônica do site (padrão `https://gabrielanunes.com.br`)
- `PUBLIC_WHATSAPP_PHONE`: número do WhatsApp com DDI/DDD apenas com dígitos
- `PUBLIC_WHATSAPP_URL`: override opcional da URL completa do WhatsApp
- `PUBLIC_GA_ID`: ID do Google Analytics (opcional)

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

## Deploy (Netlify)

1. Configure `PUBLIC_SERVER_URL` e `PUBLIC_WHATSAPP_PHONE` nas variáveis de ambiente do Netlify
2. No painel do Netlify (**Site configuration → Build & deploy**), garanta que o **Publish directory** seja `dist` e que o runtime/plugin legado do Next.js (`@netlify/plugin-nextjs`) esteja desativado (`netlify.toml` define `command = "pnpm run build"` e `publish = "dist"`)
3. Faça push ou PR para a branch `main` — o Netlify gera e publica os arquivos estáticos em `dist/` automaticamente
