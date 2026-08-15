import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Sprout, Droplets, Thermometer, MapPin, Calendar, 
  Leaf, CloudRain, Sun, AlertTriangle, CheckCircle2,
  ChevronDown, Loader2, Beaker, TrendingUp
} from "lucide-react";

interface SeedRecommendation {
  name: string;
  variety: string;
  suitabilityScore: number;
  yieldPotential: string;
  plantingWindow: string;
  waterNeeds: string;
  features: string[];
}

interface WeatherRisk {
  level: "low" | "medium" | "high";
  message: string;
}

const soilTypes = [
  { value: "clay", label: "Clay Soil (मिट्टी)" },
  { value: "loam", label: "Loam Soil (दोमट)" },
  { value: "sandy", label: "Sandy Soil (रेतीली)" },
  { value: "silt", label: "Silt Soil (गाद)" },
  { value: "red", label: "Red Soil (लाल मिट्टी)" },
  { value: "black", label: "Black Soil (काली मिट्टी)" },
];

const seasons = [
  { value: "kharif", label: "Kharif (खरीफ) - June to October" },
  { value: "rabi", label: "Rabi (रबी) - October to March" },
  { value: "zaid", label: "Zaid/Summer (ज़ायद) - March to June" },
];

// Seed database for recommendations
const seedDatabase: Record<string, Record<string, SeedRecommendation[]>> = {
  kharif: {
    clay: [
      { name: "Rice", variety: "Pusa Basmati 1121", suitabilityScore: 95, yieldPotential: "45-50 quintals/hectare", plantingWindow: "June 15 - July 15", waterNeeds: "High", features: ["Flood tolerant", "High grain quality", "Premium market price"] },
      { name: "Soybean", variety: "JS 9560", suitabilityScore: 88, yieldPotential: "20-25 quintals/hectare", plantingWindow: "June 20 - July 10", waterNeeds: "Medium", features: ["Short duration", "Disease resistant", "Good oil content"] },
      { name: "Cotton", variety: "Bt Cotton (RCH-2)", suitabilityScore: 82, yieldPotential: "18-22 quintals/hectare", plantingWindow: "May 15 - June 30", waterNeeds: "Medium", features: ["Pest resistant", "High yield", "Good fiber quality"] },
    ],
    loam: [
      { name: "Maize", variety: "DHM 117", suitabilityScore: 94, yieldPotential: "55-65 quintals/hectare", plantingWindow: "June 10 - July 5", waterNeeds: "Medium", features: ["High yield", "Drought tolerant", "Versatile use"] },
      { name: "Groundnut", variety: "TAG 24", suitabilityScore: 90, yieldPotential: "25-30 quintals/hectare", plantingWindow: "June 15 - July 10", waterNeeds: "Medium", features: ["Early maturing", "High oil content", "Disease resistant"] },
      { name: "Millets", variety: "Pusa Composite 443", suitabilityScore: 85, yieldPotential: "20-25 quintals/hectare", plantingWindow: "June 20 - July 15", waterNeeds: "Low", features: ["Drought resistant", "Nutritious", "Low input cost"] },
    ],
    sandy: [
      { name: "Pearl Millet", variety: "HHB 67 Improved", suitabilityScore: 96, yieldPotential: "22-28 quintals/hectare", plantingWindow: "July 1 - July 20", waterNeeds: "Low", features: ["Excellent drought tolerance", "Quick maturity", "Good fodder value"] },
      { name: "Cluster Bean", variety: "RGC 1017", suitabilityScore: 89, yieldPotential: "12-15 quintals/hectare", plantingWindow: "July 5 - July 25", waterNeeds: "Low", features: ["Desert crop", "Nitrogen fixing", "Industrial demand"] },
      { name: "Sesame", variety: "RT 351", suitabilityScore: 84, yieldPotential: "5-7 quintals/hectare", plantingWindow: "July 1 - July 15", waterNeeds: "Low", features: ["Heat tolerant", "High oil content", "Low water need"] },
    ],
    black: [
      { name: "Cotton", variety: "Bunny Bt", suitabilityScore: 97, yieldPotential: "22-28 quintals/hectare", plantingWindow: "May 20 - June 15", waterNeeds: "Medium", features: ["Perfect for black soil", "High fiber quality", "Good market price"] },
      { name: "Sorghum", variety: "CSH 16", suitabilityScore: 91, yieldPotential: "35-45 quintals/hectare", plantingWindow: "June 15 - July 10", waterNeeds: "Medium", features: ["Dual purpose", "Heat tolerant", "Good fodder"] },
      { name: "Pigeon Pea", variety: "Asha (ICPL 87119)", suitabilityScore: 88, yieldPotential: "15-20 quintals/hectare", plantingWindow: "June 10 - July 5", waterNeeds: "Low", features: ["Wilt resistant", "Long duration", "Nitrogen fixing"] },
    ],
    red: [
      { name: "Finger Millet", variety: "GPU 67", suitabilityScore: 93, yieldPotential: "25-32 quintals/hectare", plantingWindow: "June 15 - July 15", waterNeeds: "Medium", features: ["Calcium rich", "Drought tolerant", "Good storage"] },
      { name: "Groundnut", variety: "K-6", suitabilityScore: 89, yieldPotential: "22-28 quintals/hectare", plantingWindow: "June 20 - July 10", waterNeeds: "Medium", features: ["Suitable for red soil", "Confectionery grade", "High yield"] },
      { name: "Castor", variety: "GCH 7", suitabilityScore: 85, yieldPotential: "18-22 quintals/hectare", plantingWindow: "July 1 - July 20", waterNeeds: "Low", features: ["Industrial crop", "Drought resistant", "Long harvest period"] },
    ],
    silt: [
      { name: "Rice", variety: "Swarna Sub 1", suitabilityScore: 94, yieldPotential: "50-55 quintals/hectare", plantingWindow: "June 15 - July 10", waterNeeds: "High", features: ["Submergence tolerant", "High yield", "Fine grain"] },
      { name: "Jute", variety: "JRO 524", suitabilityScore: 88, yieldPotential: "28-35 quintals/hectare", plantingWindow: "April 15 - May 30", waterNeeds: "High", features: ["Fiber quality", "Flood tolerant", "Good returns"] },
      { name: "Green Gram", variety: "Pusa Vishal", suitabilityScore: 83, yieldPotential: "10-12 quintals/hectare", plantingWindow: "July 1 - July 20", waterNeeds: "Medium", features: ["Short duration", "High protein", "Good market"] },
    ],
  },
  rabi: {
    clay: [
      { name: "Wheat", variety: "HD 3086", suitabilityScore: 96, yieldPotential: "55-60 quintals/hectare", plantingWindow: "Nov 5 - Nov 25", waterNeeds: "Medium", features: ["High yield", "Rust resistant", "Good chapati quality"] },
      { name: "Chickpea", variety: "Pusa 372", suitabilityScore: 89, yieldPotential: "18-22 quintals/hectare", plantingWindow: "Oct 25 - Nov 15", waterNeeds: "Low", features: ["Wilt resistant", "Bold seeds", "Good protein"] },
      { name: "Mustard", variety: "Pusa Bold", suitabilityScore: 84, yieldPotential: "16-20 quintals/hectare", plantingWindow: "Oct 15 - Nov 5", waterNeeds: "Low", features: ["High oil content", "Early maturity", "Aphid tolerant"] },
    ],
    loam: [
      { name: "Wheat", variety: "PBW 343", suitabilityScore: 95, yieldPotential: "50-55 quintals/hectare", plantingWindow: "Nov 1 - Nov 20", waterNeeds: "Medium", features: ["Wide adaptability", "Excellent grain", "Disease resistant"] },
      { name: "Potato", variety: "Kufri Pukhraj", suitabilityScore: 91, yieldPotential: "300-350 quintals/hectare", plantingWindow: "Oct 15 - Nov 5", waterNeeds: "High", features: ["Early variety", "Yellow flesh", "High demand"] },
      { name: "Lentil", variety: "Pusa Vaibhav", suitabilityScore: 86, yieldPotential: "14-18 quintals/hectare", plantingWindow: "Nov 1 - Nov 20", waterNeeds: "Low", features: ["Bold seeds", "High protein", "Short duration"] },
    ],
    sandy: [
      { name: "Mustard", variety: "RH 749", suitabilityScore: 92, yieldPotential: "18-22 quintals/hectare", plantingWindow: "Oct 10 - Oct 30", waterNeeds: "Low", features: ["Sandy soil adapted", "High oil", "Good yield"] },
      { name: "Barley", variety: "BH 946", suitabilityScore: 88, yieldPotential: "40-45 quintals/hectare", plantingWindow: "Nov 5 - Nov 25", waterNeeds: "Low", features: ["Salt tolerant", "Drought hardy", "Multiple uses"] },
      { name: "Cumin", variety: "RZ 209", suitabilityScore: 85, yieldPotential: "6-8 quintals/hectare", plantingWindow: "Nov 10 - Nov 30", waterNeeds: "Low", features: ["High value", "Low water need", "Export quality"] },
    ],
    black: [
      { name: "Safflower", variety: "Bhima", suitabilityScore: 94, yieldPotential: "12-15 quintals/hectare", plantingWindow: "Sept 25 - Oct 15", waterNeeds: "Very Low", features: ["Perfect for black soil", "No irrigation needed", "High oil content"] },
      { name: "Chickpea", variety: "JG 14", suitabilityScore: 90, yieldPotential: "20-24 quintals/hectare", plantingWindow: "Oct 15 - Nov 5", waterNeeds: "Low", features: ["Wilt resistant", "Bold grains", "Good market"] },
      { name: "Wheat", variety: "NIAW 34", suitabilityScore: 87, yieldPotential: "45-50 quintals/hectare", plantingWindow: "Nov 1 - Nov 20", waterNeeds: "Medium", features: ["Semi-dwarf", "Rust resistant", "Quality grain"] },
    ],
    red: [
      { name: "Groundnut", variety: "TMV 2", suitabilityScore: 91, yieldPotential: "20-25 quintals/hectare", plantingWindow: "Oct 15 - Nov 5", waterNeeds: "Medium", features: ["Rabi suitable", "High shelling", "Disease resistant"] },
      { name: "Sunflower", variety: "KBSH 44", suitabilityScore: 87, yieldPotential: "18-22 quintals/hectare", plantingWindow: "Sept 20 - Oct 10", waterNeeds: "Medium", features: ["High oil", "Short duration", "Wide adaptability"] },
      { name: "Horse Gram", variety: "Paiyur 2", suitabilityScore: 84, yieldPotential: "8-10 quintals/hectare", plantingWindow: "Sept 15 - Oct 15", waterNeeds: "Low", features: ["Hardy crop", "Medicinal value", "Low input"] },
    ],
    silt: [
      { name: "Wheat", variety: "K 9107", suitabilityScore: 93, yieldPotential: "45-50 quintals/hectare", plantingWindow: "Nov 15 - Dec 5", waterNeeds: "Medium", features: ["Late sowing", "Good grain", "Lodging resistant"] },
      { name: "Lentil", variety: "Narendra Lentil 1", suitabilityScore: 88, yieldPotential: "15-18 quintals/hectare", plantingWindow: "Nov 1 - Nov 20", waterNeeds: "Low", features: ["Rust resistant", "High yield", "Quality seeds"] },
      { name: "Pea", variety: "Arkel", suitabilityScore: 85, yieldPotential: "80-100 quintals/hectare", plantingWindow: "Oct 25 - Nov 15", waterNeeds: "Medium", features: ["Garden pea", "Sweet taste", "Early harvest"] },
    ],
  },
  zaid: {
    clay: [
      { name: "Green Gram", variety: "Pusa Ratna", suitabilityScore: 88, yieldPotential: "10-12 quintals/hectare", plantingWindow: "March 15 - April 10", waterNeeds: "Medium", features: ["Short duration", "Heat tolerant", "Quick returns"] },
      { name: "Black Gram", variety: "T-9", suitabilityScore: 85, yieldPotential: "8-10 quintals/hectare", plantingWindow: "March 20 - April 15", waterNeeds: "Medium", features: ["Yellow mosaic resistant", "Good dal quality", "60 days crop"] },
      { name: "Cucumber", variety: "Pusa Uday", suitabilityScore: 82, yieldPotential: "150-180 quintals/hectare", plantingWindow: "February 15 - March 30", waterNeeds: "High", features: ["High yield", "Disease resistant", "Market demand"] },
    ],
    loam: [
      { name: "Watermelon", variety: "Sugar Baby", suitabilityScore: 92, yieldPotential: "300-400 quintals/hectare", plantingWindow: "Feb 15 - March 15", waterNeeds: "Medium", features: ["Sweet fruit", "Good transport", "High demand"] },
      { name: "Muskmelon", variety: "Pusa Sharbati", suitabilityScore: 89, yieldPotential: "180-220 quintals/hectare", plantingWindow: "Feb 20 - March 20", waterNeeds: "Medium", features: ["Aromatic", "Good keeping", "Premium price"] },
      { name: "Okra", variety: "Pusa A-4", suitabilityScore: 86, yieldPotential: "100-120 quintals/hectare", plantingWindow: "Feb 15 - March 30", waterNeeds: "Medium", features: ["YVMV tolerant", "Tender pods", "Long harvest"] },
    ],
    sandy: [
      { name: "Watermelon", variety: "Asahi Yamato", suitabilityScore: 94, yieldPotential: "350-450 quintals/hectare", plantingWindow: "Feb 1 - March 10", waterNeeds: "Medium", features: ["Desert variety", "Large fruit", "Sweet taste"] },
      { name: "Muskmelon", variety: "Durgapura Madhu", suitabilityScore: 90, yieldPotential: "200-250 quintals/hectare", plantingWindow: "Feb 10 - March 15", waterNeeds: "Low", features: ["Sandy soil special", "High sugar", "Good yield"] },
      { name: "Bitter Gourd", variety: "Pusa Do Mausami", suitabilityScore: 85, yieldPotential: "80-100 quintals/hectare", plantingWindow: "March 1 - April 15", waterNeeds: "Medium", features: ["Two season", "Medicinal value", "Good market"] },
    ],
    black: [
      { name: "Sunflower", variety: "Morden", suitabilityScore: 90, yieldPotential: "15-18 quintals/hectare", plantingWindow: "Feb 1 - Feb 28", waterNeeds: "Low", features: ["Short duration", "High oil", "Good for summer"] },
      { name: "Green Gram", variety: "K 851", suitabilityScore: 86, yieldPotential: "8-10 quintals/hectare", plantingWindow: "March 10 - April 5", waterNeeds: "Low", features: ["Quick crop", "Heat tolerant", "Black soil adapted"] },
      { name: "Sesame", variety: "Shekhar", suitabilityScore: 82, yieldPotential: "5-6 quintals/hectare", plantingWindow: "March 15 - April 10", waterNeeds: "Very Low", features: ["Summer crop", "High oil", "Low water"] },
    ],
    red: [
      { name: "Groundnut", variety: "VRI 2", suitabilityScore: 91, yieldPotential: "18-22 quintals/hectare", plantingWindow: "Feb 15 - March 15", waterNeeds: "Medium", features: ["Summer variety", "Drought tolerant", "High oil"] },
      { name: "Sesame", variety: "TMV 4", suitabilityScore: 87, yieldPotential: "5-7 quintals/hectare", plantingWindow: "March 1 - April 10", waterNeeds: "Low", features: ["Red soil special", "Disease resistant", "Good quality"] },
      { name: "Ridge Gourd", variety: "Pusa Nasdar", suitabilityScore: 83, yieldPotential: "100-130 quintals/hectare", plantingWindow: "Feb 20 - April 15", waterNeeds: "Medium", features: ["Vigorous growth", "Long fruit", "Good taste"] },
    ],
    silt: [
      { name: "Cucumber", variety: "Japanese Long Green", suitabilityScore: 90, yieldPotential: "160-200 quintals/hectare", plantingWindow: "Feb 15 - March 30", waterNeeds: "High", features: ["Long fruit", "Crispy", "High yield"] },
      { name: "Bottle Gourd", variety: "Pusa Naveen", suitabilityScore: 87, yieldPotential: "250-300 quintals/hectare", plantingWindow: "Feb 10 - March 25", waterNeeds: "High", features: ["Long harvest", "Good storage", "Nutritious"] },
      { name: "Green Gram", variety: "Samrat", suitabilityScore: 84, yieldPotential: "10-12 quintals/hectare", plantingWindow: "March 15 - April 10", waterNeeds: "Medium", features: ["Quick maturity", "Disease resistant", "Good dal"] },
    ],
  },
};

