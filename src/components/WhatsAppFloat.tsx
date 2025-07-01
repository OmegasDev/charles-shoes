import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    shoeType: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Charles-shoes! I'm interested in a custom pair.
    
Name: ${formData.name}
Shoe Type: ${formData.shoeType}
Budget Range: ${formData.budget}

I'd like to discuss the details.`;

    const whatsappUrl = `https://wa.me/2347063329071?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setFormData({ name: '', shoeType: '', budget: '' });
  };

  const quickMessage = () => {
    const message = "Hi Charles-shoes, I'm interested in a custom pair. Let's discuss!";
    const whatsappUrl = `https://wa.me/2347063329071?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 animate-float">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl w-80 p-6 animate-slide-up">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">Start Your Order</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-primary-900"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">Shoe Type</label>
              <select
                value={formData.shoeType}
                onChange={(e) => setFormData({...formData, shoeType: e.target.value})}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-primary-900"
                required
              >
                <option value="">Select shoe type</option>
                <option value="Formal/Dress Shoes">Formal/Dress Shoes</option>
                <option value="Casual Loafers">Casual Loafers</option>
                <option value="Boots">Boots</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Custom Design">Custom Design</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">Budget Range</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-primary-900"
                required
              >
                <option value="">Select budget range</option>
                <option value="$200-$400">$200-$400</option>
                <option value="$400-$600">$400-$600</option>
                <option value="$600-$1000">$600-$1000</option>
                <option value="$1000+">$1000+</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Send size={16} />
              <span>Send to WhatsApp</span>
            </button>
          </form>
          
          <div className="mt-4 pt-4 border-t border-primary-200">
            <button
              onClick={quickMessage}
              className="w-full text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200"
            >
              Quick message instead
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;