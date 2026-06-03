import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { AboutSection } from "./components/AboutSection";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./components/ProductDetail";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

type Page = "home" | "product";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const navigate = (target: string, productId?: string) => {
    if (target === "home") {
      setPage("home");
      setSelectedProductId(null);
    }
  };

  const viewProduct = (id: string) => {
    setSelectedProductId(id);
    setPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setPage("home");
    setSelectedProductId(null);
    window.scrollTo({ top: 0 });
  };

  const scrollToProducts = () => {
    if (page !== "home") {
      setPage("home");
      setTimeout(() => {
        const el = document.getElementById("products");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("products");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (page !== "home") {
      setPage("home");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="min-h-screen bg-[#F8FAFC]"
    >
      <Navbar onNavigate={navigate} currentPage={page} />

      {page === "home" && (
        <>
          <Hero onExplore={scrollToProducts} onContact={scrollToContact} />
          <ProductGrid onViewProduct={viewProduct} />
          <div id="about">
            <AboutSection />
          </div>
          <Testimonials />
          <ContactSection />
          <Footer />
        </>
      )}

      {page === "product" && selectedProductId && (
        <ProductDetail
          productId={selectedProductId}
          onBack={goHome}
          onViewProduct={viewProduct}
        />
      )}

      {page === "product" && selectedProductId && <Footer />}

      <FloatingWhatsApp />
    </div>
  );
}
