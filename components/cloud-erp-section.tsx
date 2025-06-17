'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, Zap } from "lucide-react"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CloudERPSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Analyze cloud ERP systems and their key features",
    "Assess advantages and limitations objectively",
    "Find the best cloud ERP solution for your requirements",
    "Support your growth goals with scalable solutions",
    "Make informed decisions for your organization",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-20 w-96 h-96 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-20 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content - Image */}
          <motion.div
            variants={itemVariants as any}
            className="relative group order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src="https://res.cloudinary.com/da5rta12e/image/upload/f_auto,q_auto/placeholder_2_fugoot"
                alt="Cloud ERP Solutions"
                width={616}
                height={500}
                className="rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                loading="lazy"
              />

              {/* Overlay gradient on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-purple-500/10 rounded-2xl transition-opacity duration-300"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg border border-emerald-100"
            >
              <Sparkles className="h-6 w-6 text-emerald-600" />
            </motion.div>

            <motion.div
              animate={{
                y: [12, -12, 12],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border border-purple-100"
            >
              <Zap className="h-6 w-6 text-purple-600" />
            </motion.div>

            {/* Floating particles */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                x: [-4, 4, -4],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 -right-6 w-3 h-3 bg-emerald-400/60 rounded-full"
            />

            <motion.div
              animate={{
                y: [8, -8, 8],
                x: [4, -4, 4],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-1/3 -left-6 w-2 h-2 bg-purple-400/60 rounded-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={itemVariants as any}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "tween",
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                className="relative"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
                  Cloud ERP,{" "}
                  <span className="relative text-primary">
                    Like Never Before
                    {/* Animated accent dots */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="absolute -right-8 top-0 w-2 h-2 bg-emerald-500 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="absolute -right-12 top-6 w-3 h-3 bg-purple-500 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                      className="absolute -right-6 top-12 w-1.5 h-1.5 bg-pink-500 rounded-full"
                    />
                  </span>
                </h2>
              </motion.div>

              <motion.p
                variants={itemVariants as any}
                className="text-lg text-gray-600 leading-relaxed"
              >
                We don't believe in the one-size-fits-all approach. We analyze cloud ERP systems, their key features,
                advantages, and limitations to help you assess ERP software and find the best cloud ERP solution for
                your business requirements or growth goals.
              </motion.p>

              <motion.p
                variants={itemVariants as any}
                className="text-lg text-gray-600 leading-relaxed"
              >
                We intend to place you in the best position to make an informed decision for your organization.
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants as any}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start space-x-3 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0 group-hover:text-emerald-700 transition-colors duration-200" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants as any}
              className="flex flex-col sm:flex-row gap-4"
            >

                <Button >

                  <span className="relative z-10 font-medium">Learn More</span>

                </Button>



                <Button
                  variant="outline"
                >
                  <span className="relative z-10 font-medium">Schedule Consultation</span>
                </Button>

            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}