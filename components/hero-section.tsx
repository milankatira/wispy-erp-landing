import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import HeroVideoDialog from "./magicui/hero-video-dialog"

export default function HeroSection() {
  return (
    <section className="pt-40 pb-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                All ERP Services,{" "}
                <span className="text-primary text-pretty">Unified at Wispy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Wispy - A Trusted ERP Consultant for Unified Business Solutions.
              </p>
            </div>

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

          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-2xl p-8 shadow-2xl">
              <HeroVideoDialog
                className="block w-full h-full"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-orange-100">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-teal-100">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
