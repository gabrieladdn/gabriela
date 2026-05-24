import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'status'],
    preview: (doc) => {
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/${doc?.slug}`
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug (URL)',
      required: true,
      unique: true,
      admin: {
        description: 'Ex: minha-relacao-com-a-ansiedade',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .trim()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Resumo',
      required: true,
      admin: {
        description: 'Aparece na listagem do blog e em SEO (max 160 caracteres).',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      label: 'Imagem de Capa',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Categoria',
      required: true,
      options: [
        { label: 'Ansiedade', value: 'ansiedade' },
        { label: 'Autoestima', value: 'autoestima' },
        { label: 'Relacionamentos', value: 'relacionamentos' },
        { label: 'Psicanálise', value: 'psicanalise' },
        { label: 'Autoconhecimento', value: 'autoconhecimento' },
        { label: 'Corpo e Alimentação', value: 'corpo-e-alimentacao' },
        { label: 'Saúde Mental', value: 'saude-mental' },
      ],
    },
    {
      name: 'readingTime',
      type: 'number',
      label: 'Tempo de leitura (minutos)',
      admin: {
        description: 'Preenchido automaticamente ao publicar se deixado em branco.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Conteúdo',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Data de Publicação',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Rascunho', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Título',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Descrição',
        },
        {
          name: 'ogImage',
          type: 'upload',
          label: 'Imagem OG (Open Graph)',
          relationTo: 'media',
        },
      ],
    },
  ],
}
