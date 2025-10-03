'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import type { ProjectType } from '@/lib/types';

const projects = [
  {
    id: '1',
    title: 'St. Luke\'s Hospital Partnership',
    category: 'commercial' as ProjectType,
    location: 'Boise, ID',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Albertsons - Multiple Locations',
    category: 'commercial' as ProjectType,
    location: 'Treasure Valley',
    year: '2023-2024',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Sisu Cold Plunge & Spa',
    category: 'commercial' as ProjectType,
    location: 'Meridian, ID',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Complete Luxury Home Install',
    category: 'residential' as ProjectType,
    location: 'Boise, ID',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Master Suite - 3 Custom Showers',
    category: 'residential' as ProjectType,
    location: 'Eagle, ID',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Master Bedroom Feature Wall',
    category: 'custom' as ProjectType,
    location: 'Boise, ID',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2532&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Fireplace Transformation',
    category: 'residential' as ProjectType,
    location: 'Meridian, ID',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'Kitchen Backsplash - Custom Pattern',
    category: 'residential' as ProjectType,
    location: 'Nampa, ID',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2568&auto=format&fit=crop',
  },
  {
    id: '9',
    title: 'Multi-Family Common Areas',
    category: 'commercial' as ProjectType,
    location: 'Boise, ID',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2532&auto=format&fit=crop',
  },
];

type FilterOption = 'all' | ProjectType;

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const filters: { label: string; value: FilterOption }[] = [
    { label: 'All', value: 'all' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Residential', value: 'residential' },
    { label: 'Custom Work', value: 'custom' },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Proven Work Across Idaho
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 font-semibold transition-all ${
                activeFilter === filter.value
                  ? 'bg-black text-white'
                  : 'bg-white text-black border-2 border-black hover:bg-gray-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} hover>
              <div className="relative h-80 overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">
                    {project.location} • {project.year}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-[#B87333] text-white text-xs font-semibold uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">View Complete Portfolio →</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
