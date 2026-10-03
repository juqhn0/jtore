import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Crosshair,
  Gift,
  Puzzle,
  ShoppingBag,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react"
import { useStore } from "../store/useStore"
import { firestore } from "../lib/firebase"
import { AdSlot } from "../components/PlatformChrome"
import { AnimatedNumber, motion } from "../components/MotionPrimitives"

const MotionLink = motion.create(Link)

const features = [
  {
    icon: ShoppingBag,
    title: "Dynamic Store",
    desc: "CS2 skins, cases, and stickers powered by JTORE Points with live stock tracking.",
    to: "/store",
  },
  {
    icon: Gift,
    title: "Daily Tasks",
    desc: "Complete a daily quiz and earn points instantly.",
    to: "/tasks",
  },
  {
    icon: Puzzle,
    title: "Premium Plugins",
    desc: "AI-powered crosshair analysis and a live skin arbitrage radar are coming soon.",
    to: "/plugins",
  },
]


export default function Home() {
  const currentUser = useStore((s) => s.currentUser)
  const localUsers = useStore((s) => s.users)
  const localPoints = useStore((s) => s.totalPointsDistributed)
  const localStoreItems = useStore((s) => s.storeItems.length)
  const [liveStats, setLiveStats] = useState({ users: 0, points: 0, items: 0 })

  useEffect(() => {
    const unsubscribeUsers = onSnapshot(
      collection(firestore, "users"),
      (snapshot) => {
        const points = snapshot.docs.reduce((total, document) => {
          const data = document.data()
          return total + Number(data.points ?? data.jtorePoints ?? 0)
        }, 0)
        setLiveStats((current) => ({ ...current, users: snapshot.size, points }))
      },
      () => undefined,
    )
    const unsubscribeStore = onSnapshot(
      collection(firestore, "store"),
      (snapshot) => setLiveStats((current) => ({ ...current, items: snapshot.size })),
      () => undefined,
    )
    return () => {
      unsubscribeUsers()
      unsubscribeStore()
    }
  }, [])

  const activePlayers = liveStats.users || localUsers.filter((user) => user.status === "ACTIVE").length
  const distributedPoints = liveStats.points || localPoints
  const storeItemCount = liveStats.items || localStoreItems
  const stats = [
    { value: activePlayers.toLocaleString("en-US"), label: "Active Players" },
    { value: distributedPoints.toLocaleString("en-US"), label: "Distributed Points" },
    { value: storeItemCount.toLocaleString("en-US"), label: "Store Items" },
  ]

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[140px]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
          <span className="mb-6 inline-flex animate-float-in items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400">
            <Sparkles className="h-4 w-4" />
            The #1 CS2 Esports Community
          </span>
          <h1 className="animate-float-in jtore-3d-title font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-7xl">
            Level up your <span className="text-orange-500 text-glow">game</span>,
            <br /> and collect rewards.
          </h1>
          <p className="mt-6 max-w-2xl animate-float-in text-lg leading-relaxed text-zinc-400 text-pretty">
            JTORE is a premium platform built for the Counter-Strike 2 community. Complete tasks, earn JTORE Points, and collect legendary skins from the store.
          </p>
          <div className="mt-10 flex animate-float-in flex-col items-center gap-3 sm:flex-row">
            {currentUser ? (
              <MotionLink
                to="/store"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-base font-bold text-zinc-950 shadow-lg shadow-orange-500/25 transition hover:bg-orange-400 hover:glow-orange"
              >
                Go to Store <ArrowRight className="h-5 w-5" />
              </MotionLink>
            ) : (
              <MotionLink
                to="/auth"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-base font-bold text-zinc-950 shadow-lg shadow-orange-500/25 transition hover:bg-orange-400 hover:glow-orange"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </MotionLink>
            )}
            <Link
              to="/tasks"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-zinc-100 transition hover:border-orange-500/40 hover:text-orange-400"
            >
              <Zap className="h-5 w-5" /> Explore Tasks
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid w-full max-w-2xl animate-float-in grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="font-display text-3xl font-extrabold text-orange-500 sm:text-4xl">
                  <AnimatedNumber value={Number(s.value.replaceAll(",", ""))} />
                </div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What we offer
            </h2>
            <p className="mt-2 text-zinc-400">
              One platform for everything your community needs.
            </p>
          </div>
          <Trophy className="hidden h-10 w-10 text-orange-500/60 sm:block" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-orange-500/40 hover:from-orange-500/[0.06]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-500 transition group-hover:glow-orange">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {f.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-400 opacity-0 transition group-hover:opacity-100">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6">
        <AdSlot variant="infeed" />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-6 rounded-3xl border border-orange-500/20 bg-orange-500/[0.06] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">JTORE Editorial</p><h2 className="mt-2 font-display text-3xl font-black">CS2 güncellemelerini kaçırma</h2><p className="mt-2 max-w-2xl text-zinc-400">Patch notları, silah dengeleri, harita havuzu ve esports analizlerini CS2 Updates sayfamızda takip et.</p></div>
          <Link to="/updates" className="btn-primary shrink-0">CS2 Updates&apos;i Gör <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">JTORE Editorial</p><h2 className="mt-2 font-display text-3xl font-black">CS2 Güncellemeleri</h2><p className="mt-2 text-zinc-400">Patch, meta ve esports gündeminden seçtiklerimiz.</p></div><Link to="/updates" className="hidden items-center gap-1 text-sm font-semibold text-orange-400 sm:flex">Tümünü gör <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="grid gap-4 md:grid-cols-3">{[{ tag: "Patch Notes", title: "CS2 meta raporu: son değişiklikler" }, { tag: "Silah Dengesi", title: "Tüfek ekonomisi yeniden şekilleniyor" }, { tag: "Harita Havuzu", title: "Aktif harita havuzunda takım stratejileri" }].map((post) => <Link key={post.title} to="/updates" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/[0.06]"><span className="text-xs font-bold uppercase tracking-wider text-orange-400">{post.tag}</span><h3 className="mt-3 font-display text-xl font-bold group-hover:text-orange-300">{post.title}</h3><span className="mt-5 inline-flex items-center gap-1 text-sm text-zinc-500 group-hover:text-orange-400">Makaleyi oku <ArrowRight className="h-4 w-4" /></span></Link>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6"><div className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.05] p-6"><p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Arkadaşlarımız ve destekçilerimiz</p><div className="supporter-marquee mt-5"><div className="supporter-track"><div className="supporter-group"><a href="https://youtube.com/@jerardokin" target="_blank" rel="noreferrer" className="supporter-card"><img src="https://unavatar.io/youtube/jerardokin" alt="Jerardo Kin YouTube" /><span>Jerardo Kin</span></a><a href="https://youtube.com/@v1xsan-s2g" target="_blank" rel="noreferrer" className="supporter-card"><img src="https://unavatar.io/youtube/v1xsan-s2g" alt="V1xSan CS2 YouTube" /><span>V1xSan CS2</span></a><a href="https://youtube.com/@Juqhn" target="_blank" rel="noreferrer" className="supporter-card supporter-card-featured"><img src="https://unavatar.io/youtube/Juqhn" alt="Juqhn JTORE YouTube" /><span>Juqhn · JTORE</span></a></div><div className="supporter-group" aria-hidden="true"><a className="supporter-card"><img src="https://unavatar.io/youtube/jerardokin" alt="" /><span>Jerardo Kin</span></a><a className="supporter-card"><img src="https://unavatar.io/youtube/v1xsan-s2g" alt="" /><span>V1xSan CS2</span></a><a className="supporter-card supporter-card-featured"><img src="https://unavatar.io/youtube/Juqhn" alt="" /><span>Juqhn · JTORE</span></a></div></div></div></div></section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">Hakkımızda</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">JTORE, CS2 topluluğu için kuruldu.</h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">
              JTORE; Counter-Strike 2 oyuncularını görevler, turnuvalar ve ödüller etrafında bir araya getiren topluluk platformudur. Günlük görevlerini tamamlayarak JTORE Points kazanabilir, mağazadaki seçkin içerikleri keşfedebilir ve rekabetçi etkinliklerde toplulukla birlikte yer alabilirsin.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              Amacımız, oyuncuların emeklerini değerli hissettiği, güvenli ve aktif bir CS2 ekosistemi oluşturmak. JTORE&apos;da her görev yeni bir hedef, her turnuva yeni bir mücadele ve her puan oyuna bağlılığının bir karşılığıdır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.12] via-zinc-950 to-zinc-950 p-8 sm:p-14">
          <Crosshair className="absolute -right-10 -top-10 h-56 w-56 text-orange-500/10" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Join the community and earn your first points.
            </h2>
            <p className="mt-3 text-zinc-300">
              Earn points through tasks and keep them safely in your account.
            </p>
            <Link
              to={currentUser ? "/tasks" : "/auth"}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-base font-bold text-zinc-950 transition hover:bg-orange-400 hover:glow-orange"
            >
              {currentUser ? "Start Tasks" : "Register Free"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
