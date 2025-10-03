import Link from 'next/link';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Commercial',
    subtitle: 'Healthcare & Retail Projects',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop',
    bullets: [
      'Hospital installations (Layton Construction)',
      'Multi-location retail (Summit Properties)',
      'Wellness facilities (Sisu Cold Plunge)',
      'Projects ranging $150K-$300K+',
    ],
    link: '/#services',
  },
  {
    title: 'Residential',
    subtitle: 'Luxury Home Installations',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop',
    bullets: [
      'Complete home tile projects',
      'Custom shower suites (Schluter certified)',
      'Kitchen backsplashes & feature walls',
      'Fireplace surrounds',
    ],
    link: '/#services',
  },
  {
    title: 'Specialty Services',
    subtitle: 'Schluter Systems & Custom Work',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop',
    bullets: [
      'Waterproofing certifications',
      'Complex pattern installations',
      'Heat-resistant applications',
      'Multi-material coordination',
    ],
    link: '/#contact',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Commercial Scale. Residential Precision.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover>
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <span className="text-[#B87333] mr-2 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-flex items-center text-black font-semibold hover:text-[#B87333] transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
