import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - University Management System Questions | CampusHub",
  description: "Frequently asked questions about CampusHub university management system, student information system, learning management system, and campus automation features.",
  keywords: [
    "university management system FAQ",
    "education management system questions",
    "campus automation FAQ",
    "student information system FAQ",
    "learning management system questions",
    "university software FAQ",
    "campus management system help"
  ],
  openGraph: {
    title: "CampusHub FAQ - University Management System Questions",
    description: "Get answers to common questions about university management systems, campus automation, and educational technology.",
    images: [
      {
        url: '/admin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'CampusHub University Management System FAQ',
      },
    ],
  },
}

const faqs = [
  {
    question: "What is CampusHub and how does it help universities?",
    answer: "CampusHub is a comprehensive university education management system that streamlines academic operations, student lifecycle management, and campus administration. It provides integrated solutions for student information systems, learning management, timetable management, exam management, and campus automation, helping universities operate more efficiently and provide better educational experiences."
  },
  {
    question: "What features does CampusHub offer for universities?",
    answer: "CampusHub offers a complete suite of features including Student Information System (SIS), Learning Management System (LMS), automated timetable management, comprehensive exam management, student portal, teacher portal, admin dashboard, admission management, result processing, attendance tracking, fee management, library management, and hostel management. All features are designed to work seamlessly together."
  },
  {
    question: "Is CampusHub suitable for all types of educational institutions?",
    answer: "Yes, CampusHub is designed to serve universities, colleges, schools, and educational institutions of all sizes. The system is scalable and can be customized to meet the specific needs of different types of educational organizations, from small colleges to large universities with multiple campuses."
  },
  {
    question: "How does the student information system (SIS) work?",
    answer: "CampusHub's Student Information System manages the complete student lifecycle from admission to graduation. It handles student enrollment, academic records, course management, grade tracking, attendance monitoring, and provides students with a personalized portal to access their academic information, schedules, and resources."
  },
  {
    question: "What learning management system (LMS) features are included?",
    answer: "The integrated LMS provides course content management, online assessments, assignment submission, discussion forums, grade book, progress tracking, and interactive learning tools. It supports multimedia content, video lectures, quizzes, and collaborative learning features to enhance the educational experience."
  },
  {
    question: "How does timetable management work in CampusHub?",
    answer: "CampusHub's timetable management system uses advanced algorithms to automatically generate conflict-free schedules. It considers faculty availability, room capacity, course requirements, and student preferences to create optimal timetables. The system can handle complex scheduling scenarios and provides multiple viewing options for different users."
  },
  {
    question: "Can CampusHub handle exam management for large universities?",
    answer: "Yes, CampusHub's exam management system is designed to handle the complete exam lifecycle for universities of any size. It manages exam scheduling, room allocation, invigilator assignment, result processing, grade publication, and back paper handling. The system ensures error-free operations and provides comprehensive reporting."
  },
  {
    question: "Does CampusHub offer a free trial?",
    answer: "Yes, CampusHub offers a 14-day free trial for educational institutions. This allows you to experience all the features of the university management system, test the platform with your data, and see how it can benefit your institution before making a commitment."
  },
  {
    question: "What kind of support does CampusHub provide?",
    answer: "CampusHub provides comprehensive support including 24/7 technical support, implementation assistance, training sessions for administrators and users, regular system updates, and dedicated account management. We also offer documentation, video tutorials, and a knowledge base to help you get the most out of the system."
  },
  {
    question: "How secure is the data in CampusHub?",
    answer: "CampusHub prioritizes data security with enterprise-grade encryption, secure cloud infrastructure, regular security audits, role-based access controls, and compliance with educational data protection standards. All data is backed up regularly and stored in secure, geographically distributed data centers."
  },
  {
    question: "Can CampusHub integrate with existing university systems?",
    answer: "Yes, CampusHub offers robust integration capabilities with existing university systems including ERP systems, library management systems, financial systems, and third-party educational tools. Our team works with you to ensure smooth integration and data migration from your current systems."
  },
  {
    question: "What are the pricing options for CampusHub?",
    answer: "CampusHub offers flexible pricing plans based on the size of your institution and the features you need. We provide transparent pricing with no hidden fees, and our plans scale with your institution's growth. Contact our sales team for a customized quote based on your specific requirements."
  }
]

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="faq" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "FAQ" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about CampusHub university management system, 
            campus automation, and educational technology solutions.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Our team is here to help you find the perfect education management solution for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
              Contact Support
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
