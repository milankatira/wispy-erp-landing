import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export default function ScaleSection() {
  return (
    <section className="py-20  relative overflow-hidden">
      <div className="absolute inset-0 bg-primary"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <TrendingUp className="h-16 w-16 text-white mx-auto drop-shadow-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Scale Without Limits</h2>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              No more outgrowing your system or struggling to make it work. Scale without limits - your system evolves
              with you.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Scaling Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
