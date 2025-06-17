import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import {
  Activity,
  Award,
  FileText,
  BookOpen,
  Calculator,
  // Importing icons for the cards
  LineChart, // For ERP Implementation
  GitMerge, // For System Integration
  Users, // For Training & Support
  TrendingUp, // For Performance Optimization
  Lightbulb, // For ERP Selection & Advisory
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const services = [
  {
    title: "ERP Selection & Advisory",
    description:
      "Choosing the right ERP is a big deal. We help you evaluate top systems tailored to your goals.Assessment & Strategy Personalized assessments to match your business model Strategy to align tech and growthERP Evaluation In-depth comparisons of ERP platforms ROI analysis to back decisionsFuture-Ready Guidance Tech-forward insights to future-proof your ERP",
    icon: <Lightbulb className="w-8 h-8 text-emerald-500" />, // Icon for ERP Selection & Advisory
    content: (
      <div className="flex h-full w-full items-center justify-end rounded-2xl shadow-xl  text-white text-xl font-semibold p-6">
        <span className="mr-auto">ERP Selection & Advisory</span>
        <Calculator className="w-12 h-12 text-white opacity-90" />
      </div>
    ),
  },
  {
    title: "ERP Implementation",
    description:
      "We roll out your ERP with precision—no chaos, just results.Project Blueprinting Strategic planning and roadmappingCustom Configuration Tailored configurations Seamless data migrationTeam Empowerment Full-stack team training Post-launch optimization",
    icon: <LineChart className="w-8 h-8 text-blue-500" />, // Icon for ERP Implementation
    content: (
      <div className="flex h-full w-full items-center justify-end rounded-2xl shadow-xl  text-white text-xl font-semibold p-6">
        <span className="mr-auto">ERP Implementation</span>
        <Activity className="w-12 h-12 text-white opacity-90" />
      </div>
    ),
  },
  {
    title: "System Integration",
    description:
      "Connect all your systems like magic. Our integrations ensure your data flows securely and scales smoothly.Custom Connectivity APIs and 3rd-party connectionsReal-Time Sync Cross-platform data syncing Middleware and transformation layersModernization Legacy system upgrades On-prem to cloud transitions",
    icon: <GitMerge className="w-8 h-8 text-purple-500" />, // Icon for System Integration
    content: (
      <div className="flex h-full w-full items-center justify-end rounded-2xl shadow-xl text-white text-xl font-semibold p-6">
        <span className="mr-auto">System Integration</span>
        <FileText className="w-12 h-12 text-white opacity-90" />
      </div>
    ),
  },
  {
    title: "Training & Support",
    description:
      "Train your people, not just the system. We stay by your side long after go-live.Role-Based Training Interactive sessions tailored to user rolesOngoing Support 24/7 system support and health monitoringKnowledge Transfer Continuous learning formats Process consulting and usage tips",
    icon: <Users className="w-8 h-8 text-orange-500" />, // Icon for Training & Support
    content: (
      <div className="flex h-full w-full items-center justify-end rounded-2xl shadow-xl  text-white text-xl font-semibold p-6">
        <span className="mr-auto">Training & Support</span>
        <BookOpen className="w-12 h-12 text-white opacity-90" />
      </div>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Your ERP should evolve with you. We help tune and scale it to support growth.Monitoring & Analysis Real-time system performance insights Query and database optimizationProcess Efficiency Workflow automation Security patching and system updatesScaling Up Performance tuning for scale Load balancing strategies",
    icon: <TrendingUp className="w-8 h-8 text-red-500" />, // Icon for Performance Optimization
    content: (
      <div className="flex h-full w-full items-center justify-end rounded-2xl shadow-xl  text-white text-xl font-semibold p-6">
        <span className="mr-auto">Performance Optimization</span>
        <Award className="w-12 h-12 text-white opacity-90" />
      </div>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    {/* Render the icon here */}
                    <div>{service.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    {/* Truncate description to 2 lines */}
                    <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
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
              src="https://res.cloudinary.com/da5rta12e/image/upload/f_auto,q_auto/placeholder_ecvweq"
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
      <div className="w-full mx-auto px-4 py-5 hidden sm:flex">
        <StickyScroll content={services} />
      </div>
    </section>
  );
}