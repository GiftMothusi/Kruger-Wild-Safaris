"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FloatingNavigation from "@/components/floating-navigation"
import {
  Play,
  MapPin,
  Star,
  Users,
  Camera,
  Heart,
  ChevronRight,
  Volume2,
  VolumeX,
  Phone,
  ArrowDown,
  Sparkles,
} from "lucide-react"

export default function HomePage() {
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  // Add this state for sound functionality
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Add this useEffect for audio initialization
  useEffect(() => {
    // Create audio element for bush sounds
    const bushAudio = new Audio("/sounds/african-bush-sounds.mp3") // You would add this audio file
    bushAudio.loop = true
    bushAudio.volume = 0.3
    setAudio(bushAudio)

    return () => {
      if (bushAudio) {
        bushAudio.pause()
        bushAudio.src = ""
      }
    }
  }, [])

  const bigFive = [
    {
      name: "Lion",
      title: "King of the Bushveld",
      description: "Experience the raw power and majesty of Africa's apex predator",
      facts: "Lions can be heard roaring up to 8km away",
      bestTime: "Early morning & late afternoon",
      conservation: "Vulnerable - 20,000 left in wild",
      image: "/images/lion-hero.jpg",
      color: "from-amber-glow to-lion-gold",
    },
    {
      name: "Buffalo",
      title: "Cape Dagga Boys",
      description: "Encounter Africa's most unpredictable and dangerous game",
      facts: "Buffalo have excellent memories and hold grudges",
      bestTime: "Watering holes during midday heat",
      conservation: "Least Concern - Stable population",
      image: "/images/buffalo-herd.jpg",
      color: "from-charcoal to-rhino-steel",
    },
    {
      name: "Giraffe",
      title: "Gentle Giants",
      description: "Witness the grace and elegance of Africa's tallest mammals",
      facts: "Giraffes only need 5-30 minutes of sleep per day",
      bestTime: "Throughout the day",
      conservation: "Vulnerable - Silent extinction",
      image: "/images/giraffe-sunset.jpg",
      color: "from-golden-savanna to-dusty-rose",
    },
    {
      name: "Rhino",
      title: "Ancient Warriors",
      description: "Meet the prehistoric survivors fighting for their future",
      facts: "Rhino horn is made of keratin, like human hair",
      bestTime: "Early morning grazing",
      conservation: "Critically Endangered - Success story in SA",
      image: "/images/rhino-cub.jpg",
      color: "from-elephant-gray to-charcoal",
    },
    {
      name: "Zebra",
      title: "Striped Wanderers",
      description: "Discover the unique patterns of Africa's wild horses",
      facts: "No two zebras have identical stripe patterns",
      bestTime: "Early morning and late afternoon",
      conservation: "Near Threatened - Declining numbers",
      image: "/images/zebra-savanna.jpg",
      color: "from-sage-green to-acacia-green",
    },
  ]

  const packages = [
    {
      name: "Classic Kruger",
      duration: "3 days / 2 nights",
      price: "R 4,500",
      description: "Perfect introduction to African wildlife",
      highlights: ["Big 5 game drives", "Traditional bush lodge", "Experienced ranger"],
      popular: false,
      gradient: "from-acacia-green to-sage-green",
    },
    {
      name: "Luxury Bush Experience",
      duration: "5 days / 4 nights",
      price: "R 18,500",
      description: "Premium safari with private reserves",
      highlights: ["Private game drives", "5-star lodge", "Spa treatments", "Bush dinners"],
      popular: true,
      gradient: "from-sunset-orange to-deep-terracotta",
    },
    {
      name: "Photography Safari",
      duration: "7 days / 6 nights",
      price: "R 25,000",
      description: "Golden hour specialists for perfect shots",
      highlights: ["Professional guide", "Hide photography", "Equipment rental", "Editing workshop"],
      popular: false,
      gradient: "from-lion-gold to-amber-glow",
    },
    {
      name: "Family Adventure",
      duration: "4 days / 3 nights",
      price: "R 12,000",
      description: "Kid-friendly activities and education",
      highlights: ["Junior ranger program", "Family rooms", "Educational talks", "Safe game drives"],
      popular: false,
      gradient: "from-dusty-rose to-copper",
    },
  ]

  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      location: "Cape Town, SA",
      text: "Seeing a leopard with her cubs was the highlight of our honeymoon. The guides' knowledge was incredible!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Chen",
      location: "Johannesburg, SA",
      text: "As a photographer, this safari exceeded all expectations. Got the perfect lion portrait at golden hour.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "The Williams Family",
      location: "Durban, SA",
      text: "Our kids are still talking about the baby elephants! Educational and magical experience for the whole family.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Update the sound toggle function
  const toggleSound = () => {
    if (audio) {
      if (soundEnabled) {
        audio.pause()
      } else {
        audio.play().catch((e) => console.log("Audio play failed:", e))
      }
      setSoundEnabled(!soundEnabled)
    }
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <FloatingNavigation />

      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Lion Background with Parallax Effect */}
        <div
          className="absolute inset-0 scale-110"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        >
          <Image
            src="/images/lion-hero.jpg"
            alt="Majestic African lion close-up"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Dynamic Overlay that responds to mouse */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(0,0,0,0.3) 0%, 
              rgba(0,0,0,0.6) 40%, 
              rgba(0,0,0,0.8) 100%)`,
          }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-lion-gold/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Content Grid Layout */}
        <div className="relative z-20 min-h-screen grid grid-cols-12 grid-rows-12 gap-4 p-6 pt-20">
          {/* Location Badge - Top Center */}
          <div className="col-span-12 md:col-span-6 md:col-start-4 row-span-1 row-start-2 flex justify-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 animate-slideInLeft">
              <MapPin className="h-5 w-5 text-lion-gold" />
              <span className="text-white/90 font-body text-sm font-medium">
                Kruger National Park • Mpumalanga • South Africa
              </span>
            </div>
          </div>

          {/* Main Heading - Center Left */}
          <div className="col-span-12 md:col-span-7 row-span-4 row-start-4 flex flex-col justify-center animate-fadeIn">
            <div className="space-y-4">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
                <span className="block text-white drop-shadow-2xl">Into the</span>
                <span className="block bg-gradient-to-r from-lion-gold via-amber-glow to-sunset-orange bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] drop-shadow-2xl">
                  WILD
                </span>
              </h1>
              <div className="font-script text-2xl md:text-4xl text-lion-gold/90 drop-shadow-lg">
                Where legends roam free
              </div>
            </div>
          </div>

          {/* Subtitle - Bottom Left */}
          <div className="col-span-12 md:col-span-8 row-span-2 row-start-8 flex items-center animate-slideInRight">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-body leading-relaxed drop-shadow-lg">
              Discover the Big 5 in their natural kingdom. From Kruger's vast savannas to private reserves,
              <span className="text-lion-gold font-semibold"> your African adventure awaits</span>.
            </p>
          </div>

          {/* CTA Buttons - Bottom Center */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 row-span-2 row-start-10 flex flex-col sm:flex-row gap-6 justify-center items-center animate-scaleIn">
            <Link href="/booking">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-lion-gold to-amber-glow hover:from-amber-glow hover:to-lion-gold text-black font-heading font-bold px-10 py-6 text-xl rounded-full shadow-2xl hover:shadow-lion-gold/25 transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Book Your Safari
                  <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange to-deep-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-white/40 text-white hover:bg-white hover:text-charcoal px-10 py-6 text-xl rounded-full backdrop-blur-sm bg-white/10 font-heading font-semibold transition-all duration-500 transform hover:scale-105"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Virtual Tour
            </Button>
          </div>

          {/* Sound Toggle - Bottom Right */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 row-span-1 row-start-11 flex justify-center md:justify-end items-center">
            <button
              onClick={toggleSound}
              className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:border-white/40"
            >
              {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              <span className="font-body text-sm">African Bush Sounds</span>
            </button>
          </div>

          {/* Scroll Indicator - Bottom Center */}
          <div className="col-span-12 row-span-1 row-start-12 flex justify-center items-end pb-4">
            <div className="text-white/80 text-center animate-bounce">
              <ArrowDown className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-body">Discover More</p>
            </div>
          </div>
        </div>

        {/* Gradient Transition to Next Section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-warm-ivory via-warm-ivory/50 to-transparent" />
      </section>

      {/* Big 5 Showcase - Enhanced */}
      <section className="py-24 bg-warm-ivory relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-african-pattern opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="font-script text-3xl text-dusty-rose mb-4 animate-fadeIn">Meet the Legends</div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-charcoal mb-6 animate-slideInLeft">
              The Big <span className="text-sunset-orange">5</span>
            </h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto font-body leading-relaxed animate-slideInRight">
              Africa's most iconic wildlife awaits your discovery in their natural habitat, each with their own story of
              survival and majesty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {bigFive.map((animal, index) => (
              <Card
                key={animal.name}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer border-0 bg-white/80 backdrop-blur-sm animate-scaleIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={animal.image || "/placeholder.svg"}
                    alt={animal.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${animal.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">
                        {animal.name === "Lion"
                          ? "🦁"
                          : animal.name === "Buffalo"
                            ? "🐃"
                            : animal.name === "Giraffe"
                              ? "🦒"
                              : animal.name === "Rhino"
                                ? "🦏"
                                : "🦓"}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2">{animal.name}</h3>
                  <p className="text-sunset-orange font-semibold mb-3 font-script text-lg">{animal.title}</p>
                  <p className="text-sm text-elephant-gray mb-4 font-body leading-relaxed">{animal.description}</p>

                  <div className="space-y-3 text-xs">
                    <div className="bg-gradient-to-r from-acacia-green/10 to-sage-green/10 rounded-lg p-3">
                      <span className="font-semibold text-acacia-green font-heading">Best Time:</span>
                      <p className="text-elephant-gray mt-1">{animal.bestTime}</p>
                    </div>
                    <div className="bg-gradient-to-r from-dusty-rose/10 to-copper/10 rounded-lg p-3">
                      <span className="font-semibold text-dusty-rose font-heading">Fun Fact:</span>
                      <p className="text-elephant-gray mt-1">{animal.facts}</p>
                    </div>
                    <div className="bg-gradient-to-r from-deep-terracotta/10 to-sunset-orange/10 rounded-lg p-3">
                      <span className="font-semibold text-deep-terracotta font-heading">Status:</span>
                      <p className="text-elephant-gray mt-1">{animal.conservation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of sections remain the same but with enhanced animations... */}
      {/* Safari Packages, Testimonials, CTA, Footer sections continue as before */}

      {/* Safari Packages - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-cream-sand via-warm-ivory to-cream-sand relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="font-script text-3xl text-dusty-rose mb-4">Your Adventure Awaits</div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Safari <span className="text-sunset-orange">Packages</span>
            </h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto font-body leading-relaxed">
              From budget-friendly experiences to luxury escapes, find your perfect safari adventure crafted by our
              expert guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 ${
                  pkg.popular ? "ring-4 ring-sunset-orange/30 shadow-sunset-orange/20" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-sunset-orange to-deep-terracotta text-white px-6 py-2 rounded-full text-sm font-bold font-heading shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${pkg.gradient}`} />

                <CardContent className="p-8 bg-white">
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-2xl font-bold text-charcoal mb-3">{pkg.name}</h3>
                    <p className="text-elephant-gray mb-4 font-body">{pkg.duration}</p>
                    <div className="text-4xl font-bold text-sunset-orange mb-3 font-display">
                      {pkg.price}
                      <span className="text-sm text-elephant-gray font-normal font-body"> per person</span>
                    </div>
                    <p className="text-sm text-elephant-gray font-body leading-relaxed">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-elephant-gray font-body">
                        <div className="w-2 h-2 bg-acacia-green rounded-full mr-3 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full font-heading font-semibold py-3 rounded-full transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-sunset-orange to-deep-terracotta hover:from-deep-terracotta hover:to-sunset-orange text-white shadow-lg hover:shadow-xl"
                        : "bg-gradient-to-r from-acacia-green to-sage-green hover:from-sage-green hover:to-acacia-green text-white"
                    }`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rhino-steel mb-4">When Nature Calls</h2>
            <p className="text-xl text-elephant-gray max-w-2xl mx-auto">
              Plan your visit for the best wildlife experiences throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-acacia-green/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🌵</div>
                  <div>
                    <h3 className="text-2xl font-bold text-rhino-steel">Dry Season</h3>
                    <p className="text-elephant-gray">May - September</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-acacia-green mb-2">Best for Game Viewing</h4>
                    <p className="text-elephant-gray text-sm">
                      Animals gather at water sources, vegetation is sparse making wildlife easier to spot. Perfect
                      weather with cool mornings and warm days.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-dusty-rose mb-2">Highlights</h4>
                    <ul className="text-sm text-elephant-gray space-y-1">
                      <li>• Excellent Big 5 sightings</li>
                      <li>• Clear skies for photography</li>
                      <li>• Comfortable temperatures (15-25°C)</li>
                      <li>• Less malaria risk</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sunset-orange/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🌿</div>
                  <div>
                    <h3 className="text-2xl font-bold text-rhino-steel">Wet Season</h3>
                    <p className="text-elephant-gray">October - April</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sunset-orange mb-2">Lush Landscapes</h4>
                    <p className="text-elephant-gray text-sm">
                      Dramatic thunderstorms, newborn animals, and migrant birds create a vibrant, green paradise.
                      Perfect for bird watching and photography.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-dusty-rose mb-2">Highlights</h4>
                    <ul className="text-sm text-elephant-gray space-y-1">
                      <li>• Baby animals everywhere</li>
                      <li>• 500+ bird species</li>
                      <li>• Dramatic storm photography</li>
                      <li>• Lower accommodation rates</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-sunset-orange to-golden-savanna">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Adventures That Change Lives</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Hear from fellow adventurers who've experienced the magic of African wildlife
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-lion-gold fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl text-rhino-steel mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-rhino-steel">{testimonials[currentTestimonial].name}</p>
                      <p className="text-elephant-gray text-sm">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-charcoal via-rhino-steel to-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-african-pattern opacity-10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="font-script text-3xl text-lion-gold mb-4">The Adventure Begins</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">
            Ready for Your <span className="text-lion-gold">African Adventure?</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 font-body leading-relaxed">
            Join thousands of satisfied guests who've experienced the magic of South African wildlife. Book your safari
            today and create memories that will last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/booking">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-lion-gold to-amber-glow hover:from-amber-glow hover:to-lion-gold text-black font-heading font-bold px-10 py-6 text-xl rounded-full shadow-2xl hover:shadow-lion-gold/25 transition-all duration-500 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Book Now - From R 4,500
                  <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-charcoal px-10 py-6 text-xl rounded-full backdrop-blur-sm bg-white/5 font-heading font-semibold transition-all duration-500 transform hover:scale-105"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call +27 13 735 4000
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-deep-terracotta" />
              <span className="font-body">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-acacia-green" />
              <span className="font-body">Expert Local Guides</span>
            </div>
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-lion-gold" />
              <span className="font-body">Unforgettable Memories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gradient-to-br from-baobab-brown via-dusty-rose to-baobab-brown text-warm-ivory py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-african-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-3xl">🦁</div>
                <div className="flex flex-col">
                  <div className="font-display text-2xl font-bold">Kruger Wild</div>
                  <div className="font-script text-lg -mt-1">Safaris</div>
                </div>
              </div>
              <p className="text-warm-ivory/80 mb-6 font-body leading-relaxed">
                Experience the untamed beauty of Africa with South Africa's premier safari operator.
              </p>
              <p className="text-sm text-warm-ivory/60 font-script text-lg italic">"Ubuntu - I am because we are"</p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-warm-ivory/80">
                {[
                  { href: "/packages", label: "Safari Packages" },
                  { href: "/wildlife", label: "Wildlife Guide" },
                  { href: "/destinations", label: "Destinations" },
                  { href: "/conservation", label: "Conservation" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-lion-gold transition-colors duration-300 font-body">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-3 text-warm-ivory/80 font-body">
                <li>📞 +27 13 735 4000</li>
                <li>📧 info@krugerwildsafaris.co.za</li>
                <li>📍 Kruger National Park, Mpumalanga</li>
                <li>🕒 Mon-Sun: 6:00 AM - 8:00 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Languages</h4>
              <ul className="space-y-3 text-warm-ivory/80 text-sm font-body">
                <li>🇿🇦 English • Afrikaans</li>
                <li>
                  Zulu: <span className="font-script">"Sawubona"</span> (Hello)
                </li>
                <li>
                  Afrikaans: <span className="font-script">"Welkom"</span> (Welcome)
                </li>
                <li>
                  Shangaan: <span className="font-script">"Avuxeni"</span> (Hello)
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-warm-ivory/20 mt-12 pt-8 text-center text-warm-ivory/60">
            <p className="font-body">
              &copy; 2024 Kruger Wild Safaris. All rights reserved. | Licensed Tour Operator | Conservation Partner
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
