import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Sprout, CloudSun, Beaker, ArrowRight, CheckCircle2, 
  Leaf, Droplets, Thermometer, MapPin, Calendar, TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const features = [
  {
    icon: Beaker,
    title: "Soil Analysis",
    description: "Enter your soil type, pH level, and moisture to get personalized recommendations."
  },
  {
    icon: CloudSun,
    title: "Weather Forecast",
    description: "7-day weather predictions help you plan the perfect planting time."
  },
  {
    icon: Sprout,
    title: "Smart Recommendations",
    description: "Get the top 3 best seeds suited for your specific conditions."
  }
];

const benefits = [
  "Higher crop yields with the right seed choice",
  "Reduce crop failures due to weather risks",
  "Save money by avoiding unsuitable seeds",
  "Plan planting dates with confidence",
  "Access expert agricultural knowledge",
  "Simple to use - no technical skills needed"
];

const stats = [
  { value: "50+", label: "Seed Varieties" },
  { value: "6", label: "Soil Types" },
  { value: "3", label: "Growing Seasons" },
  { value: "1000+", label: "Farmers Helped" }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Lush green farm field at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Leaf className="w-4 h-4" />
              <span>Made for Indian Farmers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Smart Seed Selector
              <span className="block text-accent">for Farmers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Get the best seed recommendations based on your soil type and local weather forecast. 
              Simple, free, and designed for every farmer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/seed-recommendation">
                  Check Seed Recommendations
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-background/30 text-background hover:bg-background/10 hover:text-background">
                <Link to="/about">
                  Learn How It Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-subheading">
              Three simple steps to find the perfect seeds for your farm
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-farm p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon mx-auto mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-foreground font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading text-left mb-6">
                Why Choose Smart Seed Selector?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our tool combines local weather data with soil science to help you make the best decisions for your crops.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="default" size="lg" className="mt-8">
                <Link to="/seed-recommendation">
                  Try It Now - It's Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-farm p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <Droplets className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Soil Moisture</h4>
                <p className="text-sm text-muted-foreground">Optimal water levels for seeds</p>
              </div>
              
              <div className="card-farm p-6 flex flex-col items-center text-center mt-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <Thermometer className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Temperature</h4>
                <p className="text-sm text-muted-foreground">Heat tolerance analysis</p>
              </div>
              
              <div className="card-farm p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <Calendar className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Planting Dates</h4>
                <p className="text-sm text-muted-foreground">Best time to sow seeds</p>
              </div>
              
              <div className="card-farm p-6 flex flex-col items-center text-center mt-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Yield Potential</h4>
                <p className="text-sm text-muted-foreground">Expected harvest amounts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-3xl hero-gradient flex items-center justify-center mx-auto mb-8 shadow-leaf">
              <Sprout className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="section-heading mb-6">
              Ready to Find Your Perfect Seeds?
            </h2>
            <p className="section-subheading mb-8">
              Join thousands of farmers who are making smarter seed choices. 
              It takes just 2 minutes to get your personalized recommendations.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/seed-recommendation">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
