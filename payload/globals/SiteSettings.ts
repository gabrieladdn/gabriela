import type { GlobalConfig } from 'payload'

const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    { name: 'whatsapp', type: 'text' },
    { name: 'email', type: 'text' },
    { name: 'instagram', type: 'text' },
    { name: 'globalSeoTitle', type: 'text' },
    { name: 'globalSeoDescription', type: 'textarea' },
    { name: 'analyticsId', type: 'text' },
  ],
};

export default SiteSettings;
