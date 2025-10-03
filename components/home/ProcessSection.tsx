import Container from '@/components/ui/Container';
import { Handshake, FileText, Hammer, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Handshake,
    title: 'CONNECT',
    subtitle: 'Strategic Consultation',
    description:
      'Detailed project assessment. Review plans, timelines, materials. Honest evaluation—if we can&apos;t do it excellently, we&apos;ll tell you.',
    timeline: '48-hour response',
  },
  {
    number: '02',
    icon: FileText,
    title: 'CONSULT',
    subtitle: 'Transparent Proposal',
    description:
      'Itemized scope, materials, pricing. No surprises. No hidden costs. Clear milestone payments.',
    timeline: '3-7 business days',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'INSTALL',
    subtitle: 'Flawless Execution',
    description:
      'Schluter waterproofing. Professional leveling systems. Daily updates. Military precision on every detail.',
    timeline: 'Project-specific',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'INSPECT',
    subtitle: 'Final Walkthrough',
    description:
      'Complete inspection together. Touch-ups if needed. Care instructions. Warranty documentation.',
    timeline: 'Same-day completion',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Battle-Tested Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gray-300 -z-10" />
                )}

                <div className="text-center">
                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-black text-white rounded-full mb-4">
                    <Icon size={40} />
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#B87333] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#B87333] font-semibold text-sm mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Timeline: {step.timeline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
