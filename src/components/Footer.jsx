import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 max-h-[25vh]">
      <div className="container mx-auto mb-0 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center overflow-hidden">
          {/* Logo or Brand Name */}
          <Logo/>
          {/* Navigation Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Blog Nation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
