import payload from 'payload';

export default async function seed() {
  if (!process.env.MONGODB_URI) {
    console.log('MONGODB_URI not set — skipping seed');
    return;
  }

  // Minimal seed example
  const existing = await payload.find({ collection: 'posts', limit: 1 });
  if (existing.totalDocs > 0) return;

  await payload.create({
    collection: 'posts',
    data: {
      title: 'Post inicial',
      slug: 'post-inicial',
    },
  });

  console.log('Seed finished');
}
