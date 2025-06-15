"use client"
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CloudSolutionsSection = dynamic(() => import("@/components/cloud-solutions-section"), { ssr: false });
const CloudERPSection = dynamic(() => import("@/components/cloud-erp-section"), { ssr: false });
const PartnersSection = dynamic(() => import("@/components/partners-section"), { ssr: false });
const ApproachSection = dynamic(() => import("@/components/approach-section"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/services-section"), { ssr: false });
const ScaleSection = dynamic(() => import("@/components/scale-section"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<></>}>
        <CloudSolutionsSection />
      </Suspense>
      <Suspense fallback={<></>}>
        <CloudERPSection />
      </Suspense>

      <Suspense fallback={<></>}>
        <PartnersSection />
      </Suspense>

      <Suspense fallback={<></>}>
        <ApproachSection />
      </Suspense>

      <Suspense fallback={<></>}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<></>}>
        <ScaleSection />
      </Suspense>

      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </main>
  );
}