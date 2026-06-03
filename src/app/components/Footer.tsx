import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";

export function Footer() {
  const quickLinks = ["Home", "Products", "Categories", "About", "Contact"];
  const categories = ["Home Decor", "Gaming Accessories", "Desk Organizers", "Miniatures", "Functional Prints", "Gift Items"];

  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 2V16M2 6L16 12M16 6L2 12" stroke="white" strokeWidth="1" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </div>
              <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }} className="text-lg">
                SlateWings
              </span>
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }} className="text-slate-400 text-sm leading-relaxed mb-5">
              Premium 3D printing studio crafting lifestyle, home decor, gaming, and creative products with precision.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Instagram, color: "#E1306C" },
                { Icon: Facebook, color: "#1877F2" },
                { Icon: Youtube, color: "#FF0000" },
                { Icon: Linkedin, color: "#0A66C2" },
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ color }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-sm uppercase tracking-widest text-slate-300 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                    className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-sm uppercase tracking-widest text-slate-300 mb-5">
              Categories
            </h4>
            <ul className="flex flex-col gap-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-sm uppercase tracking-widest text-slate-300 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { Icon: Phone, text: "+91 99999 99999" },
                { Icon: Mail, text: "hello@slatewings.in" },
                { Icon: MessageCircle, text: "WhatsApp Chat" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon size={15} className="text-[#06B6D4] flex-shrink-0" />
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }} className="text-sm text-slate-400">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }} className="text-xs text-slate-500">
            © 2024 SlateWings. All rights reserved.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-xs text-slate-400">
            Made with precision by{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              SlateWings
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
