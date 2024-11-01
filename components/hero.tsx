import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Expert in Construction
          <br />
          Equipment Transport
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
          Professional, reliable, and efficient transportation services for your
          valuable construction equipment. Nationwide coverage with expert handling.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-w-[200px] bg-blue-600 hover:bg-blue-700"
          >
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[200px] border-white text-white hover:bg-white/10"
          >
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}