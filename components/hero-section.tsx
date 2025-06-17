'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Calculator, BookOpen } from "lucide-react"
import HeroVideoDialog from "./magicui/hero-video-dialog"
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="pt-40 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-green-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative">
                  All ERP Services,{" "}
                  <span className="text-primary text-pretty relative inline-block">
                    Unified at Wispy
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full"
                    />
                    {/* Decorative dots */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.8 }}
                      className="absolute -right-8 top-0 w-3 h-3 bg-primary rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className="absolute -right-12 top-8 w-2 h-2 bg-orange-400 rounded-full"
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Wispy - A Trusted ERP Consultant for Unified Business Solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >

              <Button
                size="lg"
              >
                <Calculator className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Pricing Calculator</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
              >
                <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Pricing Guide
              </Button>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            >
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
                transition={{ delay: 0.8, type: "spring", bounce: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-orange-100 hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="text-2xl font-bold text-primary"
                >
                  99.9%
                </motion.div>
                <div className="text-sm text-gray-600">Uptime</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, type: "spring", bounce: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-teal-100 hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="text-2xl font-bold text-green-600"
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600">Support</div>
              </motion.div>

              {/* Floating particles animation */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 right-8 w-2 h-2 bg-primary/30 rounded-full"
              />

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-1/3 left-8 w-3 h-3 bg-orange-300/40 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}