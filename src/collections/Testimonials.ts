import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'active'],
  },
  fields: [
    {
      name: 'author',
      type: 'text',
      label: 'Identificação (ex: A. M., 32 anos)',
      required: true,
    },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Depoimento',
      required: true,
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Exibir no site',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordem de exibição',
      defaultValue: 0,
    },
  ],
}
