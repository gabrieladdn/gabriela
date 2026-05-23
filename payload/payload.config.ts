import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import Users from './collections/Users.ts';
import Posts from './collections/Posts.ts';
import Media from './collections/Media.ts';
import Categories from './collections/Categories.ts';
import ListeningAreas from './collections/ListeningAreas.ts';
import FAQs from './collections/FAQs.ts';
import Homepage from './globals/Homepage.ts';
import SiteSettings from './globals/SiteSettings.ts';

export default buildConfig({
  serverURL: process.env.PAYLOAD_SERVER_URL || 'http://localhost:3000',
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || process.env.MONGODB_URI || '',
  }),
  secret: process.env.PAYLOAD_SECRET || 'change_me-change_me-change_me',
  collections: [Users, Posts, Media, Categories, ListeningAreas, FAQs],
  globals: [Homepage, SiteSettings],
  upload: {
    limits: {},
  },
});
