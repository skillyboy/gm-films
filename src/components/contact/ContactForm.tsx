'use client';

import { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // In a real application, you would send the form data to a server here
      // For demonstration purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      setFormStatus('error');
      return error
    }
  };
  
  return (
    <div className="bg-gray-800 bg-opacity-50 p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-6 font-montserrat">
        Send Us a <span className="accent-gradient">Message</span>
      </h2>
      
      {formStatus === 'success' ? (
        <div className="bg-green-900 bg-opacity-50 border border-green-700 p-6 rounded">
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-300">
            Thank you for reaching out. We&apos;ll get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setFormStatus('idle')} 
            className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-sm font-medium tracking-wider uppercase transition-all duration-200"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="input-field rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field rounded-md"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
              Project Type <span className="text-accent">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="input-field rounded-md"
            >
              <option value="">Select Project Type</option>
              <option value="commercial">Commercial</option>
              <option value="film">Film/Documentary</option>
              <option value="music">Music Video</option>
              <option value="event">Event Coverage</option>
              <option value="equipment">Equipment Rental</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="input-field rounded-md"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-bright)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-8px_var(--accent-glow)] text-white text-sm font-medium tracking-wider uppercase transition-all duration-300 w-full md:w-auto disabled:bg-gray-700 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
            >
              {formStatus === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
          
          {formStatus === 'error' && (
            <div className="bg-red-900 bg-opacity-50 border border-red-700 p-4 text-white">
              An error occurred. Please try again later.
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;