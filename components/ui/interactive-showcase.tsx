'use client';

import { useState, useCallback, useMemo } from 'react';

interface Feature {
  id: string;
  name: string;
  image: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  features: string[];
  benefits: string[];
}

const features: Feature[] = [
  {
    id: 'admin',
    name: 'Admin Dashboard',
    image: '/admin-dashboard.png',
    description: 'Comprehensive overview of academic operations, system analytics, and management tools.',
    icon: '👨‍💼',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Academic structure & curriculum management',
      'Student lifecycle & admission management', 
      'Examination & result management',
      'Financial management & reporting'
    ],
    benefits: [
      'Centralized control over all academic operations',
      'Real-time insights and analytics',
      'Automated workflow management',
      'Comprehensive reporting capabilities'
    ]
  },
  {
    id: 'student',
    name: 'Student Portal',
    image: '/student-portal.png',
    description: 'Personalized dashboard with course management, timetable, and academic tools.',
    icon: '👨‍🎓',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Personalized dashboard & announcements',
      'Course enrollment & elective selection',
      'Timetable & attendance tracking',
      'LMS access & communication tools'
    ],
    benefits: [
      '24/7 access to academic information',
      'Real-time notifications and updates',
      'Easy course management and enrollment',
      'Integrated learning management system'
    ]
  },
  {
    id: 'teacher',
    name: 'Teacher Portal',
    image: '/teacher-portal.png',
    description: 'Teaching tools, attendance marking, content management, and student interaction.',
    icon: '👩‍🏫',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Teaching schedule & class management',
      'Attendance marking & result entry',
      'LMS content management & quizzes',
      'AI-powered quiz generation'
    ],
    benefits: [
      'Streamlined teaching workflow',
      'Automated attendance and grading',
      'Content creation and management tools',
      'AI assistance for quiz generation'
    ]
  },
  {
    id: 'timetable',
    name: 'Timetable Management',
    image: '/admin.png',
    description: 'Automated scheduling with conflict resolution and optimization algorithms.',
    icon: '📅',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    features: [
      'Automated timetable generation',
      'Conflict resolution algorithms',
      'Resource optimization',
      'Multi-view calendar interface'
    ],
    benefits: [
      'Eliminates scheduling conflicts',
      'Saves 20+ hours per week',
      'Optimizes resource utilization',
      'Multiple viewing options'
    ]
  },
  {
    id: 'exam',
    name: 'Exam Management',
    image: '/exam-management.png',
    description: 'Complete exam lifecycle from scheduling to result publication and analysis.',
    icon: '📝',
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500',
    features: [
      'Exam scheduling & room assignment',
      'Invigilator management',
      'Result processing & publication',
      'Back paper handling'
    ],
    benefits: [
      'End-to-end exam management',
      'Automated result processing',
      'Comprehensive reporting',
      'Error-free operations'
    ]
  },
  {
    id: 'analytics',
    name: 'LMS Reports',
    image: '/lms-analytics.png',
    description: 'Comprehensive insights and reporting for data-driven decision making.',
    icon: '📊',
    color: 'teal',
    gradient: 'from-teal-500 to-blue-500',
    features: [
      'Performance analytics & trends',
      'Attendance pattern analysis',
      'Financial reporting & insights',
      'Usage statistics & engagement'
    ],
    benefits: [
      'Data-driven decision making',
      'Performance trend analysis',
      'Comprehensive reporting suite',
      'Real-time insights'
    ]
  }
];

export function InteractiveShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleFeatureChange = useCallback((feature: Feature) => {
    setActiveFeature(feature);
    setImageError(null);
  }, []);

  const handleImageError = useCallback((imageSrc: string) => {
    setImageError(imageSrc);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageError(null);
  }, []);

  const memoizedFeatures = useMemo(() => features, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🎯 Interactive Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See CampusHub
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              in Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the intuitive interface and powerful features that make education management effortless. 
            Click on any module to see it in detail.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Feature Navigation */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {memoizedFeatures.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => handleFeatureChange(feature)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group ${
                    activeFeature.id === feature.id
                      ? 'bg-white shadow-2xl border-2 border-purple-200 transform scale-105'
                      : 'bg-white/70 hover:bg-white hover:shadow-lg border border-gray-200'
                  }`}
                  style={{
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 100}ms`
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
                        {feature.name}
                      </h3>
                      <p className={`text-sm transition-colors ${
                        activeFeature.id === feature.id ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeFeature.id === feature.id ? 'bg-purple-500' : 'bg-gray-300 group-hover:bg-gray-400'
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl opacity-50"></div>
              
              {/* Main Content */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${activeFeature.gradient} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm">
                      {activeFeature.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{activeFeature.name}</h3>
                      <p className="text-white/90 text-lg">{activeFeature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Image Display */}
                <div className="p-8">
                  <div className="relative group">
                    {/* Amazing Border Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="bg-white rounded-2xl p-2 shadow-2xl relative">
                      <div className="relative overflow-hidden rounded-xl" style={{ height: '400px' }}>
                        {imageError === activeFeature.image ? (
                          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center rounded-xl">
                            <div className="text-center">
                              <div className={`w-16 h-16 bg-gradient-to-br ${activeFeature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                <span className="text-2xl">{activeFeature.icon}</span>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">{activeFeature.name}</h3>
                              <p className="text-sm text-gray-600">Screenshot coming soon</p>
                            </div>
                          </div>
                        ) : (
                          <img 
                            src={activeFeature.image} 
                            alt={`${activeFeature.name} - CampusHub University Management System`}
                            className="w-full h-full object-contain rounded-xl transition-all duration-700 ease-in-out hover:scale-105"
                            style={{ 
                              filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))'
                            }}
                            loading="lazy"
                            decoding="async"
                            onError={() => handleImageError(activeFeature.image)}
                            onLoad={handleImageLoad}
                          />
                        )}
                        
                        {/* Image Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl"></div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border border-gray-200">
                          <span className="text-sm font-medium text-gray-700">{activeFeature.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="px-8 pb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Capabilities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeFeature.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: 'fadeInUp 0.6s ease-out forwards'
                        }}
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${activeFeature.gradient} rounded-lg flex items-center justify-center`}>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Ready to explore {activeFeature.name}?</h5>
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12 border border-purple-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to See More?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              These are just a few highlights of CampusHub's powerful interface. 
              Schedule a personalized demo to explore all features in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Try Live Demo
              </a>
              <a href="/CampusHub.pdf" download="CampusHub-Brochure.pdf" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Brochure
              </a>
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
