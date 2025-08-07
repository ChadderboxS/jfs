"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import johnsonsFleetServiceLogo from "@/public/images/logo-johnsons-fleet-service.svg"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative ml-3 flex items-center">
              <Image
                src={johnsonsFleetServiceLogo}
                alt="Johnson's Fleet Service logo"
                className="h-20 w-auto"
                priority
              />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xl">
            <Link href="/" className="text-secondary-800 hover:text-primary-700 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-secondary-800 hover:text-primary-700 font-medium">
              Services
            </Link>
            <Link href="/about" className="hidden text-secondary-800 hover:text-primary-700 font-medium">
              About Us
            </Link>
            <Link href="/join-our-team" className="hidden text-secondary-800 hover:text-primary-700 font-medium">
              Join Our Team
            </Link>
            <Link href="/contact" className="text-secondary-800 hover:text-primary-700 font-medium">
              Contact
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            {isMobile ? (
              <a href="tel:5123892121" className="flex items-center text-primary-900 font-bold">
                <Phone className="mr-2 h-5 w-5" />
                <span>512-389-2121</span>
              </a>
            ) : (
              <div className="flex items-center text-primary-900 font-bold">
                <Phone className="mr-2 h-5 w-5" />
                <span>512-389-2121</span>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-secondary-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 text-xl">
            <Link
              href="/"
              className="block text-secondary-800 hover:text-primary-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-secondary-800 hover:text-primary-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hidden block text-secondary-800 hover:text-primary-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/join-our-team"
              className="hidden block text-secondary-800 hover:text-primary-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Our Team
            </Link>
            <Link
              href="/contact"
              className="block text-secondary-800 hover:text-primary-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:5123892121"
              className="flex items-center text-primary-900 font-bold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="mr-2 h-5 w-5" />
              <span>512-389-2121</span>
            </a>
          </nav>
        )}
      </div>
    </header>

  )
}