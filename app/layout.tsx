import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CampusHub - Complete University Education Management System | EMS Software",
    template: "%s | CampusHub - University Management System"
  },
  description: "CampusHub is the leading university education management system (EMS) with comprehensive features for academic administration, student information system (SIS), learning management system (LMS), timetable management, exam management, and campus automation. Perfect for universities, colleges, and educational institutions.",
  keywords: [
    "education management system",
    "university management system", 
    "school management software",
    "student information system",
    "academic management system",
    "campus management system",
    "university administration software",
    "college management system",
    "educational technology",
    "learning management system",
    "timetable management",
    "exam management system",
    "student portal",
    "teacher portal",
    "admin dashboard",
    "academic software",
    "campus automation",
    "university ERP",
    "education software",
    "institutional management",
    "academic planning",
    "curriculum management",
    "student lifecycle management",
    "admission management",
    "result management",
    "attendance management",
    "fee management",
    "library management",
    "hostel management",
    "university digital transformation"
  ],
  authors: [{ name: "CampusHub Team" }],
  creator: "CampusHub",
  publisher: "CampusHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://campushub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CampusHub - Complete University Education Management System",
    description: "Transform your university with CampusHub's comprehensive education management system. Features admin dashboard, student portal, teacher portal, timetable management, exam management, and more.",
    url: 'https://campushub.com',
    siteName: 'CampusHub',
    images: [
      {
        url: '/admin-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'CampusHub University Management System Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CampusHub - University Education Management System",
    description: "Complete university management system with admin, student, and teacher portals. Streamline academic operations and campus management.",
    images: ['/admin-dashboard.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'education',
  classification: 'Education Management Software',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "CampusHub",
      "description": "Complete university education management system with comprehensive features for academic administration, student information system, learning management system, timetable management, and exam management.",
      "url": "https://campushub.com",
      "applicationCategory": "EducationApplication",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free trial available"
      },
      "provider": {
        "@type": "Organization",
        "name": "CampusHub",
        "url": "https://campushub.com"
      },
      "featureList": [
        "University Management System",
        "Student Information System (SIS)",
        "Learning Management System (LMS)",
        "Timetable Management",
        "Exam Management System",
        "Student Portal",
        "Teacher Portal",
        "Admin Dashboard",
        "Academic Administration",
        "Campus Automation",
        "Admission Management",
        "Result Management",
        "Attendance Management",
        "Fee Management",
        "Library Management",
        "Hostel Management"
      ],
      "screenshot": [
        "https://campushub.com/admin-dashboard.png",
        "https://campushub.com/student-portal.png",
        "https://campushub.com/teacher-portal.png",
        "https://campushub.com/exam-management.png",
        "https://campushub.com/lms-analytics.png"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CampusHub",
      "url": "https://campushub.com",
      "logo": "https://campushub.com/favicon.svg",
      "description": "Leading provider of university education management systems and campus automation solutions.",
      "foundingDate": "2024",
      "industry": "Educational Technology",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://campushub.com/contact"
      },
      "sameAs": [
        "https://linkedin.com/company/campushub",
        "https://twitter.com/campushub"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is CampusHub?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CampusHub is a comprehensive university education management system that provides complete solutions for academic administration, student information management, learning management, timetable management, and exam management."
          }
        },
        {
          "@type": "Question",
          "name": "What features does CampusHub offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CampusHub offers student information system (SIS), learning management system (LMS), timetable management, exam management, student portal, teacher portal, admin dashboard, and comprehensive campus automation features."
          }
        },
        {
          "@type": "Question",
          "name": "Is CampusHub suitable for universities and colleges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, CampusHub is designed specifically for universities, colleges, and educational institutions of all sizes. It provides scalable solutions for academic management and campus automation."
          }
        },
        {
          "@type": "Question",
          "name": "Does CampusHub offer a free trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, CampusHub offers a 14-day free trial for educational institutions to experience the full features of the university management system."
          }
        }
      ]
    }
  ];

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
