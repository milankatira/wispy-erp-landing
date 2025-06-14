import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CloudERPSection() {
  const benefits = [
    "Analyze cloud ERP systems and their key features",
    "Assess advantages and limitations objectively",
    "Find the best cloud ERP solution for your requirements",
    "Support your growth goals with scalable solutions",
    "Make informed decisions for your organization",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Cloud ERP Analytics"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
            {/* Overlay Stats */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Successful Implementations</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Cloud ERP, <span className=" bg-clip-text text-transparent">Like Never Before</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't believe in the one-size-fits-all approach. We analyze cloud ERP systems, their key features,
                advantages, and limitations to help you assess ERP software and find the best cloud ERP solution for
                your business requirements or growth goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We intend to place you in the best position to make an informed decision for your organization.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className=" hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-purple-50 hover:border-orange-300 transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
