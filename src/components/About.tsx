const features = [
  { icon: "🏥", title: "Çoxsahəli Tibbi Xidmət", desc: "Yuxu, solunum, ortopedik bərpa və ambulans xidmətlərini bir çatı altında birləşdiririk." },
  { icon: "🌍", title: "Üç Şəhər Ofisi", desc: "Bakı, İzmir və İstanbul ofisləri vasitəsilə Azərbaycan və Türkiyədə tam əhatəli xidmət." },
  { icon: "🏆", title: "Sertifikatlı Texniki Servis", desc: "Beynəlxalq sertifikatlı texniki komandamız bütün cihazların quraşdırma, təmir və servisini həyata keçirir." },
  { icon: "🇩🇪🇺🇸", title: "Alman & Amerika Distribütoru", desc: "Löwenstein Medical, Sapio Life, Prisma kimi dünya liderinin Azərbaycandakı rəsmi distribütoruyuq." },
];

const offices = [
  { city: "Bakı", flag: "🇦🇿", country: "Azərbaycan", desc: "Ana ofis — Yuxu laboratoriyası, satış, servis" },
  { city: "İzmir", flag: "🇹🇷", country: "Türkiyə", desc: "Regional ofis — Texniki dəstək mərkəzi" },
  { city: "İstanbul", flag: "🇹🇷", country: "Türkiyə", desc: "Logistika & distribüsyon mərkəzi" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-5">
            🏢 Şirkət haqqında
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#003A66] mb-4">Çallım Tibbi kimdir?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Tibbi texnologiya sahəsindəki 10 illik təcrübəmizlə sağlamlıq sektorunda çoxsahəli xidmət göstəririk</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              <strong className="text-[#003A66]">Çallım Tibbi Sağlamlıq Xidmətləri</strong> — yuxu və solunum cihazlarından tutmuş ortopedik məhsullara, ambulans xidmətindən texniki servistə qədər geniş spektrdə tibbi həllər təqdim edən şirkətdir.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Türkiyənin <strong className="text-[#0077CC]">İzmir</strong> və <strong className="text-[#0077CC]">İstanbul</strong> ofislərinin yanında Azərbaycandakı <strong className="text-[#0077CC]">Bakı</strong> filialımızla bölgədə etibarlı tibbi ortaq olmağa davam edirik.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              <strong className="text-red-600">Alman</strong> (Löwenstein Medical, Prisma) və <strong className="text-red-600">Amerika</strong> istehsallı cihazların rəsmi distribütoru olaraq, yalnız sertifikatlı texniki heyətimizlə xidmət veririk.
            </p>

            {/* Office cards */}
            <div className="flex flex-col gap-3">
              {offices.map(o => (
                <div key={o.city} className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                  <div className="text-3xl">{o.flag}</div>
                  <div>
                    <div className="font-bold text-[#003A66] text-sm">{o.city} — {o.country}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{o.desc}</div>
                  </div>
                  <div className="ml-auto w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-slow flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(f => (
              <div key={f.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 card-hover">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#003A66] text-sm mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand logos strip */}
        <div className="border-t border-slate-100 pt-10">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-7">Rəsmi Distribütor & Tərəfdaş Brendlər</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: "Löwenstein Medical", flag: "🇩🇪", color: "text-blue-700" },
              { name: "Sapio Life", flag: "🇩🇪", color: "text-green-700" },
              { name: "Prisma", flag: "🇩🇪", color: "text-indigo-700" },
              { name: "Sleep Care", flag: "🇺🇸", color: "text-sky-700" },
              { name: "Breath Care", flag: "🇺🇸", color: "text-teal-700" },
              { name: "Oxygen Care", flag: "🇺🇸", color: "text-cyan-700" },
            ].map(b => (
              <div key={b.name} className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm">
                <span className="text-xl">{b.flag}</span>
                <span className={`font-bold text-sm ${b.color}`}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
