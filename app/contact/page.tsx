"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FloatingNavigation from "@/components/floating-navigation"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would integrate with your Laravel backend
    console.log("Contact Form Data:", formData)

    // Simulate API call
    try {
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      alert("Thank you for your message! We'll get back to you within 24 hours.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      })
    } catch (error) {
      alert("There was an error sending your message. Please try again or call us directly.")
    }
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <FloatingNavigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cheetah-rocks.jpg"
            alt="Cheetah on rocks overlooking savanna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 pt-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90">Let's plan your perfect African safari adventure together</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <Card className="border-sunset-orange/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sunset-orange/10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-sunset-orange" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-charcoal mb-2">Phone</h3>
                        <p className="text-elephant-gray mb-1">+27 13 735 4000</p>
                        <p className="text-elephant-gray mb-1">+27 82 555 0123 (WhatsApp)</p>
                        <p className="text-sm text-dusty-rose">24/7 Emergency Line Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-acacia-green/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-acacia-green/10 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-acacia-green" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-charcoal mb-2">Email</h3>
                        <p className="text-elephant-gray mb-1">info@krugerwildsafaris.co.za</p>
                        <p className="text-elephant-gray mb-1">bookings@krugerwildsafaris.co.za</p>
                        <p className="text-sm text-dusty-rose">Response within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-dusty-rose/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-dusty-rose/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-dusty-rose" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-charcoal mb-2">Location</h3>
                        <p className="text-elephant-gray mb-1">Kruger National Park</p>
                        <p className="text-elephant-gray mb-1">Mpumalanga, South Africa</p>
                        <p className="text-sm text-dusty-rose">GPS: -24.0094, 31.5547</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-lion-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-lion-gold/10 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-lion-gold" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-charcoal mb-2">Office Hours</h3>
                        <p className="text-elephant-gray mb-1">Monday - Sunday: 6:00 AM - 8:00 PM</p>
                        <p className="text-elephant-gray mb-1">Public Holidays: 8:00 AM - 6:00 PM</p>
                        <p className="text-sm text-dusty-rose">SAST (South African Standard Time)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <h3 className="font-heading text-xl font-bold text-charcoal">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="bg-gradient-to-r from-sunset-orange to-deep-terracotta text-white p-4 h-auto">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5" />
                      <div className="text-left">
                        <div className="font-semibold">Book Safari</div>
                        <div className="text-xs opacity-90">Start planning now</div>
                      </div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-acacia-green text-acacia-green hover:bg-acacia-green hover:text-white p-4 h-auto bg-transparent"
                  >
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5" />
                      <div className="text-left">
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-xs opacity-90">Instant chat</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="font-display text-3xl text-charcoal">Send us a Message</CardTitle>
                  <p className="text-elephant-gray">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="booking">Safari Booking</SelectItem>
                            <SelectItem value="information">General Information</SelectItem>
                            <SelectItem value="group">Group Booking</SelectItem>
                            <SelectItem value="photography">Photography Safari</SelectItem>
                            <SelectItem value="conservation">Conservation Programs</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={6}
                        placeholder="Tell us about your safari dreams, preferred dates, group size, or any questions you have..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sunset-orange to-deep-terracotta hover:from-deep-terracotta hover:to-sunset-orange text-white py-3 text-lg font-semibold"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-r from-cream-sand to-warm-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Find Us</h2>
            <p className="text-xl text-elephant-gray">Located in the heart of Kruger National Park, Mpumalanga</p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-sunset-orange to-golden-savanna p-6 text-white">
              <h3 className="font-heading text-xl font-bold mb-2">Kruger Wild Safaris</h3>
              <p className="opacity-90">Your gateway to African wildlife adventures</p>
            </div>
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-elephant-gray">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-sunset-orange" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">Kruger National Park, Mpumalanga, South Africa</p>
                <p className="text-xs mt-2">GPS: -24.0094, 31.5547</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-elephant-gray">Quick answers to common questions about our safaris</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What's the best time to visit?",
                answer:
                  "Dry season (May-September) offers excellent game viewing, while wet season (October-April) provides lush landscapes and newborn animals.",
              },
              {
                question: "What should I pack?",
                answer:
                  "Neutral-colored clothing, comfortable walking shoes, hat, sunscreen, binoculars, and camera. We provide a detailed packing list upon booking.",
              },
              {
                question: "Are safaris suitable for children?",
                answer:
                  "Yes! We offer family-friendly safaris with age-appropriate activities. Children under 12 receive a 30% discount.",
              },
              {
                question: "What's included in the price?",
                answer:
                  "All meals, accommodation, game drives, park fees, and professional guide services. International flights and personal expenses are excluded.",
              },
              {
                question: "How do I get to Kruger?",
                answer:
                  "Fly to OR Tambo International Airport (Johannesburg) or Kruger Mpumalanga International Airport. We provide transfer services.",
              },
              {
                question: "What about safety?",
                answer:
                  "Safety is our top priority. All guides are trained professionals, vehicles are regularly maintained, and we follow strict safety protocols.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-elephant-gray leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
