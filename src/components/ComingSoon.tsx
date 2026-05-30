// Replace your App.tsx content with this, or use <ComingSoon /> as a component.
// Tailwind CSS must be set up in your project.
// Add these Google Fonts to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen bg-[#050c10] text-[#e8f0f5] flex items-center justify-center overflow-hidden">

      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="fixed rounded-full pointer-events-none z-0 animate-[drift1_12s_ease-in-out_infinite]"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle,rgba(0,140,180,.12) 0%,transparent 70%)",
          filter: "blur(80px)", top: -200, left: -200,
        }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle,rgba(0,80,120,.1) 0%,transparent 70%)",
          filter: "blur(80px)", bottom: -100, right: -100,
          animation: "drift2 15s ease-in-out infinite",
        }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{
          width: 300, height: 300,
          background: "radial-gradient(circle,rgba(180,220,255,.05) 0%,transparent 70%)",
          filter: "blur(80px)", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          animation: "pulse-orb 4s ease-in-out infinite",
        }}
      />

      {/* ECG SVG line */}
      <svg
        className="fixed bottom-0 left-0 w-full h-20 z-0 opacity-15"
        viewBox="0 0 1200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 L200,40 L220,40 L230,10 L245,70 L258,5 L272,75 L285,40 L310,40 L400,40 L600,40 L800,40 L820,40 L830,10 L845,70 L858,5 L872,75 L885,40 L910,40 L1200,40"
          stroke="#7dd4f0"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="-1000"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl px-6 py-10">

        {/* City flags */}
        <div
          className="flex items-center justify-center gap-4 mb-12 opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 0.2s" }}
        >
          {["🇦🇿 Bakı", "🇹🇷 İzmir", "🇹🇷 İstanbul"].map((city, i) => (
            <div key={city} className="flex items-center gap-3">
              <div
                className="flex items-center gap-1.5 border border-white/[0.08] rounded-full px-3.5 py-1.5"
                style={{ background: "rgba(255,255,255,0.03)", fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.45)" }}
              >
                {city}
              </div>
              {i < 2 && <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 10 }}>·</span>}
            </div>
          ))}
        </div>

        {/* Brand name */}
        <div
          className="mb-2 opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 0.4s" }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px,8vw,72px)",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            Çallım <em style={{ fontStyle: "italic", color: "#7dd4f0" }}>Tibbi</em>
          </h1>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            Sağlamlıq Xidmətləri
          </p>
        </div>

        {/* Breath ring */}
       <div className="w-full flex items-center">
         <div
          className="w-30 h-30 mx-auto my-10 opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 0.6s" }}
        >
          <svg
            viewBox="0 0 120 120"
            width="120"
            height="120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: "breathe 4s ease-in-out infinite" }}
          >
            <circle cx="60" cy="60" r="55" stroke="rgba(125,212,240,0.08)" strokeWidth="1" fill="none" />
            <circle cx="60" cy="60" r="55" stroke="rgba(125,212,240,0.35)" strokeWidth="1" fill="none"
              strokeDasharray="345" strokeDashoffset="345">
              <animate attributeName="stroke-dashoffset" values="345;0;345" dur="4s" repeatCount="indefinite" calcMode="ease" />
            </circle>
            <circle cx="60" cy="60" r="42" stroke="rgba(125,212,240,0.06)" strokeWidth="1" fill="none" />
            <circle cx="60" cy="60" r="30" fill="rgba(125,212,240,0.04)" stroke="rgba(125,212,240,0.15)" strokeWidth="1">
              <animate attributeName="r" values="28;32;28" dur="4s" repeatCount="indefinite" calcMode="ease" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
            </circle>
            <text x="60" y="65" textAnchor="middle" fontSize="22" fill="rgba(125,212,240,0.7)" fontFamily="sans-serif">🫁</text>
          </svg>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9, letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              marginTop: 12,
            }}
          >
            Nəfəs al · Nəfəs ver
          </p>
        </div>
       </div>

        {/* Coming soon label */}
        <p
          className="opacity-0"
          style={{
            animation: "fadeUp 0.8s ease forwards 0.8s",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(13px,2vw,16px)",
            fontWeight: 300,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 20,
          }}
        >
          Tezliklə Xidmətinizdə
        </p>

        {/* Tagline */}
        <p
          className="opacity-0"
          style={{
            animation: "fadeUp 0.8s ease forwards 1s",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px,4vw,26px)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Nəfəsiniz —{" "}
          <strong style={{ fontStyle: "normal", fontWeight: 300, color: "#7dd4f0" }}>
            Nəfəsimizdir.
          </strong>
          <br />
          Yeni saytımız hazırlanır.
        </p>

        {/* Service chips */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-12 opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 1.1s" }}
        >
          {[
            "😴 Sleep Care", "🫁 Breath Care", "💚 Oxygen Care",
            "🩴 Ortopedik", "🚑 Ambulans 24/7", "🔧 Texniki Servis",
          ].map((s) => (
            <div
              key={s}
              className="rounded-full px-4 py-1.5 cursor-default transition-all duration-300 hover:text-white/80"
              style={{
                border: "1px solid rgba(125,212,240,0.18)",
                background: "rgba(125,212,240,0.04)",
                fontSize: 10,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(125,212,240,0.5)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(125,212,240,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(125,212,240,0.18)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(125,212,240,0.04)";
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mx-auto mb-8 opacity-0"
          style={{
            animation: "fadeUp 0.8s ease forwards 1.2s",
            width: 60,
            background: "linear-gradient(90deg,transparent,rgba(125,212,240,.4),transparent)",
          }}
        />

        {/* Email CTA */}
        <div
          className="opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 1.3s" }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11, letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Hazır olduğunda xəbər al
          </p>
          <div
            className="flex max-w-sm mx-auto overflow-hidden rounded"
            style={{ border: "1px solid rgba(125,212,240,0.2)" }}
          >
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 bg-transparent border-none outline-none px-4 py-3"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.7)",
              }}
            />
            <button
              className="px-5 py-3 transition-all duration-300"
              style={{
                background: "rgba(125,212,240,0.15)",
                borderLeft: "1px solid rgba(125,212,240,0.2)",
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, letterSpacing: "0.2em",
                color: "#7dd4f0",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(125,212,240,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(125,212,240,0.15)";
              }}
            >
              Bildiriş
            </button>
          </div>
        </div>

        {/* Brand partners */}
        <div
          className="mt-12 opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 1.5s" }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9, letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.18)",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Rəsmi Distribütor
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            {["🇩🇪 Löwenstein Medical", "🇩🇪 Sapio Life", "🇩🇪 Prisma"].map((b) => (
              <div
                key={b}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9, letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.22)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  padding: "4px 10px",
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div
        className="fixed bottom-6 left-0 w-full flex justify-center gap-8 z-10 opacity-0"
        style={{ animation: "fadeUp 0.6s ease forwards 1.8s" }}
      >
        {[
          { label: "Canlı dəstək", dot: true },
          { label: "10+ İl Təcrübə" },
          { label: "3 Şəhər Ofisi" },
        ].map(({ label, dot }) => (
          <div
            key={label}
            className="flex items-center gap-1.5"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9, letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.18)",
              textTransform: "uppercase",
            }}
          >
            {dot && (
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                style={{ animation: "blink 2s ease-in-out infinite" }}
              />
            )}
            {label}
          </div>
        ))}
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drift1 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(40px,30px); }
        }
        @keyframes drift2 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(-30px,-20px); }
        }
        @keyframes pulse-orb {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity:.5; }
          50%     { transform: translate(-50%,-50%) scale(1.3); opacity:1; }
        }
        @keyframes breathe {
          0%,100% { transform: scale(1); }
          50%     { transform: scale(1.08); }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50%     { opacity:.3; }
        }
      `}</style>
    </div>
  );
}