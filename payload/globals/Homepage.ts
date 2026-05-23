import type { GlobalConfig } from 'payload'

const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'textarea' },
      ],
    },
    {
      name: 'about',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'content', type: 'textarea' },
      ],
    },
  ],
};

export default Homepage;
