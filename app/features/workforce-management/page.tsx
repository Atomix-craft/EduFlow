import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workforce Management System - Staff & Faculty Management | CampusHub",
  description: "Comprehensive staff management with role-based access, performance tracking, leave management, and capacity planning for educational institutions.",
  keywords: [
    "workforce management system",
    "staff management",
    "faculty management",
    "HR management",
    "leave management",
    "performance tracking",
    "capacity planning",
    "educational workforce",
    "staff analytics"
  ],
  openGraph: {
    title: "Workforce Management System - CampusHub",
    description: "Comprehensive staff management with role-based access and performance tracking",
    images: [
      {
        url: '/admin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Workforce Management System Dashboard',
      },
    ],
  },
}

export default function WorkforceManagement() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="features" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Features", href: "/features" },
            { label: "Workforce Management" }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            👩‍🏫 Workforce Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Staff & Faculty
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Management Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Optimize your workforce with role-based access, performance tracking, leave management, 
            and intelligent capacity planning for maximum efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Try Live Demo
            </a>
            <a href="/contact" className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Workforce Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your staff and faculty efficiently, from recruitment to performance analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Role-Based Staff Profiles */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Role-Based Staff Profiles</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Dynamic role assignment and management</li>
                <li>• Customizable permission levels</li>
                <li>• Department and hierarchy management</li>
                <li>• Staff directory and contact information</li>
                <li>• Skills and qualification tracking</li>
                <li>• Emergency contact management</li>
              </ul>
            </div>

            {/* Leave & Absence Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leave & Absence Management</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Digital leave request submission</li>
                <li>• Automated approval workflows</li>
                <li>• Leave balance tracking and accrual</li>
                <li>• Calendar integration and visibility</li>
                <li>• Emergency leave handling</li>
                <li>• Leave analytics and reporting</li>
              </ul>
            </div>

            {/* Capacity Planning */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capacity Planning</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Optimize teaching load distribution</li>
                <li>• Staff allocation and resource planning</li>
                <li>• Workload balancing algorithms</li>
                <li>• Capacity utilization analytics</li>
                <li>• Resource optimization recommendations</li>
                <li>• Future capacity forecasting</li>
              </ul>
            </div>

            {/* Curriculum Planning Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Curriculum Planning Support</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Align faculty capacity with course delivery</li>
                <li>• Subject expertise mapping</li>
                <li>• Teaching assignment optimization</li>
                <li>• Course load balancing</li>
                <li>• Faculty development planning</li>
                <li>• Academic calendar integration</li>
              </ul>
            </div>

            {/* Visual Performance Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Performance Analytics</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Track faculty performance with intuitive dashboards</li>
                <li>• Teaching effectiveness metrics</li>
                <li>• Student feedback integration</li>
                <li>• Research and publication tracking</li>
                <li>• Performance trend analysis</li>
                <li>• Goal setting and achievement tracking</li>
              </ul>
            </div>

            {/* Staff Communication */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Staff Communication</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Department-wide announcements</li>
                <li>• Direct messaging between staff</li>
                <li>• Meeting scheduling and coordination</li>
                <li>• Document sharing and collaboration</li>
                <li>• Emergency communication system</li>
                <li>• Staff directory and contact management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Workforce Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exciting new capabilities to further enhance your workforce management experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recruitment & Onboarding */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Recruitment & Onboarding</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Digitized hiring and onboarding workflows for seamless staff integration.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Job posting and application management</li>
                <li>• Interview scheduling and evaluation</li>
                <li>• Digital onboarding workflows</li>
                <li>• Document collection and verification</li>
                <li>• Training program assignment</li>
              </ul>
            </div>

            {/* Professional Development Tracking */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Professional Development</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Record training, certifications, and growth paths for continuous development.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Training program management</li>
                <li>• Certification tracking</li>
                <li>• Skill development planning</li>
                <li>• Conference and workshop management</li>
                <li>• Career progression tracking</li>
              </ul>
            </div>

            {/* Payroll Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Payroll Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive salary processing, benefits, and deductions management.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Automated salary processing</li>
                <li>• Benefits and allowance management</li>
                <li>• Tax calculation and deductions</li>
                <li>• Payslip generation and distribution</li>
                <li>• Financial reporting and analytics</li>
              </ul>
            </div>

            {/* Contract & Adjunct Faculty Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Contract & Adjunct Faculty</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized management for part-time and visiting staff members.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Contract management and tracking</li>
                <li>• Adjunct faculty scheduling</li>
                <li>• Payment processing for contractors</li>
                <li>• Performance evaluation systems</li>
                <li>• Renewal and extension workflows</li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Inventory Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Track and optimize institutional resources and equipment.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Equipment tracking and maintenance</li>
                <li>• Resource allocation and booking</li>
                <li>• Asset management and depreciation</li>
                <li>• Purchase request workflows</li>
                <li>• Utilization analytics and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CampusHub for Workforce Management?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Optimize your workforce operations with our comprehensive management platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimized Workforce</h3>
              <p className="text-green-100">Maximize productivity with intelligent capacity planning and workload distribution.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Insights</h3>
              <p className="text-green-100">Make data-driven decisions with comprehensive performance analytics and reporting.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Streamlined Operations</h3>
              <p className="text-green-100">Automate workflows and reduce administrative overhead with digital processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Workforce?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join educational institutions already using CampusHub to streamline their workforce management and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
