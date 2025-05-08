
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-consult-teal text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a88e9e9d-6d36-4a71-8e9e-621570e14e9d.png" 
                alt="Consult Park Logo" 
                className="h-10 sm:h-12" 
              />
            </Link>
            <p className="mt-4 text-gray-300">
              Your strategic outsourcing partner for remote excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-consult-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-consult-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-consult-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/bpo" className="text-gray-300 hover:text-consult-green transition-colors">
                  BPO
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-consult-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-consult-green transition-colors">
                  Virtual Staffing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-consult-green transition-colors">
                  Admin Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-consult-green transition-colors">
                  Sales & Lead Generation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-consult-green transition-colors">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-consult-green transition-colors">
                  Social Media & Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Email: info@consultpark.com
              </li>
              <li className="text-gray-300">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-gray-300">
                Address: 123 Business Ave, Suite 456, San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Consult Park. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
