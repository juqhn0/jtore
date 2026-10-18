import { useState } from "react"
import toast from "react-hot-toast"
import { CircleDot, Trophy } from "lucide-react"
import { saveMatchPrediction } from "../lib/firebase"
import { useStore } from "../store/useStore"
import { Reveal, motion } from "./MotionPrimitives"

export type LiveMatch = { id: string; status: "LIVE" | "UPCOMING"; format: "BO3" | "BO5"; league: string; teams: [string, string]; scores: [number, number] }

export const liveMatches: LiveMatch[] = [
  { id: "m-101", status: "LIVE", format: "BO3", league: "IEM Beijing 2026", teams: ["Eternal Fire", "Spirit"], scores: [1, 0] },
  { id: "m-102", status: "UPCOMING", format: "BO5", league: "BLAST Premier Fall Final", teams: ["NAVI", "FaZe Clan"], scores: [0, 0] },
  { id: "m-103", status: "UPCOMING", format: "BO3", league: "ESL Pro League Season 25", teams: ["G2", "MOUZ"], scores: [0, 0] },
]

export default function LiveMatches({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<LiveMatch | null>(null)
  const [predictions, setPredictions] = useState<Record<string, string>>({})
  const currentUser = useStore((state) => state.currentUser)
  const submitPrediction = async (score: string) => {
    if (!selected) return
    if (currentUser) await saveMatchPrediction(currentUser.id, selected.id, selected.format, score)
    setPredictions((current) => ({ ...current, [selected.id]: score }))
    toast.success(`${selected.teams[0]} - ${selected.teams[1]} tahminin kaydedildi. Ödül: ${selected.format === "BO3" ? 2 : 3} Points`)
    setSelected(null)
  }
  return <section className="rounded-3xl border border-white/10 bg-white/[.04] p-6"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-orange-400">Live Matches</p><h2 className="mt-1 font-display text-2xl font-black">Canlı maçlar ve tahminler</h2></div><CircleDot className="text-orange-500" /></div><div className={`grid gap-4 ${compact ? "md:grid-cols-3" : "lg:grid-cols-3"}`}>{liveMatches.map((match, index) => <Reveal key={match.id} delay={index * 0.08}><motion.article className="rounded-2xl border border-white/10 bg-black/20 p-4"><div className="flex items-center justify-between text-xs"><span className={match.status === "LIVE" ? "text-red-400" : "text-zinc-500"}>{match.status === "LIVE" ? "● LIVE" : "UPCOMING"}</span><span className="rounded bg-orange-500/15 px-2 py-1 font-bold text-orange-300">{match.format}</span></div><p className="mt-3 text-xs text-zinc-500">{match.league}</p><div className="mt-4 space-y-2 font-semibold"><div className="flex justify-between"><span>{match.teams[0]}</span><b className="text-orange-400">{match.scores[0]}</b></div><div className="flex justify-between"><span>{match.teams[1]}</span><b className="text-orange-400">{match.scores[1]}</b></div></div><button onClick={() => setSelected(match)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-sm font-bold text-zinc-950 transition hover:bg-orange-400"><Trophy className="h-4 w-4" />{predictions[match.id] ? `Tahmin: ${predictions[match.id]}` : "Tahmin Et"}</button></motion.article></Reveal>)}</div>{selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelected(null)}><div className="w-full max-w-sm rounded-3xl border border-orange-500/30 bg-zinc-950 p-6" onClick={(event) => event.stopPropagation()}><p className="text-xs font-bold uppercase tracking-widest text-orange-400">{selected.format} tahmini</p><h3 className="mt-2 text-xl font-bold">Maç skorunu seç</h3><p className="mt-2 text-sm text-zinc-400">Doğru tahmin ödülü: {selected.format === "BO3" ? 2 : 3} JTORE Points</p><div className="mt-5 grid grid-cols-2 gap-3">{(selected.format === "BO3" ? ["2-0", "2-1", "0-2", "1-2"] : ["3-0", "3-1", "3-2", "0-3", "1-3", "2-3"]).map((score) => <button key={score} onClick={() => submitPrediction(score)} className="rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 font-bold transition hover:border-orange-500 hover:bg-orange-500/15">{score}</button>)}</div></div></div>}</section>
}
