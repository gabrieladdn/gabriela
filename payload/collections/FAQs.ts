import type { CollectionConfig } from 'payload'

const FAQs: CollectionConfig = {
  slug: 'faqs',
  fields: [
    { name: 'question', type: 'text', required: true },
    { name: 'answer', type: 'textarea', required: true },
    { name: 'order', type: 'number' },
  ],
};

export default FAQs;
