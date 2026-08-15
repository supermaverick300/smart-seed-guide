import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Sprout className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">Smart Seed</h3>
                <p className="text-sm opacity-70">Selector</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Helping farmers make better decisions with smart seed recommendations based on soil and weather data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/seed-recommendation" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Seed Finder
                </Link>
              </li>
              <li>
                <Link to="/weather" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Weather Dashboard
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Farmer Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-70" />
                <span className="text-sm opacity-80">+91 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-70" />
                <span className="text-sm opacity-80">help@smartseed.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 opacity-70 mt-0.5" />
                <span className="text-sm opacity-80">
                  Agricultural Extension Center,<br />
                  New Delhi, India
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-sm opacity-70">
              Subscribe to our YouTube for farming tips and tutorials.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm opacity-60">
            © 2024 Smart Seed Selector. Made with ❤️ for Indian Farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
