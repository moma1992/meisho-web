'use client';

import {
  Truck,
  Loader,
  Container,
  Scale,
  Clock,
  Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const services: Service[] = [
  {
    title: '20t Trailer Transport',
    description: 'Specialized trailers for heavy machinery transport up to 20 tonnes with secure loading and unloading.',
    icon: Truck,
    color: 'text-blue-500',
  },
  {
    title: 'Self-loader Services',
    description: 'Efficient self-loading trucks for versatile equipment transport with minimal ground support needed.',
    icon: Loader,
    color: 'text-green-500',
  },
  {
    title: 'Flatbed Transport',
    description: 'Wide flatbed options for oversized construction equipment and materials.',
    icon: Container,
    color: 'text-purple-500',
  },
  {
    title: 'Heavy Haul Solutions',
    description: 'Specialized transport solutions for extra-heavy construction machinery and components.',
    icon: Scale,
    color: 'text-red-500',
  },
  {
    title: 'Express Delivery',
    description: 'Time-critical transport services with guaranteed delivery windows for urgent projects.',
    icon: Clock,
    color: 'text-yellow-500',
  },
  {
    title: 'Secure Transport',
    description: 'Enhanced security measures for high-value equipment with real-time tracking and monitoring.',
    icon: Shield,
    color: 'text-indigo-500',
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
    >
      <div className={cn('mb-4 inline-block rounded-lg bg-background p-3', service.color)}>
        <service.icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
      <p className="text-sm text-muted-foreground">{service.description}</p>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprehensive transportation solutions for all your construction equipment needs.
            From standard deliveries to specialized heavy haul services.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}