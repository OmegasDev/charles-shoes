import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Charles-shoes,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/2347063329071?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8 text-gold-500" />,
      title: "WhatsApp",
      description: "Fastest response time",
      contact: "+234 706 332 9071",
      action: "Chat Now",
      link: "https://wa.me/2347063329071"
    },
    {
      icon: <Phone className="h-8 w-8 text-gold-500" />,
      title: "Phone",
      description: "Direct consultation",
      contact: "08103821821",
      action: "Call Now",
      link: "tel:08103821821"
    },
    {
      icon: <Mail className="h-8 w-8 text-gold-500" />,
      title: "Email",
      description: "Detailed inquiries",
      contact: "hello@charles-shoes.com",
      action: "Send Email",
      link: "mailto:hello@charles-shoes.com"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, name: "Instagram", link: "#" },
    { icon: <Twitter className="h-6 w-6" />, name: "Twitter", link: "#" },
    { icon: <Facebook className="h-6 w-6" />, name: "Facebook", link: "#" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-cream-100 mb-6">
            Let's Create Something
            <span className="block text-gold-500">Extraordinary</span>
          </h1>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto">
            Ready to start your journey with Charles-shoes? We're here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Choose your preferred way to connect with us. We're committed to responding quickly and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-primary-600 mb-4">
                  {method.description}
                </p>
                <p className="text-primary-800 font-medium mb-6">
                  {method.contact}
                </p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-primary-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-100 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-cream-200">
              Prefer to write? Fill out the form below and we'll get back to you promptly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="New Order">New Order</option>
                    <option value="Consultation">Consultation Request</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Tell us about your vision, requirements, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-primary-900 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send to WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Business Hours & Info */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-cream-100 mb-8">
                Business Hours
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold-500" />
                  <div>
                    <p className="text-cream-100 font-medium">Monday - Friday</p>
                    <p className="text-cream-300">9:00 AM - 6:00 PM WAT</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold-500" />
                  <div>
                    <p className="text-cream-100 font-medium">Saturday</p>
                    <p className="text-cream-300">10:00 AM - 4:00 PM WAT</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold-500" />
                  <div>
                    <p className="text-cream-100 font-medium">Sunday</p>
                    <p className="text-cream-300">Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-cream-100 mb-4">
                  Emergency Consultations
                </h3>
                <p className="text-cream-300">
                  Need urgent assistance? WhatsApp us anytime - we monitor messages 24/7 for time-sensitive requests.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-cream-100 mb-8">
                Follow Our Journey
              </h2>
              <p className="text-cream-300 mb-6">
                Stay updated with our latest creations, behind-the-scenes content, and client success stories.
              </p>
              
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="bg-primary-800 hover:bg-gold-500 text-cream-100 hover:text-primary-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="bg-primary-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  Response Time
                </h3>
                <ul className="space-y-2 text-cream-300">
                  <li>• WhatsApp: Within 30 minutes (business hours)</li>
                  <li>• Email: Within 2 hours (business hours)</li>
                  <li>• Phone: Immediate during business hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;