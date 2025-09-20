"use client"

import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useState } from "react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to University Management Systems: Everything You Need to Know",
    excerpt: "A comprehensive guide covering all aspects of university management systems, from selection criteria to implementation best practices.",
    category: "Guides",
    readTime: "12 min read",
    date: "2024-01-15",
    image: "/blog-university-management.svg",
    slug: "complete-guide-university-management-systems"
  },
  {
    id: 2,
    title: "How to Choose the Best Education Management Software for Your Institution",
    excerpt: "Learn the key factors to consider when selecting education management software, including features, pricing, and implementation requirements.",
    category: "Selection",
    readTime: "8 min read",
    date: "2024-01-12",
    image: "/blog-software-selection.svg",
    slug: "how-to-choose-best-education-management-software"
  },
  {
    id: 3,
    title: "University Management System Implementation Checklist: 50 Essential Steps",
    excerpt: "A detailed checklist to ensure successful implementation of your university management system, from planning to go-live.",
    category: "Implementation",
    readTime: "15 min read",
    date: "2024-01-10",
    image: "/blog-implementation-checklist.svg",
    slug: "university-management-system-implementation-checklist"
  },
  {
    id: 4,
    title: "Top 10 Mistakes When Implementing Campus Management Software",
    excerpt: "Avoid common pitfalls that can derail your campus management software implementation with these expert insights.",
    category: "Best Practices",
    readTime: "6 min read",
    date: "2024-01-08",
    image: "/blog-best-practices.svg",
    slug: "top-10-mistakes-campus-management-software-implementation"
  },
  {
    id: 5,
    title: "LMS vs SIS: Understanding the Difference Between Learning and Student Information Systems",
    excerpt: "Clarify the differences between Learning Management Systems and Student Information Systems to make informed decisions.",
    category: "Education",
    readTime: "7 min read",
    date: "2024-01-05",
    image: "/blog-lms-vs-sis.svg",
    slug: "lms-vs-sis-difference-learning-student-information-systems"
  },
  {
    id: 6,
    title: "University Management Software ROI Calculator: Measure Your Investment Returns",
    excerpt: "Calculate the return on investment for your university management software with our comprehensive ROI framework.",
    category: "ROI",
    readTime: "10 min read",
    date: "2024-01-03",
    image: "/blog-roi-calculator.svg",
    slug: "university-management-software-roi-calculator"
  }
]

const categories = ["All", "Guides", "Selection", "Implementation", "Best Practices", "Education", "ROI"]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="blog" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Education Management
            <span className="gradient-text block">Insights & Guides</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights, best practices, and comprehensive guides for university management systems, 
            campus automation, and education technology solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Education Technology Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest articles, guides, and best practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            No spam. Unsubscribe at any time.
          </p>
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
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
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
