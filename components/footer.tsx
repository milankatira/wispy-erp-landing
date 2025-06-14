'use client'

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import { motion } from "framer-motion"

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
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Image src="/images/wispy-logo.png" alt="Wispy Logo" width={40} height={40} />
              <span className="text-2xl font-bold">Wispy</span>
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
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              viewport={{ once: true }}
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
            </motion.div>
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
