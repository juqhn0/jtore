import { Navigate, Link } from "react-router-dom"
import { useState } from "react"
import { ImageOff, Package, ShieldCheck, User } from "lucide-react"
import { useStore } from "../store/useStore"
import PointsBadge from "../components/PointsBadge"
import { PageMotion, motion } from "../components/MotionPrimitives"

export default function Profile() {
  const currentUser = useStore((s) => s.currentUser)

  if (!currentUser) return <Navigate to="/auth" replace />

  return (
    <PageMotion className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      {/* Header card */}
      <div className="flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 sm:flex-row sm:items-center sm:p-8">
        <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-500/40 bg-orange-500/10 text-orange-500">
          <User className="h-10 w-10" />
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-display text-2xl font-extrabold">
              {currentUser.email}
            </h1>
            {currentUser.role === "ADMIN" || currentUser.role === "SUPER_ADMIN" && (
              <span className="inline-flex items-center gap-1 rounded-md border border-orange-500/40 bg-orange-500/10 px-2 py-0.5 text-xs font-bold text-orange-400">
                <ShieldCheck className="h-3.5 w-3.5" /> ADMIN
              </span>
            )}
          </div>
          <p className="mt-1 text-sm capitalize text-zinc-400">
            Signed in with {currentUser.provider}
          </p>
        </div>
        <PointsBadge points={currentUser.jtorePoints} className="text-base" />
      </div>

      {/* Admin quick link */}
      {currentUser.role === "ADMIN" || currentUser.role === "SUPER_ADMIN" && (
        <Link
          to="/admin-hq"
          className="mt-6 flex items-center justify-between rounded-2xl border border-orange-500/30 bg-orange-500/[0.06] p-5 transition hover:bg-orange-500/10"
        >
          <span className="flex items-center gap-3 font-semibold text-orange-400">
            <ShieldCheck className="h-5 w-5" /> Gizli Admin Paneline Git
          </span>
          <span className="text-orange-400">→</span>
        </Link>
      )}

      {/* Inventory */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
          <Package className="h-6 w-6 text-orange-500" /> My Inventory
          <span className="text-base font-normal text-zinc-500">
            ({currentUser.inventory.length})
          </span>
        </h2>

        {currentUser.inventory.length === 0 ? (
          <div className="mt-6 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] py-16 text-center">
            <Package className="h-12 w-12 text-zinc-700" />
            <p className="mt-4 text-zinc-400">
              Your inventory is empty. Start shopping in the store!
            </p>
            <Link
              to="/store"
              className="mt-5 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-orange-400"
            >
              Go to Store
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {currentUser.inventory.map((inv) => (
              <InventoryCard key={inv.id} name={inv.name} image={inv.image} category={inv.category} />
            ))}
          </div>
        )}
      </div>
    </PageMotion>
  )
}

function InventoryCard({
  name,
  image,
  category,
}: {
  name: string
  image: string
  category: string
}) {
  const [err, setErr] = useState(false)
  return (
    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]">
      <div className="relative aspect-square bg-zinc-900">
        {err ? (
          <div className="flex h-full items-center justify-center text-zinc-700">
            <ImageOff className="h-8 w-8" />
          </div>
        ) : (
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            crossOrigin="anonymous"
            onError={() => setErr(true)}
            className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-110"
          />
        )}
        <span className="absolute left-2 top-2 rounded border border-white/10 bg-zinc-950/80 px-1.5 py-0.5 text-[10px] text-zinc-300">
          {category}
        </span>
      </div>
      <p className="line-clamp-2 p-3 text-sm font-medium">{name}</p>
    </motion.div>
  )
}
