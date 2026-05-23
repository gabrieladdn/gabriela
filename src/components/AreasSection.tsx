import React from 'react';
import Card from './Card';

type Area = { title: string; excerpt?: string; href?: string };

export default function AreasSection({ areas }: { areas: Area[] }) {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((a) => (
          <Card key={a.title} title={a.title} excerpt={a.excerpt} href={a.href} />
        ))}
      </div>
    </section>
  );
}
