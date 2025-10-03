import Container from '@/components/ui/Container';
import { Shield, Award, CheckCircle, Star } from 'lucide-react';

const credentials = [
  {
    icon: Star,
    text: 'Veteran Owned - Iraq War Vet',
  },
  {
    icon: Shield,
    text: 'Licensed & Insured',
  },
  {
    icon: Award,
    text: 'Schluter Certified Installer',
  },
  {
    icon: CheckCircle,
    text: 'Pre-Qualified: Layton Construction',
  },
];

export default function CredentialsStrip() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Trusted & Certified
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded"
              >
                <Icon className="w-6 h-6 text-[#B87333] flex-shrink-0" />
                <span className="text-sm md:text-base font-medium text-black text-center">
                  {credential.text}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
