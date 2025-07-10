"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-baobab-brown to-dusty-rose text-warm-ivory py-2">
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
            <div className="flex items-center space-x-4">
              <span className="font-script text-base">Sawubona • Welcome • Welkom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 lg:top-10 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-dusty-rose/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🦁</div>
                <div className="absolute -inset-2 bg-gradient-to-r from-lion-gold/20 to-sunset-orange/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="flex flex-col">
                <div className="font-display text-2xl lg:text-3xl font-bold bg-gradient-to-r from-sunset-orange via-lion-gold to-deep-terracotta bg-clip-text text-transparent">
                  Kruger Wild
                </div>
                <div className="font-script text-lg text-dusty-rose -mt-1">Safaris</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { href: "/", label: "Home" },
                { href: "/packages", label: "Safari Packages" },
                { href: "/wildlife", label: "Wildlife & Big 5" },
                { href: "/destinations", label: "Destinations" },
                { href: "/conservation", label: "Conservation" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 font-heading font-medium text-charcoal hover:text-sunset-orange transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-lion-gold/10 to-sunset-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-sunset-orange to-lion-gold group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button className="relative overflow-hidden bg-gradient-to-r from-sunset-orange to-deep-terracotta hover:from-deep-terracotta hover:to-sunset-orange text-white font-heading font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span className="relative z-10">Book Safari</span>
                <div className="absolute inset-0 bg-gradient-to-r from-lion-gold to-amber-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative z-10 p-2 rounded-full bg-sunset-orange/10 hover:bg-sunset-orange/20 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6 text-sunset-orange" /> : <Menu className="h-6 w-6 text-sunset-orange" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-t border-dusty-rose/20 shadow-2xl">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/packages", label: "Safari Packages" },
                    { href: "/wildlife", label: "Wildlife & Big 5" },
                    { href: "/destinations", label: "Destinations" },
                    { href: "/conservation", label: "Conservation" },
                    { href: "/contact", label: "Contact" },
                  ].map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="font-heading font-medium text-charcoal hover:text-sunset-orange transition-colors duration-300 py-2 border-b border-dusty-rose/10 last:border-b-0"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="pt-4 space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-elephant-gray">
                      <Phone className="h-4 w-4" />
                      <span>+27 13 735 4000</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-sunset-orange to-deep-terracotta text-white font-heading font-semibold py-3 rounded-full">
                      Book Safari
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
