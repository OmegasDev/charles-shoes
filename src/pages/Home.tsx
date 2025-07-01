import React from 'react';
import { ArrowRight, Star, Sparkles, Crown, Heart, Award, Users, Globe, Hammer, Palette, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Crown className="h-8 w-8 text-gold-500" />,
      title: "Royal Craftsmanship",
      description: "Each pair is handcrafted with centuries-old techniques, ensuring unparalleled quality and durability."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-gold-500" />,
      title: "Bespoke Design",
      description: "Your vision, our expertise. Every detail is tailored to match your unique style and personality."
    },
    {
      icon: <Heart className="h-8 w-8 text-gold-500" />,
      title: "Legacy Creation",
      description: "We don't just make shoes - we create legacy pieces that tell your story with every step."
    }
  ];

  const services = [
    {
      icon: <Palette className="h-8 w-8 text-gold-500" />,
      title: "Custom Design",
      description: "From concept to creation, we bring your unique vision to life with personalized design consultations."
    },
    {
      icon: <Hammer className="h-8 w-8 text-gold-500" />,
      title: "Expert Craftsmanship",
      description: "Master artisans with decades of experience create each pair using traditional techniques."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-gold-500" />,
      title: "Personal Consultation",
      description: "One-on-one consultations to understand your style, needs, and preferences perfectly."
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-gold-500" />,
      title: "Premium Materials",
      description: "Only the finest Italian leather and exotic materials make it into our workshop."
    },
    {
      icon: <Users className="h-8 w-8 text-gold-500" />,
      title: "Master Artisans",
      description: "Our craftsmen have decades of experience in luxury footwear creation."
    },
    {
      icon: <Globe className="h-8 w-8 text-gold-500" />,
      title: "Global Vision",
      description: "Building a worldwide brand that represents excellence and innovation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1444471/pexels-photo-1444471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-cream-100 mb-6 animate-fade-in">
            Built Different.
            <span className="block text-gold-500">Worn Bold.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-cream-200 mb-4 animate-slide-up">
            You dream it — Charles-shoes makes it.
          </p>
          
          <p className="text-lg text-cream-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            Every pair is handcrafted to match your taste, energy, and vision. 
            This isn't fashion, it's your legacy in motion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="https://wa.me/2347063329071?text=Hi%20Charles-shoes,%20I'm%20interested%20in%20a%20custom%20pair."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-400 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Order on WhatsApp</span>
              <ArrowRight size={20} />
            </a>
            <Link
              to="/gallery"
              className="border-2 border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-primary-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Why Choose Charles-shoes?
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern innovation to create footwear that's truly exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-primary-700/50 hover:bg-primary-700 transition-all duration-300 h-full">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Crafted with Precision
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              Each pair tells a story of excellence, from concept to creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/first.jpeg"
                alt="Luxury Dress Shoes"
                className="w-full h-54 object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6 bg-cream-400">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Executive Dress Shoes</h3>
                <p className="text-primary-700">Sophisticated style for the modern professional</p>
              </div>
            </div>
            
            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/second.jpeg"
                alt="Casual Elegance"
                className="w-full h-54 object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6 bg-cream-400">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Casual Elegance</h3>
                <p className="text-primary-700">Refined comfort for everyday excellence</p>
              </div>
            </div>
            
            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/third.jpeg"
                alt="Premium Loafers"
                className="w-full h-54 object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6 bg-cream-400">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Premium Loafers</h3>
                <p className="text-primary-700">Luxury meets comfort in perfect harmony</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="bg-gold-500 hover:bg-gold-400 text-primary-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>View Full Gallery</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              From initial consultation to final delivery, we provide comprehensive services to ensure your perfect pair.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-primary-600 p-8 rounded-lg shadow-lg text-center hover:bg-primary-500 transition-all duration-300 h-full">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-cream-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gold-500 hover:bg-gold-400 text-primary-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Explore All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

   {/* About Preview Section */}
<section className="py-20 bg-cream-400">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Title + Image side by side */}
    <div className="flex flex-row-reverse items-center gap-4 mb-8">
      <img
        src="/images/founder.jpg"
        alt="Charles - Founder & CEO"
        className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover object-center shadow-md"
      />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary-900">
        The Charles-shoes Story
      </h2>
    </div>

    {/* Full-width text underneath */}
    <div className="space-y-6">
      <p className="text-base sm:text-lg text-primary-700">
        Born from a vision to redefine luxury footwear, Charles-shoes represents the pinnacle of craftsmanship, innovation, and personal expression. We don't just create shoes—we craft confidence, style, and legacy.
      </p>
      <p className="text-base sm:text-lg text-primary-700">
        With over 15 years of experience in luxury craftsmanship, our founder Charles started this company to create more than just shoes. Every pair we create is a testament to the wearer's individuality.
      </p>
      <blockquote className="text-base sm:text-xl font-serif italic text-gold-600 border-l-4 border-gold-500 pl-4 sm:pl-6">
        "True luxury isn't about what everyone else is wearing. It's about what makes you feel unstoppable."
      </blockquote>
      <Link
        to="/about"
        className="bg-primary-900 hover:bg-primary-800 text-cream-100 px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
      >
        <span>Learn More About Us</span>
        <ArrowRight size={18} />
      </Link>
    </div>

  </div>
</section>


      {/* Company Achievements */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Building Excellence
            </h2>
            <p className="text-xl text-gold-500 font-semibold">
              From Vision to Reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-primary-700 p-6 rounded-lg shadow-lg text-center h-full">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-cream-200">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-300">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-4">
            Ready to Create Your Legacy?
          </h2>
          <p className="text-lg text-primary-800 mb-8">
            Join the ranks of legends who trust Charles-shoes with their most important steps.
          </p>
          <a
            href="https://wa.me/2347063329071?text=Hi%20Charles-shoes,%20I'm%20ready%20to%20create%20my%20legacy%20with%20a%20custom%20pair."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-900 hover:bg-primary-700 text-cream-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your Order</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;