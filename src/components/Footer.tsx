import { Link } from "react-router-dom"
import { Crosshair } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-500/50 bg-orange-500/10 text-orange-500">
            <Crosshair className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-extrabold">
            J<span className="text-orange-500">TORE</span>
          </span>
        </Link>
        <p className="text-center text-sm text-zinc-500">
{new Date().getFullYear()} JTORE. Built with passion for the CS2 community. Not affiliated with Valve.
        </p>
      </div>
    </footer>
  )
}
