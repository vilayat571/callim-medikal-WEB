import { useState } from "react";

const contactInfo = [
  { icon: "📍", label: "Bakı Ofisi", value: "Bakı, Azərbaycan", href: "#" },
  { icon: "📍", label: "İzmir Ofisi", value: "İzmir, Türkiyə", href: "#" },
  { icon: "📍", label: "İstanbul Ofisi", value: "İstanbul, Türkiyə", href: "#" },
  { icon: "📞", label: "Telefon", value: "+994 XX XXX XX XX", href: "tel:+994" },
  { icon: "✉️", label: "E-poçt", value: "info@callimmedikal.az", href: "mailto:info@callimmedikal.az" },
  { icon: "🌐", label: "Veb sayt", value: "www.callimmedical.az", href: "http://www.callimmedical.az" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass text-[#00D4FF] text-sm font-semibold px-4 py-2 rounded-full mb-5">
            📞 Bizimlə əlaqə
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Pulsuz məsləhət alın</h2>
          <p className="text-white/70 max-w-xl mx-auto">Bakı, İzmir və ya İstanbul ofislərimizdən birindəki mütəxəssisimiz sizinlə əlaqə saxlayacaq</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left info */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map(info => (
                <a key={info.label} href={info.href}
                  className="glass flex items-center gap-3 p-4 rounded-2xl text-white hover:bg-white/15 transition-all">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <div className="text-white/60 text-xs font-medium">{info.label}</div>
                    <div className="text-white font-semibold text-sm">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Ambulance highlight */}
            <div className="bg-red-600/90 rounded-3xl p-6 text-white border border-red-400/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🚑</span>
                <div>
                  <h3 className="font-black text-xl">24/7 Ambulans Xidməti</h3>
                  <p className="text-red-200 text-sm">Fövqəladə hallarda dərhal kömək</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Bakı ərazisindəki bütün rayonlara intensiv baxım avadanlıqlı ambulansımız ilə peşəkar tibbi heyətimiz ilə xidmət edirik.
              </p>
              <a href="tel:+994" className="inline-flex items-center gap-2 bg-white text-red-600 font-black px-6 py-3 rounded-xl text-sm hover:shadow-lg transition-all">
                📞 İndi zəng edin
              </a>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-5">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-3">Sosial media</p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "WhatsApp"].map(s => (
                  <button key={s} className="bg-white/10 hover:bg-[#00B4E6] text-white text-sm px-4 py-2.5 rounded-xl transition-all font-semibold">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-3xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center">
                <div className="w-20 h-20 rounded-full bg-green-400/20 border-2 border-green-400 flex items-center justify-center text-4xl mb-6 animate-float">✅</div>
                <h3 className="text-white font-black text-2xl mb-2">Təşəkkürlər!</h3>
                <p className="text-white/70 text-sm">Müraciətiniz qəbul edildi. Mütəxəssisimiz tezliklə sizinlə əlaqə saxlayacaq.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white font-black text-xl mb-6">Müraciət formu</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-xs font-semibold block mb-2 uppercase tracking-wide">Ad Soyad</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Adınız" required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-semibold block mb-2 uppercase tracking-wide">Telefon</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+994 XX XXX XX XX" required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-white/70 text-xs font-semibold block mb-2 uppercase tracking-wide">E-poçt</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] transition-colors text-sm" />
                </div>
                <div>
                  <label className="text-white/70 text-xs font-semibold block mb-2 uppercase tracking-wide">Xidmət seçin</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors text-sm">
                    <option value="" className="text-slate-800">Seçin...</option>
                    <option value="sleep" className="text-slate-800">😴 Sleep Care — Yuxu</option>
                    <option value="breath" className="text-slate-800">🫁 Breath Care — Solunum</option>
                    <option value="oxygen" className="text-slate-800">💚 Oxygen Care</option>
                    <option value="ortho" className="text-slate-800">🩴 Ortopedik</option>
                    <option value="ambulance" className="text-slate-800">🚑 Ambulans</option>
                    <option value="service" className="text-slate-800">🔧 Texniki Servis</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/70 text-xs font-semibold block mb-2 uppercase tracking-wide">Mesajınız</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Sualınızı yazın..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] transition-colors text-sm resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-red-600/30 text-base">
                  Müraciət et →
                </button>
                <p className="text-white/40 text-xs text-center">Məlumatlarınız tam gizli saxlanılır</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
