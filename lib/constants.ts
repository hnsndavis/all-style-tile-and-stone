// Design System Constants

export const COLORS = {
  primary: '#000000',
  secondary: '#FFFFFF',
  accent: '#B87333',
  accentHover: '#9A5F28',
  accentLight: '#D4A574',
  gray50: '#F5F5F5',
  gray100: '#E5E5E5',
  gray200: '#D1D1D1',
  gray900: '#1A1A1A',
} as const;

export const TYPOGRAPHY = {
  h1: 'text-6xl md:text-7xl font-bold leading-tight',
  h2: 'text-4xl md:text-5xl font-bold leading-tight',
  h3: 'text-3xl md:text-4xl font-bold leading-tight',
  h4: 'text-2xl md:text-3xl font-bold leading-tight',
  bodyLg: 'text-lg md:text-xl leading-relaxed',
  body: 'text-base leading-relaxed',
  small: 'text-sm leading-relaxed',
} as const;

export const SPACING = {
  section: 'py-16 md:py-24 lg:py-32',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
} as const;

export const CONTACT = {
  email: 'rich@allstyletileandstone.com',
  phone: '(208) XXX-XXXX',
  location: 'Boise, Idaho',
  founded: 'January 2023',
  serviceAreas: ['Boise', 'Meridian', 'Nampa', 'Eagle', 'Kuna'],
} as const;

export const COMPANY = {
  name: 'All Style Tile & Stone',
  tagline: 'Veteran-Owned Excellence in Commercial & Residential Tile',
  description: 'Veteran-owned tile installation delivering commercial precision and residential artistry across Idaho since 2023.',
} as const;
