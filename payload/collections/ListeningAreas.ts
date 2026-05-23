import type { CollectionConfig } from 'payload'

const ListeningAreas: CollectionConfig = {
  slug: 'listening-areas',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
    { name: 'shortDescription', type: 'textarea' },
  ],
};

export default ListeningAreas;
