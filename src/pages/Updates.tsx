import { CalendarDays, ChevronRight, Crosshair, Map, Shield, Trophy } from "lucide-react"
import { Link } from "react-router-dom"
import { PageMotion } from "../components/MotionPrimitives"

const posts = [
  { category: "Patch Notes", date: "12 Ekim 2026", title: "CS2 meta raporu: rekabetçi oyunda son değişiklikler", excerpt: "Son güncellemelerin nişan alma alışkanlıklarına, ekonomi kararlarına ve takım içi iletişime etkisini inceliyoruz.", icon: Shield, read: "6 dk okuma" },
  { category: "Silah Dengesi", date: "6 Ekim 2026", title: "Tüfek ekonomisi yeniden şekilleniyor", excerpt: "M4A1-S, AK-47 ve alternatif tüfek tercihlerini; fiyat, geri tepme ve mermi verimliliği üzerinden karşılaştırıyoruz.", icon: Crosshair, read: "8 dk okuma" },
  { category: "Harita Havuzu", date: "29 Eylül 2026", title: "Aktif harita havuzunda takım stratejileri", excerpt: "Premier ve turnuva maçlarında harita seçiminin tempo, rotasyon ve savunma düzenlerine etkisini anlatan rehber.", icon: Map, read: "7 dk okuma" },
  { category: "Esports", date: "21 Eylül 2026", title: "Büyük turnuvalarda yeni sezonun öne çıkanları", excerpt: "Takım formasyonları, genç yetenekler ve izlenmesi gereken oyun içi liderlik trendleriyle yeni sezon öncesi analiz.", icon: Trophy, read: "5 dk okuma" },
  { category: "Topluluk", date: "14 Eylül 2026", title: "Daha iyi bir CS2 topluluğu için 5 alışkanlık", excerpt: "Takım arkadaşlarına saygı, dürüst rekabet ve sağlıklı iletişimle herkes için daha iyi maç deneyimi oluşturun.", icon: Shield, read: "4 dk okuma" },
]

export default function Updates() {
  return <PageMotion className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
    <header className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">JTORE Editorial</p>
      <h1 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-6xl">CS2 Updates</h1>
      <p className="mt-5 text-lg leading-8 text-zinc-400">Counter-Strike 2 dünyasındaki oyun güncellemelerini, silah dengelerini, harita havuzunu ve esports gündemini anlaşılır analizlerle takip edin.</p>
    </header>
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => { const Icon = post.icon; return <article key={post.title} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/[0.04]"><div className="flex items-center justify-between"><span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">{post.category}</span><Icon className="h-5 w-5 text-orange-500/70" /></div><h2 className="mt-6 font-display text-2xl font-bold leading-tight">{post.title}</h2><p className="mt-3 leading-7 text-zinc-400">{post.excerpt}</p><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-zinc-500"><span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{post.date}</span><span>{post.read}</span></div><Link to="/updates" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-400">Makaleyi aç <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link></article> })}</div>
    <section className="mt-16 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.12] to-transparent p-8 sm:p-10"><h2 className="font-display text-2xl font-bold">JTORE analizleriyle oyunun içinde kal</h2><p className="mt-3 max-w-2xl leading-7 text-zinc-300">Güncel haberleri takip ederken görevlerini tamamla, puanlarını biriktir ve topluluk turnuvalarındaki yerini al.</p></section>
  </PageMotion>
}
