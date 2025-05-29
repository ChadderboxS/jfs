"use client"

import Image from "next/image"
import { Briefcase, Users, Award, Clock } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function JoinOurTeamPage() {
  const isMobile = useMobile()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Join Our Team</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Build your career with Johnson&apos;s Fleet Service, a family-owned business with over 50 years of
            experience in the industry.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-secondary-700 mb-4">
                At Johnson&apos;s Fleet Service, we value our employees and provide a supportive, growth-oriented
                environment where you can develop your skills and advance your career.
              </p>
              <p className="text-secondary-700 mb-4">
                As a family-owned business, we treat our team members like family, fostering a collaborative and
                respectful workplace culture.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="mr-3 text-primary-900">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Competitive Pay</h3>
                    <p className="text-sm text-secondary-700">We offer competitive wages and benefits.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-primary-900">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Team Environment</h3>
                    <p className="text-sm text-secondary-700">Work with a supportive team that values collaboration.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-primary-900">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Career Growth</h3>
                    <p className="text-sm text-secondary-700">Opportunities for advancement and skill development.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-primary-900">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Work-Life Balance</h3>
                    <p className="text-sm text-secondary-700">We value your time outside of work.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Johnson's Fleet Service Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-secondary-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Diesel Mechanic</h3>
              <p className="text-primary-900 mb-4">Full-Time</p>
              <p className="text-secondary-700 mb-4">
                We are seeking an experienced diesel mechanic to join our team. The ideal candidate will have experience
                with truck and trailer repair, diagnostics, and preventative maintenance.
              </p>
              <h4 className="font-bold mb-2">Requirements:</h4>
              <ul className="list-disc pl-5 mb-4 text-secondary-700">
                <li>2+ years experience as a diesel mechanic</li>
                <li>Knowledge of truck and trailer systems</li>
                <li>Ability to diagnose and repair mechanical issues</li>
                <li>Valid driver&apos;s license</li>
                <li>Strong work ethic and attention to detail</li>
              </ul>
              <a
                href="mailto:jobs@johnsonsfleetservice.com?subject=Diesel%20Mechanic%20Position"
                className="btn btn-primary"
              >
                Apply Now
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Service Writer</h3>
              <p className="text-primary-900 mb-4">Full-Time</p>
              <p className="text-secondary-700 mb-4">
                We are looking for a detail-oriented service writer to join our team. The ideal candidate will have
                excellent customer service skills and experience in the automotive or fleet service industry.
              </p>
              <h4 className="font-bold mb-2">Requirements:</h4>
              <ul className="list-disc pl-5 mb-4 text-secondary-700">
                <li>1+ years experience as a service writer or similar role</li>
                <li>Strong communication and customer service skills</li>
                <li>Basic knowledge of truck and trailer systems</li>
                <li>Computer proficiency</li>
                <li>Ability to multitask in a fast-paced environment</li>
              </ul>
              <a
                href="mailto:jobs@johnsonsfleetservice.com?subject=Service%20Writer%20Position"
                className="btn btn-primary"
              >
                Apply Now
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Trailer Technician</h3>
              <p className="text-primary-900 mb-4">Full-Time</p>
              <p className="text-secondary-700 mb-4">
                We are seeking a skilled trailer technician to join our team. The ideal candidate will have experience
                with trailer repair, maintenance, and inspection.
              </p>
              <h4 className="font-bold mb-2">Requirements:</h4>
              <ul className="list-disc pl-5 mb-4 text-secondary-700">
                <li>1+ years experience in trailer repair</li>
                <li>Knowledge of trailer systems and components</li>
                <li>Experience with welding and fabrication a plus</li>
                <li>Valid driver&apos;s license</li>
                <li>Ability to work independently and as part of a team</li>
              </ul>
              <a
                href="mailto:jobs@johnsonsfleetservice.com?subject=Trailer%20Technician%20Position"
                className="btn btn-primary"
              >
                Apply Now
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">General Application</h3>
              <p className="text-primary-900 mb-4">Various Positions</p>
              <p className="text-secondary-700 mb-4">
                Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals
                to join our team. Submit a general application and we&apos;ll keep your information on file for future
                openings.
              </p>
              <h4 className="font-bold mb-2">What to Include:</h4>
              <ul className="list-disc pl-5 mb-4 text-secondary-700">
                <li>Your resume with relevant experience</li>
                <li>Cover letter explaining your interest in Johnson&apos;s Fleet Service</li>
                <li>Types of positions you&apos;re interested in</li>
                <li>Availability and preferred work schedule</li>
              </ul>
              <a href="mailto:jobs@johnsonsfleetservice.com?subject=General%20Application" className="btn btn-primary">
                Submit Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Application Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-primary-200"></div>

              <div className="relative mb-8">
                <div className="flex items-center mb-2">
                  <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="ml-24 text-xl font-bold">Application Submission</h3>
                </div>
                <p className="ml-24 text-secondary-700">
                  Submit your application via email with your resume and cover letter. Be sure to include the position
                  you&apos;re applying for in the subject line.
                </p>
              </div>

              <div className="relative mb-8">
                <div className="flex items-center mb-2">
                  <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="ml-24 text-xl font-bold">Initial Review</h3>
                </div>
                <p className="ml-24 text-secondary-700">
                  Our hiring team will review your application and reach out to qualified candidates for an initial
                  phone interview.
                </p>
              </div>

              <div className="relative mb-8">
                <div className="flex items-center mb-2">
                  <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="ml-24 text-xl font-bold">In-Person Interview</h3>
                </div>
                <p className="ml-24 text-secondary-700">
                  Selected candidates will be invited for an in-person interview at our facility, where you&apos;ll meet
                  with our management team and discuss your experience and qualifications in more detail.
                </p>
              </div>

              <div className="relative mb-8">
                <div className="flex items-center mb-2">
                  <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="ml-24 text-xl font-bold">Skills Assessment</h3>
                </div>
                <p className="ml-24 text-secondary-700">
                  Depending on the position, you may be asked to complete a skills assessment or practical demonstration
                  to evaluate your technical abilities.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center mb-2">
                  <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <h3 className="ml-24 text-xl font-bold">Job Offer</h3>
                </div>
                <p className="ml-24 text-secondary-700">
                  Successful candidates will receive a job offer outlining the position details, compensation, and start
                  date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Questions About Working With Us?</h2>
            <p className="text-secondary-700 mb-8">
              If you have any questions about our current openings or the application process, please don&apos;t
              hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:jobs@johnsonsfleetservice.com" className="btn btn-primary">
                Email Us
              </a>
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
