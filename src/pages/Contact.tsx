
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus({
        success: true,
        message: "Thank you for contacting Consult Park. We'll get back to you shortly."
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="bg-consult-teal text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a88e9e9d-6d36-4a71-8e9e-621570e14e9d.png" 
              alt="Consult Park Logo" 
              className="h-10" 
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-consult-green transition-colors">Home</Link>
            <Link to="/about" className="hover:text-consult-green transition-colors">About</Link>
            <Link to="/services" className="hover:text-consult-green transition-colors">Services</Link>
            <Link to="/bpo" className="hover:text-consult-green transition-colors">BPO</Link>
            <Link to="/contact" className="text-consult-green">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consult-teal to-consult-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help your business thrive
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-consult-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-consult-green">
                <h2 className="text-2xl text-consult-teal mb-4">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
                
                {submitStatus.success && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
                    <p>{submitStatus.message}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-consult-green"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-consult-green"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-consult-green"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-consult-green"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-consult-green"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-consult-green hover:bg-opacity-90 text-white py-3 rounded font-medium transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-consult-teal mb-4">Contact Information</h2>
                <p className="text-consult-dark mb-8">
                  Have questions or ready to explore how Consult Park can help your business? Our team is here to provide the information you need.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-consult-green p-3 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-consult-teal">Email Address</h3>
                    <p className="text-consult-dark">info@consultpark.com</p>
                    <p className="text-consult-dark">support@consultpark.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-consult-green p-3 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-consult-teal">Phone Number</h3>
                    <p className="text-consult-dark">+1 (555) 123-4567</p>
                    <p className="text-consult-dark">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-consult-green p-3 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-consult-teal">Office Hours</h3>
                    <p className="text-consult-dark">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-consult-dark">Weekend: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-consult-green mt-8">
                <h3 className="font-bold text-consult-teal mb-2">Headquarters</h3>
                <p className="text-consult-dark">
                  123 Business Avenue, Suite 456<br />
                  San Francisco, CA 94107<br />
                  United States
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-consult-green">
                <h3 className="font-bold text-consult-teal mb-2">Global Offices</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-consult-dark">London</p>
                    <p className="text-sm text-consult-dark">45 Finance Street, E14 5NR</p>
                  </div>
                  <div>
                    <p className="font-medium text-consult-dark">Singapore</p>
                    <p className="text-sm text-consult-dark">71 Robinson Road, 068895</p>
                  </div>
                  <div>
                    <p className="font-medium text-consult-dark">Sydney</p>
                    <p className="text-sm text-consult-dark">383 George Street, NSW 2000</p>
                  </div>
                  <div>
                    <p className="font-medium text-consult-dark">Toronto</p>
                    <p className="text-sm text-consult-dark">181 Bay Street, M5J 2T3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-consult-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Consult Park for their outsourcing needs.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-consult-light text-consult-teal font-medium rounded"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-consult-teal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/a88e9e9d-6d36-4a71-8e9e-621570e14e9d.png" 
                  alt="Consult Park Logo" 
                  className="h-10" 
                />
              </Link>
              <p className="mt-4 text-gray-300">
                Your strategic outsourcing partner for remote excellence.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-consult-green transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-consult-green transition-colors">About</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-consult-green transition-colors">Services</Link></li>
                <li><Link to="/bpo" className="text-gray-300 hover:text-consult-green transition-colors">BPO</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-consult-green transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Email: info@consultpark.com</li>
                <li className="text-gray-300">Phone: +1 (555) 123-4567</li>
                <li className="text-gray-300">Address: 123 Business Ave, Suite 456, San Francisco, CA 94107</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-consult-green">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-consult-green">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-consult-green">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Consult Park. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
