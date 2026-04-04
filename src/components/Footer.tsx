export default function Footer() {
  return (
    <footer className="bg-[#001830] text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <img src="/logo.png" alt="Çallım Tibbi" className="h-14 w-auto mb-4 opacity-95" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Yuxu, solunum, ortopedik xidmətlər və ambulans — Bakı, İzmir, İstanbul ofisləri ilə tam əhatə.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["🇦🇿 Bakı", "🇹🇷 İzmir", "🇹🇷 İstanbul"].map(o => (
                <span key={o} className="bg-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">{o}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">Xidmətlər</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["😴 Sleep Care", "🫁 Breath Care", "💚 Oxygen Care", "🩴 Ortopedik", "🚑 Ambulans", "🔧 Texniki Servis"].map(s => (
                <li key={s}><a href="#services" className="hover:text-[#00D4FF] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">Əlaqə</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>📞 +994 XX XXX XX XX</li>
              <li>✉️ info@callimmedical.az</li>
              <li>🌐 www.callimmedical.az</li>
              <li>🕐 B.E – C: 09:00–18:00</li>
              <li className="text-red-400 font-semibold">🚑 Ambulans: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2024 Çallım Tibbi Sağlamlıq Xidmətləri. Bütün hüquqlar qorunur.</p>
          <div className="flex items-center gap-3 text-white/30 text-xs">
            <span>🇩🇪 Löwenstein Medical</span>
            <span>·</span>
            <span>Sapio Life</span>
            <span>·</span>
            <span>Prisma</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
