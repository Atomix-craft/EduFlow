import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Operational Add-ons - Campus Management Solutions | CampusHub",
  description: "Comprehensive campus management tools including hostel management, transport systems, library management, cafeteria services, and security solutions for complete institutional operations.",
  keywords: [
    "campus management",
    "hostel management",
    "transport management",
    "library management",
    "cafeteria management",
    "security management",
    "campus operations",
    "institutional management",
    "campus automation"
  ],
  openGraph: {
    title: "Operational Add-ons - CampusHub",
    description: "Comprehensive campus management tools for complete institutional operations",
    images: [
      {
        url: '/admin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Operational Add-ons Dashboard',
      },
    ],
  },
}

export default function OperationalAddons() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="features" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Features", href: "/features" },
            { label: "Operational Add-ons" }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🛠️ Operational Add-ons
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Campus Management
            <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Solutions & Automation
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline every aspect of campus operations with comprehensive management tools for hostels, 
            transport, library, cafeteria, and security systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Try Live Demo
            </a>
            <a href="/contact" className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Campus Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete your institution's digital transformation with these powerful operational add-ons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hostel & Accommodation Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Hostel & Accommodation Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complete hostel management system with room allocations, fee tracking, and resident services.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Room allocation and assignment</li>
                <li>• Hostel fee collection and tracking</li>
                <li>• Maintenance request management</li>
                <li>• Visitor management system</li>
                <li>• Resident directory and communication</li>
                <li>• Inventory and asset tracking</li>
                <li>• Mess and meal plan management</li>
                <li>• Security and access control</li>
              </ul>
            </div>

            {/* Transport Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Transport Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced transport system with route planning, GPS tracking, and real-time notifications.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Route planning and optimization</li>
                <li>• GPS tracking and real-time location</li>
                <li>• Bus schedule management</li>
                <li>• Student transport registration</li>
                <li>• Driver and vehicle management</li>
                <li>• Emergency notifications and alerts</li>
                <li>• Transport fee collection</li>
                <li>• Maintenance scheduling</li>
              </ul>
            </div>

            {/* Library Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Library Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Digital catalog, lending system, and e-library integration for modern library operations.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Digital catalog and search system</li>
                <li>• Book lending and return management</li>
                <li>• E-library and digital resources</li>
                <li>• Reservation and hold system</li>
                <li>• Fine calculation and collection</li>
                <li>• Library card management</li>
                <li>• Inventory and acquisition tracking</li>
                <li>• Reading room booking system</li>
              </ul>
            </div>

            {/* Cafeteria / Meal Plan Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Cafeteria / Meal Plan Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Digital meal subscriptions, payments, and cafeteria operations management.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Digital meal plan subscriptions</li>
                <li>• Online payment and billing</li>
                <li>• Menu planning and management</li>
                <li>• Inventory and supply tracking</li>
                <li>• Staff scheduling and management</li>
                <li>• Feedback and rating system</li>
                <li>• Nutritional information tracking</li>
                <li>• Special dietary requirements</li>
              </ul>
            </div>

            {/* Visitor & Security Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Visitor & Security Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive ID systems, visitor logs, and access control for campus security.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Digital ID card management</li>
                <li>• Visitor registration and tracking</li>
                <li>• Access control and permissions</li>
                <li>• Security checkpoint management</li>
                <li>• Emergency response system</li>
                <li>• CCTV integration and monitoring</li>
                <li>• Incident reporting and tracking</li>
                <li>• Security staff scheduling</li>
              </ul>
            </div>

            {/* Facility Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Facility Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complete facility management with booking systems, maintenance, and resource optimization.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Room and facility booking system</li>
                <li>• Maintenance request management</li>
                <li>• Asset and equipment tracking</li>
                <li>• Energy consumption monitoring</li>
                <li>• Cleaning and housekeeping schedules</li>
                <li>• Vendor and contractor management</li>
                <li>• Facility utilization analytics</li>
                <li>• Emergency maintenance protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integration Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All operational add-ons integrate seamlessly with your core CampusHub platform for unified management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unified Dashboard</h3>
              <p className="text-gray-600">Single interface to manage all campus operations and get comprehensive insights.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Integration</h3>
              <p className="text-gray-600">Shared data across all modules for better decision-making and operational efficiency.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-600">Comprehensive security features across all campus operations and access points.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Optimization</h3>
              <p className="text-gray-600">Reduce operational costs through automation and efficient resource management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CampusHub Operational Add-ons?
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Complete your campus digital transformation with comprehensive operational management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Complete Campus Coverage</h3>
              <p className="text-teal-100">Manage every aspect of campus operations from a single, integrated platform.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Operational Efficiency</h3>
              <p className="text-teal-100">Streamline operations and reduce manual work with automated processes and workflows.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enhanced Experience</h3>
              <p className="text-teal-100">Improve student, staff, and visitor experience with modern, user-friendly interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Complete Your Campus Digital Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join educational institutions already using CampusHub Operational Add-ons to streamline their campus operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Free Trial
            </a>
            <a href="/contact" className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">CampusHub</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Comprehensive education management system designed to streamline academic operations, 
                enhance student experience, and empower educators with powerful tools.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/demo" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CampusHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
