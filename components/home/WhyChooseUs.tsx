import Container from '@/components/ui/Container';
import { Building2, Star, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Commercial Capacity',
    subtitle: '$150K+ Project Experience',
    description:
      'Pre-qualified with Layton Construction. Managing multiple Summit Properties locations. Built for multi-year timelines and complex coordination.',
  },
  {
    icon: Star,
    title: 'Veteran Precision',
    subtitle: 'Military-Grade Discipline',
    description:
      'Iraq War veteran-owned. Obsessive attention to detail. Zero tolerance for cutting corners. Your timeline is our mission.',
  },
  {
    icon: Award,
    title: 'Certified Expertise',
    subtitle: 'Schluter Systems Certified',
    description:
      'Gold-standard waterproofing and tile systems. Licensed, bonded, insured. 20+ years of hands-on craftsmanship.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    subtitle: '285% Above Industry Average',
    description:
      'First-year revenue exceeded $100K. Repeat commercial clients. Residential referrals from satisfied homeowners.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Idaho Contractors & Homeowners Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-1">
                  {feature.title}
                </h3>
                <p className="text-[#B87333] font-semibold text-sm mb-3">
                  {feature.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
