import { useState } from "react";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, Linkedin, Send } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactItems = [
    { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
    { icon: Mail, label: "Email", value: "hello@slatewings.in", href: "mailto:hello@slatewings.in" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999" },
  ];

  const socials = [
    { icon: Instagram, label: "Instagram", color: "#E1306C", href: "#" },
    { icon: Facebook, label: "Facebook", color: "#1877F2", href: "#" },
    { icon: Youtube, label: "YouTube", color: "#FF0000", href: "#" },
    { icon: Linkedin, label: "LinkedIn", color: "#0A66C2", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            className="text-sm text-[#3B82F6] uppercase tracking-widest"
          >
            Get In Touch
          </span>
          <h2
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.03em" }}
            className="text-4xl text-[#1E293B] mt-3"
          >
            We'd Love to Hear From You
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact details */}
          <div>
            <h3
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
              className="text-xl text-[#1E293B] mb-6"
            >
              Reach Us Directly
            </h3>

            <div className="flex flex-col gap-4 mb-10">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#3B82F6]/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center group-hover:bg-[#3B82F6]/20 transition-colors">
                    <Icon size={20} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-xs text-[#64748B] uppercase tracking-wide">
                      {label}
                    </div>
                    <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }} className="text-[#1E293B]">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <h3
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
              className="text-base text-[#1E293B] mb-4"
            >
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, color, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                  style={{ color }}
                  title={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100">
            <h3
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
              className="text-xl text-[#1E293B] mb-6"
            >
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="block text-sm text-[#64748B] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Arjun Mehta"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/20 transition-all"
                />
              </div>
              <div>
                <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="block text-sm text-[#64748B] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="arjun@example.com"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/20 transition-all"
                />
              </div>
              <div>
                <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="block text-sm text-[#64748B] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="I'm interested in a custom order…"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                {sent ? "✓ Message Sent!" : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
