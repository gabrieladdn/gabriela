export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
}

export interface ServicePageContent {
  slug: string;
  route: string;
  title: string;
  heroHighlight: string;
  heroCtaLabel: string;
  heroImage: {
    src: string;
    alt: string;
  };
  whyTitle: string;
  whyDescription: string;
  benefits: ServiceBenefit[];
  importanceTitle: string;
  importanceParagraphs: string[];
  importanceImages: Array<{
    src: string;
    alt: string;
  }>;
  processTitle: string;
  processParagraphs: string[];
  processCtaLabel: string;
  testimonialsTitle: string;
  testimonials: ServiceTestimonial[];
  footerCtaText: string;
  footerCtaLabel: string;
  seo: {
    title: string;
    description: string;
    image: string;
  };
}

export const servicePages: Record<string, ServicePageContent> = {
  "sofrimento-psiquico-instabilidade-emocional-e-vinculos": {
    slug: "sofrimento-psiquico-instabilidade-emocional-e-vinculos",
    route: "/servicos/sofrimento-psiquico-instabilidade-emocional-e-vinculos/",
    title: "Sofrimento Psíquico, Instabilidade Emocional e Vínculos",
    heroHighlight:
      "Um espaço acolhedor e sensível para compreender as dores profundas, a instabilidade emocional e construir relações mais saudáveis.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/sofrimento 1.jpg",
      alt: "Retrato de Gabriela Nunes - Sofrimento Psíquico e Vínculos",
    },
    whyTitle: "Por que olhar para a instabilidade emocional e os vínculos?",
    whyDescription:
      "O sofrimento psíquico intenso muitas vezes se manifesta em relações dolorosas, oscilações marcantes de humor e uma sensação persistente de vazio. Compreender essas dinâmicas é o primeiro passo para encontrar estabilidade.",
    benefits: [
      {
        title: "Compreender oscilações de humor",
        description:
          "Aprender a identificar os gatilhos e a intensidade das emoções para lidar com elas de forma menos dolorosa.",
      },
      {
        title: "Reconstruir vínculos afetivos",
        description:
          "Analisar a forma como você se relaciona para construir conexões mais seguras, superando o medo do abandono.",
      },
      {
        title: "Acolher o vazio interno",
        description:
          "Dar novos sentidos aos sentimentos de solidão e incompreensão que afetam seu cotidiano.",
      },
    ],
    importanceTitle: "A importância do cuidado emocional e da escuta psicanalítica",
    importanceParagraphs: [
      "Viver com emoções que parecem transbordar ou com o medo constante de ser abandonada(o) gera um desgaste profundo. Na escuta analítica, buscamos entender as raízes desses sentimentos e os padrões de relacionamento estabelecidos ao longo da sua história de vida.",
      "Dessa forma, a terapia se torna um ponto de apoio seguro para ressignificar traumas, fortalecer o self e desenvolver recursos internos para lidar com a dor emocional.",
    ],
    importanceImages: [
      {
        src: "/images/sofrimento2.jpg",
        alt: "Elementos no consultório representando acolhimento e estabilidade emocional",
      },
      {
        src: "/images/sofrimtn3.jpg",
        alt: "Espaço de escuta e reflexão sobre vínculos afetivos",
      },
    ],
    processTitle: "Como funciona o acompanhamento?",
    processParagraphs: [
      "As sessões ocorrem semanalmente de forma online, oferecendo um ambiente seguro e confidencial para falar livremente sobre suas vivências e angústias.",
      "Ao longo do processo, trabalhamos na construção de novos caminhos para lidar com crises de instabilidade e na promoção do bem-estar emocional.",
    ],
    processCtaLabel: "Entre em contato",
    testimonialsTitle: "Opiniões de pacientes",
    testimonials: [
      {
        quote:
          "Encontrei nas consultas um refúgio para falar dos meus maiores medos sem medo de julgamento. Minha relação comigo mesma mudou completamente.",
        author: "Mariana",
      },
      {
        quote: "A sensibilidade e a escuta atenta da Gabriela me ajudaram a passar por momentos de muita oscilação emocional.",
        author: "Patrícia",
      },
    ],
    footerCtaText: "Se você sente que precisa de um espaço seguro para falar da sua dor emocional, entre em contato.",
    footerCtaLabel: "Agende agora",
    seo: {
      title: "Sofrimento Psíquico e Instabilidade Emocional | Gabriela Nunes",
      description:
        "Psicoterapia online para lidar com sofrimento psíquico, instabilidade emocional, vazios e dificuldades de vínculo afetivo.",
      image: "/images/sofrimento 1.jpg",
    },
  },
  "ansiedade-e-psicossomatica": {
    slug: "ansiedade-e-psicossomatica",
    route: "/servicos/ansiedade-e-psicossomatica/",
    title: "Ansiedade e Psicossomática",
    heroHighlight:
      "Encontre caminhos para desacelerar a mente, compreender os sinais do seu corpo e aliviar o peso da ansiedade.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/ansiedade1.jpg",
      alt: "Retrato de Gabriela Nunes - Ansiedade e Psicossomática",
    },
    whyTitle: "Como a ansiedade e o corpo se conectam?",
    whyDescription:
      "A ansiedade persistente e a exaustão emocional não afetam apenas os pensamentos, mas também se manifestam no corpo em forma de tensões, dores e outros sintomas físicos que são difíceis de explicar.",
    benefits: [
      {
        title: "Desacelerar a mente",
        description:
          "Aprender a reconhecer pensamentos intrusivos e a lidar com o estado de alerta constante de forma mais gentil.",
      },
      {
        title: "Escutar os sinais corporais",
        description:
          "Compreender a relação entre o sofrimento emocional e os sintomas que o corpo manifesta fisicamente.",
      },
      {
        title: "Resgatar o descanso real",
        description:
          "Construir estratégias para aliviar o peso da autocrítica e permitir-se pausas reais em meio à rotina.",
      },
    ],
    importanceTitle: "Por que tratar a ansiedade além dos sintomas superficiais?",
    importanceParagraphs: [
      "A ansiedade e os sintomas psicossomáticos funcionam como mensageiros de conflitos internos e angústias que muitas vezes não conseguimos expressar em palavras. Tratá-los envolve olhar para a sua história e para o que o seu corpo está tentando comunicar.",
      "Na análise, criamos espaço para falar dessas tensões, permitindo que você compreenda as causas reais do alerta constante e encontre novas formas de viver com mais leveza.",
    ],
    importanceImages: [
      {
        src: "/images/ansiedade2.jpg",
        alt: "Detalhe do consultório representando pausa e respiração em momentos de ansiedade",
      },
      {
        src: "/images/ansiedade3.jpg",
        alt: "Ambiente tranquilo e acolhedor para acalmar a mente e o corpo",
      },
    ],
    processTitle: "Como funciona o atendimento?",
    processParagraphs: [
      "O atendimento é realizado em sessões semanais e online. Focamos em criar um espaço de acolhimento para que você possa colocar suas angústias em palavras.",
      "Aos poucos, buscamos desatar os nós que geram a exaustão, proporcionando alívio tanto para a mente quanto para o corpo.",
    ],
    processCtaLabel: "Entre em contato",
    testimonialsTitle: "Opiniões de pacientes",
    testimonials: [
      {
        quote:
          "As dores físicas que eu sentia no peito e nas costas começaram a diminuir à medida que eu falava das minhas angústias nas sessões. Incrível profissional.",
        author: "Juliana",
      },
      {
        quote: "O acolhimento e a competência da Gabriela me ajudaram a sair de um ciclo constante de exaustão emocional.",
        author: "Ricardo",
      },
    ],
    footerCtaText: "Dê o primeiro passo para aliviar o peso da ansiedade e cuidar do seu corpo.",
    footerCtaLabel: "Agende agora",
    seo: {
      title: "Ansiedade e Psicossomática | Gabriela Nunes",
      description:
        "Tratamento psicoterapêutico online focado em ansiedade, sintomas psicossomáticos, exaustão emocional e estresse persistente.",
      image: "/images/ansiedade1.jpg",
    },
  },
  "autoestima-autoimagem-e-autocritica": {
    slug: "autoestima-autoimagem-e-autocritica",
    route: "/servicos/autoestima-autoimagem-e-autocritica/",
    title: "Autoestima, Autoimagem e Autocrítica",
    heroHighlight:
      "Aprenda a lidar com a autocrítica severa, liberte-se da necessidade constante de aprovação e fortaleça sua autoestima.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/autoestima1.jpg",
      alt: "Retrato de Gabriela Nunes - Autoestima, Autoimagem e Autocrítica",
    },
    whyTitle: "Como a autocrítica afeta nossa percepção?",
    whyDescription:
      "A busca pelo perfeccionismo e a vergonha constante impedem que você enxergue o seu próprio valor, gerando uma dependência emocional da validação externa para se sentir suficiente.",
    benefits: [
      {
        title: "Reduzir a voz crítica interna",
        description:
          "Desenvolver uma relação mais compassiva e menos punitiva consigo mesma no dia a dia.",
      },
      {
        title: "Superar o perfeccionismo",
        description:
          "Compreender que o erro e a imperfeição fazem parte da vida, diminuindo a cobrança paralisante.",
      },
      {
        title: "Reconhecer seu valor interno",
        description:
          "Aprender a validar suas próprias conquistas e desejos sem depender exclusivamente do olhar do outro.",
      },
    ],
    importanceTitle: "A desconstrução da autocrítica na jornada terapêutica",
    importanceParagraphs: [
      "A baixa autoestima e a insatisfação com a própria imagem geralmente estão ligadas a padrões de exigência muito altos, construídos ao longo da vida. A autocrítica severa atua como uma barreira que nos afasta de quem realmente somos.",
      "O processo psicoterapêutico busca investigar as origens dessas cobranças desmedidas, oferecendo suporte para você construir uma relação de maior aceitação e segurança consigo mesma(o).",
    ],
    importanceImages: [
      {
        src: "/images/autoestima2.jpg",
        alt: "Espaço de reflexão sobre autoestima e autoimagem",
      },
      {
        src: "/images/autoestima3.jpg",
        alt: "Ambiente do consultório promovendo bem-estar e autoconhecimento",
      },
    ],
    processTitle: "Como funciona o processo?",
    processParagraphs: [
      "Por meio de sessões online semanais, você terá um espaço reservado e seguro para explorar suas inseguranças e vulnerabilidades.",
      "Trabalhamos de forma sensível para desconstruir a necessidade constante de validação e fortalecer a autoconfiança no seu próprio ritmo.",
    ],
    processCtaLabel: "Entre em contato",
    testimonialsTitle: "Opiniões de pacientes",
    testimonials: [
      {
        quote:
          "Eu vivia me cobrando e me sentindo inadequada em tudo. Com a psicoterapia, consegui ser mais gentil comigo e aceitar minhas imperfeições.",
        author: "Beatriz",
      },
      {
        quote: "Gabriela me ajudou a entender de onde vinha tanta vergonha e cobrança. Recomendo muito o trabalho dela.",
        author: "Fernanda",
      },
    ],
    footerCtaText: "Se você deseja construir uma relação mais harmoniosa e acolhedora consigo mesma(o), agende uma consulta.",
    footerCtaLabel: "Agende agora",
    seo: {
      title: "Autoestima, Autoimagem e Autocrítica | Gabriela Nunes",
      description:
        "Psicoterapia para combater a autocrítica severa, o perfeccionismo e fortalecer a autoestima e autoimagem de forma saudável.",
      image: "/images/autoestima1.jpg",
    },
  },
  "avaliacao-cirurgia-bariatrica": {
    slug: "avaliacao-cirurgia-bariatrica",
    route: "/avaliacao-cirurgia-bariatrica/",
    title: "Avaliação e Preparo para Cirurgia Bariátrica",
    heroHighlight:
      "Nessa nova fase de sua vida, uma avaliação com profissionalismo e segurança é essencial para o processo.",
    heroCtaLabel: "Agende agora",
    heroImage: {
      src: "/images/corpo1.jpg",
      alt: "Retrato de Gabriela Nunes para a página de avaliação bariátrica",
    },
    whyTitle: "Por que a avaliação é tão importante?",
    whyDescription:
      "Como psicóloga que atua com transtornos e comportamento alimentar, com empatia e comprometimento, proporciono uma avaliação completa, para melhor autoconhecimento em conjunto com manejos para que você esteja melhor preparada(o) para esse novo ciclo.",
    benefits: [
      {
        title: "Identificar questões emocionais",
        description:
          "Reconhecer fatores emocionais que podem influenciar no comportamento alimentar é essencial para o sucesso do processo.",
      },
      {
        title: "Expectativas realistas e fatores de sucesso",
        description:
          "Estabelecer metas realistas e identificar fatores que podem impactar no sucesso após a cirurgia são passos importantes.",
      },
      {
        title: "Preparo emocional",
        description: "Garantir um melhor preparo emocional para enfrentar as mudanças dessa etapa.",
      },
    ],
    importanceTitle: "A importância da avaliação",
    importanceParagraphs: [
      "A avaliação para a cirurgia vai muito além de um laudo. Além de uma etapa obrigatória, é uma oportunidade de autoconhecimento e preparo para os desafios que podem surgir posteriormente. Você terá uma melhor compreensão de como lida com as emoções, como ansiedade e compulsão alimentar, aspectos de sua personalidade, questões inconscientes que influenciam a forma que você lida consigo mesmo(a) e com o mundo, bem como alinhar expectativas para o procedimento.",
      "A avaliação, portanto, ajudará em possíveis desafios, com ajustes de comportamento para um novo estilo de vida com maior sucesso.",
    ],
    importanceImages: [
      {
        src: "/images/corpo2.jpg",
        alt: "Pessoa meditando representando autoconhecimento no preparo bariátrico",
      },
      {
        src: "/images/corpo3.jpg",
        alt: "Momento de conversa e escuta no processo terapêutico de preparo para cirurgia",
      },
    ],
    processTitle: "Como funciona a avaliação?",
    processParagraphs: [
      "O processo de avaliação inclui entrevista clínica, escalas para entendimento de perfil emocional e identificação de possíveis transtornos como depressão e ansiedade, para garantir melhor preparo emocional.",
      "Durante o processo, você também recebe orientações sobre as mudanças de estilo de vida e no comportamento alimentar que serão necessárias após a cirurgia.",
      "A avaliação e o preparo são feitos de forma online, via Google Meet, garantindo segurança e rapidez no processo.",
    ],
    processCtaLabel: "Entre em contato",
    testimonialsTitle: "Opiniões de pacientes",
    testimonials: [
      {
        quote:
          "Muito boa profissional, tem uma escuta sem julgamentos e com suas avaliações te leva a refletir de maneira mais clara.",
        author: "Elisângela",
      },
      {
        quote: "Gosto bastante das sessões com a Gabriela, ótima profissional!",
        author: "Camila",
      },
      {
        quote: "Me senti muito acolhido na consulta. Gostei muito.",
        author: "Gabriel",
      },
    ],
    footerCtaText: "Para informações e agendamento, entre em contato.",
    footerCtaLabel: "Agende agora",
    seo: {
      title: "Avaliação e Preparo para Cirurgia Bariátrica | Gabriela Nunes",
      description:
        "Avaliação psicológica e preparo emocional para cirurgia bariátrica com atendimento online. Processo com escuta qualificada, orientação e segurança.",
      image: "/images/corpo1.jpg",
    },
  },
};
