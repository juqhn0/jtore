import { Link } from "react-router-dom"
import { Crosshair, ExternalLink } from "lucide-react"

function Supporter({ href, name, image, featured = false }: { href: string; name: string; image: string; featured?: boolean }) {
  return <a href={href} target="_blank" rel="noreferrer" className={`group flex items-center gap-3 rounded-2xl border px-3 py-2 transition hover:border-orange-500/50 hover:bg-orange-500/10 ${featured ? "border-orange-500/50 bg-orange-500/10 px-4 py-3 shadow-[0_0_22px_rgba(249,115,22,0.22)]" : "border-white/10 bg-white/[0.04]"}`}><img src={image} alt={`${name} YouTube profil fotoğrafı`} className={`${featured ? "h-14 w-14" : "h-10 w-10"} rounded-full border border-orange-500/50 object-cover`} loading="lazy" /><span className={`${featured ? "text-base" : "text-sm"} font-semibold text-zinc-200 group-hover:text-orange-300`}>{name}</span><ExternalLink className="h-3.5 w-3.5 text-zinc-500 group-hover:text-orange-400" /></a>
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 pt-10 sm:px-6"><p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Arkadaşlarımız ve destekçilerimiz</p><div className="supporter-marquee" aria-label="JTORE arkadaşları ve destekçileri"><div className="supporter-track">{[1, 2].map((copy) => <div className="flex shrink-0 items-center gap-5 px-3" key={copy}><Supporter href="https://youtube.com/@jerardokin" name="Jerardo Kin" image="https://unavatar.io/youtube/jerardokin" /><Supporter href="https://youtube.com/@v1xsan-s2g" name="V1xSan CS2" image="https://unavatar.io/youtube/v1xsan-s2g" /><Supporter href="https://youtube.com/@Juqhn" name="Juqhn · JTORE" image="https://unavatar.io/youtube/Juqhn" featured /><span className="mx-3 h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" /></div>)}</div></div></div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-500/50 bg-orange-500/10 text-orange-500">
            <Crosshair className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-extrabold">
            J<span className="text-orange-500">TORE</span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400"><Link className="transition hover:text-orange-400" to="/updates">CS2 Updates</Link><Link className="transition hover:text-orange-400" to="/about">Hakkımızda</Link><Link className="transition hover:text-orange-400" to="/faq">FAQ</Link></div>
        <p className="text-center text-sm text-zinc-500">
{new Date().getFullYear()} JTORE. Built with passion for the CS2 community. Not affiliated with Valve.
        </p>
      </div>
    </footer>
  )
}
