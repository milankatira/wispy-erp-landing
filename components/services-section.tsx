import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Settings, Users, Zap } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "ERP Implementation",
      description: "Complete end-to-end ERP implementation with minimal business disruption.",
    },
    {
      icon: <Settings className="h-8 w-8 text-emerald-600" />,
      title: "System Integration",
      description: "Seamless integration with your existing business systems and processes.",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-500" />,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing support for your team.",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to maximize system performance.",
    },
  ]

  return (
    <section id="services" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services:</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a comprehensive suite of ERP services designed to streamline your operations, maximize ROI, and
                ensure long-term business growth.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-3">
                    <div>{service.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className=" hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              View All Services
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <Image
              src="/placeholder.png?height=600&width=600"
              alt="ERP Services"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
            {/* Floating Stats */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-emerald-100">
              <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">234</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
