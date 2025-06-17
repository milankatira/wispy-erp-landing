import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, Cog, Rocket } from "lucide-react"
import { motion } from 'framer-motion';
export default function ApproachSection() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Analysis",
      description: "We analyze your current processes and identify optimization opportunities.",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Consultation",
      description: "Our experts work closely with your team to understand your unique needs.",
    },
    {
      icon: <Cog className="h-8 w-8 text-amber-500" />,
      title: "Implementation",
      description: "Seamless integration with minimal disruption to your operations.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Optimization",
      description: "Continuous support and optimization to ensure maximum ROI.",
    },
  ]


  // Variants for staggered children animations for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger cards' appearance
        delayChildren: 0.2,   // Delay the start of card animations
      },
    },
  } as any;

  // Variants for individual card animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Use spring for a slightly bouncy effect
        stiffness: 100,
        damping: 10,
      },
    },
  } as any;

  // Variants for icon hover animation
  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 5, transition: { duration: 0.3 } } // Scale up and slightly rotate on hover
  } as any;
  return (
    <section id="approach" className="py-20 ">
      <motion.section
        id="approach"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" // Added a light background for visual separation
        initial="hidden" // Initial state before animation
        whileInView="visible" // Animate when the element enters the viewport
        viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% of the section is visible
      >
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ y: -50, opacity: 0 }} // Initial position for header
          whileInView={{ y: 0, opacity: 1 }} // Animate header into view
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of header is visible
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Wispy Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful ERP implementation and long-term success.
          </p>
        </motion.div>

        {/* Steps Grid */}

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants} // Apply container variants for staggered animation
        >
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="text-center space-y-4"
          initial={{ y: 50, opacity: 0 }} // Initial position for buttons
          whileInView={{ y: 0, opacity: 1 }} // Animate buttons into view
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of element is visible
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} // Smooth transition with a delay
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="hover:opacity-90 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
            >
              Download Guide
            </Button>
          </div>
        </motion.div>

      </motion.section>
    </section>
  )
}
