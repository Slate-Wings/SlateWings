import { useState } from "react";
import { motion } from "motion/react";
import {
  Star, ChevronLeft, ChevronRight, MessageCircle, Mail, ExternalLink,
  Shield, Zap, Weight, Sparkles, Leaf, ArrowLeft
} from "lucide-react";
import { PRODUCTS } from "../data";
import { ProductCard } from "./ProductCard";

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
  onViewProduct: (id: string) => void;
}

const PLATFORM_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  amazon: { label: "Amazon", color: "#FF9900", bg: "#FFF8ED" },
  etsy: { label: "Etsy", color: "#F56400", bg: "#FFF4EE" },
  flipkart: { label: "Flipkart", color: "#2874F0", bg: "#EEF4FF" },
};

const FEATURES = [
  { icon: Shield, title: "High Durability", desc: "Engineered for long-lasting performance" },
  { icon: Zap, title: "Precision Printing", desc: "Layer accuracy down to 0.1mm" },
  { icon: Weight, title: "Lightweight Design", desc: "Optimized for weight without compromise" },
  { icon: Sparkles, title: "Premium Finish", desc: "Post-processed for a flawless surface" },
  { icon: Leaf, title: "Eco-Friendly", desc: "Made from biodegradable PLA materials" },
];

const TABS = ["Description", "Specifications", "Materials", "Usage Instructions", "FAQs"];

const FAQS = [
  { q: "Can I customize the color?", a: "Yes! All our products can be customized in various colors. Contact us via WhatsApp or email to discuss your requirements." },
  { q: "What is the print quality?", a: "We use professional FDM and SLA printers with layer accuracy of 0.1mm to 0.2mm for FDM and as low as 0.025mm for resin prints." },
  { q: "How long does delivery take?", a: "Standard delivery takes 5–7 business days. Express options are available on select marketplaces." },
  { q: "Do you offer bulk orders?", a: "Absolutely! We offer discounts for bulk orders. Contact us directly for a custom quote." },
];

