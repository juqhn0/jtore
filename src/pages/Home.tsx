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
  const users = useStore((s) => s.users)
  const activePlayers = users.filter((user) => user.status === "ACTIVE").length
  const distributedPoints = useStore((s) => s.totalPointsDistributed)
  const storeItemCount = useStore((s) => s.storeItems.length)
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
