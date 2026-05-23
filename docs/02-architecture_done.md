# 02-architecture

## Estrutura obrigatória

```
src/
├── app/
│   ├── (site)/
│   │   ├── page.tsx
│   │   ├── sobre/
│   │   ├── blog/
│   │   ├── contato/
│   │   └── areas-de-escuta/
│   ├── api/
│   └── admin/
│
+├── features/
│   ├── home/
│   ├── blog/
│   ├── listening-areas/
│   ├── about/
│   └── shared/
│
├── components/
│   ├── ui/
   ├── common/
   ├── sections/
   └── layout/

├── payload/
│   ├── collections/
│   ├── globals/
│   ├── fields/
│   └── blocks/
│
├── lib/
├── services/
├── config/
├── styles/
└── analytics/
```

## Convenções

- feature-first
- componentes pequenos
- sem arquivos > 250 linhas
- evitar props drilling excessivo
- co-location por feature
