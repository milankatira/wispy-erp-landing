import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, Cog, Rocket } from "lucide-react"

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

  return (
    <section id="approach" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Wispy Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful ERP implementation and long-term success.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
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
              className="border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-purple-50 hover:border-orange-300 transition-all duration-300 px-8"
            >
              Download Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