export default function SeedRecommendation() {
  const [formData, setFormData] = useState({
    soilType: "",
    soilPh: "",
    soilMoisture: "",
    location: "",
    season: "",
  });
  const [recommendations, setRecommendations] = useState<SeedRecommendation[] | null>(null);
  const [weatherRisk, setWeatherRisk] = useState<WeatherRisk | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Get recommendations based on soil and season
    const seasonData = seedDatabase[formData.season] || seedDatabase.kharif;
    const soilData = seasonData[formData.soilType] || seasonData.loam;
    
    // Adjust scores based on pH and moisture
    const ph = parseFloat(formData.soilPh) || 7;
    const moisture = parseInt(formData.soilMoisture) || 50;
    
    const adjustedRecommendations = soilData.map(seed => {
      let scoreAdjustment = 0;
      
      // pH adjustment (optimal range 6-7.5)
      if (ph < 5.5 || ph > 8) scoreAdjustment -= 10;
      else if (ph >= 6 && ph <= 7.5) scoreAdjustment += 3;
      
      // Moisture adjustment
      if (seed.waterNeeds === "High" && moisture < 30) scoreAdjustment -= 8;
      if (seed.waterNeeds === "Low" && moisture > 70) scoreAdjustment -= 5;
      
      return {
        ...seed,
        suitabilityScore: Math.min(100, Math.max(60, seed.suitabilityScore + scoreAdjustment))
      };
    });

    setRecommendations(adjustedRecommendations.sort((a, b) => b.suitabilityScore - a.suitabilityScore));
    
    // Set weather risk based on season
    const risks: Record<string, WeatherRisk> = {
      kharif: { level: "medium", message: "Monsoon season - watch for excess rainfall and flooding. Ensure proper drainage." },
      rabi: { level: "low", message: "Winter season - favorable conditions. Monitor for frost in northern regions." },
      zaid: { level: "high", message: "Summer season - high temperatures expected. Ensure adequate irrigation and mulching." },
    };
    setWeatherRisk(risks[formData.season] || risks.kharif);
    
    setIsLoading(false);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low": return "bg-success/20 text-success border-success/30";
      case "medium": return "bg-accent/20 text-secondary border-accent/30";
      case "high": return "bg-destructive/20 text-destructive border-destructive/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-primary";
    if (score >= 70) return "text-accent";
    return "text-secondary";
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sprout className="w-4 h-4" />
            <span>Smart Seed Finder</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Find Your Perfect Seeds
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Enter your soil details and we'll recommend the best seeds for your farm
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Form */}
            <div className="card-farm p-6 md:p-8 h-fit">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                Enter Farm Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Soil Type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Soil Type (मिट्टी का प्रकार) *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.soilType}
                      onChange={(e) => setFormData({...formData, soilType: e.target.value})}
                      className="w-full h-14 px-4 rounded-xl border-2 border-border bg-card text-foreground text-lg appearance-none cursor-pointer focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select soil type...</option>
                      {soilTypes.map(soil => (
                        <option key={soil.value} value={soil.value}>{soil.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Soil pH */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Soil pH Level (मिट्टी का पीएच)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      min="4"
                      max="10"
                      placeholder="e.g., 6.5 (Range: 4-10)"
                      value={formData.soilPh}
                      onChange={(e) => setFormData({...formData, soilPh: e.target.value})}
                      className="w-full h-14 px-4 rounded-xl border-2 border-border bg-card text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <Beaker className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Leave empty if unknown - we'll use average value</p>
                </div>

                {/* Soil Moisture */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Soil Moisture Level (नमी का स्तर) - {formData.soilMoisture || 50}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.soilMoisture || 50}
                    onChange={(e) => setFormData({...formData, soilMoisture: e.target.value})}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer accent-primary bg-muted"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Dry (सूखा)</span>
                    <span>Moderate (मध्यम)</span>
                    <span>Wet (गीला)</span>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Location / District (स्थान)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g., Pune, Maharashtra"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full h-14 px-4 pr-12 rounded-xl border-2 border-border bg-card text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Season */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Growing Season (मौसम) *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.season}
                      onChange={(e) => setFormData({...formData, season: e.target.value})}
                      className="w-full h-14 px-4 rounded-xl border-2 border-border bg-card text-foreground text-lg appearance-none cursor-pointer focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select season...</option>
                      {seasons.map(season => (
                        <option key={season.value} value={season.value}>{season.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Finding Best Seeds...
                    </>
                  ) : (
                    <>
                      <Sprout className="w-5 h-5" />
                      Get Seed Recommendations
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {!recommendations && !isLoading && (
                <div className="card-farm p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <Sprout className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Enter Your Details</h3>
                  <p className="text-muted-foreground">
                    Fill in the form on the left to get personalized seed recommendations for your farm.
                  </p>
                </div>
              )}

              {isLoading && (
                <div className="card-farm p-8 text-center">
                  <Loader2 className="w-16 h-16 animate-spin text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Analyzing Your Farm...</h3>
                  <p className="text-muted-foreground">
                    We're finding the best seeds based on your soil type and weather conditions.
                  </p>
                </div>
              )}

              {recommendations && !isLoading && (
                <>
                  {/* Weather Risk Alert */}
                  {weatherRisk && (
                    <div className={`p-4 rounded-xl border-2 flex items-start gap-3 ${getRiskColor(weatherRisk.level)}`}>
                      <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold capitalize">Weather Risk: {weatherRisk.level}</p>
                        <p className="text-sm opacity-90">{weatherRisk.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Recommendations */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      Top 3 Recommended Seeds
                    </h3>
                    
                    {recommendations.map((seed, index) => (
                      <div key={seed.variety} className="card-farm p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                Best Match
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-foreground">{seed.name}</h4>
                            <p className="text-muted-foreground">{seed.variety}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Suitability</p>
                            <p className={`text-3xl font-bold ${getScoreColor(seed.suitabilityScore)}`}>
                              {seed.suitabilityScore}%
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Yield Potential</p>
                              <p className="text-sm font-semibold text-foreground">{seed.yieldPotential}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Planting Window</p>
                              <p className="text-sm font-semibold text-foreground">{seed.plantingWindow}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Droplets className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Water Needs</p>
                              <p className="text-sm font-semibold text-foreground">{seed.waterNeeds}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {seed.features.map(feature => (
                            <span 
                              key={feature}
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
