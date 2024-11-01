'use client';

import { Truck, Loader, Container, Shield, Clock, Scale } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ServiceCard } from './service-card';
import { cn } from '@/lib/utils';

const services = [
  {
    title: '20t Trailer Transport',
    description: 'Specialized transport solutions for heavy machinery up to 20 tonnes with our modern trailer fleet.',
    icon: Truck,
  },
  {
    title: 'Self-loader Services',
    description: 'Efficient loading and unloading with our advanced self-loading equipment for various machinery types.',
    icon: Loader,
  },
  {
    title: 'Flatbed Transport',
    description: 'Versatile flatbed transportation services for construction equipment of all sizes.',
    icon: Container,
  },
  {
    title: 'Secure Transport',
    description: 'Enhanced security measures and real-time tracking for high-value equipment transportation.',
    icon: Shield,
  },
  {
    title: 'Express Delivery',
    description: 'Time-critical transport services with guaranteed delivery windows for urgent projects.',
    icon: Clock,
  },
  {
    title: 'Heavy Haul',
    description: 'Specialized solutions for oversized and overweight construction equipment.',
    icon: Scale,
  },
];

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      ref={ref} 
      className={cn(
        "relative overflow-hidden bg-muted/50 py-16 sm:py-24",
        "before:absolute before:inset-0 before:bg-grid-pattern before:opacity-5"
      )}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mx-auto mb-12 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Professional transportation solutions tailored to your construction equipment needs
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}