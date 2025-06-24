"use client"

import Link from "next/link"
import { Truck, PenToolIcon as Tools, Wrench, Cog, Clipboard } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function ServicesPage() {
  const isMobile = useMobile()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Johnson&apos;s Fleet Service provides comprehensive maintenance and repair services for trucks, trailers,
            and fleet vehicles.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Truck Repair */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                  <Truck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Truck Repair</h2>
              </div>
              <p className="text-secondary-700 mb-4">
                Our experienced technicians provide comprehensive repair services for all makes and models of trucks.
                From engine diagnostics to complete overhauls, we have the expertise to get your trucks back on the road
                quickly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Engine diagnostics and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Transmission service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Brake system repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Electrical system troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Suspension and steering repair</span>
                </li>
              </ul>
            </div>

            {/* Trailer Repair */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                  <Wrench className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Trailer Repair</h2>
              </div>
              <p className="text-secondary-700 mb-4">
                Keep your trailers in top condition with our comprehensive trailer repair services. We handle everything
                from minor repairs to major overhauls for all types of trailers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Brake and axle repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Suspension system service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Electrical and lighting repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Floor and structural repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>DOT inspection and certification</span>
                </li>
              </ul>
            </div>

            {/* Box & Body Repair */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                  <Tools className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Box & Body Repair</h2>
              </div>
              <p className="text-secondary-700 mb-4">
                Our skilled technicians provide expert repair services for van and truck bodies and boxes, ensuring your
                vehicles maintain their functionality and appearance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Structural repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Door and latch mechanism repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Floor replacement and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Roof repair and sealing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Interior and exterior panel replacement</span>
                </li>
              </ul>
            </div>

            {/* Lift Gate Service */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                  <Cog className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Lift Gate Service</h2>
              </div>
              <p className="text-secondary-700 mb-4">
                We specialize in the repair and maintenance of lift gates for all types of commercial vehicles, ensuring
                safe and reliable operation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Hydraulic system repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Motor and pump service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Control and switch repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Platform and structural repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Preventative maintenance</span>
                </li>
              </ul>
            </div>

            {/* Chipper Repair */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                  <Wrench className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Roll Up Door Service</h2>
              </div>
              <p className="text-secondary-700 mb-4">
                We do installation, repair, and maintenance for box truck and van roll up doors — helping your drivers stay safe, secure, and on schedule.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Repairs for damaged or stuck roll up doors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Replacement of panels, springs, tracks, and rollers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Preventative maintenance to reduce breakdowns and delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>New door installation for upfits or retrofits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Emergency service to get vehicles back on the road fast</span>
                </li>
              </ul>
            </div>

            {/* Fleet Maintenance */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                  <Clipboard className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Fleet Maintenance</h2>
              </div>
              <p className="text-secondary-700 mb-4">
                Our comprehensive fleet maintenance programs help keep your vehicles on the road and operating
                efficiently, reducing downtime and extending vehicle life.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Scheduled maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Preventative maintenance inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Fluid and filter changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>Brake system maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-900 mr-2">•</span>
                  <span>DOT compliance inspections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Service for Your Fleet?</h2>
            <p className="text-secondary-700 mb-8">
              Contact Johnson&apos;s Fleet Service today to schedule service or discuss your fleet maintenance needs.
              Our experienced team is ready to help keep your vehicles on the road.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              {isMobile ? (
                <a href="tel:5123892121" className="btn btn-secondary">
                  Call 512-389-2121
                </a>
              ) : (
                <div className="btn btn-secondary text-white">512-389-2121</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
