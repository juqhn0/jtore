import Leaderboard from "../components/Leaderboard"
import { PageMotion } from "../components/MotionPrimitives"

export default function LeaderboardPage() { return <PageMotion className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6"><header className="mb-8"><p className="text-xs font-bold uppercase tracking-[.25em] text-orange-400">JTORE Community</p><h1 className="mt-2 font-display text-4xl font-black">Sıralama Tablosu</h1><p className="mt-3 text-zinc-400">Topluluğun en çok JTORE Points toplayan oyuncularını keşfet.</p></header><Leaderboard /></PageMotion> }
