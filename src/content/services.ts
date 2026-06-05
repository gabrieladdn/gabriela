export interface ServiceBenefit {
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
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
    title: "Quando as emoções parecem difíceis de sustentar e compreender",
    heroHighlight:
      "Em alguns momentos, as emoções podem parecer intensas e difíceis de sustentar, impactando os vínculos e a relação consigo mesma. A psicoterapia oferece um espaço para compreender esses movimentos com mais cuidado e profundidade.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/sofrimento 1.jpg",
      alt: "Retrato de Gabriela Nunes - Sofrimento Psíquico e Vínculos",
    },
    whyTitle: "Por que olhar para a instabilidade emocional e os vínculos?",
    whyDescription:
      "O sofrimento emocional pode aparecer inibindo os vínculos em forma de oscilações de humor, crises recorrentes, dificuldades nos vínculos, medo de abandono e sensação de vazio. A compreensão desses movimentos pode abrir espaço para formas mais estáveis e cuidadosas de se relacionar consigo mesma e com a própria história.",
    benefits: [
      {
        title: "Emoções intensas",
        description:
          "Algumas pessoas vivenciam emoções de forma muito intensa, com mudanças bruscas de humor, impulsividade ou dificuldade para lidar com frustrações. A psicoterapia possibilita compreender esses movimentos e os sentidos que podem estar implicados em sua história.",
      },
      {
        title: "Vínculos e repetições",
        description:
          "Medo de abandono, relações instáveis, conflitos recorrentes ou dificuldade em confiar podem estar ligados a experiências emocionais significativas ao longo da vida. O processo terapêutico busca compreender essas repetições e seus efeitos nas relações atuais.",
      },
      {
        title: "Vazio e desamparo",
        description:
          "Sensações de vazio, solidão, incompreensão ou falta de pertencimento podem gerar sofrimento intenso. A escuta terapêutica possibilita que essas experiências sejam acolhidas e gradualmente elaboradas.",
      },
      {
        title: "Crises emocionais",
        description:
          "Em momentos de crise, as emoções podem parecer difíceis de compreender ou sustentar. A psicoterapia oferece um espaço de acolhimento e elaboração, favorecendo a construção de recursos internos para lidar com o sofrimento.",
      },
    ],
    importanceTitle: "Uma escuta para a instabilidade emocional e os vínculos",
    importanceParagraphs: [
      "Viver com emoções intensas, crises emocionais recorrentes ou dificuldades nas relações afetivas pode gerar um sofrimento profundo e impactar diferentes áreas da vida. Na psicoterapia psicanalítica, buscamos compreender os sentidos dessas experiências, sua relação com a história de vida e os modos de vínculo construídos ao longo do tempo.",
      "Ao oferecer um espaço de escuta, acolhimento e reflexão, a terapia possibilita a elaboração dos conflitos emocionais, a compreensão de padrões que se repetem e a construção de uma relação mais autêntica consigo mesmo e com os outros.",
    ],
    importanceImages: [
      {
        src: "/images/sofrimento2.jpg",
        alt: "Elementos no consultório representando acolhimento e estabilidade emocional",
      },
      {
        src: "/images/sofrimento 1.jpg",
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
        quote:
          "A sensibilidade e a escuta atenta da Gabriela me ajudaram a passar por momentos de muita oscilação emocional.",
        author: "Patrícia",
      },
    ],
    footerCtaText:
      "Se você sente que precisa de um espaço seguro para falar da sua dor emocional, entre em contato.",
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
    title: "Ansiedade e o corpo como expressão do sofrimento emocional",
    heroHighlight:
      "A ansiedade e as manifestações corporais podem expressar experiências emocionais que nem sempre encontram palavras com facilidade. O sofrimento emocional que se manifesta por meio da ansiedade e, muitas vezes, através de sintomas físicos geram, muitas vezes, angústia, desconforto e impactos no dia a dia.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/ansiedade1.jpg",
      alt: "Retrato de Gabriela Nunes - Ansiedade e Psicossomática",
    },
    whyTitle: "Como a ansiedade e o corpo se conectam?",
    whyDescription:
      "O sofrimento emocional nem sempre se expressa apenas em pensamentos e sentimentos. Muitas vezes, ele também aparece através do corpo, em forma de tensões, dores, cansaço ou outros sintomas físicos.",
    benefits: [
      {
        title: "Compreender a ansiedade",
        description:
          "A ansiedade nem sempre está relacionada apenas ao momento presente. Muitas vezes, ela pode expressar conflitos emocionais, medos e experiências que ainda não encontraram formas de elaboração. A psicoterapia oferece um espaço para compreender os sentidos desse sofrimento em sua história singular.",
      },
      {
        title: "Escutar as manifestações do corpo",
        description:
          "Nem todo sofrimento encontra palavras com facilidade. Em alguns momentos, tensões, dores, sintomas crônicos, alterações no sono ou outros sintomas físicos podem expressar experiências emocionais que buscam ser compreendidas. A terapia oferece um espaço para escutar e elaborar essas vivências.",
      },
      {
        title: "Elaborar experiências de sobrecarga emocional",
        description:
          "A sensação de estar sempre em alerta, a dificuldade de descansar e o esgotamento emocional podem refletir exigências internas, conflitos e formas de funcionamento construídas ao longo da vida. A psicoterapia favorece a compreensão dessas experiências e de seus impactos no cotidiano, podendo construir novos sentidos.",
      },
      {
        title: "Compreender os pensamentos acelerados e a preocupação excessiva",
        description:
          "Quando a mente parece não encontrar descanso, preocupações e antecipações constantes podem ocupar grande parte da vida psíquica. O processo terapêutico possibilita explorar o que sustenta esse movimento e os significados que ele pode assumir para cada pessoa.",
      },
    ],
    importanceTitle: "Por que olhar para a ansiedade para além dos sintomas?",
    importanceParagraphs: [
      "A ansiedade e os sintomas psicossomáticos podem expressar conflitos emocionais, angústias e experiências que nem sempre encontram palavras com facilidade. Compreendê-los envolve olhar para a sua história e para os sentidos que esse sofrimento pode assumir.",
      "Na psicoterapia psicanalítica, criamos um espaço de escuta e reflexão que possibilita compreender essas experiências com mais profundidade, possibilitar a elaboração e nomear o sofrimento, favorecendo, aos poucos, uma relação menos sofrida com as próprias emoções e com o corpo.",
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
        quote:
          "O acolhimento e a competência da Gabriela me ajudaram a sair de um ciclo constante de exaustão emocional.",
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
    title: "O que sustenta a autocrítica constante e a sensação de nunca ser suficiente?",
    heroHighlight:
      "Ao compreendermos padrões de autocrítica, autocobrança e perfeccionismo, percebemos o impacto na autoestima, no bem-estar emocional e na forma de se relacionar consigo.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/autoestima1.jpg",
      alt: "Retrato de Gabriela Nunes - Autoestima, Autoimagem e Autocrítica",
    },
    whyTitle:
      "Ideais internos muito exigentes e seus efeitos na autoestima, na autopercepção e no sofrimento psíquico.",
    whyDescription:
      "A autocrítica e o perfeccionismo costumam se organizar a partir de ideais internos muito exigentes, gerando medo e a sensação de nunca ser suficiente e impactando a autoestima. Na psicoterapia, esses padrões podem ser compreendidos e elaborados, favorecendo uma relação mais acolhedora consigo mesma.",
    benefits: [
      {
        title: "Autocrítica e exigência interna",
        description:
          "A autocrítica constante pode se manifestar como um olhar rígido sobre si mesma, com dificuldade em reconhecer conquistas e qualidades pessoais. A psicoterapia busca compreender a origem dessa exigência interna e seus efeitos na vida emocional.",
      },
      {
        title: "Perfeccionismo e medo de errar",
        description:
          "O perfeccionismo pode estar associado ao medo de errar, de decepcionar ou de não corresponder às expectativas internas e externas. Esse padrão pode gerar tensão constante e sofrimento emocional significativo.",
      },
      {
        title: "Sensação de insuficiência",
        description:
          "A sensação de nunca ser suficiente pode afetar a autoestima e a forma como a pessoa se percebe nas relações e nas próprias conquistas. A escuta terapêutica possibilita compreender os sentidos dessa vivência em sua história. E, aos poucos, construir um olhar interno mais compassivo.",
      },
      {
        title: "Impactos na autoestima e nas relações",
        description:
          "Muitas vezes, a busca por corresponder a ideais muito exigentes gera desgaste emocional, dificuldade em reconhecer limites e um sentimento persistente de insuficiência. Na psicoterapia, esses movimentos podem ser compreendidos em sua história e elaborados ao longo do processo.",
      },
    ],
    importanceTitle: "Novos olhares possíveis no processo terapêutico",
    importanceParagraphs: [
      "A autocrítica intensa, o perfeccionismo e a sensação de nunca ser suficiente podem gerar um sofrimento persistente e impactar a forma como a pessoa se relaciona consigo mesma e com os outros. Na psicoterapia psicanalítica, buscamos compreender os sentidos desses padrões e sua relação com a história de vida e com os modos de funcionamento psíquico que se construíram ao longo do tempo.",
      "Ao oferecer um espaço de escuta e elaboração, a terapia possibilita a compreensão desses movimentos internos, favorecendo a construção de uma relação mais acolhedora, realista e menos punitiva consigo mesma.",
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
        quote:
          "Gabriela me ajudou a entender de onde vinha tanta vergonha e cobrança. Recomendo muito o trabalho dela.",
        author: "Fernanda",
      },
    ],
    footerCtaText:
      "Se você deseja construir uma relação mais harmoniosa e acolhedora consigo mesma(o), agende uma consulta.",
    footerCtaLabel: "Agende agora",
    seo: {
      title: "Autoestima, Autoimagem e Autocrítica | Gabriela Nunes",
      description:
        "Psicoterapia para combater a autocrítica severa, o perfeccionismo e fortalecer a autoestima e autoimagem de forma saudável.",
      image: "/images/autoestima1.jpg",
    },
  },
  "imagem-corporal-autoestima-e-alimentacao": {
    slug: "imagem-corporal-autoestima-e-alimentacao",
    route: "/servicos/imagem-corporal-autoestima-e-alimentacao/",
    title: "Como a relação com o corpo e a alimentação pode refletir o sofrimento emocional?",
    heroHighlight:
      "A forma como nos relacionamos com o corpo e a comida pode impactar diferentes áreas da vida. Compreender essas experiências é um passo importante para construir uma relação menos sofrida consigo e com a alimentação.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/corpo1.jpg",
      alt: "Imagem Corporal, Autoestima e Alimentação",
    },
    whyTitle: "Por que olhar para a relação com o corpo, a autoestima e a comida?",
    whyDescription:
      "As dificuldades com o corpo, autoestima ou alimentação nem sempre dizem respeito apenas à aparência ou comida. Muitas vezes, estão relacionadas à forma como fomos vistos, nos percebemos, nos valorizamos e lidamos com nossas experiências emocionais.",
    benefits: [
      {
        title: "Compreender a insatisfação com a própria imagem",
        description:
          "A dificuldade em aceitar o próprio corpo, a comparação constante e a sensação de inadequação podem impactar a autoestima e gerar sofrimento emocional. A psicoterapia oferece um espaço para compreender essas experiências e os sentidos que elas podem assumir na história de cada pessoa.",
      },
      {
        title: "As dificuldades na relação com a alimentação",
        description:
          "Restrições excessivas, episódios de perda de controle ou preocupações intensas com a comida, podem estar relacionados a questões emocionais que merecem ser compreendidas. Essas experiências também podem fazer parte de transtornos alimentares, como compulsão alimentar, anorexia e bulimia, condições que requerem avaliação especializada e acompanhamento adequado.",
      },
      {
        title: "Fortalecer a autoestima, a autoimagem e o autoconceito",
        description:
          "A forma como nos valorizamos (autoestima), percebemos nosso corpo e características (autoimagem) e construímos a percepção de quem somos, podendo nos levar a comparações com ideais (autoconceito), influencia diretamente nosso bem-estar emocional e a relação com nós mesmos.",
      },
      {
        title: "Acompanhar o processo da cirurgia bariátrica",
        description:
          "A avaliação psicológica, o preparo para a cirurgia e/ ou acompanhamento no pós-operatório auxiliam na compreensão das expectativas, mudanças emocionais e adaptações envolvidas nesse processo, favorecendo um cuidado mais amplo durante essa etapa.",
        link: {
          label: "Saiba mais sobre a avaliação",
          href: "/avaliacao-cirurgia-bariatrica/",
        },
      },
    ],
    importanceTitle: "Construindo uma relação mais saudável consigo mesmo ou com a comida",
    importanceParagraphs: [
      "As dificuldades relacionadas ao corpo, à autoestima e à alimentação nem sempre estão ligadas apenas ao peso, à aparência ou aos hábitos alimentares. Muitas vezes, elas envolvem sentimentos de inadequação, vergonha, comparação, sofrimento emocional e formas de se relacionar consigo construídas ao longo da vida. Estando relacionadas a questões multifatoriais que merecem ser compreendidas com cuidado.",
      "A psicoterapia oferece um espaço para compreender essas experiências, acolher os conflitos envolvidos e construir uma relação mais integrada com o próprio corpo, comida e sua história. São questões que demandam uma escuta especializada e um acompanhamento atento às necessidades de cada paciente.",
    ],
    importanceImages: [
      {
        src: "/images/corpo2.jpg",
        alt: "Pessoa meditando representando conexão corporal e bem-estar",
      },
      {
        src: "/images/corpo3.jpg",
        alt: "Consultório clínico acolhedor para trabalhar imagem corporal e comportamento alimentar",
      },
    ],
    processTitle: "Como funciona o acompanhamento?",
    processParagraphs: [
      "O acompanhamento é feito em sessões semanais online, com sigilo ético e total respeito à sua história.",
      "Focamos em investigar e ressignificar os conflitos que atravessam seu corpo e comportamento alimentar no seu próprio ritmo.",
    ],
    processCtaLabel: "Entre em contato",
    testimonialsTitle: "Opiniões de pacientes",
    testimonials: [
      {
        quote:
          "Minha relação com o corpo e a comida era de constante sofrimento e descontrole. Na terapia com a Gabriela, consegui compreender o que essa compulsão tentava esconder.",
        author: "Fernanda",
      },
      {
        quote:
          "Consegui me libertar de cobranças absurdas sobre meu corpo que carregava desde a adolescência. Gabriela é extremamente empática e profissional.",
        author: "Elisângela",
      },
    ],
    footerCtaText:
      "Se você deseja construir uma relação mais integrada e leve com seu próprio corpo e alimentação, fale comigo.",
    footerCtaLabel: "Agendar atendimento",
    seo: {
      title: "Imagem Corporal, Autoestima e Alimentação | Gabriela Nunes",
      description:
        "Apoio terapêutico online voltado a transtornos alimentares, compulsão, autoestima corporal e insatisfação com a imagem.",
      image: "/images/corpo1.jpg",
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
      "A avaliação, portanto, ajudará em possíveis desafios, com adjustments de comportamento para um novo estilo de vida com maior sucesso.",
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
