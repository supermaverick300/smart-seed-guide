import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sprout, Target, Leaf, Users, Heart, 
  ArrowRight, CheckCircle2, Lightbulb
} from "lucide-react";

const howItWorks = [
  {
    step: 1,
    title: "Enter Soil Details",
    description: "Tell us about your soil type, pH level, and moisture content."
  },
  {
    step: 2,
    title: "Select Your Season",
    description: "Choose whether you're planting Kharif, Rabi, or Zaid crops."
  },
  {
    step: 3,
    title: "Get Recommendations",
    description: "Receive top 3 seed varieties with yield potential and planting tips."
  }
];

const whyMatters = [
  {
    icon: Target,
    title: "Higher Yields",
    description: "Right seed for right soil can increase yields by 20-40%."
  },
  {
    icon: Heart,
    title: "Reduce Crop Failure",
    description: "Weather-aware recommendations help avoid losses."
  },
  {
    icon: Leaf,
    title: "Save Resources",
    description: "Suitable seeds need less water, fertilizer, and pesticides."
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>About the System</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Why Smart Seed Selection Matters
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Learn how choosing the right seeds can transform your farming success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-6">The Problem We Solve</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every year, millions of farmers face crop failures because they plant seeds that don't match their soil type or local weather conditions. This leads to poor yields, wasted resources, and financial losses.
            </p>
            <p className="text-lg text-foreground font-medium">
              Smart Seed Selector uses simple data inputs to recommend the best seed varieties for YOUR specific farm conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Why Seed Selection Matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyMatters.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-3xl hero-gradient flex items-center justify-center mx-auto mb-6 shadow-leaf">
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Soil Affects Crops */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-left mb-6">
                How Soil Type Affects Crop Growth
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Different soils have different properties that affect plant growth:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Clay Soil</p>
                    <p className="text-sm text-muted-foreground">Holds water well but can become waterlogged. Best for rice, wheat.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Sandy Soil</p>
                    <p className="text-sm text-muted-foreground">Drains quickly, needs frequent watering. Good for millets, groundnut.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Black Soil</p>
                    <p className="text-sm text-muted-foreground">Rich in nutrients, retains moisture. Ideal for cotton, sorghum.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Loam Soil</p>
                    <p className="text-sm text-muted-foreground">Balanced drainage and nutrients. Supports most crops well.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-farm p-8 bg-primary/5">
              <h3 className="text-xl font-bold text-foreground mb-6">
                How Weather Impacts Seed Choice
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card">
                  <p className="font-semibold text-foreground mb-1">Temperature</p>
                  <p className="text-sm text-muted-foreground">Each crop has optimal temperature range. Wrong temps = poor germination.</p>
                </div>
                <div className="p-4 rounded-xl bg-card">
                  <p className="font-semibold text-foreground mb-1">Rainfall</p>
                  <p className="text-sm text-muted-foreground">Too much or too little water affects growth. Match seeds to expected rainfall.</p>
                </div>
                <div className="p-4 rounded-xl bg-card">
                  <p className="font-semibold text-foreground mb-1">Humidity</p>
                  <p className="text-sm text-muted-foreground">High humidity can cause fungal diseases. Choose resistant varieties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">How Smart Seed Selector Works</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground shadow-leaf">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-3xl hero-gradient flex items-center justify-center mx-auto mb-8 shadow-leaf">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="section-heading mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe every farmer deserves access to agricultural knowledge that was once available only to experts. Our goal is to make smart farming accessible to all, using simple technology that anyone can use.
            </p>
            <p className="text-lg text-foreground font-medium mb-8">
              Together, we can improve yields, reduce crop failures, and build a more sustainable future for Indian agriculture.
            </p>
            <Button asChild variant="hero">
              <Link to="/seed-recommendation">
                Try It Now - Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
