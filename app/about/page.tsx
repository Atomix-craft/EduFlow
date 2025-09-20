import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Education Technology Experts | CampusHub",
  description: "Meet the CampusHub team of education technology experts dedicated to transforming university management systems. Learn about our mission, values, and commitment to educational excellence.",
  keywords: [
    "CampusHub team",
    "education technology experts",
    "university management system developers",
    "education software company",
    "campus automation specialists",
    "student information system experts",
    "education technology leadership",
    "university software development team"
  ],
  openGraph: {
    title: "About CampusHub - Education Technology Experts",
    description: "Meet our team of education technology experts dedicated to transforming university management systems and campus automation.",
    images: [
      {
        url: '/admin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'CampusHub Team - Education Technology Experts',
      },
    ],
  },
}

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "CEO & Co-Founder",
    expertise: "Education Technology & University Administration",
    experience: "15+ years in higher education technology",
    education: "Ph.D. in Educational Technology, MIT",
    bio: "Dr. Johnson has spent over 15 years transforming educational institutions through technology. She previously served as CIO at two major universities and has published extensively on digital transformation in education.",
    image: "/admin-dashboard.png"
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    expertise: "Software Architecture & Cloud Infrastructure",
    experience: "12+ years in enterprise software development",
    education: "M.S. Computer Science, Stanford University",
    bio: "Michael leads our technical vision with expertise in scalable cloud architectures. He previously built enterprise systems for Fortune 500 companies and has deep experience in education technology platforms.",
    image: "/student-portal.png"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Head of Product",
    expertise: "User Experience & Educational Design",
    experience: "10+ years in educational product design",
    education: "Ph.D. in Learning Sciences, Harvard University",
    bio: "Dr. Rodriguez ensures our products meet the real needs of educators and students. She has designed learning management systems used by over 2 million students worldwide.",
    image: "/teacher-portal.png"
  },
  {
    name: "James Wilson",
    role: "Head of Implementation",
    expertise: "System Integration & Change Management",
    experience: "8+ years in education system implementations",
    education: "M.B.A. in Technology Management, Wharton",
    bio: "James leads our implementation team and has successfully deployed university management systems at over 50 institutions. He specializes in change management and user adoption strategies.",
    image: "/exam-management.png"
  }
]

const values = [
  {
    title: "Educational Excellence",
    description: "We believe technology should enhance, not replace, the human elements of education. Every feature we build is designed to support better learning outcomes.",
    icon: "🎓"
  },
  {
    title: "Innovation",
    description: "We stay at the forefront of education technology, constantly exploring new ways to solve age-old problems in university management.",
    icon: "💡"
  },
  {
    title: "Partnership",
    description: "We work closely with our clients as partners, not just customers. Your success is our success, and we're committed to your long-term growth.",
    icon: "🤝"
  },
  {
    title: "Transparency",
    description: "We believe in open communication, clear pricing, and honest feedback. No hidden fees, no surprises, just straightforward partnerships.",
    icon: "🔍"
  }
]

const stats = [
  { number: "50+", label: "Years Combined Experience" },
  { number: "100+", label: "Universities Consulted" },
  { number: "15+", label: "Education Technology Awards" },
  { number: "24/7", label: "Support Commitment" }
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Education Through
            <span className="gradient-text block">Technology Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're a team of education technology experts dedicated to revolutionizing how universities 
            manage their operations, empower their students, and achieve their academic goals.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower educational institutions with cutting-edge technology that simplifies 
                complex processes, enhances student experiences, and enables data-driven decision making.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that every university deserves access to world-class management tools 
                that can scale with their growth and adapt to their unique needs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Built CampusHub</h3>
              <p className="text-gray-600 mb-4">
                After years of working with universities struggling with outdated, fragmented systems, 
                we saw the need for a unified platform that could handle every aspect of campus management.
              </p>
              <p className="text-gray-600">
                CampusHub was born from our vision of a world where technology seamlessly supports 
                education, where administrators can focus on strategy rather than paperwork, and where 
                students have access to everything they need in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Exclusive Pilot Program
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Be among the first 10 universities to experience CampusHub with our special pilot program. 
            Get free implementation, custom features, and direct access to our development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
              Join Pilot Program
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-lg transition-colors">
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
                <li><a href="/#screenshots" className="hover:text-white transition-colors">Screenshots</a></li>
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
  );
}
