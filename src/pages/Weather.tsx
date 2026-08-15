import { Layout } from "@/components/layout/Layout";
import { 
  CloudSun, CloudRain, Sun, Wind, Droplets, 
  Thermometer, AlertTriangle, TrendingUp, TrendingDown,
  Cloud, Umbrella
} from "lucide-react";

const weeklyForecast = [
  { day: "Today", date: "Dec 12", high: 28, low: 18, condition: "sunny", rain: 0, humidity: 45, icon: Sun },
  { day: "Fri", date: "Dec 13", high: 29, low: 17, condition: "partly-cloudy", rain: 10, humidity: 50, icon: CloudSun },
  { day: "Sat", date: "Dec 14", high: 27, low: 16, condition: "cloudy", rain: 30, humidity: 60, icon: Cloud },
  { day: "Sun", date: "Dec 15", high: 25, low: 15, condition: "rainy", rain: 70, humidity: 75, icon: CloudRain },
  { day: "Mon", date: "Dec 16", high: 24, low: 14, condition: "rainy", rain: 80, humidity: 80, icon: CloudRain },
  { day: "Tue", date: "Dec 17", high: 26, low: 15, condition: "partly-cloudy", rain: 20, humidity: 55, icon: CloudSun },
  { day: "Wed", date: "Dec 18", high: 28, low: 16, condition: "sunny", rain: 5, humidity: 45, icon: Sun },
];

const climateAlerts = [
  {
    level: "medium",
    title: "Rain Expected",
    message: "Heavy rainfall expected on Sunday and Monday. Plan irrigation accordingly and avoid sowing during these days.",
    icon: Umbrella,
  },
  {
    level: "low",
    title: "Good Sowing Window",
    message: "Tuesday to Thursday looks ideal for planting Rabi crops. Soil moisture will be optimal after the rain.",
    icon: TrendingUp,
  },
];

export default function Weather() {
  const getAlertColor = (level: string) => {
    switch (level) {
      case "low": return "bg-success/10 text-success border-success/20";
      case "medium": return "bg-accent/10 text-secondary border-accent/20";
      case "high": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getConditionBg = (condition: string) => {
    switch (condition) {
      case "sunny": return "bg-gradient-to-br from-sun/20 to-accent/10";
      case "partly-cloudy": return "bg-gradient-to-br from-sky/20 to-muted";
      case "cloudy": return "bg-muted";
      case "rainy": return "bg-gradient-to-br from-rain/20 to-muted";
      default: return "bg-muted";
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CloudSun className="w-4 h-4" />
            <span>Weather Dashboard</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            7-Day Weather Forecast
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Plan your farming activities with accurate weather predictions
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Current Weather */}
          <div className="card-farm p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-sun/30 to-accent/20 flex items-center justify-center">
                  <Sun className="w-14 h-14 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Weather • Delhi NCR</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-foreground">28°</span>
                    <span className="text-2xl text-muted-foreground">C</span>
                  </div>
                  <p className="text-lg text-muted-foreground">Clear & Sunny</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <Droplets className="w-6 h-6 mx-auto text-rain mb-2" />
                  <p className="text-2xl font-bold text-foreground">45%</p>
                  <p className="text-sm text-muted-foreground">Humidity</p>
                </div>
                <div className="text-center">
                  <Wind className="w-6 h-6 mx-auto text-sky mb-2" />
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">km/h Wind</p>
                </div>
                <div className="text-center">
                  <CloudRain className="w-6 h-6 mx-auto text-rain mb-2" />
                  <p className="text-2xl font-bold text-foreground">0%</p>
                  <p className="text-sm text-muted-foreground">Rain Chance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Climate Alerts */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-accent" />
              Climate Alerts for Farmers
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {climateAlerts.map((alert, index) => (
                <div 
                  key={index}
                  className={`p-5 rounded-2xl border-2 ${getAlertColor(alert.level)}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                      <alert.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">{alert.title}</p>
                      <p className="text-sm opacity-90">{alert.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7-Day Forecast */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7-Day Forecast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {weeklyForecast.map((day, index) => (
                <div 
                  key={index}
                  className={`card-farm p-4 text-center ${index === 0 ? 'ring-2 ring-primary' : ''}`}
                >
                  <p className="font-bold text-foreground">{day.day}</p>
                  <p className="text-sm text-muted-foreground mb-3">{day.date}</p>
                  
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center ${getConditionBg(day.condition)}`}>
                    <day.icon className="w-8 h-8 text-foreground" />
                  </div>

                  <div className="flex justify-center items-center gap-2 mb-2">
                    <span className="text-xl font-bold text-foreground">{day.high}°</span>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-muted-foreground">{day.low}°</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-sm text-rain">
                    <CloudRain className="w-4 h-4" />
                    <span>{day.rain}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rainfall Chart (Simplified) */}
          <div className="mt-8 card-farm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Rainfall Prediction</h2>
            <div className="space-y-4">
              {weeklyForecast.map((day, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-16 text-sm font-medium text-muted-foreground">{day.day}</span>
                  <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-rain to-sky transition-all duration-500"
                      style={{ width: `${day.rain}%` }}
                    />
                  </div>
                  <span className="w-12 text-sm font-semibold text-foreground text-right">{day.rain}%</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Weekly Average:</span>
                <span className="font-bold text-foreground">30% chance of rain</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
