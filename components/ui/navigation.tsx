"use client"

import { useState } from "react"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/features", label: "Features" },
    { href: "/#screenshots", label: "Gallery" },
    { href: "/pricing", label: "Pricing" },
    { href: "/help", label: "Help" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold gradient-text">CampusHub</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.label.toLowerCase() 
                      ? "text-purple-600" 
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.label.toLowerCase() 
                      ? "text-purple-600" 
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