export function ProductDetail({ productId, onBack, onViewProduct }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.id === productId);
  const related = PRODUCTS.filter((p) => p.id !== productId && p.category === product?.category).slice(0, 4);

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#64748B]">Product not found.</p>
      </div>
    );
  }

  const images = product.images;

  const prevImage = () => setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () => setActiveImage((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#64748B] hover:text-[#1E293B] transition-colors mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          <ArrowLeft size={16} /> Back to Products
        </button>
      </div>

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Image Gallery */}
          <div>
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100 aspect-[4/3] mb-4">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center shadow-md transition-all"
              >
                <ChevronLeft size={18} className="text-[#1E293B]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center shadow-md transition-all"
              >
                <ChevronRight size={18} className="text-[#1E293B]" />
              </button>
              {/* Counter */}
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#1E293B]/70 backdrop-blur rounded-full text-white text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                {activeImage + 1} / {images.length}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === idx ? "border-[#3B82F6] shadow-md" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col gap-5">
            {/* Category + tags */}
            <div className="flex flex-wrap gap-2">
              <span
                className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                {product.category.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-[#64748B] rounded-full text-sm"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.03em" }}
              className="text-3xl md:text-4xl text-[#1E293B] leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"} />
                ))}
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="text-[#1E293B]">
                {product.rating}
              </span>
              <span style={{ fontFamily: "Inter, sans-serif" }} className="text-[#64748B] text-sm">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }} className="text-[#64748B] leading-relaxed">
              {product.description} Our premium 3D printing process ensures every detail is captured with precision. Each piece is carefully post-processed and quality-checked before shipping.
            </p>

            {/* Spec pills */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Material", value: product.material },
                { label: "Dimensions", value: product.dimensions },
                { label: "Technology", value: product.printTech },
                { label: "Colors", value: product.colorOptions },
              ].map(({ label, value }) => (
                <div key={label} className="p-3 bg-white rounded-xl border border-slate-100">
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-xs text-[#64748B] uppercase tracking-wide">
                    {label}
                  </div>
                  <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-sm text-[#1E293B] mt-0.5">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <button
              className="w-full py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              <ExternalLink size={18} /> Buy on Marketplace
            </button>
            <button
              className="w-full py-3.5 border-2 border-slate-200 hover:border-[#3B82F6] text-[#1E293B] hover:text-[#3B82F6] rounded-xl transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              <MessageCircle size={16} /> Contact for Customization
            </button>

            {/* Marketplace buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-sm text-[#64748B] self-center">
                Available on:
              </span>
              {product.platforms.map((p) => {
                const plat = PLATFORM_CONFIG[p];
                return (
                  <button
                    key={p}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ color: plat.color, backgroundColor: plat.bg, borderColor: `${plat.color}30`, fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "13px" }}
                  >
                    <ExternalLink size={12} /> {plat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tab buttons */}
          <div className="flex overflow-x-auto border-b border-slate-100">
            {TABS.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                className={`flex-shrink-0 px-6 py-4 text-sm relative transition-colors ${
                  activeTab === idx ? "text-[#3B82F6]" : "text-[#64748B] hover:text-[#1E293B]"
                }`}
              >
                {tab}
                {activeTab === idx && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B82F6] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="py-10">
            {activeTab === 0 && (
              <div className="max-w-3xl">
                <p style={{ fontFamily: "Inter, sans-serif" }} className="text-[#64748B] leading-relaxed mb-4">
                  The <strong className="text-[#1E293B]">{product.name}</strong> is designed and manufactured using state-of-the-art 3D printing technology at SlateWings studio. Every layer is precisely deposited to ensure structural integrity and visual appeal.
                </p>
                <p style={{ fontFamily: "Inter, sans-serif" }} className="text-[#64748B] leading-relaxed mb-4">
                  This product is ideal for enthusiasts, collectors, and anyone who appreciates precision craftsmanship. The carefully selected {product.material} material provides the perfect balance of strength, flexibility, and finish quality.
                </p>
                <ul className="list-none flex flex-col gap-2">
                  {["Premium grade filament sourced from certified suppliers", "Post-processing includes sanding and optional coating", "QC checked before packaging", "Ships in secure eco-friendly packaging"].map((item) => (
                    <li key={item} style={{ fontFamily: "Inter, sans-serif" }} className="flex items-center gap-2 text-[#64748B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 1 && (
              <div className="max-w-2xl">
                <table className="w-full">
                  <tbody>
                    {[
                      ["Material", product.material],
                      ["Dimensions", product.dimensions],
                      ["Print Technology", product.printTech],
                      ["Color Options", product.colorOptions],
                      ["Layer Resolution", "0.1 – 0.2 mm (FDM) / 0.025 mm (Resin)"],
                      ["Surface Finish", "Post-processed, smooth"],
                      ["Weight", "Varies by size"],
                    ].map(([key, val]) => (
                      <tr key={key} className="border-b border-slate-100">
                        <td style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="py-3 pr-8 text-[#64748B] text-sm w-40">
                          {key}
                        </td>
                        <td style={{ fontFamily: "Inter, sans-serif" }} className="py-3 text-[#1E293B] text-sm">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 2 && (
              <div className="max-w-3xl">
                <p style={{ fontFamily: "Inter, sans-serif" }} className="text-[#64748B] leading-relaxed mb-6">
                  We carefully select materials to ensure quality, safety, and environmental responsibility.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["PLA (Polylactic Acid)", "PETG", "Resin (SLA)"].map((mat) => (
                    <div key={mat} className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-100">
                      <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-[#1E293B] mb-2">{mat}</div>
                      <p style={{ fontFamily: "Inter, sans-serif" }} className="text-xs text-[#64748B]">
                        {mat === "PLA (Polylactic Acid)" ? "Biodegradable, strong, perfect for decorative prints." : mat === "PETG" ? "Durable, flexible, ideal for functional parts." : "Ultra-high detail, smooth surface finish."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="max-w-3xl">
                <ol className="flex flex-col gap-4">
                  {[
                    "Inspect the product upon arrival for any shipping damage.",
                    "Clean with a soft dry cloth — avoid harsh chemicals.",
                    "Keep out of direct sunlight for extended periods.",
                    "PLA products are not suitable for temperatures above 60°C.",
                    "Handle miniatures gently to preserve fine details.",
                  ].map((step, i) => (
                    <li key={i} style={{ fontFamily: "Inter, sans-serif" }} className="flex gap-4 text-[#64748B]">
                      <span className="w-7 h-7 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex-shrink-0 flex items-center justify-center text-sm" style={{ fontWeight: 700 }}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {activeTab === 4 && (
              <div className="max-w-2xl flex flex-col gap-3">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="text-[#1E293B] text-sm">
                        {faq.q}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`text-[#64748B] transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-90" : ""}`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4">
                        <p style={{ fontFamily: "Inter, sans-serif" }} className="text-sm text-[#64748B] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          className="text-2xl text-[#1E293B] text-center mb-10"
        >
          Product Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 bg-white rounded-2xl border border-slate-100 text-center hover:border-[#06B6D4]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 flex items-center justify-center mx-auto mb-3 group-hover:from-[#3B82F6]/20 group-hover:to-[#06B6D4]/20 transition-all">
                <Icon size={22} className="text-[#3B82F6]" />
              </div>
              <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-sm text-[#1E293B] mb-1">
                {title}
              </div>
              <p style={{ fontFamily: "Inter, sans-serif" }} className="text-xs text-[#64748B] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="bg-[#F8FAFC] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
              className="text-2xl text-[#1E293B] mb-8"
            >
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} onView={onViewProduct} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom Order CTA */}
      <div className="bg-[#1E293B] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            className="text-sm text-[#06B6D4] uppercase tracking-widest"
          >
            Custom Orders
          </span>
          <h2
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.03em" }}
            className="text-3xl md:text-4xl text-white mt-3 mb-4"
          >
            Need a Custom Version?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }} className="text-slate-400 mb-8 max-w-xl mx-auto">
            We specialize in custom 3D prints. Send us your design or idea and we'll bring it to life with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a
              href="mailto:hello@slatewings.in"
              className="flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 rounded-xl transition-all"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
