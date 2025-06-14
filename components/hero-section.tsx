import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                All ERP Services,{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">Unified at Wispy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Wispy - A Trusted ERP Consultant for Unified Business Solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className=" hover:opacity-90 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-2xl p-8 shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ERP Dashboard Preview"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-orange-100">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-teal-100">
                <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
