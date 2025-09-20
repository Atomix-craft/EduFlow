import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { DemoForm } from "./demo-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Login Credentials - CampusHub University Management System",
  description: "Get instant access to CampusHub's live demo with pre-configured login credentials. Experience the full power of our university management system.",
  keywords: [
    "CampusHub login",
    "university management system login",
    "education software access",
    "campus management login",
    "student information system access",
    "university software demo",
    "education technology login"
  ],
  openGraph: {
    title: "CampusHub Login Credentials",
    description: "Get instant access to CampusHub's live demo with pre-configured login credentials.",
    images: [
      {
        url: '/admin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'CampusHub Login Access',
      },
    ],
  },
}

export default function Demo() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="demo" />
      
      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Demo Access" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔑 Instant Access Available
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Demo Access to CampusHub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fill out the form below to get instant access to our live demo environment. 
            Experience the full power of CampusHub's university management system right now.
          </p>
        </div>
      </section>

      {/* Demo Form */}
      <DemoForm />

      {/* Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Experience in the Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the complete CampusHub ecosystem with full access to all features and modules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete System Access</h3>
              <p className="text-gray-600">Test all modules including student management, examinations, finance, and analytics.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple User Roles</h3>
              <p className="text-gray-600">Experience the system from different perspectives - admin, teacher, and student views.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Data</h3>
              <p className="text-gray-600">Work with live data and see how the system handles real-world scenarios.</p>
            </div>
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
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
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
  )
}
