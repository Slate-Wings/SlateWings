import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export function Hero({ onExplore, onContact }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E293B]">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Animated filament lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fil1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fil2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,200 Q400,100 800,300 T1600,200" stroke="url(#fil1)" strokeWidth="1.5" fill="none" />
        <path d="M0,400 Q300,300 700,500 T1600,350" stroke="url(#fil2)" strokeWidth="1" fill="none" />
        <path d="M200,0 Q400,300 350,600 T300,900" stroke="url(#fil1)" strokeWidth="1" fill="none" />
        <path d="M1200,0 Q1100,400 1300,600 T1200,900" stroke="url(#fil2)" strokeWidth="1" fill="none" />
      </svg>

      {/* 3D Printing visual — background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1772452858776-61b8b8990655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B]/60 via-transparent to-[#1E293B]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
          <span
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            className="text-sm text-[#06B6D4]"
          >
            Premium 3D Printing Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.03em" }}
          className="text-5xl md:text-7xl text-white mb-6 leading-none"
        >
          Creative Ideas,
          <br />
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
            Precision Printed
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}
          className="text-lg md:text-xl text-[#06B6D4]/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Premium 3D printed products for makers, gamers, collectors, and everyday innovators. Shop on your favorite marketplace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExplore}
            className="group flex items-center gap-2.5 px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            Explore Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onContact}
            className="flex items-center gap-2.5 px-8 py-4 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 rounded-xl transition-all duration-300"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            <MessageCircle size={18} />
            Contact Us
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { value: "500+", label: "Products" },
            { value: "2K+", label: "Happy Customers" },
            { value: "99.2%", label: "Print Accuracy" },
            { value: "15+", label: "Materials" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
                className="text-2xl text-white"
              >
                {stat.value}
              </div>
              <div
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                className="text-xs text-slate-400 mt-1"
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#06B6D4] animate-pulse" />
      </div>
    </section>
  );
}
