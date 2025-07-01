import React from 'react';
import { Award, Globe, Heart, Star, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-gold-500" />,
      title: "Uncompromising Quality",
      description: "Every stitch, every detail, every finish is executed to perfection."
    },
    {
      icon: <Heart className="h-8 w-8 text-gold-500" />,
      title: "Client-First Culture",
      description: "Your vision drives our creation. We listen, we adapt, we deliver."
    },
    {
      icon: <Zap className="h-8 w-8 text-gold-500" />,
      title: "Innovation in Tradition",
      description: "We honor timeless techniques while embracing modern innovation."
    },
    {
      icon: <Globe className="h-8 w-8 text-gold-500" />,
      title: "Global Ambition",
      description: "Building a worldwide community of discerning individuals who demand excellence."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-cream-100 mb-6">
              The Charles-shoes Story
            </h1>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              Born from a vision to redefine luxury footwear, Charles-shoes represents the pinnacle of craftsmanship, innovation, and personal expression.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/founder.jpg"
                alt="Charles - Founder & CEO"
                className="w-full h-86 object-cover object-center rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-6">
                Meet Charles
              </h2>
              <p className="text-lg text-primary-700 mb-6">
                Charles didn't just start a shoe company—he started a revolution. With over 5 years of experience in luxury craftsmanship and a vision that transcends traditional footwear, Charles founded this company to create more than just shoes.
              </p>
              <p className="text-lg text-primary-700 mb-6">
                "Every pair we create is a testament to the wearer's individuality. We're not just making shoes; we're crafting confidence, style, and legacy."
              </p>
              <blockquote className="text-xl font-serif italic text-gold-800 border-l-4 border-gold-500 pl-6">
                "True luxury isn't about what everyone else is wearing. It's about what makes you feel unstoppable."
              </blockquote>
              <p className="text-sm text-primary-600 mt-2">— Charles, Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-cream-200 max-w-4xl mx-auto">
              To revolutionize the luxury footwear industry by creating bespoke shoes that don't just fit your feet—they fit your soul. We believe that the right pair of shoes can change how you walk through the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-primary-700/50 hover:bg-primary-700 transition-all duration-300 h-full">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  {value.title}
                </h3>
                <p className="text-cream-200">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Vision */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-6">
                Global Ambition
              </h2>
              <p className="text-lg text-cream-200 mb-6">
                Charles-shoes isn't just a local brand—we're building a global empire of excellence. Our vision extends far beyond creating beautiful shoes; we're establishing a worldwide community of individuals who refuse to settle for ordinary.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-gold-500 mt-1" />
                  <div>
                    <h4 className="text-cream-100 font-semibold">Market Leadership</h4>
                    <p className="text-cream-300">Positioned to dominate the luxury footwear space globally</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-gold-500 mt-1" />
                  <div>
                    <h4 className="text-cream-100 font-semibold">Elite Clientele</h4>
                    <p className="text-cream-300">Serving CEOs, celebrities, and visionaries worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-gold-500 mt-1" />
                  <div>
                    <h4 className="text-cream-100 font-semibold">Global Expansion</h4>
                    <p className="text-cream-300">Strategic growth into key international markets</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section className="py-20 bg-gold-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <h3 className="text-4xl font-bold text-primary-900 mb-2">500+</h3>
        <p className="text-primary-800 font-semibold">Satisfied Clients</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-primary-900 mb-2">1000+</h3>
        <p className="text-primary-800 font-semibold">Pairs Crafted</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-primary-900 mb-2">15+</h3>
        <p className="text-primary-800 font-semibold">Countries Served</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-primary-900 mb-2">99%</h3>
        <p className="text-primary-800 font-semibold">Client Satisfaction</p>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-6">
            Join Our Legacy
          </h2>
          <p className="text-lg text-cream-200 mb-8">
            Be part of a brand that's redefining luxury, one step at a time.
          </p>
          <a
            href="https://wa.me/2347063329071?text=Hi%20Charles-shoes,%20I%20want%20to%20be%20part%20of%20your%20legacy."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 hover:bg-gold-400 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;