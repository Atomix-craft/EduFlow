"use client"

import { useState, useEffect } from "react"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  const featuresItems = [
    { href: "/features/university-management", label: "University Management", description: "Complete academic operations" },
    { href: "/features/workforce-management", label: "Workforce Management", description: "Staff & faculty management" },
    { href: "/features/learning-management", label: "Learning Management", description: "AI-powered LMS platform" },
    { href: "/features/learner-platform", label: "Learner Platform", description: "Student-centric experience" },
    { href: "/features/analytics-reporting", label: "Analytics & Reporting", description: "AI-driven insights" },
    { href: "/features/operational-addons", label: "Operational Add-ons", description: "Campus management tools" }
  ]

  const navItems = [
    { label: "Features", hasDropdown: true },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]

  const demoItem = { href: "/demo", label: "Live Demo", external: false }

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setIsFeaturesDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsFeaturesDropdownOpen(false)
    }, 200) // 200ms delay before closing
    setDropdownTimeout(timeout)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [dropdownTimeout])

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50" role="navigation" aria-label="Main navigation">
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
              {navItems.map((item, index) => (
                <div key={item.href || index} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button 
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                          currentPage === item.label.toLowerCase() 
                            ? "text-purple-600" 
                            : "text-gray-700 hover:text-purple-600"
                        }`}
                      >
                        {item.label}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isFeaturesDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="px-4 py-2 border-b border-gray-100">
                            <h3 className="text-sm font-semibold text-gray-900">All Features</h3>
                          </div>
                          {featuresItems.map((feature) => (
                            <a
                              key={feature.href}
                              href={feature.href}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                            >
                              <div className="font-medium text-gray-900">{feature.label}</div>
                              <div className="text-sm text-gray-500">{feature.description}</div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={item.href} 
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        currentPage === item.label.toLowerCase() 
                          ? "text-purple-600" 
                          : "text-gray-700 hover:text-purple-600"
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <a 
                href={demoItem.href}
                className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {demoItem.label}
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
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
              {navItems.map((item, index) => (
                <div key={item.href || index}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="px-3 py-2 text-base font-medium text-gray-700">
                        {item.label}
                      </div>
                      <div className="pl-6 space-y-1">
                        {featuresItems.map((feature) => (
                          <a
                            key={feature.href}
                            href={feature.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {feature.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
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
                  )}
                </div>
              ))}
              <a 
                href={demoItem.href}
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {demoItem.label}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
