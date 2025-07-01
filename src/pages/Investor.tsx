import React from 'react';
import { TrendingUp, Globe, Users, Award, Target, DollarSign, BarChart3, Zap } from 'lucide-react';

const Investor = () => {
  const metrics = [
    { value: "500+", label: "Satisfied Clients", icon: <Users className="h-6 w-6" /> },
    { value: "1000+", label: "Pairs Crafted", icon: <Award className="h-6 w-6" /> },
    { value: "15+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> },
    { value: "99%", label: "Client Retention", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const opportunities = [
    {
      icon: <TrendingUp className="h-8 w-8 text-gold-500" />,
      title: "Market Growth",
      description: "Luxury footwear market projected to reach $45B by 2027, growing at 8.1% CAGR"
    },
    {
      icon: <Target className="h-8 w-8 text-gold-500" />,
      title: "Underserved Premium Segment",
      description: "Bespoke footwear represents only 2% of luxury market with 300% price premium"
    },
    {
      icon: <Globe className="h-8 w-8 text-gold-500" />,
      title: "Global Expansion",
      description: "Ready to scale into key markets: US, UK, UAE, and Asia-Pacific"
    },
    {
      icon: <Zap className="h-8 w-8 text-gold-500" />,
      title: "Digital-First Approach",
      description: "Leveraging technology for design, customer experience, and global reach"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-cream-100 mb-6">
            Invest in the Future of
            <span className="block text-gold-500">Luxury Footwear</span>
          </h1>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto mb-8">
            Join us in revolutionizing the luxury footwear industry through exceptional craftsmanship, innovative technology, and global expansion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:investors@charles-shoes.com"
              className="bg-gold-500 hover:bg-gold-400 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Request Pitch Deck
            </a>
            <a
              href="#contact"
              className="border-2 border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-primary-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Meeting
            </a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-6">
                Company Vision & Mission
              </h2>
              <p className="text-lg text-primary-700 mb-6">
                Charles-shoes is positioned to become the world's premier bespoke footwear brand, 
                combining traditional craftsmanship with cutting-edge technology to serve the global luxury market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-gold-500 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Vision</h4>
                    <p className="text-primary-700">To be the global leader in bespoke luxury footwear</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gold-500 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Mission</h4>
                    <p className="text-primary-700">Creating exceptional footwear that defines personal style and builds lasting legacy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gold-500 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Values</h4>
                    <p className="text-primary-700">Craftsmanship, innovation, exclusivity, and client-centricity</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Company Vision"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Track Record of Excellence
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              Our performance metrics demonstrate strong market traction and growth potential.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center bg-primary-700 p-6 rounded-lg">
                <div className="flex justify-center text-gold-500 mb-3">
                  {metric.icon}
                </div>
                <h3 className="text-3xl font-bold text-cream-100 mb-2">{metric.value}</h3>
                <p className="text-cream-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Market Opportunity
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              The luxury footwear market presents unprecedented opportunities for growth and expansion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-primary-800 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {opportunity.icon}
                  <h3 className="text-xl font-semibold text-cream-100 ml-3">
                    {opportunity.title}
                  </h3>
                </div>
                <p className="text-cream-200">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-4">
              Competitive Advantages
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              What sets Charles-shoes apart in the luxury footwear market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <BarChart3 className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Premium Positioning
              </h3>
              <p className="text-primary-700">
                Positioned in the ultra-premium segment with 300-500% markup over mass market
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Artisan Craftsmanship
              </h3>
              <p className="text-primary-700">
                Master craftsmen with 15+ years experience creating heirloom-quality footwear
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Globe className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Global Reach
              </h3>
              <p className="text-primary-700">
                Digital-first approach enabling worldwide market penetration with minimal overhead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Growth Projections
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              Conservative financial projections based on market analysis and current performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-700 p-8 rounded-lg text-center">
              <DollarSign className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-cream-100 mb-2">Year 1</h3>
              <p className="text-gold-500 text-lg font-semibold mb-2">$2.5M Revenue</p>
              <p className="text-cream-300">1,000+ pairs | 500+ clients</p>
            </div>
            
            <div className="bg-primary-700 p-8 rounded-lg text-center">
              <TrendingUp className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-cream-100 mb-2">Year 3</h3>
              <p className="text-gold-500 text-lg font-semibold mb-2">$8M Revenue</p>
              <p className="text-cream-300">3,500+ pairs | 1,500+ clients</p>
            </div>
            
            <div className="bg-primary-700 p-8 rounded-lg text-center">
              <BarChart3 className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-cream-100 mb-2">Year 5</h3>
              <p className="text-gold-500 text-lg font-semibold mb-2">$20M Revenue</p>
              <p className="text-cream-300">8,000+ pairs | 3,500+ clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Ask */}
      <section className="py-20 bg-gold-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-6">
            Investment Opportunity
          </h2>
          <p className="text-lg text-primary-800 mb-8">
            Seeking $2M Series A funding to accelerate global expansion, technology development, and team growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Use of Funds</h3>
              <ul className="text-left space-y-2 text-primary-700">
                <li>• 40% - Global expansion & marketing</li>
                <li>• 30% - Technology & platform development</li>
                <li>• 20% - Team expansion & operations</li>
                <li>• 10% - Working capital & inventory</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Expected Returns</h3>
              <ul className="text-left space-y-2 text-primary-700">
                <li>• 5x revenue growth in 3 years</li>
                <li>• 15x potential exit valuation</li>
                <li>• Strong recurring revenue model</li>
                <li>• Premium market positioning</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:investors@charles-shoes.com"
              className="bg-primary-900 hover:bg-primary-800 text-cream-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Request Full Pitch Deck
            </a>
            <a
              href="https://wa.me/2347063329071?text=Hi%20Charles-shoes,%20I'm%20interested%20in%20discussing%20investment%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-cream-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investor;