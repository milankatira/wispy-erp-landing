"use client"

import {
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  Navbar,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function WispyNavbar() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Solutions", link: "#solutions" },
    { name: "Our Approach", link: "#approach" },
    { name: "About", link: "#about" },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 w-full z-50">
      <Navbar>
        <NavBody>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/da5rta12e/image/upload/f_auto,q_auto/wispy-logo_vfdkv2"
              alt="Wispy Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-2xl font-bold text-gray-900">Wispy</span>
          </Link>

          <NavItems
            items={navItems}
            className="text-gray-700 hover:text-orange-600"
          />

          <div className="flex items-center gap-3">

            <Button >Get Started</Button>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/da5rta12e/image/upload/f_auto,q_auto/wispy-logo_vfdkv2"
                alt="Wispy Logo"
                width={36}
                height={36}
              />
              <span className="text-xl font-bold text-gray-900">Wispy</span>
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-2">
              <Button className="w-full" >
                Get Started
              </Button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}
