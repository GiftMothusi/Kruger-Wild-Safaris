"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { Clock, Users, MapPin, Star, TelescopeIcon as Binoculars, Heart, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const packages = [
    {
      id: 1,
      name: "Classic Kruger Safari",
      category: "budget",
      duration: "3 days / 2 nights",
      price: "R 4,500",
      originalPrice: "R 5,200",
      groupSize: "2-8 people",
      difficulty: "Easy",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      reviews: 127,
      description: "Perfect introduction to African wildlife in the world-famous Kruger National Park",
      highlights: [
        "6 game drives in open safari vehicles",
        "Big 5 wildlife viewing opportunities",
        "Traditional bush lodge accommodation",
        "Experienced local ranger guide",
        "All meals included",
        "Airport transfers from Nelspruit",
      ],
      includes: [
        "Accommodation in safari lodge",
        "All meals and beverages",
        "Professional guide",
        "Game drives",
        "Park entrance fees",
        "Transport",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Afternoon Game Drive",
          description: "Arrive at lodge, lunch, first game drive at 3:30 PM",
        },
        {
          day: 2,
          title: "Full Day Safari Experience",
          description: "Early morning drive, breakfast in bush, afternoon drive",
        },
        {
          day: 3,
          title: "Final Game Drive & Departure",
          description: "Sunrise drive, brunch, departure to airport",
        },
      ],
      bestFor: ["First-time safari goers", "Budget-conscious travelers", "Wildlife enthusiasts"],
      season: "Year-round",
    },
    {
      id: 2,
      name: "Luxury Bush Experience",
      category: "luxury",
      duration: "5 days / 4 nights",
      price: "R 18,500",
      originalPrice: "R 22,000",
      groupSize: "2-6 people",
      difficulty: "Easy",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 89,
      description: "Indulge in premium safari luxury at exclusive private reserves",
      highlights: [
        "Private game drives with dedicated ranger",
        "5-star luxury safari lodge",
        "Spa treatments and wellness",
        "Bush dinners under the stars",
        "Wine tastings and sundowners",
        "Helicopter scenic flight",
      ],
      includes: [
        "Luxury suite accommodation",
        "All premium meals & drinks",
        "Private vehicle & guide",
        "Spa treatments",
        "Helicopter flight",
        "Premium transfers",
      ],
      itinerary: [
        {
          day: 1,
          title: "Luxury Arrival",
          description: "Private transfer, welcome ceremony, sunset drive",
        },
        {
          day: 2,
          title: "Private Reserve Exploration",
          description: "Walking safari, spa treatment, night drive",
        },
        {
          day: 3,
          title: "Helicopter & Bush Dinner",
          description: "Scenic flight, photography, romantic bush dinner",
        },
        {
          day: 4,
          title: "Conservation Experience",
          description: "Rhino tracking, community visit, wine tasting",
        },
        {
          day: 5,
          title: "Farewell Safari",
          description: "Final game drive, brunch, luxury departure",
        },
      ],
      bestFor: ["Honeymooners", "Luxury travelers", "Special occasions"],
      season: "April - October (optimal)",
    },
    {
      id: 3,
      name: "Photography Safari",
      category: "specialty",
      duration: "7 days / 6 nights",
      price: "R 25,000",
      originalPrice: "R 28,500",
      groupSize: "4-8 people",
      difficulty: "Moderate",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 56,
      description: "Capture the perfect shot with golden hour specialists and professional equipment",
      highlights: [
        "Professional photography guide",
        "Hide photography sessions",
        "Equipment rental available",
        "Editing workshop included",
        "Golden hour game drives",
        "Portfolio review session",
      ],
      includes: [
        "Photography-focused accommodation",
        "All meals and refreshments",
        "Professional photo guide",
        "Equipment rental",
        "Editing software training",
        "Print services",
      ],
      itinerary: [
        {
          day: 1,
          title: "Photography Orientation",
          description: "Equipment setup, technique workshop, sunset shoot",
        },
        {
          day: 2,
          title: "Golden Hour Mastery",
          description: "Dawn shoot, composition training, afternoon hide session",
        },
        {
          day: 3,
          title: "Wildlife Behavior",
          description: "Predator tracking, behavioral photography, night techniques",
        },
        {
          day: 4,
          title: "Landscape & Macro",
          description: "Scenic photography, macro wildlife, water hole sessions",
        },
        {
          day: 5,
          title: "Advanced Techniques",
          description: "Flight photography, action shots, creative compositions",
        },
        {
          day: 6,
          title: "Portfolio Development",
          description: "Image selection, editing workshop, printing session",
        },
        {
          day: 7,
          title: "Final Shoot & Review",
          description: "Sunrise portfolio shoot, final review, departure",
        },
      ],
      bestFor: ["Photography enthusiasts", "Professional photographers", "Skill development"],
      season: "May - September (best light)",
    },
    {
      id: 4,
      name: "Family Adventure Safari",
      category: "family",
      duration: "4 days / 3 nights",
      price: "R 12,000",
      originalPrice: "R 14,500",
      groupSize: "2-10 people",
      difficulty: "Easy",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      reviews: 94,
      description: "Educational and exciting safari designed specifically for families with children",
      highlights: [
        "Junior ranger program for kids",
        "Family-friendly accommodation",
        "Educational wildlife talks",
        "Safe, enclosed game drives",
        "Kids activity center",
        "Cultural village visit",
      ],
      includes: [
        "Family rooms/chalets",
        "All meals (kid-friendly options)",
        "Junior ranger activities",
        "Educational materials",
        "Cultural experiences",
        "Family transport",
      ],
      itinerary: [
        {
          day: 1,
          title: "Family Safari Begins",
          description: "Arrival, junior ranger ceremony, easy game drive",
        },
        {
          day: 2,
          title: "Learning & Adventure",
          description: "Animal tracking, educational talk, cultural visit",
        },
        {
          day: 3,
          title: "Conservation Heroes",
          description: "Rhino conservation, tree planting, family game drive",
        },
        {
          day: 4,
          title: "Graduation Day",
          description: "Junior ranger graduation, final drive, departure",
        },
      ],
      bestFor: ["Families with children", "Educational travel", "Multi-generational groups"],
      season: "School holidays optimal",
    },
    {
      id: 5,
      name: "Conservation Safari",
      category: "specialty",
      duration: "6 days / 5 nights",
      price: "R 19,500",
      originalPrice: "R 23,000",
      groupSize: "4-12 people",
      difficulty: "Moderate",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      reviews: 67,
      description: "Participate in real conservation efforts while experiencing incredible wildlife",
      highlights: [
        "Rhino monitoring participation",
        "Anti-poaching unit experience",
        "Research data collection",
        "Community conservation projects",
        "Veterinary team shadowing",
        "Conservation certificate",
      ],
      includes: [
        "Research camp accommodation",
        "All meals and field rations",
        "Conservation activities",
        "Research equipment use",
        "Expert conservationist guides",
        "Certificate of participation",
      ],
      itinerary: [
        {
          day: 1,
          title: "Conservation Orientation",
          description: "Research briefing, equipment training, first monitoring",
        },
        {
          day: 2,
          title: "Rhino Monitoring",
          description: "Tracking, data collection, anti-poaching patrol",
        },
        {
          day: 3,
          title: "Community Outreach",
          description: "School visit, community project, cultural exchange",
        },
        {
          day: 4,
          title: "Veterinary Experience",
          description: "Wildlife health checks, treatment observation",
        },
        {
          day: 5,
          title: "Research Participation",
          description: "Data analysis, report writing, presentation prep",
        },
        {
          day: 6,
          title: "Conservation Graduation",
          description: "Final presentation, certificate ceremony, departure",
        },
      ],
      bestFor: ["Conservation enthusiasts", "Students", "Meaningful travel"],
      season: "March - November",
    },
    {
      id: 6,
      name: "Honeymoon Safari Romance",
      category: "luxury",
      duration: "6 days / 5 nights",
      price: "R 32,000",
      originalPrice: "R 38,000",
      groupSize: "2 people only",
      difficulty: "Easy",
      image: "/placeholder.svg?height=300&width=400",
      rating: 5.0,
      reviews: 43,
      description: "Ultimate romantic safari experience for couples celebrating their love",
      highlights: [
        "Private luxury suite with deck",
        "Couples spa treatments",
        "Romantic bush dinners",
        "Private game drives",
        "Champagne sundowners",
        "Professional couple photography",
      ],
      includes: [
        "Luxury honeymoon suite",
        "All premium dining",
        "Private guide & vehicle",
        "Spa treatments for two",
        "Photography session",
        "Romantic extras",
      ],
      itinerary: [
        {
          day: 1,
          title: "Romantic Arrival",
          description: "Champagne welcome, couples massage, sunset drive",
        },
        {
          day: 2,
          title: "Private Paradise",
          description: "Exclusive game drive, bush breakfast, spa afternoon",
        },
        {
          day: 3,
          title: "Adventure Together",
          description: "Walking safari, photography session, romantic dinner",
        },
        {
          day: 4,
          title: "Cultural Romance",
          description: "Village visit, traditional ceremony, stargazing",
        },
        {
          day: 5,
          title: "Memory Making",
          description: "Final photo shoot, couple's activity, farewell dinner",
        },
        {
          day: 6,
          title: "Forever Memories",
          description: "Sunrise drive, brunch, luxury departure",
        },
      ],
      bestFor: ["Honeymooners", "Anniversary celebrations", "Romantic getaways"],
      season: "Year-round romance",
    },
  ]

  const categories = [
    { id: "all", name: "All Packages", count: packages.length },
    { id: "budget", name: "Budget-Friendly", count: packages.filter((p) => p.category === "budget").length },
    { id: "luxury", name: "Luxury", count: packages.filter((p) => p.category === "luxury").length },
    { id: "family", name: "Family", count: packages.filter((p) => p.category === "family").length },
    { id: "specialty", name: "Specialty", count: packages.filter((p) => p.category === "specialty").length },
  ]

  const filteredPackages =
    selectedCategory === "all" ? packages : packages.filter((pkg) => pkg.category === selectedCategory)

  return (
    <div className="min-h-screen bg-cream-sand">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <Image
          src="/images/safari-camp-sunset.jpg"
          alt="Safari camping at sunset with 4x4 vehicle and rooftop tent"
          fill
          className="object-cover"
        />

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Safari Packages</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Choose your perfect African adventure from our carefully crafted safari experiences
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-sunset-orange hover:bg-deep-terracotta text-white"
                    : "border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-sunset-orange text-white">
                      {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-lion-gold fill-current" />
                      <span className="text-sm font-semibold">{pkg.rating}</span>
                      <span className="text-xs text-elephant-gray">({pkg.reviews})</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-rhino-steel">{pkg.name}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-sunset-orange">{pkg.price}</div>
                      {pkg.originalPrice && (
                        <div className="text-sm text-elephant-gray line-through">{pkg.originalPrice}</div>
                      )}
                      <div className="text-xs text-elephant-gray">per person</div>
                    </div>
                  </div>

                  <p className="text-elephant-gray text-sm mb-4">{pkg.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-elephant-gray mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{pkg.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.season}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-rhino-steel mb-2">Package Highlights</h4>
                      <ul className="space-y-1">
                        {pkg.highlights.slice(0, 4).map((highlight, index) => (
                          <li key={index} className="flex items-start text-sm text-elephant-gray">
                            <CheckCircle className="h-4 w-4 text-acacia-green mr-2 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-rhino-steel mb-2">Best For</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.bestFor.map((item, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Link href={`/booking?package=${pkg.id}`}>
                        <Button className="flex-1 bg-sunset-orange hover:bg-deep-terracotta text-white">
                          Book Now
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white bg-transparent"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rhino-steel mb-4">Why Choose Kruger Wild Safaris?</h2>
            <p className="text-xl text-elephant-gray max-w-2xl mx-auto">
              Over 15 years of experience creating unforgettable African adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sunset-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Binoculars className="h-8 w-8 text-sunset-orange" />
              </div>
              <h3 className="text-lg font-semibold text-rhino-steel mb-2">Expert Guides</h3>
              <p className="text-elephant-gray text-sm">
                Local rangers with 10+ years experience and intimate knowledge of wildlife behavior
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-acacia-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-acacia-green" />
              </div>
              <h3 className="text-lg font-semibold text-rhino-steel mb-2">Conservation Focus</h3>
              <p className="text-elephant-gray text-sm">
                Every safari contributes to wildlife conservation and local community development
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lion-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-lion-gold" />
              </div>
              <h3 className="text-lg font-semibold text-rhino-steel mb-2">5-Star Service</h3>
              <p className="text-elephant-gray text-sm">
                Consistently rated as South Africa's top safari operator with 98% satisfaction rate
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-dusty-rose/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-dusty-rose" />
              </div>
              <h3 className="text-lg font-semibold text-rhino-steel mb-2">Prime Locations</h3>
              <p className="text-elephant-gray text-sm">
                Exclusive access to private reserves and prime viewing areas in Kruger National Park
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-sunset-orange to-golden-savanna text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Safari Adventure?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our safari specialists for personalized recommendations and exclusive deals. All packages include
            our satisfaction guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-sunset-orange hover:bg-cream-sand font-semibold px-8 py-4 text-lg"
              >
                Get Custom Quote
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sunset-orange px-8 py-4 text-lg bg-transparent"
            >
              Call +27 13 735 4000
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-80">
            <p>💳 Secure payment • 🔄 Free cancellation up to 48 hours • 🛡️ Travel insurance available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-baobab-brown text-cream-sand py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🦁</div>
                <div className="text-xl font-bold">Kruger Wild Safaris</div>
              </div>
              <p className="text-cream-sand/80 mb-4">
                Experience the untamed beauty of Africa with South Africa's premier safari operator.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Packages</h4>
              <ul className="space-y-2 text-cream-sand/80 text-sm">
                <li>Classic Kruger Safari</li>
                <li>Luxury Bush Experience</li>
                <li>Photography Safari</li>
                <li>Family Adventure</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-cream-sand/80 text-sm">
                <li>📞 +27 13 735 4000</li>
                <li>📧 bookings@krugerwildsafaris.co.za</li>
                <li>📍 Kruger National Park</li>
                <li>🕒 24/7 Support Available</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Guarantees</h4>
              <ul className="space-y-2 text-cream-sand/80 text-sm">
                <li>✅ Best Price Guarantee</li>
                <li>✅ 100% Satisfaction</li>
                <li>✅ Expert Local Guides</li>
                <li>✅ Conservation Certified</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream-sand/20 mt-8 pt-8 text-center text-cream-sand/60">
            <p>&copy; 2024 Kruger Wild Safaris. Licensed Tour Operator #KZN001 | SATSA Member</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
