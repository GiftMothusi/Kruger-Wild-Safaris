"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import FloatingNavigation from "@/components/floating-navigation"
import { Heart, Shield, Users, TrendingUp, Award, Camera, Leaf, Globe } from "lucide-react"

export default function ConservationPage() {
  const [activeProgram, setActiveProgram] = useState("rhino")

  const conservationPrograms = [
    {
      id: "rhino",
      name: "Rhino Conservation",
      description: "Protecting and monitoring rhino populations through advanced technology and community involvement",
      image: "/images/rhino-cub.jpg",
      impact: "Population increased from 50 to 18,000+ since 1960s",
      funding: 85,
      activities: [
        "24/7 monitoring with GPS collars",
        "Anti-poaching patrols",
        "Dehorning programs",
        "Breeding programs",
        "Community education",
      ],
      stats: {
        protected: "18,000+",
        rangers: "150",
        area: "2,000 km²",
        success: "95%",
      },
    },
    {
      id: "elephant",
      name: "Elephant Protection",
      description: "Safeguarding elephant herds and their migration corridors across southern Africa",
      image: "/images/rhino-cub.jpg",
      impact: "Kruger elephant population stable at 17,000 individuals",
      funding: 78,
      activities: [
        "Collar tracking programs",
        "Human-elephant conflict mitigation",
        "Corridor protection",
        "Anti-poaching operations",
        "Research initiatives",
      ],
      stats: {
        protected: "17,000",
        rangers: "200",
        area: "19,485 km²",
        success: "92%",
      },
    },
    {
      id: "community",
      name: "Community Development",
      description: "Empowering local communities through conservation education and sustainable livelihoods",
      image: "/images/springbok-portrait.jpg",
      impact: "Over 5,000 community members directly benefited",
      funding: 92,
      activities: [
        "Environmental education programs",
        "Ranger training initiatives",
        "Sustainable tourism development",
        "Traditional knowledge preservation",
        "Women's empowerment projects",
      ],
      stats: {
        beneficiaries: "5,000+",
        jobs: "500",
        schools: "25",
        success: "98%",
      },
    },
    {
      id: "research",
      name: "Wildlife Research",
      description: "Conducting cutting-edge research to inform conservation strategies and wildlife management",
      image: "/images/cheetah-rocks.jpg",
      impact: "Published 50+ research papers contributing to global conservation",
      funding: 67,
      activities: [
        "Population monitoring",
        "Behavioral studies",
        "Genetic research",
        "Climate impact assessment",
        "Technology development",
      ],
      stats: {
        studies: "50+",
        species: "147",
        researchers: "30",
        success: "89%",
      },
    },
  ]

  const selectedProgram = conservationPrograms.find((p) => p.id === activeProgram) || conservationPrograms[0]

  return (
    <div className="min-h-screen bg-warm-ivory">
      <FloatingNavigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/rhino-cub.jpg" alt="Mother rhino with calf" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 pt-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Conservation</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Protecting Africa's wildlife for future generations through science, community, and action
          </p>
        </div>
      </section>

      {/* Conservation Impact Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Conservation Impact</h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              Through partnerships with local communities, researchers, and conservation organizations, we're making a
              real difference in wildlife protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-deep-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-deep-terracotta" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">18,000+</h3>
                <p className="text-elephant-gray">Rhinos Protected</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-acacia-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-acacia-green" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">5,000+</h3>
                <p className="text-elephant-gray">Community Members Supported</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sunset-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-sunset-orange" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">95%</h3>
                <p className="text-elephant-gray">Success Rate</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-lion-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-lion-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">25+</h3>
                <p className="text-elephant-gray">Years of Conservation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conservation Programs */}
      <section className="py-16 bg-gradient-to-r from-cream-sand to-warm-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Conservation Programs
            </h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              Comprehensive initiatives addressing the most critical conservation challenges
            </p>
          </div>

          {/* Program Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {conservationPrograms.map((program) => (
              <Button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                variant={selectedProgram === program.id ? "default" : "outline"}
                className={`px-6 py-3 ${
                  selectedProgram === program.id
                    ? "bg-sunset-orange hover:bg-deep-terracotta text-white"
                    : "border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white"
                }`}
              >
                {program.name}
              </Button>
            ))}
          </div>

          {/* Selected Program Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="overflow-hidden shadow-xl">
                <div className="relative h-64">
                  <Image
                    src={selectedProgram.image || "/placeholder.svg"}
                    alt={selectedProgram.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{selectedProgram.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-elephant-gray leading-relaxed mb-6">{selectedProgram.description}</p>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-charcoal">Funding Progress</span>
                      <span className="text-sunset-orange font-bold">{selectedProgram.funding}%</span>
                    </div>
                    <Progress value={selectedProgram.funding} className="h-3" />
                  </div>

                  <div className="bg-acacia-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-acacia-green mb-2">Impact Achievement</h4>
                    <p className="text-sm text-elephant-gray">{selectedProgram.impact}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Program Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-acacia-green" />
                    <span>Program Activities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {selectedProgram.activities.map((activity, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sunset-orange rounded-full mt-2 flex-shrink-0" />
                        <span className="text-elephant-gray text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Program Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-sunset-orange" />
                    <span>Key Statistics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedProgram.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-sunset-orange">{value}</div>
                        <div className="text-sm text-elephant-gray capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Get Involved */}
              <Card className="bg-gradient-to-r from-sunset-orange to-deep-terracotta text-white">
                <CardContent className="p-6 text-center">
                  <h4 className="font-heading text-lg font-bold mb-2">Get Involved</h4>
                  <p className="text-sm opacity-90 mb-4">Support {selectedProgram.name}</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-white text-sunset-orange hover:bg-cream-sand font-semibold">
                      Donate Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-sunset-orange bg-transparent"
                    >
                      Volunteer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Conservation Success Stories
            </h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              Real achievements in wildlife protection and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/rhino-cub.jpg"
                  alt="White rhino success story"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3">White Rhino Recovery</h3>
                <p className="text-elephant-gray text-sm leading-relaxed mb-4">
                  From near extinction with only 50 individuals in the 1960s, the white rhino population has recovered
                  to over 18,000 thanks to dedicated conservation efforts.
                </p>
                <div className="flex items-center space-x-2 text-acacia-green">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-semibold">36,000% population increase</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/springbok-portrait.jpg"
                  alt="Community rangers"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Community Rangers</h3>
                <p className="text-elephant-gray text-sm leading-relaxed mb-4">
                  Training local community members as rangers has created 500+ jobs while significantly reducing
                  poaching incidents through local ownership of conservation.
                </p>
                <div className="flex items-center space-x-2 text-sunset-orange">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-semibold">500+ jobs created</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/cheetah-rocks.jpg"
                  alt="Technology in conservation"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Technology Innovation</h3>
                <p className="text-elephant-gray text-sm leading-relaxed mb-4">
                  Advanced GPS collaring, drone surveillance, and AI-powered monitoring systems have revolutionized
                  wildlife protection and research capabilities.
                </p>
                <div className="flex items-center space-x-2 text-lion-gold">
                  <Camera className="h-4 w-4" />
                  <span className="text-sm font-semibold">95% monitoring coverage</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 bg-gradient-to-r from-charcoal to-rhino-steel text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How You Can Help</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Every safari booking contributes to conservation. Here are additional ways to make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-deep-terracotta mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-3">Adopt an Animal</h3>
                <p className="text-sm opacity-90 mb-4">
                  Symbolically adopt a rhino, elephant, or other wildlife and receive updates on their progress.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-charcoal bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-acacia-green mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-3">Volunteer</h3>
                <p className="text-sm opacity-90 mb-4">
                  Join our conservation teams for hands-on experience in wildlife research and protection.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-charcoal bg-transparent"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-lion-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-3">Spread Awareness</h3>
                <p className="text-sm opacity-90 mb-4">
                  Share our conservation stories and educate others about African wildlife protection.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-charcoal bg-transparent"
                >
                  Share Story
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-sunset-orange mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-3">Donate</h3>
                <p className="text-sm opacity-90 mb-4">
                  Direct financial support for anti-poaching, research, and community development programs.
                </p>
                <Button className="bg-sunset-orange hover:bg-deep-terracotta text-white">Donate Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conservation Safari CTA */}
      <section className="py-16 bg-gradient-to-r from-sunset-orange to-golden-savanna text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Join a Conservation Safari</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience wildlife protection firsthand while contributing directly to conservation efforts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sunset-orange hover:bg-cream-sand font-heading font-semibold px-8 py-4 text-lg"
            >
              Book Conservation Safari
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sunset-orange px-8 py-4 text-lg bg-transparent"
            >
              Learn About Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
