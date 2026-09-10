import { Crosshair, Radar, Timer, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Plugin {
  icon: LucideIcon
  title: string
  desc: string
  bullets: string[]
}

const plugins: Plugin[] = [
  {
    icon: Crosshair,
    title: "Yapay Zeka Crosshair Analizi",
    desc: "Maç kayıtlarını tara, atış isabet oranını analiz et ve yapay zekanın önerdiği optimize crosshair ayarlarını al.",
    bullets: [
      "Gerçek zamanlı isabet ısı haritası",
      "Kişiye özel crosshair kodu",
      "Pro oyuncularla karşılaştırma",
    ],
  },
  {
    icon: Radar,
    title: "Canlı Skin Arbitraj Radarı",
    desc: "Steam pazarı ile üçüncü parti borsalar arasındaki fiyat farklarını anında yakala, kâr fırsatlarını kaçırma.",
    bullets: [
      "Çoklu pazar fiyat takibi",
      "Anlık kâr uyarıları",
      "Trend ve volatilite grafikleri",
    ],
  },
  {
    icon: Timer,
    title: "Pro Bomba Senkronizasyonu",
    desc: "Takımınla mükemmel zamanlanmış retake ve after-plant senaryoları için bomba zamanlayıcısını senkronize et.",
    bullets: [
      "Takım geneli senkron sayaç",
      "Sesli geri sayım komutları",
      "Harita bazlı strateji ipuçları",
    ],
  },
]

export default function Plugins() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400">
          <Sparkles className="h-4 w-4" /> Elit araçlar
        </span>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Premium Eklentiler
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          Oyununu profesyonel seviyeye taşıyacak, yapay zeka destekli araçlar.
          Hepsi çok yakında JTORE üyelerine özel.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plugins.map((p) => (
          <div
            key={p.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7 transition hover:border-orange-500/50"
          >
            {/* Coming soon badge */}
            <span className="absolute right-5 top-5 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-400">
              Yakında
            </span>

            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500 transition group-hover:glow-orange">
              <p.icon className="h-8 w-8" />
            </span>

            <h2 className="mt-6 font-display text-2xl font-bold leading-tight text-balance">
              {p.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
              {p.desc}
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  {b}
                </li>
              ))}
            </ul>

            <button
              type="button"
              disabled
              aria-disabled="true"
              className="mt-7 flex h-12 cursor-not-allowed items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] font-bold text-zinc-500 transition group-hover:border-orange-500 group-hover:text-orange-400 group-hover:glow-orange"
            >
              Çok Yakında
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
