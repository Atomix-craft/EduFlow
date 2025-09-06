"use client"

import * as React from "react"
import { useState } from "react"
import { X, Eye, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./card"

interface ImageGalleryProps {
  images?: string[]
  className?: string
}

const ImageGallery = React.forwardRef<HTMLDivElement, ImageGalleryProps>(
  ({ images = [], className }, ref) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const placeholderImages = [
      {
        id: 1,
        title: "Admin Dashboard",
        description: "Comprehensive overview of academic operations and system management",
        gradient: "from-purple-200 to-purple-300",
        icon: "📊"
      },
      {
        id: 2,
        title: "Student Portal",
        description: "Personalized dashboard with course management and academic tools",
        gradient: "from-blue-200 to-blue-300",
        icon: "🎓"
      },
      {
        id: 3,
        title: "Teacher Portal",
        description: "Teaching tools, attendance marking, and content management",
        gradient: "from-green-200 to-green-300",
        icon: "👨‍🏫"
      },
      {
        id: 4,
        title: "Timetable Management",
        description: "Automated scheduling with conflict resolution and optimization",
        gradient: "from-orange-200 to-orange-300",
        icon: "📅"
      },
      {
        id: 5,
        title: "Exam Management",
        description: "Complete exam lifecycle from scheduling to result publication",
        gradient: "from-pink-200 to-pink-300",
        icon: "📝"
      },
      {
        id: 6,
        title: "Analytics Dashboard",
        description: "Comprehensive insights and reporting for data-driven decisions",
        gradient: "from-indigo-200 to-indigo-300",
        icon: "📈"
      }
    ]

    return (
      <div ref={ref} className={cn("space-y-8", className)}>
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((item) => (
            <Card key={item.id} className="group cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className={cn(
                  "w-full h-64 bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
                  item.gradient
                )}>
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <p className="text-lg font-medium">{item.title}</p>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Download className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Screenshot preview"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Replace these placeholders with actual screenshots of your software
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Request Full Demo
          </button>
        </div>
      </div>
    )
  }
)
ImageGallery.displayName = "ImageGallery"

export { ImageGallery }
