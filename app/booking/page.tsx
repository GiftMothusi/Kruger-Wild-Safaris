"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import FloatingNavigation from "@/components/floating-navigation"
import { ChevronRight, Phone, Mail, CreditCard, CheckCircle, AlertCircle } from "lucide-react"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const preSelectedPackage = searchParams.get("package")

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",

    // Safari Details
    package: preSelectedPackage || "",
    startDate: "",
    endDate: "",
    adults: "2",
    children: "0",
    accommodation: "",

    // Special Requirements
    dietaryRequirements: "",
    medicalConditions: "",
    specialRequests: "",

    // Add-ons
    addOns: [] as string[],

    // Agreement
    termsAccepted: false,
    newsletterSubscribe: false,
  })

  const packages = [
    {
      id: "1",
      name: "Classic Kruger Safari",
      duration: "3 days / 2 nights",
      price: 4500,
      image: "/images/lion-hero.jpg",
      description: "Perfect introduction to African wildlife",
    },
    {
      id: "2",
      name: "Luxury Bush Experience",
      duration: "5 days / 4 nights",
      price: 18500,
      image: "/images/giraffe-sunset.jpg",
      description: "Premium safari with private reserves",
    },
    {
      id: "3",
      name: "Photography Safari",
      duration: "7 days / 6 nights",
      price: 25000,
      image: "/images/cheetah-rocks.jpg",
      description: "Golden hour specialists for perfect shots",
    },
    {
      id: "4",
      name: "Family Adventure Safari",
      duration: "4 days / 3 nights",
      price: 12000,
      image: "/images/zebra-herd.jpg",
      description: "Kid-friendly activities and education",
    },
    {
      id: "5",
      name: "Conservation Safari",
      duration: "6 days / 5 nights",
      price: 19500,
      image: "/images/rhino-cub.jpg",
      description: "Participate in real conservation efforts",
    },
    {
      id: "6",
      name: "Honeymoon Safari Romance",
      duration: "6 days / 5 nights",
      price: 32000,
      image: "/images/springbok-portrait.jpg",
      description: "Ultimate romantic safari experience",
    },
  ]

  const addOns = [
    { id: "helicopter", name: "Helicopter Scenic Flight", price: 2500 },
    { id: "cultural", name: "Cultural Village Visit", price: 800 },
    { id: "photography", name: "Professional Photography Guide", price: 1500 },
    { id: "spa", name: "Spa Treatment Package", price: 1200 },
    { id: "wine", name: "Wine Tasting Experience", price: 600 },
    { id: "night-drive", name: "Night Game Drive", price: 900 },
  ]

  // Set pre-selected package on component mount
  useEffect(() => {
    if (preSelectedPackage && !formData.package) {
      setFormData((prev) => ({ ...prev, package: preSelectedPackage }))
    }
  }, [preSelectedPackage, formData.package])

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, addOns: [...prev.addOns, addOnId] }))
    } else {
      setFormData((prev) => ({ ...prev, addOns: prev.addOns.filter((id) => id !== addOnId) }))
    }
  }

  const calculateTotal = () => {
    const selectedPackage = packages.find((p) => p.id === formData.package)
    const packagePrice = selectedPackage ? selectedPackage.price : 0
    const adultsCount = Number.parseInt(formData.adults)
    const childrenCount = Number.parseInt(formData.children)

    const basePrice = packagePrice * adultsCount + packagePrice * 0.7 * childrenCount

    const addOnPrice = formData.addOns.reduce((total, addOnId) => {
      const addOn = addOns.find((a) => a.id === addOnId)
      return total + (addOn ? addOn.price : 0)
    }, 0)

    return basePrice + addOnPrice
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Prepare booking data for Laravel backend
    const bookingData = {
      // Personal Information
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,

      // Safari Details
      package_id: formData.package,
      start_date: formData.startDate,
      end_date: formData.endDate,
      adults: Number.parseInt(formData.adults),
      children: Number.parseInt(formData.children),
      accommodation_preference: formData.accommodation,

      // Special Requirements
      dietary_requirements: formData.dietaryRequirements,
      medical_conditions: formData.medicalConditions,
      special_requests: formData.specialRequests,

      // Add-ons
      add_ons: formData.addOns,

      // Pricing
      total_price: calculateTotal(),
      currency: "ZAR",

      // Preferences
      newsletter_subscribe: formData.newsletterSubscribe,

      // Metadata
      booking_source: "website",
      created_at: new Date().toISOString(),
    }

    console.log("Booking Data for Laravel:", bookingData)

    try {
      // This is where you'll integrate with your Laravel backend
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json',
      //     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
      //   },
      //   body: JSON.stringify(bookingData)
      // })

      // if (!response.ok) {
      //   throw new Error('Booking submission failed')
      // }

      // const result = await response.json()

      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSubmitStatus("success")

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          package: "",
          startDate: "",
          endDate: "",
          adults: "2",
          children: "0",
          accommodation: "",
          dietaryRequirements: "",
          medicalConditions: "",
          specialRequests: "",
          addOns: [],
          termsAccepted: false,
          newsletterSubscribe: false,
        })
        setStep(1)
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Booking error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success/Error Messages
  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-warm-ivory flex items-center justify-center">
        <FloatingNavigation />
        <Card className="max-w-md mx-auto shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-acacia-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-acacia-green" />
            </div>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Booking Confirmed!</h2>
            <p className="text-elephant-gray mb-6">
              Thank you for booking with Kruger Wild Safaris! We'll contact you within 24 hours to confirm your safari
              adventure.
            </p>
            <p className="text-sm text-dusty-rose">Booking Reference: KWS-{Date.now().toString().slice(-6)}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (submitStatus === "error") {
    return (
      <div className="min-h-screen bg-warm-ivory flex items-center justify-center">
        <FloatingNavigation />
        <Card className="max-w-md mx-auto shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-deep-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-deep-terracotta" />
            </div>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Booking Error</h2>
            <p className="text-elephant-gray mb-6">
              There was an error submitting your booking. Please try again or contact us directly.
            </p>
            <div className="space-y-2">
              <Button
                onClick={() => setSubmitStatus("idle")}
                className="w-full bg-sunset-orange hover:bg-deep-terracotta text-white"
              >
                Try Again
              </Button>
              <Button
                variant="outline"
                className="w-full border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call +27 13 735 4000
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <FloatingNavigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/safari-camp-sunset.jpg"
            alt="Safari camping at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 pt-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Book Your Safari</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Start your African adventure - customize your perfect safari experience
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= stepNumber ? "bg-sunset-orange text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-sunset-orange" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <span className="text-sm text-elephant-gray">
                Step {step} of 4:{" "}
                {step === 1
                  ? "Choose Package"
                  : step === 2
                    ? "Personal Details"
                    : step === 3
                      ? "Customize Experience"
                      : "Review & Book"}
              </span>
            </div>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              {/* Step 1: Package Selection */}
              {step === 1 && (
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="font-display text-3xl text-charcoal mb-4">
                      Choose Your Safari Package
                    </CardTitle>
                    {preSelectedPackage && (
                      <div className="bg-acacia-green/10 p-4 rounded-lg mb-6">
                        <p className="text-acacia-green font-semibold">
                          ✓ Package pre-selected from your previous choice
                        </p>
                      </div>
                    )}
                  </CardHeader>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {packages.map((pkg) => (
                      <Card
                        key={pkg.id}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          formData.package === pkg.id ? "ring-2 ring-sunset-orange" : ""
                        }`}
                        onClick={() => handleInputChange("package", pkg.id)}
                      >
                        <div className="relative h-48">
                          <Image
                            src={pkg.image || "/placeholder.svg"}
                            alt={pkg.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-heading text-lg font-bold mb-2">{pkg.name}</h3>
                          <p className="text-elephant-gray text-sm mb-2">{pkg.description}</p>
                          <p className="text-dusty-rose font-semibold mb-2">{pkg.duration}</p>
                          <p className="text-2xl font-bold text-sunset-orange">
                            R {pkg.price.toLocaleString()}
                            <span className="text-sm text-elephant-gray"> per person</span>
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!formData.package}
                      className="bg-sunset-orange hover:bg-deep-terracotta text-white px-8 py-3"
                    >
                      Continue
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {step === 2 && (
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="font-display text-3xl text-charcoal mb-4">Personal Information</CardTitle>
                  </CardHeader>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
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
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Select onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="south-africa">South Africa</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <Label htmlFor="startDate">Start Date *</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="endDate">End Date *</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => handleInputChange("endDate", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="adults">Adults</Label>
                      <Select onValueChange={(value) => handleInputChange("adults", value)} defaultValue="2">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="children">Children</Label>
                      <Select onValueChange={(value) => handleInputChange("children", value)} defaultValue="0">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button onClick={() => setStep(1)} variant="outline" className="px-8 py-3">
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                      className="bg-sunset-orange hover:bg-deep-terracotta text-white px-8 py-3"
                    >
                      Continue
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Customize Experience */}
              {step === 3 && (
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="font-display text-3xl text-charcoal mb-4">
                      Customize Your Experience
                    </CardTitle>
                  </CardHeader>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="accommodation">Accommodation Preference</Label>
                      <Select onValueChange={(value) => handleInputChange("accommodation", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select accommodation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Lodge</SelectItem>
                          <SelectItem value="luxury">Luxury Lodge</SelectItem>
                          <SelectItem value="tented">Tented Camp</SelectItem>
                          <SelectItem value="treehouse">Tree House</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-4 block">Add-On Experiences</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addOns.map((addOn) => (
                          <div key={addOn.id} className="flex items-center space-x-3 p-4 border rounded-lg">
                            <Checkbox
                              id={addOn.id}
                              checked={formData.addOns.includes(addOn.id)}
                              onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                            />
                            <div className="flex-1">
                              <Label htmlFor={addOn.id} className="font-medium">
                                {addOn.name}
                              </Label>
                              <p className="text-sm text-sunset-orange font-semibold">
                                +R {addOn.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                      <Textarea
                        id="dietaryRequirements"
                        value={formData.dietaryRequirements}
                        onChange={(e) => handleInputChange("dietaryRequirements", e.target.value)}
                        placeholder="Please specify any dietary requirements or allergies..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="medicalConditions">Medical Conditions</Label>
                      <Textarea
                        id="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                        placeholder="Please inform us of any medical conditions we should be aware of..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        placeholder="Any special requests or celebrations we should know about..."
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button onClick={() => setStep(2)} variant="outline" className="px-8 py-3">
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(4)}
                      className="bg-sunset-orange hover:bg-deep-terracotta text-white px-8 py-3"
                    >
                      Review Booking
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Book */}
              {step === 4 && (
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="font-display text-3xl text-charcoal mb-4">Review Your Booking</CardTitle>
                  </CardHeader>

                  <div className="space-y-6">
                    {/* Booking Summary */}
                    <Card className="bg-cream-sand/50">
                      <CardContent className="p-6">
                        <h3 className="font-heading text-xl font-bold mb-4">Booking Summary</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Package:</span>
                            <span className="font-semibold">
                              {packages.find((p) => p.id === formData.package)?.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Dates:</span>
                            <span>
                              {formData.startDate} to {formData.endDate}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Guests:</span>
                            <span>
                              {formData.adults} Adults, {formData.children} Children
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Contact:</span>
                            <span>
                              {formData.firstName} {formData.lastName}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Email:</span>
                            <span>{formData.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Price Breakdown */}
                    <Card className="bg-sunset-orange/10">
                      <CardContent className="p-6">
                        <h3 className="font-heading text-xl font-bold mb-4">Price Breakdown</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Base Package ({formData.adults} adults):</span>
                            <span>
                              R{" "}
                              {(
                                (packages.find((p) => p.id === formData.package)?.price || 0) *
                                Number.parseInt(formData.adults)
                              ).toLocaleString()}
                            </span>
                          </div>
                          {Number.parseInt(formData.children) > 0 && (
                            <div className="flex justify-between">
                              <span>Children ({formData.children} × 70%):</span>
                              <span>
                                R{" "}
                                {Math.round(
                                  (packages.find((p) => p.id === formData.package)?.price || 0) *
                                    0.7 *
                                    Number.parseInt(formData.children),
                                ).toLocaleString()}
                              </span>
                            </div>
                          )}
                          {formData.addOns.map((addOnId) => {
                            const addOn = addOns.find((a) => a.id === addOnId)
                            return addOn ? (
                              <div key={addOnId} className="flex justify-between">
                                <span>{addOn.name}:</span>
                                <span>R {addOn.price.toLocaleString()}</span>
                              </div>
                            ) : null
                          })}
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between text-xl font-bold text-sunset-orange">
                              <span>Total:</span>
                              <span>R {calculateTotal().toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I accept the{" "}
                          <a href="#" className="text-sunset-orange hover:underline">
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-sunset-orange hover:underline">
                            Privacy Policy
                          </a>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletterSubscribe}
                          onCheckedChange={(checked) => handleInputChange("newsletterSubscribe", checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for safari tips and special offers
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button onClick={() => setStep(3)} variant="outline" className="px-8 py-3">
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!formData.termsAccepted || isSubmitting}
                      className="bg-gradient-to-r from-sunset-orange to-deep-terracotta hover:from-deep-terracotta hover:to-sunset-orange text-white px-8 py-3 text-lg font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="mr-2 h-5 w-5" />
                          Book Now - R {calculateTotal().toLocaleString()}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-charcoal to-rhino-steel text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Need Help with Your Booking?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our safari specialists are here to help you plan the perfect African adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-3 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +27 13 735 4000
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-3 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
