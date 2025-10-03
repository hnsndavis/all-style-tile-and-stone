import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <Container maxWidth="narrow">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Ready to Start Your Project?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re managing a $300K commercial development or creating your dream bathroom, we bring the same commitment: veteran precision, artisan craftsmanship, unwavering reliability.
          </p>

          <p className="text-base text-gray-600">
            Major contractors like Layton Construction and Summit Properties trust us for multi-year projects. Luxury homeowners refer us to their closest friends. Experience the All Style Tile & Stone difference.
          </p>

          {/* Primary CTA */}
          <div className="pt-6">
            <Button variant="accent" size="lg" asChild>
              <Link href="#quote">Request Your Quote</Link>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 text-lg font-semibold text-black hover:text-[#B87333] transition-colors"
              >
                <Phone size={20} />
                {CONTACT.phone}
              </a>
              <div className="hidden sm:block w-px h-6 bg-gray-300" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-lg font-semibold text-black hover:text-[#B87333] transition-colors"
              >
                <Mail size={20} />
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div className="pt-8">
            <p className="text-gray-600">
              <span className="font-semibold text-black">Service Areas:</span>{' '}
              Proudly serving {CONTACT.serviceAreas.join(', ')} & surrounding communities
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
