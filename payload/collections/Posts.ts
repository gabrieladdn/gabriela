import type { CollectionConfig } from 'payload'

const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: (): boolean => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
  ],
};

export default Posts;
