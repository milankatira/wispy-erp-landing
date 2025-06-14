import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Shield, Zap, Users } from "lucide-react"

export default function CloudSolutionsSection() {
  const features = [
    {
      icon: <Cloud className="h-8 w-8 text-orange-500" />,
      title: "Cloud-First Approach",
      description: "Built for the cloud, optimized for performance and scalability.",
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance.",
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      title: "Lightning Fast",
      description: "Optimized performance with real-time data processing.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for distributed teams.",
    },
  ]

  return (
    <section id="solutions" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Wispy Cloud Solutions:</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wispy don't just offer Cloud-based ERP's - We take the hassle out of decision-making, offering the
                perfect fit from a world of solutions. Looking for efficiency, scalability, and a system that adapts to
                your unique needs? We're here to make that happen.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through working with you closely, we identify an ERP system that not only aligns with your goals, but
                also seamlessly integrates with your business processes.
              </p>
            </div>

            <Button className=" hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Explore Solutions
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <Image
              src="/placeholder_1.png?height=500&width=600"
              alt="Cloud ERP Solutions"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
