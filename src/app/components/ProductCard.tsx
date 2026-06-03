import { useState } from "react";
import { Star, Eye, ExternalLink, ShoppingCart } from "lucide-react";
import type { Product } from "../data";

interface ProductCardProps {
  product: Product;
  onView: (id: string) => void;
}

const PLATFORM_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  amazon: { label: "Amazon", color: "#FF9900", bg: "#FFF8ED" },
  etsy: { label: "Etsy", color: "#F56400", bg: "#FFF4EE" },
  flipkart: { label: "Flipkart", color: "#2874F0", bg: "#EEF4FF" },
};

const CATEGORY_COLORS: Record<string, { text: string; bg: string }> = {
  "miniatures": { text: "#7C3AED", bg: "#F5F3FF" },
  "gaming": { text: "#DC2626", bg: "#FEF2F2" },
  "desk": { text: "#0891B2", bg: "#ECFEFF" },
  "home-decor": { text: "#059669", bg: "#ECFDF5" },
  "functional": { text: "#D97706", bg: "#FFFBEB" },
  "tools": { text: "#4B5563", bg: "#F9FAFB" },
  "custom": { text: "#BE185D", bg: "#FDF2F8" },
  "gifts": { text: "#EA580C", bg: "#FFF7ED" },
};

export function ProductCard({ product, onView }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const catColor = CATEGORY_COLORS[product.category] ?? { text: "#3B82F6", bg: "#EFF6FF" };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-white rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer ${
        hovered
          ? "border-[#3B82F6]/40 shadow-xl shadow-blue-500/10 -translate-y-1"
          : "border-slate-200 shadow-sm"
      }`}
      style={{ boxShadow: hovered ? "0 0 0 1px rgba(59,130,246,0.3), 0 20px 40px rgba(59,130,246,0.1)" : undefined }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`}
        />
        {/* Category badge */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            color: catColor.text,
            backgroundColor: catColor.bg,
          }}
          className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full"
        >
          {product.category.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </span>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-[#1E293B]/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => onView(product.id)}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/90 hover:bg-white text-[#1E293B] rounded-xl text-sm transition-all"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            <Eye size={14} /> Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}
          className="text-[#1E293B] text-base mb-1 line-clamp-1"
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}
              />
            ))}
          </div>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-xs text-[#64748B]">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Description */}
        <p
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          className="text-[#64748B] text-sm line-clamp-2 mb-3"
        >
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Platform icons */}
        <div className="flex items-center gap-1.5 mb-4">
          {product.platforms.map((p) => {
            const plat = PLATFORM_LABELS[p];
            return (
              <span
                key={p}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "10px",
                  color: plat.color,
                  backgroundColor: plat.bg,
                }}
                className="px-2 py-0.5 rounded-full"
              >
                {plat.label}
              </span>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onView(product.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-slate-200 hover:border-[#3B82F6] text-[#1E293B] hover:text-[#3B82F6] rounded-xl text-sm transition-all duration-200"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            <Eye size={13} /> View
          </button>
          <button
            onClick={() => onView(product.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl text-sm transition-all duration-200 shadow-md shadow-blue-500/20"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            <ShoppingCart size={13} /> Details
          </button>
        </div>
      </div>
    </div>
  );
}
