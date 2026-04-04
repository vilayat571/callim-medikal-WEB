export default function Hero() {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-red-600/10 blur-2xl pointer-events-none" />
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)", backgroundSize: "44px 44px" }} />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-[#00D4FF] text-sm font-semibold mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            Bakı · İzmir · İstanbul — Üç şəhər, bir güvən
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up delay-100">
            Nəfəsiniz
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #ff6b6b, #ee2d2d)" }}>
              Nəfəsimizdir!
            </span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-8 animate-fade-up delay-200 max-w-lg">
            Çallım Tibbi — Yuxu, solunum, ortopedik və ambulans xidmətləri sahəsindəki lider. Alman və Amerika texnologiyasının Azərbaycandakı rəsmi distribütoru.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <a href="#devices" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-600/30 text-center">
              Cihazlarımıza baxın
            </a>
            <a href="#contact" className="glass text-white hover:bg-white/15 font-semibold px-8 py-4 rounded-2xl text-base transition-all text-center border border-white/20">
              Pulsuz məsləhət
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-up delay-400">
            {[
              { value: "10+", label: "İl təcrübə" },
              { value: "3", label: "Şəhər ofisi" },
              { value: "24/7", label: "Ambulans & Dəstək" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-white/60 text-xs mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Office tags */}
          <div className="flex flex-wrap gap-2 mt-6 animate-fade-up delay-500">
            {["🇦🇿 Bakı", "🇹🇷 İzmir", "🇹🇷 İstanbul"].map(o => (
              <span key={o} className="glass text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20">{o}</span>
            ))}
          </div>
        </div>

        {/* Right — product card */}
        <div className="flex items-center justify-center animate-fade-up delay-300">
          <div className="relative">
            <div className="glass rounded-3xl p-8 w-80 animate-float shadow-2xl shadow-black/30">
              <div className="flex items-center gap-3 mb-5">
              </div>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Yuxu apnesi, solunum çatışmazlığı, ortopedik bərpa və fövqəladə ambulans xidməti — hamısı bir damın altında.
              </p>

              {/* Service pills */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: "😴", label: "Sleep Care" },
                  { icon: "🫁", label: "Breath Care" },
                  { icon: "🩴", label: "Ortopedik" },
                  { icon: "🚑", label: "Ambulans" },
                ].map(s => (
                  <div key={s.label} className="bg-white/10 rounded-xl p-3 flex items-center gap-2">
                    <span className="text-lg">{s.icon}</span>
                    <span className="text-white text-xs font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Brands */}
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-white/50 text-xs mb-1">Rəsmi Distribütor</p>
                <p className="text-[#00D4FF] font-bold text-sm">Löwenstein · Sapio Life · Prisma</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 text-white text-xs font-bold shadow-lg border border-white/20">
              🏆 Sertifikatlı Texniki Servis
            </div>
            <div className="absolute -bottom-4 -left-4 bg-red-600 rounded-2xl px-4 py-2 text-white text-xs font-bold shadow-lg">
              🚑 24/7 Ambulans
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 L0 80 Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}
