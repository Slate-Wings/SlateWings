import { motion } from "motion/react";
import { Layers, Award, Zap, Globe } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Layers, value: "500+", label: "Products Created", color: "#3B82F6" },
    { icon: Award, value: "2,000+", label: "Happy Customers", color: "#10B981" },
    { icon: Zap, value: "99.2%", label: "Print Accuracy", color: "#06B6D4" },
    { icon: Globe, value: "15+", label: "Material Options", color: "#F59E0B" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                className="text-sm text-[#3B82F6] uppercase tracking-widest"
              >
                Our Story
              </span>
              <h2
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.03em" }}
                className="text-4xl md:text-5xl text-[#1E293B] mt-3 mb-6 leading-tight"
              >
                Crafting the Future,
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent"> One Layer</span>
                {" "}at a Time
              </h2>
              <p
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                className="text-[#64748B] text-lg leading-relaxed mb-6"
              >
                SlateWings was born from a passion for transforming digital imagination into tangible reality. We combine cutting-edge 3D printing technology with meticulous craftsmanship to deliver products that exceed expectations.
              </p>
              <p
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                className="text-[#64748B] leading-relaxed mb-10"
              >
                Every product we create goes through rigorous quality checks to ensure precision, durability, and beauty. From gaming miniatures to home decor, we bring your ideas to life with unmatched detail.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, value, label, color }) => (
                  <div
                    key={label}
                    className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-200"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div
                      style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
                      className="text-2xl text-[#1E293B]"
                    >
                      {value}
                    </div>
                    <div
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                      className="text-sm text-[#64748B] mt-0.5"
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
              <img
                src="https://images.unsplash.com/photo-1772452859015-37647ec83ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80"
                alt="SlateWings 3D printing studio"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <div>
                  <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }} className="text-[#1E293B] text-sm">
                    FDM & SLA
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif" }} className="text-xs text-[#64748B]">
                    Dual technology
                  </div>
                </div>
              </div>
            </div>
            {/* Second floating badge */}
            <div className="absolute -top-6 -right-6 bg-[#1E293B] rounded-2xl p-4 shadow-xl">
              <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }} className="text-white text-xl">
                ★ 4.9
              </div>
              <div style={{ fontFamily: "Inter, sans-serif" }} className="text-xs text-slate-400">
                Average Rating
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
