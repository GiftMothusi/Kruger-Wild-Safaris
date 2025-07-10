"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FloatingNavigation from "@/components/floating-navigation"
import { MapPin, Clock, Users, Star, Camera, Plane, Calendar } from "lucide-react"

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState("kruger")

  const destinations = [
    {
      id: "kruger",
      name: "Kruger National Park",
      region: "Mpumalanga & Limpopo",
      image: "/images/lion-hero.jpg",
      description:
        "South Africa's flagship national park, home to the Big 5 and over 500 bird species across 2 million hectares of pristine wilderness.",
      highlights: [
        "Largest game reserve in South Africa",
        "Home to the Big 5",
        "Over 500 bird species",
        "147 mammal species",
        "Self-drive and guided options",
      ],
      bestTime: "May to September (Dry season)",
      duration: "3-7 days recommended",
      difficulty: "Easy to Moderate",
      accommodation: ["Rest Camps", "Bush Lodges", "Private Concessions"],
      activities: ["Game Drives", "Walking Safaris", "Night Drives", "Bird Watching"],
      wildlife: ["Lion", "Elephant", "Rhino", "Buffalo", "Leopard", "Cheetah", "Wild Dog"],
      access: "Fly to OR Tambo (JNB) or Kruger Mpumalanga Airport (MQP)",
      size: "19,485 km²",
      established: "1898",
    },
    {
      id: "sabi-sands",
      name: "Sabi Sands Game Reserve",
      region: "Mpumalanga",
      image: "/images/cheetah-rocks.jpg",
      description:
        "Exclusive private reserve adjacent to Kruger, famous for exceptional leopard sightings and luxury safari experiences.",
      highlights: [
        "Best leopard viewing in Africa",
        "Luxury safari lodges",
        "No fences with Kruger",
        "Exceptional guiding",
        "Off-road driving permitted",
      ],
      bestTime: "Year-round, peak May-September",
      duration: "3-5 days recommended",
      difficulty: "Easy",
      accommodation: ["Luxury Lodges", "Tented Camps"],
      activities: ["Game Drives", "Walking Safaris", "Night Drives", "Photography"],
      wildlife: ["Leopard", "Lion", "Elephant", "Rhino", "Buffalo", "Wild Dog"],
      access: "Fly to Skukuza Airport or drive from Johannesburg",
      size: "650 km²",
      established: "1948",
    },
    {
      id: "madikwe",
      name: "Madikwe Game Reserve",
      region: "North West Province",
      image: "/images/springbok-portrait.jpg",
      description:
        "Malaria-free Big 5 destination perfect for families, known for excellent wild dog and brown hyena sightings.",
      highlights: [
        "Malaria-free environment",
        "Family-friendly destination",
        "Excellent wild dog sightings",
        "Brown hyena population",
        "Community conservation model",
      ],
      bestTime: "March to May, September to November",
      duration: "2-4 days recommended",
      difficulty: "Easy",
      accommodation: ["Safari Lodges", "Family Lodges"],
      activities: ["Game Drives", "Cultural Tours", "Star Gazing"],
      wildlife: ["Lion", "Elephant", "Rhino", "Buffalo", "Leopard", "Wild Dog", "Brown Hyena"],
      access: "3.5 hours drive from Johannesburg",
      size: "750 km²",
      established: "1991",
    },
    {
      id: "hluhluwe",
      name: "Hluhluwe-iMfolozi Park",
      region: "KwaZulu-Natal",
      image: "/images/rhino-cub.jpg",
      description:
        "Africa's oldest proclaimed nature reserve, famous for saving the white rhino from extinction and beautiful rolling hills.",
      highlights: [
        "Oldest proclaimed reserve in Africa",
        "White rhino conservation success",
        "Beautiful hilly landscape",
        "Rich Zulu cultural heritage",
        "Excellent rhino viewing",
      ],
      bestTime: "May to September",
      duration: "2-3 days recommended",
      difficulty: "Easy to Moderate",
      accommodation: ["Rest Camps", "Bush Lodges"],
      activities: ["Game Drives", "Rhino Tracking", "Cultural Tours", "Hiking"],
      wildlife: ["White Rhino", "Black Rhino", "Elephant", "Buffalo", "Leopard", "Cheetah"],
      access: "3 hours drive from Durban",
      size: "960 km²",
      established: "1895",
    },
    {
      id: "addo",
      name: "Addo Elephant National Park",
      region: "Eastern Cape",
      image: "/images/zebra-herd.jpg",
      description:
        "Home to over 600 elephants and the only park in the world to house the Big 7 (including great white sharks and southern right whales).",
      highlights: [
        "Over 600 elephants",
        "Only Big 7 park in the world",
        "Marine section with whales",
        "Malaria-free environment",
        "Unique flightless dung beetle",
      ],
      bestTime: "Year-round destination",
      duration: "2-4 days recommended",
      difficulty: "Easy",
      accommodation: ["Rest Camps", "Chalets", "Camping"],
      activities: ["Game Drives", "Whale Watching", "Hiking", "Horse Riding"],
      wildlife: ["Elephant", "Lion", "Buffalo", "Leopard", "Rhino", "Great White Shark", "Whale"],
      access: "1 hour drive from Port Elizabeth",
      size: "1,640 km²",
      established: "1931",
    },
  ]

  const selectedDest = destinations.find((dest) => dest.id === selectedDestination) || destinations[0]

  return (
    <div className="min-h-screen bg-warm-ivory">
      <FloatingNavigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/giraffe-sunset.jpg"
            alt="Giraffe at sunset in African savanna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 pt-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Safari Destinations</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Explore South Africa's premier wildlife destinations and conservation areas
          </p>
        </div>
      </section>

      {/* Destination Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Choose Your Destination</h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              From the iconic Kruger to specialized reserves, each destination offers unique wildlife experiences
            </p>
          </div>

          {/* Destination Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {destinations.map((dest) => (
              <Button
                key={dest.id}
                onClick={() => setSelectedDestination(dest.id)}
                variant={selectedDestination === dest.id ? "default" : "outline"}
                className={`px-6 py-3 ${
                  selectedDestination === dest.id
                    ? "bg-sunset-orange hover:bg-deep-terracotta text-white"
                    : "border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white"
                }`}
              >
                {dest.name}
              </Button>
            ))}
          </div>

          {/* Selected Destination Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Image and Overview */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-xl">
                <div className="relative h-96">
                  <Image
                    src={selectedDest.image || "/placeholder.svg"}
                    alt={selectedDest.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="font-display text-3xl font-bold text-white mb-2">{selectedDest.name}</h3>
                    <p className="text-lion-gold font-semibold mb-2">{selectedDest.region}</p>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedDest.size}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Est. {selectedDest.established}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-elephant-gray leading-relaxed mb-6">{selectedDest.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-heading text-lg font-bold text-charcoal mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {selectedDest.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-sunset-orange rounded-full mt-2 flex-shrink-0" />
                            <span className="text-elephant-gray">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-bold text-charcoal mb-3">Wildlife Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedDest.wildlife.map((animal, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {animal}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Info Sidebar */}
            <div className="space-y-6">
              {/* Essential Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-sunset-orange" />
                    <span>Essential Info</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold text-charcoal">Best Time:</span>
                    <p className="text-elephant-gray text-sm">{selectedDest.bestTime}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal">Duration:</span>
                    <p className="text-elephant-gray text-sm">{selectedDest.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal">Difficulty:</span>
                    <p className="text-elephant-gray text-sm">{selectedDest.difficulty}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal">Access:</span>
                    <p className="text-elephant-gray text-sm">{selectedDest.access}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Accommodation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-acacia-green" />
                    <span>Accommodation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedDest.accommodation.map((acc, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-acacia-green rounded-full" />
                        <span className="text-elephant-gray text-sm">{acc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-lion-gold" />
                    <span>Activities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedDest.activities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-lion-gold rounded-full" />
                        <span className="text-elephant-gray text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Book Now */}
              <Card className="bg-gradient-to-r from-sunset-orange to-deep-terracotta text-white">
                <CardContent className="p-6 text-center">
                  <h4 className="font-heading text-lg font-bold mb-2">Ready to Explore?</h4>
                  <p className="text-sm opacity-90 mb-4">Book your safari to {selectedDest.name}</p>
                  <Button className="w-full bg-white text-sunset-orange hover:bg-cream-sand font-semibold">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-r from-cream-sand to-warm-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Compare Destinations</h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              Find the perfect destination for your safari adventure
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-xl">
              <thead className="bg-gradient-to-r from-sunset-orange to-deep-terracotta text-white">
                <tr>
                  <th className="p-4 text-left font-heading">Destination</th>
                  <th className="p-4 text-center font-heading">Size</th>
                  <th className="p-4 text-center font-heading">Big 5</th>
                  <th className="p-4 text-center font-heading">Malaria Free</th>
                  <th className="p-4 text-center font-heading">Best For</th>
                  <th className="p-4 text-center font-heading">Duration</th>
                </tr>
              </thead>
              <tbody>
                {destinations.map((dest, index) => (
                  <tr key={dest.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4">
                      <div className="font-semibold text-charcoal">{dest.name}</div>
                      <div className="text-sm text-elephant-gray">{dest.region}</div>
                    </td>
                    <td className="p-4 text-center text-sm">{dest.size}</td>
                    <td className="p-4 text-center">
                      <span className="text-green-500">✓</span>
                    </td>
                    <td className="p-4 text-center">
                      {dest.id === "madikwe" || dest.id === "addo" ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </td>
                    <td className="p-4 text-center text-sm">
                      {dest.id === "kruger"
                        ? "First-timers"
                        : dest.id === "sabi-sands"
                          ? "Luxury"
                          : dest.id === "madikwe"
                            ? "Families"
                            : dest.id === "hluhluwe"
                              ? "Rhino lovers"
                              : "Elephants"}
                    </td>
                    <td className="p-4 text-center text-sm">{dest.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Planning Your Safari</h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              Expert tips to help you choose the perfect destination and timing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sunset-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-sunset-orange" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">When to Visit</h3>
                <p className="text-elephant-gray leading-relaxed text-sm">
                  Dry season (May-September) offers the best game viewing as animals gather at water sources. Wet season
                  (October-April) brings lush landscapes and newborn animals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-acacia-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-acacia-green" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">Getting There</h3>
                <p className="text-elephant-gray leading-relaxed text-sm">
                  Most destinations are accessible by road from major cities. Kruger has multiple airports, while
                  private reserves often offer charter flights for convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-lion-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-lion-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">Choosing Your Style</h3>
                <p className="text-elephant-gray leading-relaxed text-sm">
                  Self-drive safaris offer flexibility and budget-friendliness, while guided safaris provide expert
                  knowledge and access to exclusive areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-charcoal to-rhino-steel text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Start Planning Your Safari</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experts help you choose the perfect destination for your African adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sunset-orange to-deep-terracotta hover:from-deep-terracotta hover:to-sunset-orange text-white font-heading font-semibold px-8 py-4 text-lg"
            >
              Plan My Safari
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
