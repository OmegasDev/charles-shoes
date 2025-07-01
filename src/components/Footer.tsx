import React from 'react';
import { Crown, Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-800 border-t border-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-gold-500" />
              <span className="text-2xl font-serif font-bold text-cream-100">
                Charles-shoes
              </span>
            </div>
            <p className="text-cream-200 mb-4 max-w-md">
              Handcrafted luxury footwear tailored to your unique style. 
              Built Different. Worn Bold.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-200 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-200 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cream-200 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream-100 font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-cream-200 hover:text-gold-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-cream-200 hover:text-gold-500 transition-colors">
                About Us
              </Link>
              <Link to="/gallery" className="block text-cream-200 hover:text-gold-500 transition-colors">
                Gallery
              </Link>
              <Link to="/process" className="block text-cream-200 hover:text-gold-500 transition-colors">
                Process
              </Link>
              <Link to="/services" className="block text-cream-200 hover:text-gold-500 transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-cream-200 hover:text-gold-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream-100 font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-cream-200">
                <Phone size={16} />
                <span>08103821821</span>
              </div>
              <div className="flex items-center space-x-2 text-cream-200">
                <Mail size={16} />
                <span>hello@charles-shoes.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-200 text-sm">
              © 2024 Charles-shoes. All rights reserved.
            </p>
            <p className="text-cream-200 text-sm italic">
              "Built for Legends. Worn by Kings"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;