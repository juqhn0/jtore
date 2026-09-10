import { useEffect, useMemo, useState } from "react"
import { CheckCircle2, CircleHelp, Lock, Sparkles } from "lucide-react"
import toast from "react-hot-toast"
import { useStore } from "../store/useStore"
import { CS2_QUIZ_POOL, getRandomUnansweredQuestion, type QuizQuestion } from "../data/cs2QuizPool"
import { PageMotion, motion } from "../components/MotionPrimitives"

const ANSWERED_KEY = "jtore-answered-quiz-ids"

export default function Tasks() {
  const currentUser = useStore((state) => state.currentUser)
  const campaigns = useStore((state) => state.campaigns)
  const activeCampaigns = campaigns.filter((campaign) => campaign.active)
  const completeDailyTask = useStore((state) => state.completeDailyTask)
  const completeCampaign = useStore((state) => state.completeCampaign)
  const isDailyTaskDone = useStore((state) => state.isDailyTaskDone)
  const [answeredIds, setAnsweredIds] = useState<string[]>(() => JSON.parse(localStorage.getItem(ANSWERED_KEY) || "[]"))
  const [question, setQuestion] = useState<QuizQuestion>(() => getRandomUnansweredQuestion(answeredIds))
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const dailyDone = isDailyTaskDone()

  useEffect(() => {
    localStorage.setItem(ANSWERED_KEY, JSON.stringify(answeredIds))
  }, [answeredIds])

  const progress = useMemo(() => Math.min(100, Math.round((answeredIds.length / CS2_QUIZ_POOL.length) * 100)), [answeredIds.length])

  const submitQuiz = () => {
    if (!currentUser) return toast.error("Önce giriş yapmalısın")
    if (selected === null) return toast.error("Önce bir cevap seç")
    if (selected !== question.answerIndex) {
      setSubmitted(true)
      return toast.error("Yanlış cevap. Tekrar dene.")
    }
    const result = completeDailyTask(15)
    if (!result.ok) return toast.error(result.message)
    const nextIds = [...new Set([...answeredIds, question.id])]
    const reset = nextIds.length === CS2_QUIZ_POOL.length
    setAnsweredIds(reset ? [] : nextIds)
    setQuestion(getRandomUnansweredQuestion(reset ? [] : nextIds))
    setSelected(null)
    setSubmitted(false)
    toast.success("Doğru cevap! +15 puan kazandın.")
  }

  const finishCampaign = (id: string, reward: number) => {
    const result = completeCampaign(id, reward)
    toast[result.ok ? "success" : "error"](result.message)
  }

  return (
    <PageMotion className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
      <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="mb-2 text-xs font-bold uppercase tracking-[.25em] text-orange-400">Daily Rewards</p><h1 className="font-display text-4xl font-black">Görevler</h1><p className="mt-3 max-w-xl text-zinc-400">Her gün yeni bir CS2 sorusu cevapla, JTORE puanı kazan. Tüm havuz tamamlanınca sorular yenilenir.</p></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4"><div className="flex items-center justify-between gap-8 text-sm"><span className="text-zinc-400">Quiz ilerlemesi</span><strong>{answeredIds.length}/{CS2_QUIZ_POOL.length}</strong></div><div className="mt-3 h-2 w-48 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-orange-500 transition-all" style={{ width: `${progress}%` }} /></div></div>
      </section>
      <section className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
        <article className="rounded-3xl border border-orange-500/20 bg-orange-500/[.06] p-6 shadow-2xl shadow-orange-950/10">
          <div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-3"><span className="rounded-xl bg-orange-500/15 p-3 text-orange-400"><CircleHelp className="h-5 w-5" /></span><div><h2 className="text-xl font-bold">CS2 Günlük Quiz</h2><p className="text-sm text-zinc-400">+15 JTORE Puanı</p></div></div>{dailyDone && <CheckCircle2 className="text-emerald-400" />}</div>
          {!currentUser ? <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center text-zinc-400"><Lock className="mx-auto mb-3 h-6 w-6" />Quiz için giriş yapmalısın.</div> : dailyDone ? <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center text-emerald-300">Bugünkü ödülünü aldın. Yarın tekrar gel.</div> : <><h3 className="text-lg font-semibold leading-relaxed">{question.question}</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{question.options.map((option, index) => <button key={option} type="button" onClick={() => setSelected(index)} className={`rounded-2xl border p-4 text-left text-sm transition ${selected === index ? "border-orange-500 bg-orange-500/15 text-orange-100" : "border-white/10 bg-white/[.03] text-zinc-300 hover:border-white/25"}`}>{String.fromCharCode(65 + index)}. {option}</button>)}</div><motion.button whileTap={{ scale: 0.95 }} type="button" onClick={submitQuiz} className="btn-primary mt-6 w-full">{submitted ? "Tekrar Dene" : "Cevabı Gönder"}</motion.button></>}
        </article>
        <aside className="rounded-3xl border border-white/10 bg-white/[.04] p-6"><div className="mb-5 flex items-center gap-3"><Sparkles className="text-orange-400" /><h2 className="text-xl font-bold">Aktif Kampanyalar</h2></div>{activeCampaigns.length === 0 ? <p className="text-sm text-zinc-500">Henüz aktif kampanya yok.</p> : <div className="space-y-3">{activeCampaigns.map((campaign) => <div key={campaign.id} className="rounded-2xl border border-white/10 bg-black/15 p-4"><div className="flex items-start justify-between gap-3"><h3 className="font-semibold">{campaign.title}</h3><span className="text-xs font-bold text-orange-400">+{campaign.reward}</span></div><p className="mt-2 text-sm text-zinc-400">{campaign.description}</p><button type="button" onClick={() => finishCampaign(campaign.id, campaign.reward)} className="btn-secondary mt-4 w-full">Kampanyayı Tamamla</button></div>)}</div>}</aside>
      </section>
    </PageMotion>
  )
}
