import dns from 'dns'
dns.setDefaultResultOrder('ipv4first')

import { getPayload } from 'payload'
import config from '../payload.config'

const seedPosts = [
  {
    slug: 'o-que-e-autocobranca',
    title: 'O que é autocobrança e como ela se manifesta no corpo',
    excerpt:
      'A autocobrança vai muito além de querer fazer bem. Ela habita o corpo, tensa os músculos e rouba o sono. Entenda como esse padrão se instala na psique.',
    category: 'autoestima',
    publishedAt: '2024-05-15T12:00:00.000Z',
    readingTime: 7,
    content: `
      <p>A autocobrança é um dos padrões mais silenciosos e devastadores da vida psíquica contemporânea. Ela não chega anunciada. Ela se instala como uma voz interior que diz, continuamente, que você poderia ter feito mais.</p>
      <h2>Onde ela começa?</h2>
      <p>Não nascemos nos cobrando. A autocobrança é uma construção. Ela se forma nas primeiras relações — com pais, com professores, com um olhar que, mesmo sem palavras, comunica: "ainda não é suficiente".</p>
      <p>Com o tempo, esse olhar externo é internalizado. A voz que cobra passa a ser a nossa própria voz.</p>
      <h2>O corpo como termômetro</h2>
      <p>O corpo raramente mente. Tensão no pescoço, dores de cabeça persistententes, dificuldade de dormir, aperto no peito antes de uma reunião. São manifestações físicas de um estado psíquico de alerta permanente.</p>
      <blockquote>O corpo carrega aquilo que a mente ainda não conseguiu nomear.</blockquote>
      <h2>O que a psicanálise propõe?</h2>
      <p>A psicanálise não propõe eliminar a autocrítica. Propõe investigar sua origem. De onde vem essa voz? A quem ela pertence, de fato? O que você precisou fazer para ser amada, aceita, suficiente?</p>
      <p>Ao trazer essas perguntas para a consciência, algo muda. Não de uma vez, mas aos poucos. A voz que cobra começa a perder autoridade. E no espaço que se abre, surge algo mais gentil.</p>
    `,
  },
  {
    slug: 'ansiedade-e-psicanalise',
    title: 'O que a psicanálise diz sobre a ansiedade?',
    excerpt:
      'Para a psicanálise, a ansiedade não é um inimigo a ser eliminado. É um sinal do inconsciente. Mas um sinal de quê?',
    category: 'ansiedade',
    publishedAt: '2024-05-01T12:00:00.000Z',
    readingTime: 8,
    content: `
      <p>A ansiedade é um dos sintomas mais comuns da contemporaneidade. Mas antes de tratá-la como um problema a ser resolvido, a psicanálise propõe outra pergunta: o que essa ansiedade está dizendo?</p>
      <h2>Ansiedade como sinal</h2>
      <p>Na perspectiva freudiana, a ansiedade funciona como um alarme interno. Quando o ego percebe uma ameaça, ele produz ansiedade como aviso. O problema é que, em muitas pessoas, esse alarme está permanentemente ativado.</p>
      <blockquote>A ansiedade não é o problema. É a mensagem. A terapia é o trabalho de aprender a ler essa mensagem.</blockquote>
    `,
  },
  {
    slug: 'terapia-para-quem-nunca-foi',
    title: 'Terapia para quem nunca foi: o que esperar da primeira sessão?',
    excerpt:
      'A decisão de buscar ajuda é um ato de coragem. Este texto é para quem está no limiar e precisa de um gesto de gentileza para atravessá-lo.',
    category: 'saude-mental',
    publishedAt: '2024-04-18T12:00:00.000Z',
    readingTime: 5,
    content: `
      <p>Se você está lendo isso, provavelmente está pensando em começar uma terapia pela primeira vez. Isso é completamente normal.</p>
      <h2>O que acontece na primeira sessão?</h2>
      <p>A primeira sessão é, antes de tudo, um encontro. O terapeuta vai querer conhecer você — o que a trouxe até ali, um pouco da sua história, o que você está sentindo. Não é um interrogatório. É uma conversa.</p>
      <blockquote>Terapia não é para quem está quebrado. É para quem quer se conhecer melhor.</blockquote>
    `,
  },
  {
    slug: 'imagem-corporal-e-psicanalise',
    title: 'Imagem corporal, autoestima e o olhar dos outros',
    excerpt:
      'A relação com o próprio corpo é construída muito antes do espelho. É construída no olhar de quem nos criou.',
    category: 'corpo-e-alimentacao',
    publishedAt: '2024-04-02T12:00:00.000Z',
    readingTime: 9,
    content: `
      <p>A relação com o próprio corpo começa antes de qualquer espelho. Ela começa no olhar das pessoas que nos criaram.</p>
      <blockquote>A forma como você se vê no espelho reflete muito mais do que luz — reflete uma história inteira de olhares.</blockquote>
    `,
  },
  {
    slug: 'medo-do-abandono',
    title: 'Medo do abandono: quando relacionamentos viram fonte de sofrimento',
    excerpt:
      'O medo de ser abandonada pode transformar relações de amor em relações de sobrevivência. Conheça a raiz psíquica desse padrão.',
    category: 'relacionamentos',
    publishedAt: '2024-03-20T12:00:00.000Z',
    readingTime: 6,
    content: `
      <p>O medo do abandono transforma relacionamentos que deveriam ser fonte de alegria em relações de sobrevivência.</p>
      <blockquote>O medo do abandono não é fraqueza. É uma cicatriz de quem aprendeu cedo que as pessoas vão embora.</blockquote>
    `,
  },
  {
    slug: 'silencio-na-sessao',
    title: 'O silêncio na sessão psicanalítica: por que ele importa?',
    excerpt:
      'O silêncio não é ausência. Na psicanálise, ele pode ser o momento mais eloquente de uma sessão.',
    category: 'psicanalise',
    publishedAt: '2024-03-05T12:00:00.000Z',
    readingTime: 6,
    content: `
      <p>O silêncio desconforta. Estamos tão acostumados com o barulho que o silêncio parece vazio. Mas na sessão psicanalítica, ele pode ser o momento mais cheio de uma conversa.</p>
      <blockquote>Na psicanálise, o silêncio não é o oposto da fala. É outra forma de dizer.</blockquote>
    `,
  },
]

