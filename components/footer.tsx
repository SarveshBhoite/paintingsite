import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-forest text-pista-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-semibold text-pista-light tracking-wide">
                BrushCraft<span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="text-pista/70 leading-relaxed">
              Transforming spaces with premium painting services since 2005. 
              Quality craftsmanship you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-pista-light">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-pista/70 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-pista-light">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Interior Painting",
                "Exterior Painting",
                "Commercial Painting",
                "Texture Work",
                "Color Consultation"
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-pista/70 hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-pista-light">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="tel:+7620773294"
                  className="text-pista/70 hover:text-accent transition-colors"
                >
                  7620773294
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:pphomepaintingservices@gmail.com"
                  className="text-pista/70 hover:text-accent transition-colors"
                >
                  pphomepaintingservices@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-pista/70">
                  Santkrupa housing society, near Vinayak mens Parlour, Mhetre Wadi, Hanuman Nagar, Chikhali<br />
                  Pimpri-Chinchwad, Maharashtra 411062
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/share/1H3hUTX7WE/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pista/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/pphomepaintingservices?utm_source=qr&igsh=YmQ1N2w5NDBnYnJ2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pista/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://youtube.com/@pphomepaintingservices?si=anuJ6jzx1BBXWAio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pista/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-pista/20 mt-12 pt-8 text-center text-pista/60">
          <p>&copy; {new Date().getFullYear()} PP PaintingServices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
