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
    title: "Quando as emoções parecem difíceis de sustentar",
    heroHighlight:
      "Há momentos em que as emoções podem parecer difíceis de compreender, sustentar ou colocar em palavras. Crises emocionais, sentimentos intensos ou mudanças de humor podem gerar grande sofrimento e sensação de instabilidade.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/sofrimento 1.jpg",
      alt: "Retrato de Gabriela Nunes - Sofrimento Psíquico e Vínculos",
    },
    whyTitle: "Quando o sofrimento emocional ocupa espaço demais",
    whyDescription:
      "Existem momentos em que o sofrimento deixa de ser algo passageiro e passa a acompanhar o cotidiano. Sentimentos difíceis de compreender, angústias persistentes ou uma sensação constante de mal-estar podem tornar mais difícil lidar consigo mesma e com a própria experiência emocional.",
    benefits: [
      {
        title: "Vazio, solidão e desamparo",
        description:
          "Talvez você conviva com uma sensação persistente de vazio, por vezes sentindo que a vida não tem sentido, como se algo estivesse faltando ou fosse difícil encontrar apoio emocional dentro de si.",
      },
      {
        title: "Emoções intensas",
        description:
          "Há momentos em que as emoções podem parecer difíceis de compreender, acolher ou colocar em palavras. Crises emocionais, sentimentos intensos e oscilações de humor podem gerar grande sofrimento. Talvez você também conviva com o medo da rejeição, do abandono ou da perda de vínculos importantes.",
      },
      {
        title: "Angústias persistentes",
        description:
          "Há sofrimentos que nem sempre são fáceis de explicar. Preocupações constantes, inquietação emocional ou sentimentos difíceis de nomear podem ocupar grande espaço na vida e tornar o cotidiano mais desgastante.",
      },
      {
        title: "Algumas dores não ficam no passado",
        description:
          "Certas experiências continuam presentes na forma como sentimos, reagimos e nos percebemos, mesmo quando parecem pertencer a outro momento da vida. Às vezes, o sofrimento atual pode carregar marcas de histórias que ainda precisam ser compreendidas.",
      },
    ],
    importanceTitle: "Uma escuta para o sofrimento emocional e a instabilidade",
    importanceParagraphs: [
      "Emoções intensas, sensação de vazio, angústias persistentes, crises emocionais ou dificuldades para compreender o que se sente podem gerar sofrimento e impactar diferentes áreas da vida.",
      "A psicoterapia oferece um espaço para olhar para essas experiências com mais cuidado e profundidade. Ao longo do processo, buscamos compreender os sentidos envolvidos nesse sofrimento, reconhecer aquilo que se repete e desenvolver formas mais conscientes e acolhedoras de lidar com as próprias emoções.",
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
      "As sessões ocorrem semanalmente, de forma online, oferecendo um espaço de escuta seguro e confidencial para falar sobre suas vivências, dúvidas e sofrimentos.",
      "A psicoterapia é um processo construído ao longo do tempo. Por meio da escuta e da reflexão, buscamos compreender aquilo que gera sofrimento, reconhecer padrões que se repetem e desenvolver novas formas de se relacionar consigo mesma e com os outros.",
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
      "Nem sempre o sofrimento emocional se manifesta apenas por pensamentos ou sentimentos. Em alguns momentos, ele também pode aparecer no corpo, por meio da ansiedade, de tensões, desconfortos físicos ou uma sensação constante de alerta. Essas experiências podem gerar angústia e tornar o cotidiano mais difícil de sustentar.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/ansiedade1.jpg",
      alt: "Retrato de Gabriela Nunes - Ansiedade e Psicossomática",
    },
    whyTitle: "Quando o corpo também expressa o sofrimento",
    whyDescription:
      "A ansiedade e o sofrimento emocional nem sempre encontram palavras com facilidade. Muitas vezes, eles podem se manifestar por meio de tensões, dores, cansaço, desconfortos físicos ou outras reações corporais que impactam o bem-estar e o cotidiano.",
    benefits: [
      {
        title: "Preocupação constante e sensação de alerta",
        description:
          "Talvez exista uma sensação constante de preocupação, como se fosse difícil desligar a mente ou relaxar completamente. Mesmo quando não há um motivo claro, o corpo e os pensamentos podem permanecer em estado de alerta, gerando desgaste e inquietação.",
      },
      {
        title: "Quando a ansiedade se manifesta",
        description:
          "A ansiedade pode aparecer de diferentes formas: pensamentos acelerados, dificuldade para relaxar, tensão muscular, aperto no peito, sensação de falta de ar, alterações no sono, irritabilidade ou preocupação excessiva. Cada pessoa a vivencia de maneira singular.",
      },
      {
        title: "Quando o corpo expressa o sofrimento",
        description:
          "Nem sempre é possível colocar em palavras tudo aquilo que se sente. Em alguns momentos, o sofrimento emocional pode encontrar outras formas de expressão, surgindo através de sintomas físicos, desconfortos corporais ou sensações difíceis de compreender.",
      },
      {
        title: "O que a ansiedade pode estar tentando comunicar",
        description:
          "A ansiedade pode se manifestar como preocupação constante, tensão, aceleração dos pensamentos, dificuldade de relaxar ou sensação de que algo ruim pode acontecer. Na perspectiva psicanalítica, ela não é vista apenas como um sintoma isolado, mas também como uma manifestação de conflitos e experiências emocionais que podem estar presentes na vida psíquica da pessoa.",
      },
    ],
    importanceTitle: "Ansiedade e o que ela pode comunicar no processo terapêutico?",
    importanceParagraphs: [
      "A ansiedade e as manifestações do corpo podem expressar angústias, conflitos emocionais e experiências que nem sempre encontram palavras com facilidade. Compreendê-las envolve olhar para a história de cada pessoa e para os sentidos que esse sofrimento pode assumir ao longo da vida.",
      "Na psicoterapia psicanalítica, construímos um espaço de escuta e reflexão que favorece a compreensão dessas experiências com mais profundidade. Ao longo do processo, busca-se um melhor reconhecimento dos próprios estados internos, identificar o que desperta a ansiedade e, pouco a pouco, encontram formas mais leves de lidar com esses sentimentos e conflitos. Isso pode trazer alívio, reduzir a intensidade dos sintomas e possibilitar uma relação mais estável com as próprias emoções e com o corpo.",
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
    processTitle: "Como funciona o acompanhamento?",
    processParagraphs: [
      "As sessões ocorrem semanalmente, de forma online, oferecendo um espaço de escuta seguro e confidencial para falar sobre suas vivências, dúvidas e sofrimentos.",
      "A psicoterapia é um processo construído ao longo do tempo. Por meio da escuta e da reflexão, buscamos compreender aquilo que gera sofrimento, reconhecer padrões que se repetem e desenvolver novas formas de se relacionar consigo mesma e com os outros.",
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
    footerCtaText: "Dê o primeiro passo para compreender melhor a sua ansiedade e iniciar um processo de cuidado com você mesma(o).",
    footerCtaLabel: "Agende agora",
    seo: {
      title: "Ansiedade e Psicossomática | Gabriela Nunes",
      description:
        "Tratamento psicoterapêutico online focado em ansiedade, sintomas psicossomáticos, exaustão emocional e estresse persistente.",
      image: "/images/ansiedade1.jpg",
    },
  },
  "autocritica-perfeccionismo": {
    slug: "autocritica-perfeccionismo",
    route: "/servicos/autocritica-perfeccionismo/",
    title: "Quando nada parece ser suficiente",
    heroHighlight:
      "Talvez você se cobre com frequência, tenha dificuldade em reconhecer suas conquistas ou sinta que precisa fazer mais, ser melhor ou corresponder a expectativas muito altas  Mesmo diante de resultados positivos, pode permanecer a sensação de que ainda falta algo ou de que nunca é o bastante. Com o tempo, a autocrítica intensa e o perfeccionismo podem gerar sofrimento emocional, insegurança, ansiedade e dificuldade em reconhecer o próprio valor.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/autoestima1.jpg",
      alt: "Retrato de Gabriela Nunes - Autoestima, Autoimagem e Autocrítica",
    },
    whyTitle: "Por que é tão difícil reconhecer o próprio valor?",
    whyDescription:
      "Em alguns momentos, o olhar sobre si mesma(o) parece estar sempre voltado para o que ainda falta, para o que poderia ter sido melhor ou para o que não saiu como esperado. As conquistas acabam perdendo espaço diante do que não foi alcançado, e o reconhecimento de si pode se tornar difícil mesmo em situações positivas. Com o tempo, isso pode afetar a autoestima e a forma como a pessoa se relaciona consigo mesma.",
    benefits: [
      {
        title: "O peso da autocrítica",
        description:
          "Talvez você perceba com facilidade seus erros, falhas ou limitações, mas tenha dificuldade em reconhecer suas qualidades, conquistas e esforços.",
      },
      {
        title: "A sensação de nunca ser suficiente",
        description:
          "Mesmo quando alcança objetivos importantes, pode surgir a impressão de que ainda deveria fazer mais, saber mais ou ser melhor, tornando difícil sentir satisfação com aquilo que já conquistou.",
      },
      {
        title: "O medo de errar",
        description:
          "Erros, críticas ou imperfeições podem ser vividos com grande intensidade, gerando ansiedade, vergonha ou a sensação de fracasso.",
      },
      {
        title: "Quando descansar também gera culpa",
        description:
          "Em alguns momentos, pode ser difícil desacelerar ou simplesmente aproveitar conquistas sem sentir que deveria estar produzindo, resolvendo algo ou fazendo mais.",
      },
    ],
    importanceTitle: "Novos olhares possíveis no processo terapêutico",
    importanceParagraphs: [
      "A autocrítica excessiva e o perfeccionismo não se expressam apenas como uma forma de ser, mas também podem estar ligados a experiências emocionais, expectativas internas e modos de lidar com erros, exigências e sentimentos de inadequação.",
      "A psicoterapia oferece um espaço de escuta e reflexão sobre essas experiências. Ao longo do processo, é possível reconhecer com mais clareza esses padrões e a construir uma relação mais gentil consigo mesma(o), em que o valor pessoal não dependa apenas do desempenho ou da perfeição",
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
    processTitle: "Como funciona o acompanhamento?",
    processParagraphs: [
      "As sessões ocorrem semanalmente, de forma online, oferecendo um espaço de escuta seguro e confidencial para falar sobre suas vivências, dúvidas e sofrimentos.",
      "A psicoterapia é um processo construído ao longo do tempo. Por meio da escuta e da reflexão, buscamos compreender aquilo que gera sofrimento, reconhecer padrões que se repetem e desenvolver novas formas de se relacionar consigo mesma e com os outros.",
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
      "Dê o primeiro passo para olhar com mais cuidado para sua autocrítica e iniciar um processo de maior acolhimento consigo mesma(o).",
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
    title: "Quando o corpo, autoestima e a alimentação se tornam fonte de sofrimento",
    heroHighlight:
      "A relação com o corpo, a aparência e a alimentação pode carregar angústias que vão muito além da estética ou da comida. Insatisfação constante, autocrítica, culpa ao comer ou preocupação excessiva com o corpo podem impactar o bem-estar e a autoestima. Em muitos casos, essas vivências também estão relacionadas à história emocional de cada pessoa e à maneira como ela construiu sua relação consigo mesma.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/corpo1.jpg",
      alt: "Imagem Corporal, Autoestima e Transtornos Alimentares",
    },
    whyTitle: "Quando a forma de se enxergar passa a gerar sofrimento",
    whyDescription:
      "Em alguns momentos, a relação consigo mesma(o) pode ser marcada por inseguranças, comparações e dificuldade em reconhecer o próprio valor e qualidades. Questões relacionadas à autoestima podem se expressar na forma como a pessoa percebe aspectos próprios, na insatisfação corporal, na preocupação excessiva com a aparência ou em uma relação difícil com a alimentação. Com o tempo, essas vivências podem afetar a confiança, os relacionamentos e a qualidade de vida.",
    benefits: [
      {
        title: "Insatisfação com a própria imagem",
        description:
          "Talvez você tenha dificuldade em se sentir confortável com sua aparência, percebendo mais facilmente aquilo que considera defeitos próprios. Em alguns momentos, pode surgir a sensação de que seria preciso alcançar um determinado corpo para finalmente se sentir bem.",
      },
      {
        title: "Quando o corpo nunca parece ser suficiente",
        description:
          "Talvez você conviva com a sensação de que seu corpo deveria ser diferente. A busca constante por um ideal pode gerar comparações, inseguranças e dificuldade em se sentir verdadeiramente confortável consigo mesma. Por trás da insatisfação corporal, muitas vezes também existem questionamentos sobre sua autoestima e próprio valor.",
      },
      {
        title: "Quando a alimentação se torna fonte de sofrimento",
        description:
          "Culpa ao comer, preocupação excessiva com a comida, medo de engordar ou pensamentos constantes sobre alimentação podem tornar essa relação mais difícil e desgastante. Com o tempo, a alimentação pode deixar de ser uma experiência simples e passar a gerar angústia, preocupação e sofrimento emocional.",
      },
      {
        title: "O olhar para si mesma e mudanças corporais",
        description:
          "Comparações frequentes, autocrítica intensa ou uma percepção muito rígida sobre o próprio corpo podem impactar a autoestima e a forma como você se relaciona consigo mesma. Mudanças corporais importantes, emagrecimento significativo ou transformações após procedimentos como a cirurgia bariátrica também podem trazer desafios emocionais relacionados à identidade, autoestima e forma de se perceber.",
        link: {
          label: "Saiba mais",
          href: "/avaliacao-cirurgia-bariatrica/",
        },
      },
    ],
    importanceTitle: "Construindo uma relação mais saudável consigo mesma(o) e com a alimentação",
    importanceParagraphs: [
      "As dificuldades relacionadas ao corpo, à autoestima e à alimentação nem sempre dizem respeito apenas ao peso, à aparência ou à comida. Muitas vezes, elas carregam sentimentos de inadequação, vergonha, autocrítica e sofrimentos que podem estar ligados a experiências emocionais mais profundas.",
      "A psicoterapia oferece um espaço para compreender essas vivências com mais cuidado, acolher os conflitos envolvidos e construir uma relação mais gentil com sua autoimagem, autoestima e com a alimentação.",
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
      "As sessões ocorrem semanalmente, de forma online, oferecendo um espaço de escuta seguro e confidencial para falar sobre suas vivências, dúvidas e sofrimentos.",
      "A psicoterapia é um processo construído ao longo do tempo. Por meio da escuta e da reflexão, buscamos compreender aquilo que gera sofrimento, reconhecer padrões que se repetem e desenvolver novas formas de se relacionar consigo mesma e com os outros.",
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
      title: "Imagem Corporal, Autoestima e Transtornos Alimentares | Gabriela Nunes",
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
      "A decisão pela cirurgia bariátrica marca uma etapa importante e envolve mudanças físicas e emocionais significativas. A avaliação psicológica oferece também um espaço de escuta e acolhimento, incluindo um preparo mais consciente e cuidadoso para essa nova fase.",
    heroCtaLabel: "Agende agora",
    heroImage: {
      src: "/images/corpo1.jpg",
      alt: "Retrato de Gabriela Nunes para a página de avaliação bariátrica",
    },
    whyTitle: "Avaliação psicológica e preparo para cirurgia bariátrica",
    whyDescription:
      "A avaliação psicológica e o preparo para a cirurgia bariátrica são etapas importantes do processo, que ajudam a compreender a relação com a alimentação, o corpo e as mudanças que essa nova fase envolve. Além do espaço de escuta e reflexão, também são abordadas questões práticas e orientações sobre o processo cirúrgico e as mudanças no dia a dia, ajudando a trazer mais clareza e segurança para esse momento. Como psicóloga com experiência em transtornos e comportamento alimentar, ofereço um acompanhamento voltado ao autoconhecimento e ao preparo emocional para as transformações que podem ocorrer ao longo desse processo.",
    benefits: [
      {
        title: "Relação com a alimentação e aspectos emocionais",
        description:
          "Compreender a relação com a alimentação e identificar como emoções, ansiedade e padrões de comportamento podem influenciar esse processo. Esse olhar ajuda a ampliar o autoconhecimento e a reconhecer fatores que podem impactar o período pré e pós-operatório.",
      },
      {
        title: "Expectativas e adaptação ao processo",
        description:
          "Refletir sobre expectativas em relação à cirurgia e às mudanças no corpo e na rotina. Esse trabalho contribui para uma compreensão mais realista do processo e dos desafios envolvidos ao longo das transformações.",
      },
      {
        title: "Preparo emocional e suporte ao longo do processo",
        description: "Favorecer o preparo emocional para lidar com as mudanças que a cirurgia pode trazer, incluindo adaptações na rotina, na alimentação e na forma de se perceber. O objetivo é promover maior segurança e estabilidade emocional nesse novo ciclo.",
      },
    ],
    importanceTitle: "Mais do que uma avaliação: preparo psicológico para a cirurgia bariátrica",
    importanceParagraphs: [
      "A avaliação para a cirurgia bariátrica vai além de um laudo e é uma etapa importante de preparação para o processo. Ela ajuda a compreender como você lida com emoções, com a ansiedade e alimentação, além de favorecer o alinhamento de expectativas em relação à cirurgia. Também é um espaço para refletir sobre mudanças importantes que fazem parte dessa nova fase.",
      "Esse acompanhamento especializado contribui para um preparo mais seguro e consciente para as transformações que a cirurgia pode trazer.",
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
      "A avaliação é realizada por meio de entrevistas e, quando necessário, instrumentos que ajudam a compreender aspectos emocionais, a relação com a alimentação e com o próprio corpo.",
      "Nesse processo, também são feitas orientações sobre as mudanças que fazem parte da cirurgia bariátrica e do período de adaptação, favorecendo maior clareza e preparo para essa nova fase.",
      "Os atendimentos são realizados de forma online, pelo Google Meet, com praticidade e acolhimento.",
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
  "relacionamentos-vinculos-e-sofrimento-emocional": {
    slug: "relacionamentos-vinculos-e-sofrimento-emocional",
    route: "/servicos/relacionamentos-vinculos-e-sofrimento-emocional/",
    title: "Quando os relacionamentos se tornam fonte de sofrimento",
    heroHighlight:
      "Talvez você perceba que, em alguns momentos da vida, os relacionamentos podem gerar sofrimento, insegurança ou instabilidade emocional. Pode existir o receio de ser rejeitada, de não ser importante para o outro ou de se machucar nas relações, mesmo quando há um desejo genuíno de proximidade. Essas experiências podem impactar a forma como você se relaciona consigo mesma e com os outros.",
    heroCtaLabel: "Agendar agora",
    heroImage: {
      src: "/images/extra1.jpg",
      alt: "Relacionamentos, vínculos e sofrimento emocional",
    },
    whyTitle: "Por que algumas relações parecem tão difíceis?",
    whyDescription:
      "Os vínculos que construímos ao longo da vida não são marcados apenas pelas experiências atuais. Muitas vezes, eles também são atravessados por histórias anteriores, formas de se proteger emocionalmente e maneiras aprendidas de se relacionar. Com o tempo, certos padrões podem se repetir, gerando sofrimento mesmo quando existe o desejo de viver relações diferentes.",
    benefits: [
      {
        title: "Medo de rejeição e abandono",
        description:
          "Talvez exista um receio constante de não ser importante, de ser deixada de lado ou de não ser escolhida nas relações.",
      },
      {
        title: "Entre proximidade e afastamento",
        description:
          "Pode existir um movimento interno entre o desejo de se aproximar e o medo de se machucar emocionalmente.",
      },
      {
        title: "Como você se vê nas relações",
        description:
          "A forma como você se relaciona com os outros também pode refletir a forma como você se percebe, se valoriza e lida com suas próprias emoções.",
      },
      {
        title: "Relações que se repetem",
        description:
          "Em alguns momentos, pode parecer que você se envolve em situações semelhantes, mesmo quando deseja que as coisas sejam diferentes.",
      },
    ],
    importanceTitle: "Um espaço para compreender e elaborar suas experiências",
    importanceParagraphs: [
      "A psicoterapia oferece um espaço para compreender os sentidos dos vínculos e dos padrões que se repetem ao longo da vida. Ao olhar para essas experiências com mais cuidado, torna-se possível reconhecer movimentos emocionais, elaborar conflitos e construir formas mais conscientes e menos sofridas de se relacionar consigo mesma e com os outros.",
    ],
    importanceImages: [
      {
        src: "/images/extra2.jpg",
        alt: "Elementos representando diálogo e construção de vínculos saudáveis",
      },
      {
        src: "/images/extra3.jpg",
        alt: "Consultório acolhedor para psicoterapia de relacionamentos e vínculos",
      },
    ],
    processTitle: "Como funciona o acompanhamento?",
    processParagraphs: [
      "As sessões ocorrem semanalmente, de forma online, oferecendo um espaço de escuta seguro e confidencial para falar sobre suas vivências, dúvidas e sofrimentos.",
      "A psicoterapia é um processo construído ao longo do tempo. Por meio da escuta e da reflexão, buscamos compreender aquilo que gera sofrimento, reconhecer padrões que se repetem e desenvolver novas formas de se relacionar consigo mesma e com os outros.",
    ],
    processCtaLabel: "Entre em contato",
    testimonialsTitle: "Opiniões de pacientes",
    testimonials: [
      {
        quote:
          "Com a terapia da Gabriela, compreendi por que repetia certos padrões e como construir limites mais saudáveis nas minhas relações.",
        author: "Mariana",
      },
      {
        quote:
          "Consegui falar abertamente sobre a insegurança que sentia nos meus relacionamentos em um espaço muito acolhedor.",
        author: "Patrícia",
      },
    ],
    footerCtaText:
      "Se você sente que seus relacionamentos têm sido fonte de angústia e sofrimento, agende uma consulta.",
    footerCtaLabel: "Agendar agora",
    seo: {
      title: "Relacionamentos, Vínculos e Sofrimento Emocional | Gabriela Nunes",
      description:
        "Psicoterapia online para lidar com conflitos de relacionamento, medo de abandono, insegurança e padrões repetitivos nos vínculos.",
      image: "/images/extra1.jpg",
    },
  },
};
