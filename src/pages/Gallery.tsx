import React, { useState } from 'react';
import { Filter, Star } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Shoes' },
    { id: 'formal', name: 'Formal' },
    { id: 'casual', name: 'Casual' },
    { id: 'loafers', name: 'Loafers' },
    { id: 'custom', name: 'Custom Design' }
  ];

  const shoes = [
    {
      id: 1,
      name: 'Executive Loafers',
      category: 'loafers',
      image: '/images/IMG-20250626-WA0029.jpg',
      material: 'Premium Leather',
      client: 'Business Executive',
      featured: true
    },
    {
      id: 2,
      name: 'Professional Dress Shoes',
      category: 'formal',
      image: '/images/IMG-20250626-WA0028.jpg',
      material: 'Handcrafted Leather',
      client: 'Corporate Leader',
      featured: true
    },
    {
      id: 3,
      name: 'Luxury Dress Shoes',
      category: 'formal',
      image: '/images/download.jpeg',
      material: 'Premium Calfskin',
      client: 'Style Enthusiast',
      featured: true
    },
    {
      id: 4,
      name: 'Casual Elegance',
      category: 'casual',
      image: '/images/download (1) copy.jpeg',
      material: 'Soft Leather',
      client: 'Fashion Forward',
      featured: true
    },
    {
      id: 5,
      name: 'Textured Sophistication',
      category: 'formal',
      image: '/images/IMG-20250626-WA0027.jpg',
      material: 'Textured Leather',
      client: 'Fashion Forward',
      featured: false
    },
    {
      id: 6,
      name: 'Classic Oxford',
      category: 'formal',
      image: '/images/IMG-20250626-WA0026.jpg',
      material: 'Patent Leather',
      client: 'Traditional Style',
      featured: false
    },
    {
      id: 7,
      name: 'Designer Collection',
      category: 'custom',
      image: '/images/third.jpeg',
      material: 'Premium Leather',
      client: 'Custom Design',
      featured: true
    },
    {
      id: 8,
      name: 'Signature Style',
      category: 'custom',
      image: '/images/second.jpeg',
      material: 'Custom Leather',
      client: 'Unique Vision',
      featured: false
    },
    {
      id: 9,
      name: 'Casual Comfort',
      category: 'casual',
      image: '/images/first.jpeg',
      material: 'Soft Nubuck',
      client: 'Weekend Warrior',
      featured: false
    }
  ];

  const filteredShoes = activeFilter === 'all' 
    ? shoes 
    : shoes.filter(shoe => shoe.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-cream-100 mb-6">
            Our Masterpieces
          </h1>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto">
            Each pair tells a story of excellence, crafted with passion and worn with pride. 
            Discover the artistry behind every step.
          </p>
        </div>
      </section>

      {/* Filter Section */}
<section className="py-8 bg-primary-800 sticky top-20 z-40">
  <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
    {/* 👇 This wrapper enables horizontal scroll and spacing */}
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gold-400">
      <div className="flex items-center space-x-2 min-w-max px-4 pb-2">
        <Filter className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
              activeFilter === filter.id
                ? 'bg-gold-500 text-primary-900'
                : 'bg-primary-700 text-cream-200 hover:bg-primary-600'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Gallery Grid */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShoes.map((shoe) => (
              <div key={shoe.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                  {shoe.featured && (
                    <div className="absolute top-4 left-4 z-10 flex items-center space-x-1 bg-gold-500 text-primary-900 px-2 py-1 rounded-full text-xs font-semibold">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden">
                    <img
                      src={shoe.image}
                      alt={shoe.name}
                      className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {shoe.name}
                    </h3>
                    <p className="text-primary-700 mb-2">
                      <span className="font-medium">Material:</span> {shoe.material}
                    </p>
                    <p className="text-primary-600 text-sm italic">
                      Created for: {shoe.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-6">
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-lg text-cream-200 mb-8">
            Join our gallery of satisfied clients and let us craft something extraordinary for you.
          </p>
          <a
            href="https://wa.me/2347063329071?text=Hi%20Charles-shoes,%20I%20saw%20your%20gallery%20and%20want%20to%20create%20my%20own%20masterpiece."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 hover:bg-gold-400 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Start My Order
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;