import { useState, useEffect } from "react";

const navLinks = [
  { label: "Ana Səhifə", href: "#home" },
  { label: "Haqqımızda", href: "#about" },
  { label: "Xidmətlər", href: "#services" },
  { label: "Cihazlarımız", href: "#devices" },
  { label: "Yuxu Apnesi", href: "#apnea" },
  { label: "Əlaqə", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur shadow-lg shadow-black/20 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl relative bottom-14 mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Çallım Tibbi" className="xl:w-48 lg:w-48 md:w-40 w-36 " />
        </div>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-white/85 hover:text-[#00D4FF] text-sm font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a href="tel:+994" className="hidden md:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/30">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          Zəng edin
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col" style={{ background: "rgba(0, 24, 48, 0.98)", backdropFilter: "blur(24px)" }}>
          {/* Header row inside overlay */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <img src="/logo.png" alt="Çallım Tibbi" className="xl:w-48 lg:w-48 md:w-40 sm:w-36" />
            <button onClick={() => setMenuOpen(false)} className="text-white p-2">
              <div className="w-6 h-0.5 bg-white rotate-45 translate-y-0.5" />
              <div className="w-6 h-0.5 bg-white -rotate-45" />
            </button>
          </div>

          {/* Links centered */}
          <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-[#00D4FF] text-2xl font-bold transition-colors tracking-wide"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-6 py-8 border-t border-white/10">
            <a
              href="tel:+994"
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black px-6 py-4 rounded-2xl text-lg w-full transition-all"
            >
              🚑 Zəng edin
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
