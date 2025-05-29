"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Printer } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import johnsonsFleetServiceLogoWhite from "@/public/images/logo-johnsons-fleet-service-white.svg"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const isMobile = useMobile()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="relative h-16 w-64 mb-4">
              <Image src={johnsonsFleetServiceLogoWhite} alt="Johnson's Fleet Service Logo" fill className="object-contain object-left" />
            </div>
            <p className="text-secondary-200 mb-2">Third generation owned and operated since 1971</p>
            <div className="flex items-center mt-4">
              {isMobile ? (
                <a href="tel:5123892121" className="flex items-center text-secondary-200 hover:text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>512-389-2121</span>
                </a>
              ) : (
                <div className="flex items-center text-secondary-200">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>512-389-2121</span>
                </div>
              )}
            </div>
            <div className="flex items-center mt-2">
              <Printer className="mr-2 h-5 w-5" />
              <span className="text-secondary-200">512-389-2970</span>
            </div>
            <div className="flex items-center mt-2">
              <a
                href="https://maps.google.com/?q=2800+Hoeke+Ln+Austin+TX+78744-1740"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-secondary-200 hover:text-white"
              >
                <MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                <span>
                  2800 Hoeke Ln
                  <br />
                  Austin, TX 78744-1740
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-200 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="text-secondary-200 hover:text-white">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-1 text-secondary-200">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-300">
          <p>&copy; {currentYear} Johnson&apos;s Fleet Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
