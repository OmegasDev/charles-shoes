import React from 'react';
import { Palette, Hammer, MessageCircle, Ruler, Truck, Star, Clock, Award } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <MessageCircle className="h-12 w-12 text-gold-500" />,
      title: "Personal Consultation",
      description: "One-on-one consultations to understand your style, needs, and preferences perfectly.",
      features: [
        "Style preference analysis",
        "Lifestyle assessment",
        "Budget planning",
        "Timeline discussion"
      ],
      duration: "1-2 hours",
      price: "Complimentary"
    },
    {
      icon: <Palette className="h-12 w-12 text-gold-500" />,
      title: "Custom Design",
      description: "From concept to creation, we bring your unique vision to life with personalized design consultations.",
      features: [
        "Digital design mockups",
        "Material selection",
        "Color matching",
        "Hardware choices"
      ],
      duration: "2-3 days",
      price: "Included in shoe price"
    },
    {
      icon: <Ruler className="h-12 w-12 text-gold-500" />,
      title: "Precision Fitting",
      description: "Advanced measurement techniques ensure a perfect fit that complements your unique foot shape.",
      features: [
        "3D foot scanning",
        "Gait analysis",
        "Comfort mapping",
        "Multiple fittings"
      ],
      duration: "1 hour",
      price: "Included"
    },
    {
      icon: <Hammer className="h-12 w-12 text-gold-500" />,
      title: "Master Craftsmanship",
      description: "Expert artisans with decades of experience create each pair using traditional techniques.",
      features: [
        "Hand-cutting leather",
        "Traditional stitching",
        "Quality control",
        "Finishing touches"
      ],
      duration: "2-3 weeks",
      price: "Core service"
    },
    {
      icon: <Truck className="h-12 w-12 text-gold-500" />,
      title: "Premium Delivery",
      description: "Your masterpiece is carefully packaged and delivered with white-glove service.",
      features: [
        "Luxury packaging",
        "Secure delivery",
        "Final fitting",
        "Care instructions"
      ],
      duration: "1-2 days",
      price: "Complimentary"
    }
  ];

  const additionalServices = [
    {
      icon: <Star className="h-6 w-6 text-gold-500" />,
      title: "Rush Orders",
      description: "Expedited service for urgent requirements",
      price: "Additional 50%"
    },
    {
      icon: <Clock className="h-6 w-6 text-gold-500" />,
      title: "Express Consultation",
      description: "Same-day consultation and design approval",
      price: "$200"
    },
    {
      icon: <Award className="h-6 w-6 text-gold-500" />,
      title: "VIP Package",
      description: "Priority service with dedicated craftsman",
      price: "Premium tier"
    }
  ];

  const processSteps = [
    { step: 1, title: "Consultation", description: "Understanding your vision and requirements" },
    { step: 2, title: "Design", description: "Creating your personalized shoe design" },
    { step: 3, title: "Measurement", description: "Precise fitting and comfort assessment" },
    { step: 4, title: "Crafting", description: "Master artisans bring your vision to life" },
    { step: 5, title: "Delivery", description: "Premium delivery and final fitting" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-cream-100 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto">
            From initial consultation to premium delivery, we provide comprehensive services to ensure your perfect pair of Charles-shoes.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-4">
              Complete Service Experience
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Every aspect of your journey with Charles-shoes is carefully crafted to exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-primary-700 mb-6 text-center flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-primary-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-primary-200 pt-4 mt-auto">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary-600">Duration:</span>
                    <span className="font-medium text-primary-900">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-primary-600">Investment:</span>
                    <span className="font-medium text-gold-600">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              A seamless journey from your first consultation to wearing your perfect pair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gold-500 text-primary-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-cream-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-cream-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Premium Add-Ons
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              Enhanced services for those who demand the absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-primary-800 p-6 rounded-lg text-center h-full">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-cream-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-cream-300 mb-3">
                  {service.description}
                </p>
                <p className="text-gold-500 font-semibold">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 bg-gold-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-6">
            Our Service Guarantee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Perfect Fit Promise</h3>
              <p className="text-primary-700">If your shoes don't fit perfectly, we'll remake them at no charge.</p>
            </div>
            <div className="bg-white p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Quality Assurance</h3>
              <p className="text-primary-700">Every pair undergoes rigorous quality control before delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Lifetime Support</h3>
              <p className="text-primary-700">Ongoing care and maintenance services for the life of your shoes.</p>
            </div>
          </div>
          <a
            href="https://wa.me/2347063329071?text=Hi%20Charles-shoes,%20I'd%20like%20to%20learn%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-900 hover:bg-primary-800 text-cream-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Service Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;