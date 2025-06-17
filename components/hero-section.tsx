'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Calculator, BookOpen } from "lucide-react" // Import new icons
import HeroVideoDialog from "./magicui/hero-video-dialog"
import { motion } from 'framer-motion'
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

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">

              <Button
                size="lg"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Pricing Calculator
              </Button>

              <Button
                size="lg"
                variant="outline"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Pricing Guide
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

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0, type: "spring", bounce: 0.2 }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-orange-100"
              >
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0, type: "spring", bounce: 0.2 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-teal-100"
              >
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}