"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, Clock, Users, Shield, Phone } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function AboutPage() {
  const isMobile = useMobile()
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Johnson&apos;s Fleet Service</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Third generation owned and operated since 1971, serving Austin and Central Texas for over 50 years.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Johnson's Fleet Service History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-secondary-700 mb-4">
                Johnson&apos;s Fleet Service was founded in 1971 by John Johnson, who had a vision to provide quality
                truck and fleet maintenance services to the Austin area. What began as a small repair shop has grown
                into a trusted name in fleet service throughout Central Texas.
              </p>
              <p className="text-secondary-700 mb-4">
                Today, the third generation of the Johnson family continues to uphold the values of quality workmanship,
                honest service, and customer satisfaction that have been the foundation of our business for over 50
                years.
              </p>
              <p className="text-secondary-700">
                Our experienced team of technicians brings decades of combined experience to every job, ensuring that
                your vehicles receive the highest quality service and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-900 rounded-full mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Service</h3>
              <p className="text-secondary-700">
                We are committed to providing the highest quality service for every vehicle that comes through our
                doors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-900 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-secondary-700">
                We operate with honesty and transparency in all our dealings with customers and partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-900 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-secondary-700">
                We prioritize our customers' needs and work to exceed their expectations with every service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Johnson&apos;s Fleet Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4 text-primary-900">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">A+ BBB Rating</h3>
                <p className="text-secondary-700">
                  We maintain an A+ rating with the Better Business Bureau, reflecting our commitment to quality service
                  and customer satisfaction.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 text-primary-900">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Family Owned Since 1971</h3>
                <p className="text-secondary-700">
                  Three generations of experience and knowledge in the fleet service industry, serving Austin for over
                  50 years.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 text-primary-900">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experienced Technicians</h3>
                <p className="text-secondary-700">
                  Our skilled technicians have the expertise to handle all your fleet service needs with precision and
                  care.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 text-primary-900">
                <Clock className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
                <p className="text-secondary-700">
                  We understand that downtime costs money. Our efficient service gets your vehicles back on the road
                  quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-secondary-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Robert Johnson</h3>
                <p className="text-primary-900 mb-3">Owner / General Manager</p>
                <p className="text-secondary-700">
                  With over 30 years of experience in the fleet service industry, Robert leads our team with expertise
                  and dedication.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
                <p className="text-primary-900 mb-3">Service Manager</p>
                <p className="text-secondary-700">
                  Michael oversees our service operations, ensuring that every job meets our high standards of quality
                  and efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-primary-900 mb-3">Office Manager</p>
                <p className="text-secondary-700">
                  Sarah manages our office operations, ensuring smooth communication and excellent customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-900 text-white rounded-lg p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience the Johnson&apos;s Difference?</h2>
              <p className="mb-8">
                Contact us today to learn more about our services and how we can help keep your fleet running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
                {isMobile ? (
                  <a href="tel:5123892121" className="btn white-border-btn">
                    <Phone className="mr-2 h-5 w-5" />
                    512-389-2121
                  </a>
                ) : (
                  <div className="btn white-border-btn">
                    <Phone className="mr-2 h-5 w-5" />
                    512-389-2121
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
