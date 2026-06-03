import { useState, useEffect } from "react";
import { Menu, X, Search, Instagram, MessageCircle } from "lucide-react";

interface NavbarProps {
  onNavigate: (page: string, productId?: string) => void;
  currentPage: string;
}

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "Products", page: "products" },
    { label: "Categories", page: "categories" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  const scrollToSection = (page: string) => {
    setMobileOpen(false);
    if (currentPage !== "home" && page !== "home") {
      onNavigate("home");
      setTimeout(() => {
        const el = document.getElementById(page);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    if (page === "home") {
      onNavigate("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(page);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1E293B]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 2V16M2 6L16 12M16 6L2 12" stroke="white" strokeWidth="1" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </div>
              <span
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
                className="text-white text-lg"
              >
                SlateWings
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => scrollToSection(link.page)}
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center gap-2">
              <button className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                <Search size={18} />
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-300 hover:text-pink-400 hover:bg-white/10 rounded-lg transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg text-sm transition-all shadow-lg shadow-emerald-500/20"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#1E293B] shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }} className="text-white text-lg">
              SlateWings
            </span>
            <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => scrollToSection(link.page)}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-slate-300 hover:text-pink-400 hover:bg-white/10 rounded-xl transition-all text-sm"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-xl text-sm"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
