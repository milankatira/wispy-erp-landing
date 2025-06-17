'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Shield, Zap, Users } from "lucide-react"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CloudSolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <Cloud className="h-8 w-8 text-orange-500" />,
      title: "Cloud-First Approach",
      description: "Built for the cloud, optimized for performance and scalability.",
      color: "orange"
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance.",
      color: "emerald"
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      title: "Lightning Fast",
      description: "Optimized performance with real-time data processing.",
      color: "amber"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for distributed teams.",
      color: "blue"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="solutions" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
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
            className="space-y-8"
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
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }
                  }
                }}
                className="relative"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
                  Wispy Cloud Solutions:
                  {/* Animated accent line */}
                </h2>
              </motion.div>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "tween",
                      duration: 0.6,
                      ease: "easeOut" as const
                    }
                  }
                }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Wispy don't just offer Cloud-based ERP's - We take the hassle out of decision-making, offering the
                perfect fit from a world of solutions. Looking for efficiency, scalability, and a system that adapts to
                your unique needs? We're here to make that happen.
              </motion.p>

              <motion.p
variants={{
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
}}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Through working with you closely, we identify an ERP system that not only aligns with your goals, but
                also seamlessly integrates with your business processes.
              </motion.p>
            </div>


                <Button >
                  <span className="relative z-10 font-medium">Explore Solutions</span>
                </Button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={itemVariants as any}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src="https://res.cloudinary.com/da5rta12e/image/upload/f_auto,q_auto/placeholder_1_zmrt3y"
                alt="Cloud ERP Solutions"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                loading="lazy"
              />

              {/* Overlay gradient on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-orange-500/10 rounded-2xl transition-opacity duration-300"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-orange-100"
            >
              <Cloud className="h-6 w-6 text-orange-500" />
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-blue-100"
            >
              <Shield className="h-6 w-6 text-blue-600" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants as any}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${
                    feature.color === 'orange' ? 'from-orange-400 to-orange-600' :
                    feature.color === 'emerald' ? 'from-emerald-400 to-emerald-600' :
                    feature.color === 'amber' ? 'from-amber-400 to-amber-600' :
                    'from-blue-400 to-blue-600'
                  }`}
                />

                <CardContent className="p-6 text-center space-y-4 relative z-10">
                  <motion.div
                    className="flex justify-center"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-3 rounded-full bg-gray-50 group-hover:bg-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </CardContent>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}