const seedTestimonials = [
  {
    quote:
      'As sessões com a Gabriela me trouxeram uma clareza que eu não conseguia ter sozinha. Aprendi a ser mais gentil comigo mesma.',
    author: 'A. M., 32 anos',
    order: 1,
  },
  {
    quote:
      'A forma como ela escuta e pontua as coisas é muito transformadora. Sinto que finalmente estou lidando com a minha ansiedade.',
    author: 'L. F., 28 anos',
    order: 2,
  },
  {
    quote:
      'O atendimento online é impecável. Gabriela transmite uma paz e uma segurança incríveis, mesmo através da tela.',
    author: 'M. S., 40 anos',
    order: 3,
  },
]

function convertHtmlToLexical(html: string) {
  const children: any[] = []
  const regex = /<(p|h2|blockquote)>([\s\S]*?)<\/\1>/g
  let match

  while ((match = regex.exec(html)) !== null) {
    const tag = match[1]
    const content = match[2].replace(/<[^>]+>/g, '').trim()

    if (tag === 'p') {
      children.push({
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            text: content,
            version: 1,
            format: 0,
          },
        ],
      })
    } else if (tag === 'h2') {
      children.push({
        type: 'heading',
        tag: 'h2',
        version: 1,
        children: [
          {
            type: 'text',
            text: content,
            version: 1,
            format: 0,
          },
        ],
      })
    } else if (tag === 'blockquote') {
      children.push({
        type: 'quote',
        version: 1,
        children: [
          {
            type: 'text',
            text: content,
            version: 1,
            format: 0,
          },
        ],
      })
    }
  }

  if (children.length === 0) {
    children.push({
      type: 'paragraph',
      version: 1,
      children: [
        {
          type: 'text',
          text: html.replace(/<[^>]+>/g, '').trim(),
          version: 1,
          format: 0,
        },
      ],
    })
  }

  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children,
    },
  }
}

async function run() {
  console.log('Iniciando o seeding de dados para o MongoDB Atlas...')
  const payload = await getPayload({ config })

  // 1. Criar imagem placeholder de capa padrão
  console.log('Criando imagem de capa placeholder padrão...')
  const placeholderPng = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    'base64'
  )

  let mediaDoc: any
  try {
    const existingMedia = await payload.find({
      collection: 'media',
      where: {
        alt: { equals: 'Placeholder Capa' },
      },
    })

    if (existingMedia.docs.length > 0) {
      mediaDoc = existingMedia.docs[0]
      console.log('Imagem placeholder já existe. ID:', mediaDoc.id)
    } else {
      mediaDoc = await payload.create({
        collection: 'media',
        data: {
          alt: 'Placeholder Capa',
        },
        file: {
          data: placeholderPng,
          name: 'placeholder.png',
          mimetype: 'image/png',
          size: placeholderPng.length,
        },
      })
      console.log('Imagem placeholder criada. ID:', mediaDoc.id)
    }
  } catch (error) {
    console.error('Erro ao gerenciar imagem de capa placeholder:', error)
    process.exit(1)
  }

  // 2. Seeding Testimonials
  console.log('Populando depoimentos...')
  for (const testimonial of seedTestimonials) {
    try {
      const existing = await payload.find({
        collection: 'testimonials',
        where: {
          author: { equals: testimonial.author },
        },
      })

      if (existing.docs.length > 0) {
        console.log(`Depoimento de "${testimonial.author}" já existe. Pulando...`)
      } else {
        await payload.create({
          collection: 'testimonials',
          data: {
            author: testimonial.author,
            quote: testimonial.quote,
            order: testimonial.order,
            active: true,
          },
        })
        console.log(`Depoimento de "${testimonial.author}" cadastrado com sucesso!`)
      }
    } catch (error) {
      console.error(`Erro ao criar depoimento para "${testimonial.author}":`, error)
    }
  }

  // 3. Seeding Posts
  console.log('Populando artigos do blog...')
  for (const post of seedPosts) {
    try {
      const existing = await payload.find({
        collection: 'posts',
        where: {
          slug: { equals: post.slug },
        },
      })

      if (existing.docs.length > 0) {
        console.log(`Artigo com slug "${post.slug}" já existe. Pulando...`)
      } else {
        const lexicalContent = convertHtmlToLexical(post.content)

        await payload.create({
          collection: 'posts',
          data: {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            category: post.category as any,
            readingTime: post.readingTime,
            content: lexicalContent,
            publishedAt: post.publishedAt,
            status: 'published',
            coverImage: mediaDoc.id,
            seo: {
              metaTitle: post.title,
              metaDescription: post.excerpt,
            },
          },
        })
        console.log(`Artigo "${post.title}" cadastrado com sucesso!`)
      }
    } catch (error) {
      console.error(`Erro ao cadastrar artigo "${post.title}":`, error)
    }
  }

  console.log('Processo de seeding finalizado com sucesso!')
  process.exit(0)
}

run().catch((err) => {
  console.error('Erro durante a execução do seed:', err)
  process.exit(1)
})
