interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Nationwide Coverage',
    description: 'Operating across all 50 states with a reliable network of transport partners.',
  },
  {
    title: 'Expert Handling',
    description: 'Specialized equipment and trained professionals for safe transportation.',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer service and real-time shipment tracking.',
  },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}