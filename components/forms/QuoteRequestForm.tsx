'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const quoteFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  timeline: z.string().min(1, 'Please select a timeline'),
  projectDescription: z.string().min(10, 'Please provide more details about your project'),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export default function QuoteRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    // TODO: Implement form submission logic (e.g., send to API endpoint)
    console.log('Form data:', data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert('Thank you! We\'ll be in touch within 24 hours.');
    reset();
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-white">
      <Container maxWidth="narrow">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Request Your Project Quote
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your project and we&apos;ll respond within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-4 py-3 border-2 border-black focus:border-[#B87333] outline-none transition-colors"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                Email Address *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 border-2 border-black focus:border-[#B87333] outline-none transition-colors"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                Phone Number *
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border-2 border-black focus:border-[#B87333] outline-none transition-colors"
                placeholder="(208) 555-1234"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Project Type & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-black mb-2">
                Project Type *
              </label>
              <select
                {...register('projectType')}
                id="projectType"
                className="w-full px-4 py-3 border-2 border-black focus:border-[#B87333] outline-none transition-colors bg-white"
              >
                <option value="">Select project type</option>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
                <option value="bathroom">Bathroom Remodel</option>
                <option value="kitchen">Kitchen Backsplash</option>
                <option value="shower">Custom Shower</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold text-black mb-2">
                Timeline *
              </label>
              <select
                {...register('timeline')}
                id="timeline"
                className="w-full px-4 py-3 border-2 border-black focus:border-[#B87333] outline-none transition-colors bg-white"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (Within 1 month)</option>
                <option value="1-3months">1-3 Months</option>
                <option value="3-6months">3-6 Months</option>
                <option value="6+months">6+ Months</option>
                <option value="planning">Just Planning</option>
              </select>
              {errors.timeline && (
                <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
              )}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className="block text-sm font-semibold text-black mb-2">
              Project Description *
            </label>
            <textarea
              {...register('projectDescription')}
              id="projectDescription"
              rows={5}
              className="w-full px-4 py-3 border-2 border-black focus:border-[#B87333] outline-none transition-colors resize-none"
              placeholder="Tell us about your project: location, size, specific requirements, etc."
            />
            {errors.projectDescription && (
              <p className="mt-1 text-sm text-red-600">{errors.projectDescription.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full md:w-auto md:min-w-[300px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Quote'}
            </Button>
          </div>

          <p className="text-sm text-gray-600 text-center">
            We typically respond within 24 hours. For urgent inquiries, please call (208) XXX-XXXX
          </p>
        </form>
      </Container>
    </section>
  );
}
