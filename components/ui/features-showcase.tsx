'use client';

import { useState, useCallback } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  features: string[];
  image?: string;
}

const features: Feature[] = [
  {
    id: 'university-management',
    title: 'University Management',
    description: 'Complete academic operations from admissions to graduation with automated workflows',
    icon: '🎓',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Examination Management – Online exams, grading automation, and secure results publishing',
      'Fee & Finance Management – Digital fee collection, payment gateways, and scholarships/waivers',
      'Curriculum Management – Streamline program design, updates, and approvals',
      'Admissions & Enrollment – Digital application processing, candidate evaluation, and onboarding',
      'Timetable & Scheduling – Automated class and exam scheduling with conflict resolution',
      'Attendance Tracking – Real-time attendance for students and staff',
      'Approvals & Workflows – Configurable academic and administrative approval chains',
      'Event & Calendar Management – Centralized event scheduling and notifications',
      'Accreditation & Compliance Support (Coming Soon) – Generate compliance-ready reports for NAAC, NBA, UGC, etc.',
      'Alumni Management (Coming Soon) – Alumni engagement, networking, and fundraising tools'
    ]
  },
  {
    id: 'workforce-management',
    title: 'Workforce Management',
    description: 'Comprehensive staff management with role-based access and performance tracking',
    icon: '👩‍🏫',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Role-Based Staff Profiles – Assign dynamic roles and responsibilities',
      'Leave & Absence Management – Digital requests with automated approval workflows',
      'Capacity Planning – Optimize teaching load, staff allocation, and resource use',
      'Curriculum Planning Support – Align faculty capacity with course delivery',
      'Visual Performance Analytics – Track faculty performance with intuitive dashboards',
      'Recruitment & Onboarding (Coming Soon) – Digitized hiring and onboarding workflows',
      'Professional Development Tracking (Coming Soon) – Record training, certifications, and growth paths',
      'Payroll (Coming Soon) – Salary processing, benefits, and deductions',
      'Contract & Adjunct Faculty Management (Coming Soon) – Manage part-time and visiting staff',
      'Inventory Management (Coming Soon) – Track and optimize institutional resources'
    ]
  },
  {
    id: 'learning-management',
    title: 'Learning Management System (LMS)',
    description: 'AI-powered learning platform with advanced assessment and collaboration tools',
    icon: '📚',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'AI-Generated Quizzes – Auto-create personalized quizzes with AI',
      'Assignment Submissions – Digital submissions with integrated grading',
      'AI-Powered Plagiarism Checker – Ensure academic integrity with advanced detection',
      'Real-Time Collaboration – Secure intra-organization chat for students and staff',
      'Learning Paths (Coming Soon) – Personalized course journeys mapped to skills or degrees',
      'Gamification (Coming Soon) – Badges, leaderboards, and achievements to boost engagement',
      'Virtual Classrooms (Coming Soon) – Live sessions, recordings, and breakout rooms',
      'Parent/Guardian Access (Coming Soon) – Progress and attendance reports for guardians',
      'Content Marketplace Integration (Coming Soon) – Access external content (Coursera, edX, etc.)'
    ]
  },
  {
    id: 'learner-platform',
    title: 'Learner Platform',
    description: 'Student-centric platform with career services and community features',
    icon: '🌐',
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500',
    features: [
      'Curated Course Catalog – Institution-approved content and resources',
      'Certifications & Badges – Automated issuance for completed programs',
      'Career Services & Placement Portal (Coming Soon) – Resume tools, job postings, employer access',
      'Internship Management (Coming Soon) – Internship applications and tracking',
      'Student Communities (Coming Soon) – Spaces for clubs, committees, and discussions',
      'Multi-Language Support (Coming Soon) – Accessible for diverse student populations'
    ]
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    description: 'AI-driven insights and comprehensive reporting for data-driven decision making',
    icon: '📊',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    features: [
      'AI-Driven Insights – Predictive analytics for academic and operational performance',
      'Compliance Reports – Auto-generate finance and education compliance reports',
      'Staff Performance Dashboards – Transparent performance tracking for faculty and staff',
      'Dynamic Org Charts – Visualize reporting structures and hierarchies',
      'Predictive Dropout Alerts (Coming Soon) – Identify at-risk students early',
      'Financial Forecasting (Coming Soon) – Budget and expense projections',
      'Diversity & Inclusion Reports (Coming Soon) – Insights on demographics and equity compliance',
      'Sustainability Metrics (Coming Soon) – Track campus sustainability and energy goals'
    ]
  },
  {
    id: 'operational-addons',
    title: 'Operational Add-ons',
    description: 'Comprehensive campus management tools for complete institutional operations',
    icon: '🛠️',
    color: 'teal',
    gradient: 'from-teal-500 to-blue-500',
    features: [
      'Hostel & Accommodation Management (Coming Soon) – Room allocations and fee tracking',
      'Transport Management (Coming Soon) – Route planning, GPS, and notifications',
      'Library Management (Coming Soon) – Digital catalog, lending, and e-library integration',
      'Cafeteria / Meal Plan Management (Coming Soon) – Digital meal subscriptions and payments',
      'Visitor & Security Management (Coming Soon) – ID systems, visitor logs, and access control'
    ]
  }
];

export function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  const handleFeatureChange = useCallback((feature: Feature) => {
    setActiveFeature(feature);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ One Platform, Countless Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unify your entire education
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ecosystem on one platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From student admissions to graduation, manage every aspect of your institution with our comprehensive suite of tools.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Feature Navigation */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => handleFeatureChange(feature)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group ${
                    activeFeature.id === feature.id
                      ? 'bg-white shadow-2xl border-2 border-blue-200 transform scale-105'
                      : 'bg-white/70 hover:bg-white hover:shadow-lg border border-gray-200'
                  }`}
                  style={{
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                      activeFeature.id === feature.id
                        ? `bg-gradient-to-br ${feature.gradient} shadow-lg`
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-1 transition-colors ${
                        activeFeature.id === feature.id ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm transition-colors ${
                        activeFeature.id === feature.id ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeFeature.id === feature.id ? 'bg-blue-500' : 'bg-gray-300 group-hover:bg-gray-400'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Display Area */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl opacity-50"></div>
              
              {/* Main Content */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${activeFeature.gradient} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm">
                      {activeFeature.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{activeFeature.title}</h3>
                      <p className="text-white/90 text-lg">{activeFeature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Capabilities</h4>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {activeFeature.features.map((feature, index) => {
                      const isComingSoon = feature.includes('(Coming Soon)');
                      const featureText = feature.replace('(Coming Soon)', '').trim();
                      
                      return (
                        <div 
                          key={index}
                          className={`flex items-start space-x-3 p-4 rounded-xl transition-colors duration-300 ${
                            isComingSoon 
                              ? 'bg-orange-50 border border-orange-200 hover:bg-orange-100' 
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: 'fadeInUp 0.6s ease-out forwards'
                          }}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isComingSoon 
                              ? 'bg-gradient-to-br from-orange-500 to-yellow-500' 
                              : `bg-gradient-to-br ${activeFeature.gradient}`
                          }`}>
                            {isComingSoon ? (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <span className={`font-medium ${
                              isComingSoon ? 'text-orange-800' : 'text-gray-700'
                            }`}>
                              {featureText}
                            </span>
                            {isComingSoon && (
                              <div className="inline-flex items-center ml-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                                Coming Soon
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Ready to explore {activeFeature.title}?</h5>
                        <p className="text-sm text-gray-600">See how this feature can transform your institution</p>
                      </div>
                      <button className={`bg-gradient-to-r ${activeFeature.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
