"use client"

import { Phone, MapPin, Mail, Clock, Printer } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { useMobile } from "@/hooks/use-mobile"

export default function ContactPage() {
  const isMobile = useMobile()
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get in touch with Johnson&apos;s Fleet Service for all your fleet maintenance and repair needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    {isMobile ? (
                      <p className="text-secondary-700">
                        <a href="tel:5123892121" className="hover:text-primary-700">
                          512-389-2121
                        </a>
                      </p>
                    ) : (
                      <p className="text-secondary-700">512-389-2121</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                    <Printer className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Fax</h3>
                    <p className="text-secondary-700">512-389-2970</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-secondary-700">
                      <a href="mailto:info@johnsonsfleetservice.com" className="hover:text-primary-700">
                        info@jfsatx.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-secondary-700">
                      2800 Hoeke Ln
                      <br />
                      Austin, TX 78744-1740
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 text-primary-900 rounded-full">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
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
            </div>

            <div className="hidden lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-secondary-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Location</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.7978900123283!2d-97.7394!3d30.2053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b44c3afcf237%3A0x4a2c1f819b18d1ae!2s2800%20Hoeke%20Ln%2C%20Austin%2C%20TX%2078744!5e0!3m2!1sen!2sus!4v1715793245000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
