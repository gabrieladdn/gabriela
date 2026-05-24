# Gabriela Nunes — Site Clínico

Site profissional de psicoterapia construído com **Next.js 15** + **Payload CMS 3** (headless), com design editorial minimalista e sistema de blog gerenciável.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| CMS | Payload CMS 3 (self-hosted) |
| Banco de dados | MongoDB |
| Editor de rich text | Lexical |
| Estilização | CSS Variables + inline styles |
| Fontes | Playfair Display + Manrope (Google Fonts) |
| Deploy | Vercel + MongoDB Atlas |

---

## Estrutura do projeto

```
src/
├── app/
│   ├── (payload)/             # Rotas do Payload CMS (admin + API)
│   │   ├── admin/[[...segments]]/
│   │   └── api/[[...segments]]/
│   ├── blog/
│   │   ├── page.tsx           # Listagem de artigos + filtro por categoria
│   │   └── [slug]/page.tsx    # Artigo individual
│   ├── layout.tsx             # Layout global (Navbar + Footer + fontes)
│   └── page.tsx               # Home page
│
├── collections/               # Schemas do Payload CMS
│   ├── Posts.ts               # Artigos do blog (rich text, SEO, draft/publish)
│   ├── Testimonials.ts        # Depoimentos de pacientes
│   ├── Media.ts               # Upload de imagens (com resize automático)
│   └── Users.ts               # Usuários admin
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
│   └── useScrollReveal.ts     # Hook alternativo de scroll reveal
├── styles/
│   └── globals.css            # Design tokens, reset, tipografia, prose
└── payload.config.ts          # Configuração do Payload CMS
```

---

## Início rápido

### 1. Pré-requisitos

- Node.js ≥ 20.9
- MongoDB rodando localmente ou URI do Atlas

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite `.env.local`:

```env
DATABASE_URI=mongodb://localhost:27017/gabriela-nunes
PAYLOAD_SECRET=gere-um-segredo-forte-aqui
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

> Para gerar um segredo seguro: `openssl rand -base64 32`

### 4. Rodar em desenvolvimento

```bash
npm run dev
```

- Site: http://localhost:3000
- Admin CMS: http://localhost:3000/admin

Na primeira vez que acessar `/admin`, crie o usuário administrador.

---

## CMS — Como usar

### Publicar artigos

1. Acesse `/admin` → **Posts**
2. Clique em **Create New**
3. Preencha: título, slug (gerado automaticamente), resumo, imagem de capa, categoria, conteúdo (rich text)
4. Mude o **Status** para `Publicado`
5. Salve — o artigo aparece em `/blog`

### Gerenciar depoimentos

1. Acesse `/admin` → **Testimonials**
2. Adicione ou edite depoimentos
3. Marque **Exibir no site** para ativar

### Uploads de imagens

O Payload gera automaticamente 3 tamanhos ao fazer upload:
- `thumbnail` — 400×300 (listagem)
- `card` — 768×512 (cards do blog)
- `hero` — 1200×800 (capa do artigo)

---

## Conectando o CMS ao frontend

Os componentes estão prontos para receber dados do Payload. Para ativar, substitua os dados placeholder:

**Em `src/app/page.tsx`:**
```tsx
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
const { docs: testimonials } = await payload.find({
  collection: 'testimonials',
  where: { active: { equals: true } },
  sort: 'order',
})
```

**Em `src/app/blog/page.tsx`:**
```tsx
const { docs: posts } = await payload.find({
  collection: 'posts',
  where: { status: { equals: 'published' } },
  sort: '-publishedAt',
})
```

---

## Design System

Todas as cores, tipografia e espaçamentos estão como CSS variables em `src/styles/globals.css`.

| Token | Valor |
|---|---|
| `--color-secondary` | `#8f4b42` (terracota — CTA, ênfase) |
| `--color-background` | `#fff8f4` (fundo principal) |
| `--font-display` | Playfair Display (títulos) |
| `--font-body` | Manrope (corpo) |
| `--section-gap-desktop` | `120px` |
| `--container-max` | `1200px` |

---

## Deploy (Vercel + MongoDB Atlas)

1. Crie um cluster no [MongoDB Atlas](https://cloud.mongodb.com)
2. No Vercel, adicione as variáveis de ambiente:
   - `DATABASE_URI` — connection string do Atlas
   - `PAYLOAD_SECRET` — segredo gerado
   - `NEXT_PUBLIC_SERVER_URL` — URL do site em produção
3. Faça push para a branch principal — o Vercel faz deploy automático

---

## Checklist antes do go-live

- [ ] Substituir `https://wa.me/5500000000000` pelo número real da Gabriela
- [ ] Substituir `@gabriela.psic` pelo @ real do Instagram
- [ ] Substituir `contato@gabrielanunes.com.br` pelo e-mail real
- [ ] Preencher CRP real no footer e nas páginas
- [ ] Adicionar foto real da Gabriela nas seções Hero e Sobre
- [ ] Publicar primeiros artigos no CMS
- [ ] Configurar domínio `gabrielanunes.com.br` no Vercel
- [ ] Criar usuário admin em produção via `/admin`
- [ ] Configurar MongoDB Atlas com IP whitelist + usuário dedicado
