export type ListeningArea = {
  slug: string
  title: string
  shortDescription: string
  content: string
  faq: Array<{ question: string; answer: string }>
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  faq: Array<{ question: string; answer: string }>
  relatedAreas: string[]
}

export const listeningAreas: ListeningArea[] = [
  {
    slug: 'compulsao-alimentar',
    title: 'Compulsão alimentar',
    shortDescription: 'Um espaço de escuta para retomar a relação com a comida e com o corpo.',
    content:
      'Trabalhamos gatilhos emocionais, fome emocional, culpa e padrões repetitivos com foco em autonomia e acolhimento.',
    faq: [
      {
        question: 'A terapia ajuda mesmo na compulsão alimentar?',
        answer:
          'Sim. A terapia ajuda a entender gatilhos, padrões emocionais e estratégias para reduzir episódios com mais segurança.',
      },
    ],
  },
  {
    slug: 'cirurgia-bariatrica',
    title: 'Cirurgia bariátrica',
    shortDescription: 'Acompanhamento psicológico antes e depois da cirurgia.',
    content:
      'Apoio para adaptação, expectativas, imagem corporal, rotina alimentar e suporte emocional no pré e pós-operatório.',
    faq: [
      {
        question: 'O acompanhamento é importante antes da bariátrica?',
        answer:
          'Sim. Ele ajuda na preparação emocional, na adesão ao tratamento e na organização das mudanças que vêm com a cirurgia.',
      },
    ],
  },
  {
    slug: 'ansiedade',
    title: 'Ansiedade',
    shortDescription: 'Cuidado para ansiedade excessiva, sobrecarga e antecipação constante.',
    content:
      'A terapia trabalha regulação emocional, sinais corporais e formas mais sustentáveis de lidar com preocupação e tensão.',
    faq: [
      {
        question: 'Quando a ansiedade precisa de atenção?',
        answer:
          'Quando interfere em sono, trabalho, relações, alimentação ou no bem-estar de forma recorrente.',
      },
    ],
  },
  {
    slug: 'autoestima',
    title: 'Autoestima',
    shortDescription: 'Construção de uma relação interna mais estável e gentil.',
    content:
      'Acompanhamento para autocrítica, comparação, insegurança e dificuldade de reconhecer valor próprio.',
    faq: [],
  },
  {
    slug: 'relacionamentos',
    title: 'Relacionamentos',
    shortDescription: 'Escuta para vínculos afetivos, limites e conflitos.',
    content:
      'Trabalhamos comunicação, limites, repetição de padrões e sofrimento em relações familiares e amorosas.',
    faq: [],
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'compulsao-alimentar-o-que-fazer',
    title: 'Compulsão alimentar: por onde começar?',
    excerpt: 'Uma resposta curta e prática para quem quer iniciar cuidado psicológico.',
    content:
      'Acompanha a estrutura sugerida nos MDs: resposta curta, contextualização, aprofundamento, sinais de atenção, FAQ e CTA leve.',
    faq: [
      {
        question: 'A compulsão alimentar é falta de força de vontade?',
        answer: 'Não. Ela costuma envolver fatores emocionais, contextuais e aprendizados de regulação.',
      },
    ],
    relatedAreas: ['compulsao-alimentar', 'cirurgia-bariatrica'],
  },
  {
    slug: 'ansiedade-e-corpo',
    title: 'Como a ansiedade aparece no corpo?',
    excerpt: 'Sinais físicos e emocionais que merecem atenção.',
    content: 'Texto base para artigo com FAQ, schema e links internos.',
    faq: [],
    relatedAreas: ['ansiedade'],
  },
]

export const blogFaq = [
  {
    question: 'O blog vai ajudar no SEO?',
    answer:
      'Sim. A estrutura pensada para resposta curta, contexto, FAQ e links internos melhora busca e descoberta por IA.',
  },
]
