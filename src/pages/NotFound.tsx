import { Link } from "react-router-dom"
import { Crosshair } from "lucide-react"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-28 text-center">
      <Crosshair className="h-16 w-16 text-orange-500/60" />
      <h1 className="mt-6 font-display text-6xl font-extrabold text-orange-500">
        404
      </h1>
      <p className="mt-3 text-xl font-semibold">Page not found</p>
      <p className="mt-2 text-zinc-400">
        The page may have moved or never existed.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-bold text-zinc-950 transition hover:bg-orange-400 hover:glow-orange"
      >
        Back to Home
      </Link>
    </div>
  )
}
