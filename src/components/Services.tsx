const serviceGroups = [
  {
    group: "😴 Sleep Care",
    color: "from-[#003A66] to-[#0077CC]",
    lightColor: "bg-[#E8F6FD]",
    textColor: "text-[#003A66]",
    desc: "Yuxu pozğunluğunun diaqnostikası və müalicəsi üçün hərtərəfli xidmət",
    items: [
      "PSG — Polisomnografiya",
      "Yuxu apnesi cihazları (CPAP/BiPAP/APAP)",
      "Ev yuxu testi (Poligraf Scala & Sonata)",
      "Yuxu laboratoriyası",
      "Uzunmüddətli monitorinq",
    ],
  },
  {
    group: "🫁 Breath Care",
    color: "from-sky-600 to-cyan-500",
    lightColor: "bg-sky-50",
    textColor: "text-sky-800",
    desc: "Solunum çatışmazlığı və xroniki xəstəliklər üçün ev və xəstəxana müalicəsi",
    items: [
      "Süni tənəffüs cihazları",
      "BPAP ST / AVAPS ventilyatorlar",
      "Reanimasiya & İntensiv terapiya cihazları",
      "Traxeostomiya kanülləri",
      "Tibbi cihazların texniki təmiri",
    ],
  },
  {
    group: "💚 Oxygen Care",
    color: "from-green-600 to-emerald-500",
    lightColor: "bg-green-50",
    textColor: "text-green-800",
    desc: "Oksigen terapiyası üçün ev tipli və portativ cihazlar",
    items: [
      "Oksigen konsentratoru",
      "Portativ oksigen sistemi",
      "Uzunmüddətli oksigen terapiyası",
      "Oksigen maskası & aksessuarlar",
      "Texniki servis & istismar dəstəyi",
    ],
  },
  {
    group: "🩴 Ortopedik Qrup",
    color: "from-violet-600 to-purple-500",
    lightColor: "bg-violet-50",
    textColor: "text-violet-800",
    desc: "Ortopedik müalicə və bərpa üçün keyfiyyətli tibbi məhsullar",
    items: [
      "Ortopedik dayaqlar & korsajlar",
      "Bərpa avadanlıqları",
      "Post-əməliyyat cihazları",
      "Yürüyüş yardımcıları",
      "Ev baxım ortopedik dəstək",
    ],
  },
  {
    group: "🚑 Ambulans Xidməti",
    color: "from-red-600 to-rose-500",
    lightColor: "bg-red-50",
    textColor: "text-red-800",
    desc: "Fövqəladə hallarda peşəkar tibbi yardım — 24 saat, həftənin 7 günü",
    items: [
      "Şəhərdaxili ambulans köçürmə",
      "Xəstəxanalar arası nəqliyyat",
      "İntensiv baxım avadanlıqlı avtomobillər",
      "Peşəkar tibbi heyət",
      "Bakı ərazisindəki bütün rayonlar",
    ],
  },
  {
    group: "🔧 Texniki Servis",
    color: "from-orange-600 to-amber-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-800",
    desc: "Bütün tibbi cihazların sertifikatlı texniki xidməti",
    items: [
      "Sertifikatlı texniki heyət",
      "Cihaz quraşdırma & kalibrasiya",
      "Periyodik texniki nəzarət",
      "Ehtiyat hissə təminatı",
      "Zəmanət & zəmanətdən sonra xidmət",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E8F6FD] text-[#0077CC] text-sm font-semibold px-4 py-2 rounded-full mb-5">
            🩺 Xidmət Qrupları
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#003A66] mb-4">Xidmətlərimiz</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Yuxudan solunuma, ortopedikdən ambulansa — sağlamlığınızın hər sahəsindəyik</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceGroups.map(sg => (
            <div key={sg.group} className="bg-white rounded-3xl overflow-hidden border border-slate-100 card-hover">
              <div className={`bg-gradient-to-br ${sg.color} p-6 text-white`}>
                <h3 className="font-black text-xl mb-2">{sg.group}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{sg.desc}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5">
                  {sg.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className={`w-5 h-5 rounded-full ${sg.lightColor} ${sg.textColor} flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-5 w-full block text-center bg-gradient-to-r ${sg.color} text-white font-bold text-sm py-3 rounded-xl hover:opacity-90 transition-all`}>
                  Ətraflı məlumat al →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
