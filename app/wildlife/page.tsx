"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FloatingNavigation from "@/components/floating-navigation"
import { Eye, Clock, AlertTriangle, Camera, Heart, Info } from "lucide-react"

export default function WildlifePage() {
  const [selectedAnimal, setSelectedAnimal] = useState("lion")

  const wildlife = [
    {
      id: "lion",
      name: "African Lion",
      scientificName: "Panthera leo",
      status: "Vulnerable",
      population: "~20,000 in wild",
      image: "/images/lion-hero.jpg",
      description:
        "The undisputed king of the African bushveld, lions are the only truly social cats, living in prides of up to 30 individuals.",
      physicalTraits: {
        weight: "Male: 190kg, Female: 130kg",
        length: "Male: 2.5m, Female: 2.3m",
        lifespan: "12-16 years in wild",
        speed: "Up to 80 km/h in short bursts",
      },
      behavior: {
        social: "Live in prides with complex social structures",
        hunting: "Females do most hunting, males defend territory",
        communication: "Roar can be heard up to 8km away",
        territory: "Prides control territories of 20-400 km²",
      },
      bestViewing: {
        time: "Early morning (6-9 AM) and late afternoon (4-6 PM)",
        season: "Dry season (May-September) for easier spotting",
        location: "Open grasslands, near water sources",
        tips: "Look for movement in shade during hot days",
      },
      conservation: {
        threats: ["Habitat loss", "Human-wildlife conflict", "Poaching"],
        efforts: ["Protected reserves", "Community programs", "Anti-poaching units"],
        success: "Kruger population stable at ~1,500 individuals",
      },
      funFacts: [
        "A lion's roar can be heard from 8 kilometers away",
        "Lions sleep 16-20 hours per day",
        "Female lions do 85-90% of the hunting",
        "Cubs are born with blue eyes that change to amber",
      ],
    },
    {
      id: "elephant",
      name: "African Elephant",
      scientificName: "Loxodonta africana",
      status: "Endangered",
      population: "~415,000 in wild",
      image: "/images/rhino-cub.jpg",
      description:
        "The largest land mammal on Earth, African elephants are intelligent, emotional creatures with complex social structures.",
      physicalTraits: {
        weight: "Male: 6,000kg, Female: 4,000kg",
        height: "Male: 4m, Female: 3m",
        lifespan: "60-70 years in wild",
        speed: "Up to 40 km/h",
      },
      behavior: {
        social: "Matriarchal herds led by oldest female",
        communication: "Infrasonic calls, trunk touches, body language",
        memory: "Exceptional memory, remember drought locations",
        intelligence: "Self-aware, show empathy and grief",
      },
      bestViewing: {
        time: "Early morning and late afternoon near water",
        season: "Dry season when they gather at water holes",
        location: "Rivers, dams, and permanent water sources",
        tips: "Patient observation rewards with amazing behavior",
      },
      conservation: {
        threats: ["Poaching for ivory", "Habitat fragmentation", "Human encroachment"],
        efforts: ["Anti-poaching technology", "Corridor creation", "Community engagement"],
        success: "Kruger population recovering: ~17,000 individuals",
      },
      funFacts: [
        "Elephants can live up to 70 years",
        "They have excellent memories and hold grudges",
        "Baby elephants suck their trunks like human babies suck thumbs",
        "Elephants mourn their dead and revisit bones",
      ],
    },
    {
      id: "rhino",
      name: "White Rhinoceros",
      scientificName: "Ceratotherium simum",
      status: "Near Threatened",
      population: "~18,000 in wild",
      image: "/images/rhino-cub.jpg",
      description:
        "Despite their name, white rhinos are actually grey. They're the largest rhino species and a conservation success story in South Africa.",
      physicalTraits: {
        weight: "Male: 2,300kg, Female: 1,700kg",
        length: "3.7-4m",
        lifespan: "40-50 years in wild",
        speed: "Up to 50 km/h",
      },
      behavior: {
        social: "Semi-social, females with calves form groups",
        feeding: "Grazers, prefer short grass",
        territory: "Males mark territory with dung piles",
        communication: "Snorts, growls, and scent marking",
      },
      bestViewing: {
        time: "Early morning grazing sessions",
        season: "Year-round, easier in dry season",
        location: "Open grasslands and savanna",
        tips: "Look for distinctive square lip while grazing",
      },
      conservation: {
        threats: ["Poaching for horn", "Habitat loss"],
        efforts: ["24/7 monitoring", "Dehorning programs", "Breeding programs"],
        success: "Population increased from 50 to 18,000+ since 1960s",
      },
      funFacts: [
        "Horn is made of keratin, same as human hair",
        "Can run surprisingly fast despite their size",
        "Have poor eyesight but excellent hearing",
        "The 'white' name comes from Afrikaans 'wyd' meaning wide",
      ],
    },
    {
      id: "buffalo",
      name: "Cape Buffalo",
      scientificName: "Syncerus caffer",
      status: "Least Concern",
      population: "~900,000 in wild",
      image: "/images/buffalo-herd.jpg",
      description:
        "Known as one of Africa's 'Big Five', Cape buffalo are considered one of the most dangerous animals due to their unpredictable nature.",
      physicalTraits: {
        weight: "Male: 750kg, Female: 500kg",
        height: "1.7m at shoulder",
        lifespan: "15-25 years in wild",
        speed: "Up to 57 km/h",
      },
      behavior: {
        social: "Highly social, herds of 50-500 individuals",
        hierarchy: "Dominant bulls lead herds",
        defense: "Form protective circles around young",
        memory: "Excellent memory, hold grudges against threats",
      },
      bestViewing: {
        time: "Early morning and evening at water holes",
        season: "Dry season for large herd gatherings",
        location: "Near permanent water sources",
        tips: "Observe from safe distance, very unpredictable",
      },
      conservation: {
        threats: ["Disease", "Habitat loss", "Hunting pressure"],
        efforts: ["Disease monitoring", "Habitat protection", "Sustainable hunting"],
        success: "Stable population in protected areas",
      },
      funFacts: [
        "Never forget an enemy and have been known to ambush hunters",
        "Can jump 6 feet high from standing position",
        "Mud wallowing helps protect from insects",
        "Voting behavior: herds 'vote' on direction by standing",
      ],
    },
    {
      id: "leopard",
      name: "African Leopard",
      scientificName: "Panthera pardus",
      status: "Near Threatened",
      population: "~700,000 in wild",
      image: "/images/cheetah-rocks.jpg",
      description:
        "The most elusive of the Big Five, leopards are solitary, nocturnal hunters known for their incredible strength and stealth.",
      physicalTraits: {
        weight: "Male: 60kg, Female: 35kg",
        length: "Male: 2.1m, Female: 1.8m",
        lifespan: "12-17 years in wild",
        speed: "Up to 58 km/h",
      },
      behavior: {
        social: "Solitary except during mating",
        hunting: "Opportunistic, hunt at night",
        territory: "Males: 30-78 km², Females: 15-16 km²",
        strength: "Can carry prey twice their weight up trees",
      },
      bestViewing: {
        time: "Dawn and dusk, occasionally during day",
        season: "Year-round, but easier in dry season",
        location: "Rocky outcrops, riverine forests, trees",
        tips: "Most elusive Big Five member, requires patience",
      },
      conservation: {
        threats: ["Habitat loss", "Human-wildlife conflict", "Prey depletion"],
        efforts: ["Corridor protection", "Conflict mitigation", "Research programs"],
        success: "Kruger maintains healthy population of ~1,000",
      },
      funFacts: [
        "Can leap horizontally 6 meters and vertically 3 meters",
        "Each leopard has unique rosette patterns",
        "Excellent swimmers and climbers",
        "Can see 7 times better than humans at night",
      ],
    },
  ]

  const otherWildlife = [
    {
      name: "Cheetah",
      image: "/images/cheetah-rocks.jpg",
      description: "World's fastest land animal",
      status: "Vulnerable",
    },
    {
      name: "Giraffe",
      image: "/images/giraffe-sunset.jpg",
      description: "Tallest mammal on Earth",
      status: "Vulnerable",
    },
    {
      name: "Zebra",
      image: "/images/zebra-herd.jpg",
      description: "Striped horses of Africa",
      status: "Near Threatened",
    },
    {
      name: "Springbok",
      image: "/images/springbok-portrait.jpg",
      description: "South Africa's national animal",
      status: "Least Concern",
    },
  ]

  const selectedWildlife = wildlife.find((animal) => animal.id === selectedAnimal) || wildlife[0]

  return (
    <div className="min-h-screen bg-warm-ivory">
      <FloatingNavigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/zebra-herd.jpg"
            alt="Zebra herd in African savanna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 pt-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Wildlife & Big 5</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Discover Africa's most magnificent creatures in their natural habitat
          </p>
        </div>
      </section>

      {/* Big 5 Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">The Big 5</h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              Originally named by big-game hunters for the five most difficult and dangerous animals to hunt on foot in
              Africa
            </p>
          </div>

          {/* Animal Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {wildlife.map((animal) => (
              <Button
                key={animal.id}
                onClick={() => setSelectedAnimal(animal.id)}
                variant={selectedAnimal === animal.id ? "default" : "outline"}
                className={`px-6 py-3 ${
                  selectedAnimal === animal.id
                    ? "bg-sunset-orange hover:bg-deep-terracotta text-white"
                    : "border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white"
                }`}
              >
                {animal.name}
              </Button>
            ))}
          </div>

          {/* Selected Animal Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image and Basic Info */}
            <div>
              <Card className="overflow-hidden shadow-xl">
                <div className="relative h-96">
                  <Image
                    src={selectedWildlife.image || "/placeholder.svg"}
                    alt={selectedWildlife.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        selectedWildlife.status === "Vulnerable"
                          ? "bg-amber-500"
                          : selectedWildlife.status === "Endangered"
                            ? "bg-red-500"
                            : selectedWildlife.status === "Near Threatened"
                              ? "bg-orange-500"
                              : "bg-green-500"
                      } text-white`}
                    >
                      {selectedWildlife.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-2">{selectedWildlife.name}</h3>
                  <p className="text-dusty-rose font-semibold mb-2 italic">{selectedWildlife.scientificName}</p>
                  <p className="text-elephant-gray mb-4 leading-relaxed">{selectedWildlife.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <AlertTriangle className="h-4 w-4 text-sunset-orange" />
                      <span>{selectedWildlife.status}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-acacia-green" />
                      <span>{selectedWildlife.population}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Information */}
            <div className="space-y-6">
              {/* Physical Traits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-sunset-orange" />
                    <span>Physical Traits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {Object.entries(selectedWildlife.physicalTraits).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold text-charcoal capitalize">{key}:</span>
                        <p className="text-elephant-gray">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Behavior */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-acacia-green" />
                    <span>Behavior</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    {Object.entries(selectedWildlife.behavior).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold text-charcoal capitalize">{key}:</span>
                        <p className="text-elephant-gray">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Best Viewing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-lion-gold" />
                    <span>Best Viewing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    {Object.entries(selectedWildlife.bestViewing).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold text-charcoal capitalize">{key}:</span>
                        <p className="text-elephant-gray">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Conservation & Fun Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Conservation */}
            <Card className="border-deep-terracotta/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-deep-terracotta" />
                  <span>Conservation Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-deep-terracotta mb-2">Threats</h4>
                    <ul className="text-sm text-elephant-gray space-y-1">
                      {selectedWildlife.conservation.threats.map((threat, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-deep-terracotta rounded-full" />
                          <span>{threat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-acacia-green mb-2">Conservation Efforts</h4>
                    <ul className="text-sm text-elephant-gray space-y-1">
                      {selectedWildlife.conservation.efforts.map((effort, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-acacia-green rounded-full" />
                          <span>{effort}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-acacia-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-acacia-green mb-2">Success Story</h4>
                    <p className="text-sm text-elephant-gray">{selectedWildlife.conservation.success}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="border-lion-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-lion-gold" />
                  <span>Fun Facts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedWildlife.funFacts.map((fact, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-lion-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-lion-gold">{index + 1}</span>
                      </div>
                      <p className="text-sm text-elephant-gray leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Wildlife */}
      <section className="py-16 bg-gradient-to-r from-cream-sand to-warm-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Other Amazing Wildlife</h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              Beyond the Big 5, Kruger is home to over 147 mammal species, each with their own unique story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherWildlife.map((animal, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={animal.image || "/placeholder.svg"}
                    alt={animal.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${
                        animal.status === "Vulnerable"
                          ? "bg-amber-500"
                          : animal.status === "Near Threatened"
                            ? "bg-orange-500"
                            : "bg-green-500"
                      } text-white`}
                    >
                      {animal.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-2">{animal.name}</h3>
                  <p className="text-elephant-gray text-sm">{animal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Photography Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Wildlife Photography Tips
            </h2>
            <p className="text-xl text-elephant-gray max-w-3xl mx-auto">
              Capture the perfect shot with advice from our professional guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sunset-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-sunset-orange" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">Golden Hour Magic</h3>
                <p className="text-elephant-gray leading-relaxed">
                  The best wildlife photography happens during the first and last hours of daylight when the light is
                  soft and warm.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-acacia-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-acacia-green" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">Patience & Observation</h3>
                <p className="text-elephant-gray leading-relaxed">
                  Great wildlife shots require patience. Observe animal behavior and anticipate their next move for the
                  perfect moment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-lion-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-lion-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">Equipment Essentials</h3>
                <p className="text-elephant-gray leading-relaxed">
                  A telephoto lens (300mm+), fast shutter speed, and continuous autofocus are essential for sharp
                  wildlife images.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sunset-orange to-golden-savanna text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Meet the Big 5?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join us for an unforgettable wildlife experience in the heart of Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sunset-orange hover:bg-cream-sand font-heading font-semibold px-8 py-4 text-lg"
            >
              Book Wildlife Safari
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sunset-orange px-8 py-4 text-lg bg-transparent"
            >
              Photography Safari
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
