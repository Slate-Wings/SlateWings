import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { PRODUCTS } from "../data";
import { ProductCard } from "./ProductCard";
import { CategoryRow } from "./CategoryRow";

interface ProductGridProps {
  onViewProduct: (id: string) => void;
}

export function ProductGrid({ onViewProduct }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filtered = useMemo(() => {
    let items = [...PRODUCTS];
    if (selectedCategory !== "all") {
      items = items.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (sortBy === "popular") {
      items.sort((a, b) => b.reviews - a.reviews);
    } else if (sortBy === "rating") {
      items.sort((a, b) => b.rating - a.rating);
    }
    return items;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="bg-[#F8FAFC]">
      <CategoryRow selectedCategory={selectedCategory} onSelect={setSelectedCategory} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search products, tags, categories…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontFamily: "Inter, sans-serif" }}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/20 transition-all"
            />
          </div>
          <div className="relative">
            <SlidersHorizontal size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              className="pl-9 pr-8 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-[#1E293B] appearance-none focus:outline-none focus:border-[#3B82F6] cursor-pointer"
            >
              <option value="latest">Latest</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-sm text-[#64748B]">
            Showing <span className="text-[#1E293B]">{filtered.length}</span> products
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onView={onViewProduct} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-xl text-[#1E293B] mb-2">
              No products found
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif" }} className="text-[#64748B]">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
