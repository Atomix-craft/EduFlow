import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "University Management System - Complete Academic Operations | CampusHub",
  description: "Streamline your university operations with comprehensive management tools including admissions, examinations, fee management, curriculum planning, and automated workflows.",
  keywords: [
    "university management system",
    "academic operations",
    "examination management",
    "fee management",
    "admissions system",
    "curriculum management",
    "timetable scheduling",
    "attendance tracking",
    "university automation"
  ],
  openGraph: {
    title: "University Management System - CampusHub",
    description: "Complete academic operations from admissions to graduation with automated workflows",
    images: [
      {
        url: '/admin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'University Management System Dashboard',
      },
    ],
  },
}

export default function UniversityManagement() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="features" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Features", href: "/features" },
            { label: "University Management" }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🎓 University Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Academic Operations
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              from Admissions to Graduation
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline every aspect of your university with automated workflows, comprehensive management tools, 
            and seamless integration across all academic processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
              Comprehensive University Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your university efficiently, from student lifecycle to administrative operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Examination Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Examination Management</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Online exam creation and scheduling</li>
                <li>• Automated grading and result processing</li>
                <li>• Secure results publishing system</li>
                <li>• Invigilator assignment and management</li>
                <li>• Back paper handling and re-examinations</li>
                <li>• Grade point calculation and transcripts</li>
              </ul>
            </div>

            {/* Fee & Finance Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fee & Finance Management</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Digital fee collection and processing</li>
                <li>• Multiple payment gateway integration</li>
                <li>• Scholarship and waiver management</li>
                <li>• Automated dues calculation and reminders</li>
                <li>• Financial reporting and analytics</li>
                <li>• Refund processing and tracking</li>
              </ul>
            </div>

            {/* Curriculum Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Curriculum Management</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Streamlined program design and updates</li>
                <li>• Multi-level approval workflows</li>
                <li>• NEP compliance tracking and reporting</li>
                <li>• Subject override and elective management</li>
                <li>• Credit hour tracking and validation</li>
                <li>• Curriculum version control</li>
              </ul>
            </div>

            {/* Admissions & Enrollment */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Admissions & Enrollment</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Digital application processing</li>
                <li>• Automated candidate evaluation</li>
                <li>• Branch allotment and confirmation</li>
                <li>• Document verification system</li>
                <li>• Onboarding workflow automation</li>
                <li>• Waitlist and quota management</li>
              </ul>
            </div>

            {/* Timetable & Scheduling */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timetable & Scheduling</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Automated class and exam scheduling</li>
                <li>• Intelligent conflict resolution</li>
                <li>• Room allocation optimization</li>
                <li>• Teacher substitution support</li>
                <li>• Real-time schedule updates</li>
                <li>• Mobile-friendly timetable access</li>
              </ul>
            </div>

            {/* Attendance Tracking */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Attendance Tracking</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Real-time attendance for students and staff</li>
                <li>• Biometric and digital attendance options</li>
                <li>• Automated absence notifications</li>
                <li>• Attendance analytics and reports</li>
                <li>• Integration with examination eligibility</li>
                <li>• Parent/guardian notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools for complex university operations and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Approvals & Workflows */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Approvals & Workflows</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Configurable academic and administrative approval chains with automated routing and notifications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-level approval workflows</li>
                <li>• Automated routing and notifications</li>
                <li>• Approval history and audit trails</li>
                <li>• Escalation management</li>
                <li>• Custom approval rules</li>
              </ul>
            </div>

            {/* Event & Calendar Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Event & Calendar Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Centralized event scheduling and notifications with integration across all university systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Centralized event scheduling</li>
                <li>• Automated notifications and reminders</li>
                <li>• Resource booking and management</li>
                <li>• Academic calendar integration</li>
                <li>• Event analytics and reporting</li>
              </ul>
            </div>
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
              Upcoming Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exciting new capabilities to further enhance your university management experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accreditation & Compliance Support */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Accreditation & Compliance Support</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Generate compliance-ready reports for NAAC, NBA, UGC, and other accreditation bodies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated compliance reporting</li>
                <li>• NAAC, NBA, UGC report generation</li>
                <li>• Quality assurance tracking</li>
                <li>• Audit trail maintenance</li>
                <li>• Benchmarking and analytics</li>
              </ul>
            </div>

            {/* Alumni Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Alumni Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Alumni engagement, networking, and fundraising tools to maintain lifelong connections.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Alumni database management</li>
                <li>• Networking and event coordination</li>
                <li>• Fundraising and donation tracking</li>
                <li>• Career mentoring programs</li>
                <li>• Alumni success stories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CampusHub for University Management?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transform your university operations with our comprehensive management platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Streamlined Operations</h3>
              <p className="text-blue-100">Automate complex workflows and reduce administrative burden by up to 70%.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data-Driven Insights</h3>
              <p className="text-blue-100">Make informed decisions with comprehensive analytics and reporting tools.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-blue-100">Bank-grade security with compliance for educational data protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your University Management?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of universities already using CampusHub to streamline their operations and enhance student experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
