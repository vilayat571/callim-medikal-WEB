const symptoms = [
  "Səhərlər yuxudan yorğun oyanırsınız?",
  "Gün ərzində həddindən artıq yuxulu hiss edirsiniz?",
  "Yuxu zamanı nəfəsinizin dayandığını yaxınlarınız müşahidə edib?",
  "Diqqətiniz azalıb, konsentrasiyanız zəiflib?",
  "Güclü xoruldayırsınız?",
  "Çəki artımı problemin var?",
  "Enerjiniz və motivasiyanız azalıb?",
];

const risks = [
  { label: "Yüksək təzyiq", icon: "❤️" },
  { label: "Ürək çatışmazlığı", icon: "💔" },
  { label: "Depressiya", icon: "🧠" },
  { label: "İflic", icon: "⚠️" },
  { label: "Tip 2 diabet", icon: "🩸" },
  { label: "Nizamsız ürək", icon: "📉" },
  { label: "Piylənmə", icon: "⚖️" },
  { label: "Ürək tutması", icon: "🚨" },
];

export default function Apnea() {
  return (
    <section id="apnea" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-5">
            😴 Yuxu Apnesi
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#003A66] mb-4">
            Sizdə yuxu apnesi ola bilər mi?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Aşağıdakı suallardan <span className="text-[#0077CC] font-bold">hər hansı birinə BƏLİ</span> deyirsinizsə, bizə müraciət edin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-[#003A66] to-[#0077CC] rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🔍</span> Simptomlar
            </h3>
            <ul className="space-y-4">
              {symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00D4FF]/20 border border-[#00D4FF]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#00D4FF] text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-[#f8fafc] rounded-3xl p-7 border border-slate-100 flex-1">
              <h3 className="text-[#003A66] font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Müalicəsiz risklər
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {risks.map(r => (
                  <div key={r.label} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-3 card-hover">
                    <span className="text-xl">{r.icon}</span>
                    <span className="text-slate-700 text-sm font-medium">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-3xl p-7 text-white">
              <h3 className="font-black text-xl mb-2">🏥 Yuxu Laboratoriyası — Bakı</h3>
              <p className="text-white/85 text-sm leading-relaxed mb-5">
                Çallım Tibbi-nin müasir yuxu laboratoriyasında gecəlik PSG (polisomnografiya) testinizi keçirin. Löwenstein Scala & Sonata cihazları ilə dəqiq diaqnostika.
              </p>
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-white text-red-600 font-black px-6 py-3 rounded-xl text-sm hover:shadow-lg transition-all hover:scale-105">
                Test üçün müraciət et →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
