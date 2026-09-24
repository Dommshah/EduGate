'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="hover:underline">
            <BrandLogo />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium relative">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>

          {/* Mega Menu Trigger */}
          <div className="group relative">
            <Link href="/courses" className="hover:text-purple-600 transition-colors">Programs</Link>
            {/* Mega Menu Panel */}
            <div className="absolute left-0 top-full hidden w-[600px] grid-cols-3 gap-6 rounded-b-xl bg-white p-6 shadow-lg group-hover:grid">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-800">Technology</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><Link href="/courses" className="hover:text-purple-600">AI & Machine Learning</Link></li>
                  <li><Link href="/courses" className="hover:text-purple-600">Data Science</Link></li>
                  <li><Link href="/courses" className="hover:text-purple-600">Cloud Computing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-800">Creative</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><Link href="/courses" className="hover:text-purple-600">Digital Marketing</Link></li>
                  <li><Link href="/courses" className="hover:text-purple-600">Video Editing</Link></li>
                  <li><Link href="/courses" className="hover:text-purple-600">Animation</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-800">Professional</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><Link href="/courses" className="hover:text-purple-600">Project Management</Link></li>
                  <li><Link href="/courses" className="hover:text-purple-600">Finance & Accounting</Link></li>
                  <li><Link href="/courses" className="hover:text-purple-600">Leadership</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-purple-600 transition-colors">Our Story</Link>
          <Link href="/workshops" className="hover:text-purple-600 transition-colors">Workshops</Link>
          <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
          <Link href="/support" className="hover:text-purple-600 transition-colors">Support</Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact" className="rounded-lg border border-purple-600 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50">
            Sign In
          </Link>
          <Link href="/courses" className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-sm font-medium">
          <Link href="/" className="block hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <div>
            <span className="block font-semibold text-gray-700">Programs</span>
            <ul className="mt-2 space-y-2 pl-3 text-gray-600">
              <li><Link href="/courses" className="hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>AI & Machine Learning</Link></li>
              <li><Link href="/courses" className="hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Digital Marketing</Link></li>
              <li><Link href="/courses" className="hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Leadership</Link></li>
            </ul>
          </div>
          <Link href="/about" className="block hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
          <Link href="/workshops" className="block hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Workshops</Link>
          <Link href="/blog" className="block hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link href="/support" className="block hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>

          <div className="flex flex-col gap-2 pt-4">
            <Link href="/contact" className="rounded-lg border border-purple-600 px-4 py-2 text-center text-purple-600 hover:bg-purple-50" onClick={() => setIsMobileMenuOpen(false)}>
              Sign In
            </Link>
            <Link href="/courses" className="rounded-lg bg-purple-600 px-4 py-2 text-center text-white hover:bg-purple-700" onClick={() => setIsMobileMenuOpen(false)}>
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
