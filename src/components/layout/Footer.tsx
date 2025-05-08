
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-consult-teal text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold flex items-center">
              <span className="text-white">CONS</span>
              <span className="text-white relative">
                <span>U</span>
                <span className="text-consult-green absolute -right-[3px] top-0">i</span>
              </span>
              <span className="text-white">LT</span>
              <span className="text-gray-300 ml-2">PARK</span>
            </div>
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
