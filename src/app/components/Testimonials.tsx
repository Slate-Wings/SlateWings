import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data";

export function Testimonials() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            className="text-sm text-[#3B82F6] uppercase tracking-widest"
          >
            Customer Love
          </span>
          <h2
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.03em" }}
            className="text-4xl text-[#1E293B] mt-3"
          >
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 4px 24px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-4xl text-[#3B82F6]/10 font-serif leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                className="text-[#1E293B] leading-relaxed mb-6"
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm bg-gradient-to-br from-[#3B82F6] to-[#06B6D4]"
                  style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-sm text-[#1E293B]">
                    {t.name}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif" }} className="text-xs text-[#64748B]">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
