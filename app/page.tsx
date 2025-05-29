import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Award, Truck, PenToolIcon as Tools, Clock, Users, Printer } from "lucide-react"
import heroRightImg from "@/public/images/hero-johnsons-fleet-service.png"



export default function Home() {
  const isMobile = false // Replace with actual mobile detection logic if needed

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0"> 
          <Image
            src={heroRightImg}
            alt="Johnson's Fleet Service vintage truck"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          {/*<div className="absolute inset-0 bg-black bg-opacity-40"></div>*/}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="w-full sm:w-2/5 min-w-md text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Professional Fleet Service & Repair</h1>
            <p className="text-xl md:text-2xl mb-4 drop-shadow-md">Third generation owned and operated since 1971</p>
            <p className="text-lg mb-8 drop-shadow-md">
              Serving Austin and Central Texas with quality truck and fleet maintenance services for over 50 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-secondary text-lg px-8 py-3">
                Contact Us
              </Link>
              {isMobile ? (
                <a href="tel:5123892121" className="btn white-border-btn text-lg px-8 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  512-389-2121
                </a>
              ) : (
                <div className="btn white-border-btn text-lg px-8 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  512-389-2121
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-900 rounded-full mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Truck & Trailer Repair</h3>
              <p className="text-secondary-700">
                Complete repair and maintenance services for trucks, trailers, and fleet vehicles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-900 rounded-full mb-4">
                <Tools className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fleet Maintenance</h3>
              <p className="text-secondary-700">
                Comprehensive fleet maintenance programs to keep your vehicles on the road.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-900 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Preventative Maintenance</h3>
              <p className="text-secondary-700">Regular maintenance to prevent breakdowns and extend vehicle life.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary-100 py-16">
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
                <Tools className="h-8 w-8" />
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

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-900 text-white rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to get started?</h2>
                <p className="text-primary-100">Contact us today for all your fleet service needs.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Location</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0 text-primary-900" />
                  <div>
                    <p className="font-medium">Johnson&apos;s Fleet Service</p>
                    <p className="text-secondary-700">
                      2800 Hoeke Ln
                      <br />
                      Austin, TX 78744-1740
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4 text-secondary-700">
                  <Phone className="mr-2 h-5 w-5 text-primary-900" />
                    <span>512-389-2121</span>
                </div>
                <div className="flex items-center mb-4 text-secondary-700">
                  <Printer className="mr-2 h-5 w-5 text-primary-900" />
                  <span>512-389-2970</span>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold mb-2">Business Hours</h4>
                  <ul className="space-y-1 text-secondary-700">
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
            </div>
            <div className="md:w-1/2 h-80 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.7978900123283!2d-97.7394!3d30.2053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b44c3afcf237%3A0x4a2c1f819b18d1ae!2s2800%20Hoeke%20Ln%2C%20Austin%2C%20TX%2078744!5e0!3m2!1sen!2sus!4v1715793245000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
