import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, Mail, MapPin, MessageCircle, Send, 
  User, FileText, CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Our team will contact you within 24 hours.",
    });

    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I need help with seed recommendations for my farm.");
    window.open(`https://wa.me/911800123456?text=${message}`, '_blank');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Phone className="w-4 h-4" />
            <span>Contact & Support</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            We're Here to Help
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions? Our agriculture experts are ready to assist you
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-farm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Name (आपका नाम) *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full h-14 px-4 pr-12 rounded-xl border-2 border-border bg-card text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number (फोन नंबर) *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full h-14 px-4 pr-12 rounded-xl border-2 border-border bg-card text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Message (आपका संदेश) *
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-4 rounded-xl border-2 border-border bg-card text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="card-farm p-6 md:p-8 bg-[hsl(142_70%_45%)]/5">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-[hsl(142_70%_45%)]" />
                  Quick Help via WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get instant help from our team. Click below to start a WhatsApp chat.
                </p>
                <Button variant="whatsapp" onClick={handleWhatsApp} className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Expert Help */}
              <div className="card-farm p-6 md:p-8 bg-primary/5">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <User className="w-6 h-6 text-primary" />
                  Talk to Agriculture Expert
                </h3>
                <p className="text-muted-foreground mb-4">
                  Need detailed advice? Our experts can help with:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Soil testing guidance
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Crop disease identification
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Irrigation planning
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Seed variety selection
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Available:</strong> Mon-Sat, 9 AM - 6 PM
                </p>
              </div>

              {/* Contact Details */}
              <div className="card-farm p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Toll-Free Helpline</p>
                      <p className="text-muted-foreground">1800-XXX-XXXX</p>
                      <p className="text-sm text-muted-foreground">(Free for farmers)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email Support</p>
                      <p className="text-muted-foreground">help@smartseed.in</p>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Office Address</p>
                      <p className="text-muted-foreground">
                        Agricultural Extension Center<br />
                        Pusa Road, New Delhi - 110012
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
