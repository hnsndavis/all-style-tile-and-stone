import Container from '@/components/ui/Container';

export default function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container maxWidth="narrow">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Built on Discipline. Driven by Craft.
          </h2>

          <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              All Style Tile & Stone delivers precision tile installations for major commercial contractors and discerning homeowners across Idaho. Since 2023, we&apos;ve earned the trust of general contractors like Layton Construction for hospital projects and Summit Properties for multi-location retail installations.
            </p>

            <p>
              Founded by Iraq War veteran Rich Odesheimer, we bring 20+ years of tile expertise and military-level discipline to every project—from $150K-$300K commercial contracts to custom luxury bathrooms.
            </p>

            <p className="font-semibold text-black">
              We&apos;re not the cheapest option. We&apos;re the reliable one. The partner who shows up, communicates clearly, and delivers work that lasts.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
