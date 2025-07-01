import React from 'react';
import { MessageCircle, Ruler, Palette, Hammer, Truck, Crown } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: <MessageCircle className="h-12 w-12 text-gold-500" />,
      title: "Initial Consultation",
      description: "We start with a comprehensive discussion about your vision, style preferences, and requirements.",
      details: [
        "WhatsApp or phone consultation",
        "Style preference analysis",
        "Budget and timeline discussion",
        "Material preferences"
      ]
    },
    {
      id: 2,
      icon: <Ruler className="h-12 w-12 text-gold-500" />,
      title: "Precise Measurements",
      description: "Our experts take detailed measurements to ensure a perfect fit that complements your unique foot shape.",
      details: [
        "3D foot scanning technology",
        "Gait analysis",
        "Comfort preference mapping",
        "Fitting consultation"
      ]
    },
    {
      id: 3,
      icon: <Palette className="h-12 w-12 text-gold-500" />,
      title: "Design & Customization",
      description: "We create detailed designs and select premium materials that bring your vision to life.",
      details: [
        "Digital design mockups",
        "Material selection",
        "Color matching",
        "Hardware and accent choices"
      ]
    },
    {
      id: 4,
      icon: <Hammer className="h-12 w-12 text-gold-500" />,
      title: "Master Craftsmanship",
      description: "Our skilled artisans handcraft your shoes using time-honored techniques and modern precision.",
      details: [
        "Hand-cutting premium leather",
        "Traditional stitching methods",
        "Quality control checks",
        "Finishing touches"
      ]
    },
    {
      id: 5,
      icon: <Truck className="h-12 w-12 text-gold-500" />,
      title: "Delivery & Fitting",
      description: "Your masterpiece is carefully packaged and delivered, with final fitting adjustments if needed.",
      details: [
        "Luxury packaging",
        "Secure delivery",
        "Final fitting session",
        "Care instructions"
      ]
    },
    
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-cream-100 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto">
            From concept to creation, discover the meticulous process that transforms your vision into a handcrafted masterpiece.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-primary-900 text-cream-100 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {step.id}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {step.icon}
                          <h3 className="text-2xl font-serif font-bold text-primary-900 ml-3">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-primary-700 mb-6">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-primary-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-gold-500/20 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              Quality craftsmanship takes time. Here's what to expect on your journey to owning a pair of Charles-shoes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold-500 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1-2
              </div>
              <h3 className="text-xl font-semibold text-cream-100 mb-2">Days</h3>
              <p className="text-cream-200">Consultation & Design</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-500 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2-3
              </div>
              <h3 className="text-xl font-semibold text-cream-100 mb-2">Weeks</h3>
              <p className="text-cream-200">Handcrafting Process</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-500 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1-2
              </div>
              <h3 className="text-xl font-semibold text-cream-100 mb-2">Days</h3>
              <p className="text-cream-200">Delivery & Fitting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-primary-800 mb-8">
            Start your consultation today and take the first step toward owning a pair of Charles-shoes.
          </p>
          <a
            href="https://wa.me/2347063329071?text=Hi%20Charles-shoes,%20I'm%20ready%20to%20start%20my%20journey.%20Let's%20begin%20with%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-900 hover:bg-primary-800 text-cream-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Start My Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Process;