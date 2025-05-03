/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Clients', path: '/clients' },
    // { name: 'Equipment', path: '/equipment' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative z-10">
            <img src={'/images/Primary logo.png'} alt='logo' className='w-[120px]'/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm uppercase tracking-wider font-medium hover:text-[#3A6E71] transition-colors ${
                  pathname === link.path ? 'text-[#3A6E71]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10 text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
              mobileMenuOpen ? 'opacity-100 z-40 visible' : 'opacity-0 invisible'
            }`}
          >
            {/* Close button inside the mobile menu */}
            <button
              className="absolute top-6 right-4 text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-lg uppercase tracking-wider font-medium hover:text-[#3A6E71] transition-colors ${
                    pathname === link.path ? 'text-[#3A6E71]' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;