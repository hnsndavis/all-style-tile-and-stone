import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Kimber M.',
    role: 'HR Executive & Business Owner',
    content:
      'Rich and his team completely transformed our home. Three custom showers, an entire master bedroom feature wall with complex patterns, our addition, and fireplace—every detail is absolute perfection. As someone who evaluates businesses professionally, I recognize operational excellence when I see it. I\'ve been connecting him with decision-makers at my networks because when you find a contractor this reliable, you don\'t keep it to yourself.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Summit Properties',
    role: 'Commercial Property Management',
    content:
      'We\'ve brought All Style Tile & Stone back for five locations and counting. Their reliability and quality keep our projects on schedule. Rich and his team understand the demands of multi-location retail work.',
    rating: 5,
    company: 'Summit Properties',
  },
  {
    id: 3,
    name: 'General Contractor',
    role: 'Project Manager',
    content:
      'Pre-qualifying All Style was an easy decision. Their veteran-level discipline and communication make them a contractor we can count on for complex projects. They show up, do excellent work, and finish on time.',
    rating: 5,
    company: 'Layton Construction Partner',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 md:p-8 h-full flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#B87333] text-[#B87333]"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow">
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                {testimonial.company && (
                  <p className="text-sm text-[#B87333] font-medium mt-1">
                    {testimonial.company}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
