"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MapPin, Home, Package, Eye, Mountain, Heart, Mail } from "lucide-react"

export default function FloatingNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/packages", label: "Packages", icon: Package },
    { href: "/wildlife", label: "Wildlife", icon: Eye },
    { href: "/destinations", label: "Destinations", icon: Mountain },
    { href: "/conservation", label: "Conservation", icon: Heart },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-baobab-brown/90 to-dusty-rose/90 backdrop-blur-md text-warm-ivory py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Kruger National Park, Mpumalanga</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+27 13 735 4000</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="font-script text-base">Sawubona • Welcome • Welkom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo - Top Left */}
      <div className="fixed top-12 left-6 z-50">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🦁</div>
            <div className="absolute -inset-3 bg-gradient-to-r from-lion-gold/30 to-sunset-orange/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
          </div>
          <div className="flex flex-col">
            <div className="font-display text-2xl lg:text-3xl font-bold bg-gradient-to-r from-sunset-orange via-lion-gold to-deep-terracotta bg-clip-text text-transparent drop-shadow-lg">
              Kruger Wild
            </div>
            <div className="font-script text-lg text-dusty-rose -mt-1 drop-shadow-md">Safaris</div>
          </div>
        </Link>
      </div>

      {/* Floating Pill Navigation Menu - Right Side */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        {/* Pill-Style Navigation Menu */}
        <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-dusty-rose/20 p-2 flex flex-col space-y-1 min-w-[60px]">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gradient-to-r hover:from-sunset-orange/10 hover:to-lion-gold/10 transition-all duration-300"
                title={item.label}
              >
                <Icon className="h-5 w-5 text-sunset-orange group-hover:text-deep-terracotta group-hover:scale-110 transition-all duration-300" />

                {/* Tooltip */}
                <div className="absolute right-16 bg-charcoal text-white px-3 py-2 rounded-lg text-sm font-heading font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                  {item.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-charcoal"></div>
                </div>
              </Link>
            )
          })}

          {/* Separator */}
          <div className="w-8 h-px bg-dusty-rose/20 mx-auto my-2"></div>

          {/* Book Safari Button */}
          <Link href="/booking">
            <button className="group relative w-12 h-12 rounded-full bg-gradient-to-r from-sunset-orange to-deep-terracotta hover:from-deep-terracotta hover:to-sunset-orange shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-xs">📞</span>

              {/* Tooltip */}
              <div className="absolute right-16 bg-charcoal text-white px-3 py-2 rounded-lg text-sm font-heading font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                Book Safari
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-charcoal"></div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
