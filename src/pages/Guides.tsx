import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"
import AdSenseBanner from "../components/AdSenseBanner"
import { editorialArticles } from "../data/editorialArticles"
import { editorialArticleExpansions, editorialChecklists } from "../data/editorialArticleExpansions"

export default function Guides() {
  return (
    <div className="bg-zinc-950">
      <header id="top" className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(255,85,0,.16),transparent_35%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-orange-400"><ArrowLeft className="h-4 w-4" /> Back to JTORE</Link>
          <div className="mt-10 max-w-4xl">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[.24em] text-orange-400"><BookOpen className="h-4 w-4" /> JTORE Editorial</p>
            <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">Counter-Strike 2 Guides</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">A practical, independently written library for players who want steadier performance, clearer utility plans, stronger communication, and more deliberate competitive habits. These evergreen guides focus on principles you can test in your own matches rather than unverified patch claims.</p>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <nav aria-label="Guide contents" className="mb-10 rounded-2xl border border-white/10 bg-white/[.03] p-5">
          <h2 className="font-display text-lg font-bold text-white">In this guide library</h2>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">{editorialArticles.map((article, index) => <li key={article.title}><a className="text-sm text-zinc-400 transition hover:text-orange-400" href={`#guide-${index + 1}`}>{String(index + 1).padStart(2, "0")} · {article.title}</a></li>)}</ol>
        </nav>
        <div className="space-y-8">
          {editorialArticles.map((article, index) => {
            const Icon = article.icon
            return (
              <div key={article.title}>
                <article id={`guide-${index + 1}`} className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-xl shadow-black/10 sm:p-9">
                  <header className="flex items-start justify-between gap-4">
                    <div><span className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">{article.category} · GUIDE {String(index + 1).padStart(2, "0")}</span><h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">{article.title}</h2></div>
                    <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-orange-500" />
                  </header>
                  <p className="mt-5 text-base leading-8 text-zinc-300">{article.excerpt}</p>
                  <section className="mt-7"><h3 className="font-display text-lg font-bold text-zinc-100">A repeatable approach</h3><p className="mt-2 leading-8 text-zinc-400">{article.content}</p></section>
                  {editorialArticleExpansions[index].map((paragraph, paragraphIndex) => <section key={paragraphIndex} className="mt-6"><h3 className="font-display text-lg font-bold text-zinc-100">{["Preparation and context", "Applying the idea in a match", "Review and improvement"][paragraphIndex]}</h3><p className="mt-2 leading-8 text-zinc-400">{paragraph}</p></section>)}
                  <section className="mt-7 rounded-2xl border border-orange-500/20 bg-orange-500/[.05] p-5"><h3 className="font-display text-lg font-bold text-zinc-100">Practical checklist</h3><ul className="mt-3 grid gap-2 sm:grid-cols-2">{editorialChecklists[index].map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />{item}</li>)}</ul></section>
                  <footer className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-zinc-500"><span>JTORE Editorial · Practical CS2 learning</span><a href="#top" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Back to contents <ArrowRight className="h-4 w-4" /></a></footer>
                </article>
                {(index === 1 || index === 4 || index === 6) && <AdSenseBanner />}
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
