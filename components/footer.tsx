'use client'

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "ERP Implementation", href: "#" },
        { name: "Cloud Solutions", href: "#" },
        { name: "System Integration", href: "#" },
        { name: "Training & Support", href: "#" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Manufacturing", href: "#" },
        { name: "Retail", href: "#" },
        { name: "Healthcare", href: "#" },
        { name: "Finance", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Case Studies",
        href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Image src="/images/wispy-logo-footer.png" alt="Wispy Logo" width={201} height={42} className="mix-blend-screen h-10 w-[201px]" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted ERP consultant for unified business solutions. We help organizations streamline operations
              and accelerate growth through innovative cloud-based ERP solutions.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-orange-400" />
                contact@wispy.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-emerald-400" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                New York, NY 10001
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Visit our LinkedIn profile">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors" aria-label="Visit our Twitter profile">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Visit our Facebook profile">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="Visit our Instagram profile">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div
              key={index}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>© 2024 Wispy. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}