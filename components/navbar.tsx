"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/da5rta12e/image/upload/f_auto,q_auto/wispy-logo_vfdkv2"
                alt="Wispy Logo"
                width={40}
                height={40}
                priority
                className="w-10 h-auto"
              />
              <span className="text-2xl font-bold text-gray-900">Wispy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#services"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="#solutions"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#approach"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Our Approach
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className=" hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="text-gray-700 hover:text-orange-600 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="#services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600"
              >
                Services
              </Link>
              <Link
                href="#solutions"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600"
              >
                Solutions
              </Link>
              <Link
                href="#approach"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600"
              >
                Our Approach
              </Link>
              <Link href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600">
                About
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600"
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full  hover:opacity-90 text-white shadow-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
