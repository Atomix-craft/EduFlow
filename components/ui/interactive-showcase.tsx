'use client';

import { useState } from 'react';

interface Feature {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  benefits: string[];
}

const features: Feature[] = [
  {
    id: 'admin',
    name: 'Admin Dashboard',
    image: '/admin-dashboard.png',
    description: 'Comprehensive overview of academic operations, system analytics, and management tools.',
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

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See CampusHub in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the intuitive interface and powerful features that make education management effortless.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    setActiveFeature(feature);
                    setImageError(null);
                  }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeFeature.id === feature.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      activeFeature.id === feature.id ? 'bg-white' : 'bg-purple-600'
                    }`} />
                    <span className="font-medium">{feature.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Display Area - ClickUp Style */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background Blurred Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110 transition-all duration-1000 ease-in-out min-h-96 opacity-30"
                style={{ 
                  backgroundImage: `url(${activeFeature.image})`,
                  transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'scale(1.1) rotate(1deg)'
                }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

              {/* Main Image Container with Amazing Border */}
              <div className="relative z-10 p-8">
                <div className="relative group">
                  {/* Amazing Border Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="bg-white rounded-2xl p-2 shadow-2xl">
                    <div className="relative overflow-hidden rounded-xl" style={{ height: '500px' }}>
                      {imageError === activeFeature.image ? (
                        <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center rounded-xl">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{activeFeature.name}</h3>
                            <p className="text-sm text-gray-600">Screenshot coming soon</p>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={activeFeature.image} 
                          alt={`${activeFeature.name} - CampusHub University Management System`}
                          className="w-full max-w-4xl mx-auto rounded-xl transition-all duration-700 ease-in-out hover:scale-105"
                          style={{ 
                            maxHeight: '600px', 
                            objectFit: 'contain',
                            objectPosition: 'center',
                            transform: 'scale(1)',
                            transformOrigin: 'center',
                            transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))'
                          }}
                          loading="lazy"
                          decoding="async"
                          onError={() => setImageError(activeFeature.image)}
                          onLoad={() => setImageError(null)}
                        />
                      )}
                      
                      {/* Image Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl"></div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border border-gray-200">
                        <span className="text-sm font-medium text-gray-700">{activeFeature.name}</span>
                      </div>
                      
                      {/* Bottom Gradient Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Details Panel */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeFeature.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose {activeFeature.name}?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeFeature.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to See More?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              These are just a few highlights of CampusHub's powerful interface. 
              Schedule a personalized demo to explore all features in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
                Schedule Demo
              </a>
              <a href="/CampusHub.pdf" download="CampusHub-Brochure.pdf" className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
