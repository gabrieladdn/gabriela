# 00-project-context

## Objetivo do projeto

Refazer o site institucional atual de psicologia usando Payload CMS v3 + Next.js App Router + TypeScript.

O novo site deve:

- transmitir acolhimento, autoridade e profissionalismo;
- ter visual premium minimalista;
- ser facilmente editável pela área administrativa;
- ser altamente otimizado para SEO e descoberta por IA (Google AI Overviews, ChatGPT, Perplexity, Gemini);
- ser facilmente escalável.

## Stack obrigatória

- Next.js App Router
- TypeScript
- Payload CMS v3
- MongoDB Atlas Free
- Tailwind CSS
- Componentes próprios (sem UI library pesada)
- Uso pontual de shadcn/ui apenas quando realmente necessário
- Lexical Editor
- Deploy Vercel

## Restrições obrigatórias

NÃO utilizar:

- Redux
- Zustand
- CSS-in-JS
- jQuery
- Bootstrap
- Material UI
- Chakra UI
- styled-components
- abstrações enterprise desnecessárias
- dependências com vulnerabilidades críticas

PREFERIR:

- Server Components
- composição
- feature-first architecture
- co-location
- Zod
- tipagem forte
- Server Actions apenas quando fizer sentido
