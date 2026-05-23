import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'uploads',
  },
  fields: [
    { name: 'alt', type: 'text' },
    { name: 'caption', type: 'text' },
  ],
};

export default Media;
