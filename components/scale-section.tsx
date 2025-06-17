import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function ScaleSection() {
  // Define animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2, // Stagger children animations
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background animation - subtle fade in or pulse */}
      <motion.div
        className="absolute inset-0 bg-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate when element comes into view
          viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% of element is visible
        >
          <div className="space-y-4">
            {/* Icon animation */}
            <motion.div variants={itemVariants}>
              <TrendingUp className="h-16 w-16 text-white mx-auto drop-shadow-lg" />
            </motion.div>

            {/* Heading animation */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg"
              variants={itemVariants}
            >
              Scale Without Limits
            </motion.h2>

            {/* Paragraph animation */}
            <motion.p
              className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
              variants={itemVariants}
            >
              No more outgrowing your system or struggling to make it work. Scale without limits - your system evolves
              with you.
            </motion.p>
          </div>

          {/* Button animation */}
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Scaling Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}