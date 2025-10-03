import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import Container from '@/components/ui/Container';
import { COMPANY, CONTACT } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Column 1: About */}
            <div>
              <h3 className="text-xl font-bold mb-4">{COMPANY.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {COMPANY.description}
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-[#B87333] transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-300 hover:text-[#B87333] transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="text-gray-300 hover:text-[#B87333] transition-colors text-sm">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-300 hover:text-[#B87333] transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-300 hover:text-[#B87333] transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-medium text-sm mb-1">Commercial</p>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>Healthcare Facilities</li>
                    <li>Retail Spaces</li>
                    <li>Multi-Family Properties</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">Residential</p>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>Master Bathrooms</li>
                    <li>Custom Showers</li>
                    <li>Kitchen Backsplashes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-300">{CONTACT.location}</p>
                </div>
                <div>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-gray-300 hover:text-[#B87333] transition-colors block"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-gray-300 hover:text-[#B87333] transition-colors block"
                  >
                    {CONTACT.email}
                  </a>
                </div>
                <div className="pt-2">
                  <p className="text-gray-400 text-xs mb-1">Hours:</p>
                  <p className="text-gray-300 text-xs">Mon-Fri: 7AM-6PM</p>
                  <p className="text-gray-300 text-xs">Sat: 8AM-2PM</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#B87333] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#B87333] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Service Areas:</span>{' '}
              {CONTACT.serviceAreas.join(' • ')} & surrounding communities
            </p>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {COMPANY.name}. All rights reserved. • Veteran-Owned Business • Licensed & Insured
            </p>
            <p className="text-gray-500 text-xs italic">&quot;Your Project Is Our Mission&quot;</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
