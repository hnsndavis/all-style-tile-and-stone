import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function FounderStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1542909192-2f2241a99c9b?q=80&w=2680&auto=format&fit=crop)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>
          </div>

          {/* Right: Story */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                From Iraq to Idaho: Why We Do This Differently
              </h2>
              <p className="text-xl text-[#B87333] font-semibold">
                How a 17-year-old tile apprentice became an Iraq War veteran, then built Idaho&apos;s fastest-growing tile company on discipline and genuine passion.
              </p>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-black mb-2">The Beginning</h3>
                <p>
                  I started tiling at 17 in Orange County, California. I fell in love with the craft—the precision, the patterns, the transformation of raw materials into beautiful spaces.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">September 11, 2001</h3>
                <p>
                  I was driving to work when I noticed everyone&apos;s face looked different. Shocked. Afraid. When I arrived at the job site, my boss was hunched over a radio listening to reports about the Twin Towers. A few weeks later, I was in the Army.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Service & Return</h3>
                <p>
                  After serving in Iraq and earning my honorable discharge in 2005, I pursued education—UCLA, Baylor, even neuroscience. But something kept pulling me back to tile.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">The Realization</h3>
                <p>
                  I see tile the way art lovers see museums. I think about the journey—slabs cut from Italian quarries, intricate designs covering buildings in Morocco, the path from raw stone to someone&apos;s home. Most people don&apos;t understand that journey. I do. And it matters to me.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Taking Control</h3>
                <p>
                  For years I watched the math: I&apos;d knock out a backsplash in two days, get paid $320, and watch the owner collect $2,200. I wasn&apos;t upset—they built the business. But I knew I could do the same thing. So on January 13, 2023, All Style Tile & Stone was born.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Proving It Works</h3>
                <p>
                  Most new tile companies make $35,000 their first year. We made over $100,000. Not luck—veteran discipline meeting genuine passion. Major contractors noticed. Summit Properties called me back for a second location. Then a third. Then five more. Layton Construction pre-qualified us for hospital work worth $150K-$300K+.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-black mb-2 text-lg">Why This Matters to You</h3>
                <p className="text-black font-medium">
                  When you hire All Style Tile & Stone, you&apos;re not getting someone who stumbled into tile work. You&apos;re getting a craftsman who sees your project as art. Who brings military precision to every corner. Who built a company on passion first, profit second—and achieved both because of that order.
                </p>
                <p className="text-black font-medium mt-2">
                  Your project isn&apos;t just another job. It&apos;s my craft. My mission.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-gray-600 italic">
                  — Rich Odesheimer, Founder<br />
                  Iraq War Veteran | Tile Craftsman | Boise, Idaho
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button variant="accent" size="lg" asChild>
                <Link href="#quote">Request Your Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
