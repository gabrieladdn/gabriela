export interface ServiceBenefit {
  title: string
  description: string
}

export interface ServiceTestimonial {
  quote: string
  author: string
}

export interface ServicePageContent {
  slug: string
  route: string
  title: string
  heroHighlight: string
  heroCtaLabel: string
  heroImage: {
    src: string
    alt: string
  }
  whyTitle: string
  whyDescription: string
  benefits: ServiceBenefit[]
  importanceTitle: string
  importanceParagraphs: string[]
  importanceImages: Array<{
    src: string
    alt: string
  }>
  processTitle: string
  processParagraphs: string[]
  processCtaLabel: string
  testimonialsTitle: string
  testimonials: ServiceTestimonial[]
  footerCtaText: string
  footerCtaLabel: string
  seo: {
    title: string
    description: string
    image: string
  }
}

export const servicePages: Record<string, ServicePageContent> = {
  'avaliacao-cirurgia-bariatrica': {
    slug: 'avaliacao-cirurgia-bariatrica',
    route: '/avaliacao-cirurgia-bariatrica/',
    title: 'Avaliação e Preparo para Cirurgia Bariátrica',
    heroHighlight:
      'Nessa nova fase de sua vida, uma avaliação com profissionalismo e segurança é essencial para o processo.',
    heroCtaLabel: 'Agende agora',
    heroImage: {
      src: '/images/services/bariatrica/hero.jpg',
      alt: 'Retrato de Gabriela Nunes para a página de avaliação bariátrica',
    },
    whyTitle: 'Por que a avaliação é tão importante?',
    whyDescription:
      'Como psicóloga que atua com transtornos e comportamento alimentar, com empatia e comprometimento, proporciono uma avaliação completa, para melhor autoconhecimento em conjunto com manejos para que você esteja melhor preparada(o) para esse novo ciclo.',
    benefits: [
      {
        title: 'Identificar questões emocionais',
        description:
          'Reconhecer fatores emocionais que podem influenciar no comportamento alimentar é essencial para o sucesso do processo.',
      },
      {
        title: 'Expectativas realistas e fatores de sucesso',
        description:
          'Estabelecer metas realistas e identificar fatores que podem impactar no sucesso após a cirurgia são passos importantes.',
      },
      {
        title: 'Preparo emocional',
        description: 'Garantir um melhor preparo emocional para enfrentar as mudanças dessa etapa.',
      },
    ],
    importanceTitle: 'A importância da avaliação',
    importanceParagraphs: [
      'A avaliação para a cirurgia vai muito além de um laudo. Além de uma etapa obrigatória, é uma oportunidade de autoconhecimento e preparo para os desafios que podem surgir posteriormente. Você terá uma melhor compreensão de como lida com as emoções, como ansiedade e compulsão alimentar, aspectos de sua personalidade, questões inconscientes que influenciam a forma que você lida consigo mesmo(a) e com o mundo, bem como alinhar expectativas para o procedimento.',
      'A avaliação, portanto, ajudará em possíveis desafios, com ajustes de comportamento para um novo estilo de vida com maior sucesso.',
    ],
    importanceImages: [
      {
        src: '/images/services/bariatrica/importancia.jpg',
        alt: 'Pessoa meditando representando autoconhecimento no preparo bariátrico',
      },
      {
        src: '/images/services/bariatrica/como-funciona.jpg',
        alt: 'Momento de conversa e escuta no processo terapêutico de preparo para cirurgia',
      },
    ],
    processTitle: 'Como funciona a avaliação?',
    processParagraphs: [
      'O processo de avaliação inclui entrevista clínica, escalas para entendimento de perfil emocional e identificação de possíveis transtornos como depressão e ansiedade, para garantir melhor preparo emocional.',
      'Durante o processo, você também recebe orientações sobre as mudanças de estilo de vida e no comportamento alimentar que serão necessárias após a cirurgia.',
      'A avaliação e o preparo são feitos de forma online, via Google Meet, garantindo segurança e rapidez no processo.',
    ],
    processCtaLabel: 'Entre em contato',
    testimonialsTitle: 'Opiniões de pacientes',
    testimonials: [
      {
        quote:
          'Muito boa profissional, tem uma escuta sem julgamentos e com suas avaliações te leva a refletir de maneira mais clara.',
        author: 'Elisângela',
      },
      {
        quote: 'Gosto bastante das sessões com a Gabriela, ótima profissional!',
        author: 'Camila',
      },
      {
        quote: 'Me senti muito acolhido na consulta. Gostei muito.',
        author: 'Gabriel',
      },
    ],
    footerCtaText: 'Para informações e agendamento, entre em contato.',
    footerCtaLabel: 'Agende agora',
    seo: {
      title: 'Avaliação e Preparo para Cirurgia Bariátrica | Gabriela Nunes',
      description:
        'Avaliação psicológica e preparo emocional para cirurgia bariátrica com atendimento online. Processo com escuta qualificada, orientação e segurança.',
      image: '/images/services/bariatrica/hero.jpg',
    },
  },
}
