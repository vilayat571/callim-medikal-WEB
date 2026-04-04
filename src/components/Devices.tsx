const deviceBrands = [
  {
    brand: "Löwenstein Medical",
    origin: "🇩🇪 Almaniya",
    color: "from-blue-700 to-blue-500",
    devices: [
      { name: "Scala", type: "Poligraf", desc: "Ev tipli yuxu diaqnostika cihazı. Yüngül, portativ, Bluetooth bağlantılı.", badge: "Yuxu Testi" },
      { name: "Sonata", type: "Polisomnograf", desc: "Tam polisomnografiya studiyası üçün çoxkanallı qeydiyyat sistemi.", badge: "Klinik" },
      { name: "Prisma Seriyası", type: "CPAP / BiPAP / APAP", desc: "Avtomatik adaptiv solunum dəstəyi, bulud sinxronizasiyası, silent motor.", badge: "Ən Populyar" },
      { name: "LUISA", type: "Nəfəs Rahatlyığı", desc: "Xüsusi pozisiya terapiyası ilə yuxu apnesini azaldan innovativ sistem.", badge: "Yeni" },
    ],
  },
  {
    brand: "Sapio Life / Sleep Care",
    origin: "🇩🇪🇺🇸 Alman-Amerika",
    color: "from-green-700 to-emerald-500",
    devices: [
      { name: "Sleep Care CPAP", type: "CPAP Cihazı", desc: "702 TL-dən başlayan qiymətlərlə əlçatan CPAP terapiyası.", badge: "Sərfəli" },
      { name: "Breath Care", type: "BiPAP / Ventilyator", desc: "Evdə baxım üçün iki fazalı solunum dəstəyi. IVT-dən başlayan bütün rejimlər.", badge: "Güclü" },
      { name: "Oxygen Care", type: "Oksigen Sistemi", desc: "1–5 L/dəq oksigen istehsalı. Portativ versiyası da mövcuddur.", badge: "Kirayə" },
    ],
  },
];

export default function Devices() {
  return (
    <section id="devices" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E8F6FD] text-[#0077CC] text-sm font-semibold px-4 py-2 rounded-full mb-5">
            🔬 Tibbi Avadanlıq
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#003A66] mb-4">Cihazlarımız</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Alman və Amerika istehsalı dünya standartlı cihazların rəsmi distribütoru</p>
        </div>

        <div className="space-y-14">
          {deviceBrands.map(brand => (
            <div key={brand.brand}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-r ${brand.color} text-white font-black text-lg px-6 py-3 rounded-2xl`}>
                  {brand.brand}
                </div>
                <span className="text-slate-500 font-semibold">{brand.origin}</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {brand.devices.map(device => (
                  <div key={device.name} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 card-hover relative overflow-hidden">
                    <span className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${brand.color}`}>
                      {device.badge}
                    </span>
                    <h3 className="font-black text-[#003A66] text-lg mb-1 pr-16">{device.name}</h3>
                    <p className="text-[#0077CC] text-xs font-semibold uppercase tracking-wide mb-3">{device.type}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{device.desc}</p>
                    <a href="#contact" className={`w-full block text-center bg-gradient-to-r ${brand.color} text-white font-bold text-sm py-2.5 rounded-xl hover:opacity-90 transition-all`}>
                      Məlumat al
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rental & service banner */}
        <div className="mt-12 bg-gradient-to-r from-[#003A66] to-[#0077CC] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-xl mb-2">Satın almaq əvəzinə kirayəyə götürün</h3>
            <p className="text-white/75 text-sm max-w-lg">CPAP, oksigen konsentratoru və digər cihazları aylıq icarəyə götürə bilərsiniz. Texniki xidmət daxildir.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 bg-white text-[#0077CC] font-black px-8 py-4 rounded-2xl hover:shadow-xl transition-all hover:scale-105 text-sm whitespace-nowrap">
            Kirayə şərtlərini öyrən →
          </a>
        </div>
      </div>
    </section>
  );
}
