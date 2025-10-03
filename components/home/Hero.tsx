import ButtonLink from '@/components/ui/ButtonLink';
import { Shield, Award, CheckCircle, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Precision Tile Installation for Idaho&apos;s Commercial & Residential Projects
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
          Veteran-owned. Schluter certified. Trusted by Layton Construction for $150K+ hospital projects and luxury homeowners across the Treasure Valley.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <ButtonLink href="#quote" variant="accent" size="lg">
            Request Your Quote
          </ButtonLink>
          <ButtonLink href="#portfolio" variant="secondary" size="lg">
            View Our Work
          </ButtonLink>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#B87333]" />
            <span className="text-sm md:text-base font-medium">Veteran Owned</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30" />
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#B87333]" />
            <span className="text-sm md:text-base font-medium">Licensed & Insured</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30" />
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#B87333]" />
            <span className="text-sm md:text-base font-medium">Schluter Certified</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30" />
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#B87333]" />
            <span className="text-sm md:text-base font-medium">20+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
