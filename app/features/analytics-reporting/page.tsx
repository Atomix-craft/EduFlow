import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics & Reporting - AI-Driven Insights for Education | CampusHub",
  description: "Comprehensive analytics and reporting platform with AI-driven insights, compliance reports, performance dashboards, and predictive analytics for educational institutions.",
  keywords: [
    "education analytics",
    "reporting system",
    "AI-driven insights",
    "compliance reports",
    "performance dashboards",
    "predictive analytics",
    "educational data",
    "institutional analytics",
    "data visualization"
  ],
  openGraph: {
    title: "Analytics & Reporting - CampusHub",
    description: "AI-driven insights and comprehensive reporting for data-driven decision making",
    images: [
      {
        url: '/admin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Analytics & Reporting Dashboard',
      },
    ],
  },
}

export default function AnalyticsReporting() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="features" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Features", href: "/features" },
            { label: "Analytics & Reporting" }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            📊 Analytics & Reporting
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Driven Insights & 
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Comprehensive Reporting
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Make data-driven decisions with advanced analytics, predictive insights, compliance reporting, 
            and comprehensive dashboards for educational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
              Advanced Analytics & Reporting
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform data into actionable insights with powerful analytics and comprehensive reporting tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Driven Insights */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Driven Insights</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Predictive analytics for academic performance</li>
                <li>• Operational performance optimization</li>
                <li>• Machine learning-powered recommendations</li>
                <li>• Trend analysis and forecasting</li>
                <li>• Anomaly detection and alerts</li>
                <li>• Natural language query interface</li>
              </ul>
            </div>

            {/* Compliance Reports */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Reports</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Auto-generate finance and education compliance reports</li>
                <li>• Regulatory requirement tracking</li>
                <li>• Audit trail maintenance</li>
                <li>• Standardized report templates</li>
                <li>• Automated report scheduling</li>
                <li>• Multi-format export options</li>
              </ul>
            </div>

            {/* Staff Performance Dashboards */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Staff Performance Dashboards</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Transparent performance tracking for faculty and staff</li>
                <li>• Key performance indicators (KPIs)</li>
                <li>• Goal setting and achievement tracking</li>
                <li>• Peer comparison and benchmarking</li>
                <li>• Performance trend analysis</li>
                <li>• Recognition and reward insights</li>
              </ul>
            </div>

            {/* Dynamic Org Charts */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dynamic Org Charts</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Visualize reporting structures and hierarchies</li>
                <li>• Interactive organizational mapping</li>
                <li>• Role and responsibility tracking</li>
                <li>• Department performance visualization</li>
                <li>• Communication flow analysis</li>
                <li>• Resource allocation insights</li>
              </ul>
            </div>

            {/* Academic Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Analytics</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Student performance and progress tracking</li>
                <li>• Course effectiveness analysis</li>
                <li>• Learning outcome assessment</li>
                <li>• Curriculum performance metrics</li>
                <li>• Graduation and retention analytics</li>
                <li>• Academic intervention insights</li>
              </ul>
            </div>

            {/* Financial Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Analytics</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Revenue and expense tracking</li>
                <li>• Budget performance analysis</li>
                <li>• Cost center optimization</li>
                <li>• ROI analysis for programs</li>
                <li>• Financial forecasting and planning</li>
                <li>• Resource utilization insights</li>
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
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exciting new capabilities to further enhance your analytics and reporting experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Predictive Dropout Alerts */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Predictive Dropout Alerts</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Identify at-risk students early with AI-powered predictive analytics and intervention recommendations.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Early warning system for at-risk students</li>
                <li>• Risk factor identification and analysis</li>
                <li>• Automated intervention recommendations</li>
                <li>• Success probability scoring</li>
                <li>• Personalized support strategies</li>
              </ul>
            </div>

            {/* Financial Forecasting */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Financial Forecasting</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced budget and expense projections with scenario planning and optimization.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Multi-year budget forecasting</li>
                <li>• Scenario planning and modeling</li>
                <li>• Revenue and expense projections</li>
                <li>• Risk assessment and mitigation</li>
                <li>• Resource optimization recommendations</li>
              </ul>
            </div>

            {/* Diversity & Inclusion Reports */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Diversity & Inclusion Reports</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive insights on demographics and equity compliance for inclusive education.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Demographic analysis and trends</li>
                <li>• Equity and inclusion metrics</li>
                <li>• Representation tracking</li>
                <li>• Bias detection and analysis</li>
                <li>• Inclusive policy recommendations</li>
              </ul>
            </div>

            {/* Sustainability Metrics */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Sustainability Metrics</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Track campus sustainability and energy goals with comprehensive environmental metrics.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Energy consumption tracking</li>
                <li>• Carbon footprint analysis</li>
                <li>• Waste reduction metrics</li>
                <li>• Green building performance</li>
                <li>• Sustainability goal tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CampusHub Analytics?
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Transform your institution with data-driven insights and comprehensive reporting capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Insights</h3>
              <p className="text-orange-100">Leverage artificial intelligence for predictive analytics and intelligent recommendations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Comprehensive Reporting</h3>
              <p className="text-orange-100">Generate detailed reports for compliance, performance, and strategic decision-making.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-Time Analytics</h3>
              <p className="text-orange-100">Access up-to-date insights and performance metrics for immediate action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make Data-Driven Decisions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join educational institutions already using CampusHub Analytics to transform their operations with powerful insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
