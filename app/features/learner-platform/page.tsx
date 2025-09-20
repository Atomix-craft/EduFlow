import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learner Platform - Student-Centric Learning Experience | CampusHub",
  description: "Comprehensive learner platform with curated course catalogs, certifications, career services, and community features for enhanced student success.",
  keywords: [
    "learner platform",
    "student portal",
    "course catalog",
    "certifications",
    "career services",
    "student community",
    "learning platform",
    "student success",
    "educational technology"
  ],
  openGraph: {
    title: "Learner Platform - CampusHub",
    description: "Student-centric platform with career services and community features",
    images: [
      {
        url: '/student-portal.png',
        width: 1200,
        height: 630,
        alt: 'Learner Platform Dashboard',
      },
    ],
  },
}

export default function LearnerPlatform() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="features" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Features", href: "/features" },
            { label: "Learner Platform" }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🌐 Learner Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Student-Centric Learning
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Experience Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empower students with curated course catalogs, automated certifications, career services, 
            and vibrant community features for comprehensive academic and professional success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
              Comprehensive Learner Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything students need for academic success, career development, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Curated Course Catalog */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Curated Course Catalog</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Institution-approved content and resources</li>
                <li>• Quality-controlled learning materials</li>
                <li>• Multi-format content delivery</li>
                <li>• Personalized course recommendations</li>
                <li>• Progress tracking and analytics</li>
                <li>• Mobile-optimized learning experience</li>
              </ul>
            </div>

            {/* Certifications & Badges */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certifications & Badges</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Automated issuance for completed programs</li>
                <li>• Digital credential management</li>
                <li>• Blockchain-verified certificates</li>
                <li>• Skill-based micro-credentials</li>
                <li>• Portfolio integration and sharing</li>
                <li>• Industry-recognized certifications</li>
              </ul>
            </div>

            {/* Learning Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Analytics</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Personal learning dashboard</li>
                <li>• Progress tracking and insights</li>
                <li>• Performance analytics and trends</li>
                <li>• Learning path optimization</li>
                <li>• Goal setting and achievement tracking</li>
                <li>• Personalized recommendations</li>
              </ul>
            </div>

            {/* Interactive Learning Tools */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Learning Tools</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Multimedia content and simulations</li>
                <li>• Interactive quizzes and assessments</li>
                <li>• Virtual labs and experiments</li>
                <li>• Collaborative project spaces</li>
                <li>• Peer learning and study groups</li>
                <li>• Real-time feedback and support</li>
              </ul>
            </div>

            {/* Academic Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Support</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Tutoring and mentoring services</li>
                <li>• Academic advisor integration</li>
                <li>• Study planning and scheduling</li>
                <li>• Resource library and references</li>
                <li>• Academic progress monitoring</li>
                <li>• Intervention and support alerts</li>
              </ul>
            </div>

            {/* Student Portfolio */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Portfolio</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Digital portfolio creation and management</li>
                <li>• Project showcase and documentation</li>
                <li>• Achievement and milestone tracking</li>
                <li>• Resume and CV building tools</li>
                <li>• Portfolio sharing and networking</li>
                <li>• Career readiness assessment</li>
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
              Advanced Learner Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exciting new capabilities to further enhance the student learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Career Services & Placement Portal */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Career Services & Placement</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive career development tools with resume building, job postings, and employer connections.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Resume and CV building tools</li>
                <li>• Job posting and application tracking</li>
                <li>• Employer networking and connections</li>
                <li>• Interview preparation resources</li>
                <li>• Career counseling and guidance</li>
              </ul>
            </div>

            {/* Internship Management */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Internship Management</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Streamlined internship application process and tracking for practical experience.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Internship application management</li>
                <li>• Company partnership tracking</li>
                <li>• Progress monitoring and evaluation</li>
                <li>• Mentor assignment and communication</li>
                <li>• Certificate and credit management</li>
              </ul>
            </div>

            {/* Student Communities */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Student Communities</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Vibrant spaces for clubs, committees, and student discussions.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Club and organization management</li>
                <li>• Discussion forums and chat rooms</li>
                <li>• Event planning and coordination</li>
                <li>• Leadership development programs</li>
                <li>• Peer mentoring and support</li>
              </ul>
            </div>

            {/* Multi-Language Support */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Multi-Language Support</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Accessible platform for diverse student populations with multiple language options.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Multi-language interface support</li>
                <li>• Content translation capabilities</li>
                <li>• Accessibility features and tools</li>
                <li>• Cultural adaptation features</li>
                <li>• International student support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CampusHub Learner Platform?
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Empower students with a comprehensive platform designed for academic and career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personalized Learning</h3>
              <p className="text-indigo-100">Tailored learning experiences with adaptive content and personalized recommendations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Career Readiness</h3>
              <p className="text-indigo-100">Comprehensive career development tools and industry connections for student success.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Engagement</h3>
              <p className="text-indigo-100">Foster connections and collaboration through vibrant student communities and networking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Empower Your Students?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join educational institutions already using CampusHub Learner Platform to enhance student success and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
