import { CATEGORIES } from "../data";

interface CategoryRowProps {
  selectedCategory: string;
  onSelect: (id: string) => void;
}

export function CategoryRow({ selectedCategory, onSelect }: CategoryRowProps) {
  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <h2
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}
            className="text-2xl text-[#1E293B]"
          >
            Browse Categories
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif" }} className="text-[#64748B] mt-1">
            Find exactly what you're looking for
          </p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className={`group flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-[#1E293B] border-[#1E293B] shadow-lg shadow-slate-900/20"
                    : "bg-white border-slate-200 hover:border-[#3B82F6]/40 hover:shadow-md hover:shadow-cyan-500/10 hover:-translate-y-0.5"
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <div className="text-left">
                  <div
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    className={`text-sm whitespace-nowrap ${active ? "text-white" : "text-[#1E293B]"}`}
                  >
                    {cat.name}
                  </div>
                  <div
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                    className={`text-xs ${active ? "text-slate-300" : "text-[#64748B]"}`}
                  >
                    {cat.count} items
                  </div>
                </div>
                {active && (
                  <span className="ml-2 w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
