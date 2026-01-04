import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/lookinternational', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/lookinternational', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/lookinternational', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/lookinternational', label: 'Twitter' },
  ];

  const services = [
    'Email Marketing',
    'Social Media Marketing',
    'Graphic Designing',
    'Web Design & Development',
    'Video Creation',
    'E-Commerce Platforms',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/look-white.png" alt="Look International" className="h-10" />
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering businesses with innovative digital marketing solutions. Your success is our mission.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#portfolio" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+94717824516"
                  className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-red-500" />
                  +94 71 7824516
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lookinternational.lk"
                  className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-red-500" />
                  contact@lookinternational.lk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  Diyatalawa, Sri Lanka
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Look International. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
