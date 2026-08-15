import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Beaker, CloudRain, Sprout, Droplets, 
  CheckCircle2, ArrowRight, Lightbulb, Target
} from "lucide-react";

const educationTopics = [
  {
    icon: Beaker,
    title: "How to Test Soil at Home",
    description: "Simple methods to understand your soil type without expensive equipment.",
    tips: [
      "Jar Test: Mix soil with water in a jar. Sand settles first, then silt, then clay.",
      "Squeeze Test: Wet soil and squeeze. Sandy soil crumbles, clay holds shape, loam slightly crumbles.",
      "pH Test: Use litmus paper or home pH kit. 6-7 is ideal for most crops.",
      "Color Check: Dark soil = high organic matter, Red = iron-rich, Black = mineral-rich."
    ]
  },
  {
    icon: CloudRain,
    title: "Understanding Rainfall Patterns",
    description: "Learn to read weather signs and plan your farming activities.",
    tips: [
      "Monitor local weather forecasts daily during planting season.",
      "Observe cloud patterns - dark low clouds often mean rain soon.",
      "Track monthly rainfall to understand your area's pattern.",
      "Keep a simple rainfall log using a measuring container."
    ]
  },
  {
    icon: Sprout,
    title: "Best Practices for Seed Sowing",
    description: "Maximize germination and early plant health with these techniques.",
    tips: [
      "Sow seeds at the right depth - usually 2-3 times the seed diameter.",
      "Ensure soil moisture before sowing - not too wet, not too dry.",
      "Space seeds properly for good air circulation and root growth.",
      "Treat seeds with fungicide if disease is common in your area."
    ]
  },
  {
    icon: Droplets,
    title: "Water Management Tips",
    description: "Efficient irrigation methods to save water and improve yields.",
    tips: [
      "Water early morning or evening to reduce evaporation.",
      "Use mulch around plants to retain soil moisture.",
      "Drip irrigation saves 30-50% water compared to flood irrigation.",
      "Check soil moisture 2 inches deep before watering."
    ]
  }
];

const quickTips = [
  {
    title: "Seed Selection",
    tip: "Always buy certified seeds from trusted sources. Check germination rate on packet."
  },
  {
    title: "Soil Health",
    tip: "Add organic matter (compost, manure) to improve any soil type."
  },
  {
    title: "Timing",
    tip: "Early sowing often gives better yields than late sowing."
  },
  {
    title: "Spacing",
    tip: "Proper plant spacing increases yield by 20-30%."
  }
];

export default function Education() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Farmer Education</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Learn Smart Farming
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Simple guides and tips to help you grow better crops
          </p>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Quick Tips</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((item, index) => (
              <div key={index} className="card-farm p-5">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Education Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Farming Guides</h2>
            <p className="section-subheading">
              Easy-to-understand information for better farming decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationTopics.map((topic, index) => (
              <div key={index} className="card-farm p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center flex-shrink-0">
                    <topic.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{topic.title}</h3>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {topic.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground text-sm leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Seasonal Crop Calendar</h2>
            <p className="section-subheading">
              Know what to plant and when for maximum success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Kharif */}
            <div className="card-farm p-6 bg-primary/5">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                <CloudRain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Kharif Season (खरीफ)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">June to October • Monsoon Crops</p>
              <div className="space-y-2">
                <p className="text-sm text-foreground"><strong>Main Crops:</strong> Rice, Maize, Cotton, Soybean, Groundnut, Millets</p>
                <p className="text-sm text-foreground"><strong>Sowing:</strong> June-July</p>
                <p className="text-sm text-foreground"><strong>Harvest:</strong> September-October</p>
              </div>
            </div>

            {/* Rabi */}
            <div className="card-farm p-6 bg-secondary/5">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Rabi Season (रबी)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">October to March • Winter Crops</p>
              <div className="space-y-2">
                <p className="text-sm text-foreground"><strong>Main Crops:</strong> Wheat, Chickpea, Mustard, Barley, Peas, Lentils</p>
                <p className="text-sm text-foreground"><strong>Sowing:</strong> October-November</p>
                <p className="text-sm text-foreground"><strong>Harvest:</strong> March-April</p>
              </div>
            </div>

            {/* Zaid */}
            <div className="card-farm p-6 bg-accent/10">
              <div className="w-12 h-12 rounded-2xl bg-accent/30 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Zaid Season (ज़ायद)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">March to June • Summer Crops</p>
              <div className="space-y-2">
                <p className="text-sm text-foreground"><strong>Main Crops:</strong> Watermelon, Muskmelon, Cucumber, Vegetables, Moong</p>
                <p className="text-sm text-foreground"><strong>Sowing:</strong> March-April</p>
                <p className="text-sm text-foreground"><strong>Harvest:</strong> May-June</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Find the Right Seeds?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Use our smart tool to get personalized seed recommendations based on your soil and weather.
          </p>
          <Button asChild variant="hero">
            <Link to="/seed-recommendation">
              Try Seed Finder
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
