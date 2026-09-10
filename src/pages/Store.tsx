import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ImageOff, PackageX, ShoppingCart } from "lucide-react"
import toast from "react-hot-toast"
import { useStore, type Category, type StoreItem } from "../store/useStore"
import { cn } from "../lib/cn"
import PointsBadge from "../components/PointsBadge"
import { PageMotion, motion } from "../components/MotionPrimitives"

type Filter = "All" | Category
const filters: Filter[] = ["All", "Weapon", "Case", "Sticker", "Gloves"]
const filterLabels: Record<Filter, string> = {
  All: "All",
  Weapon: "Weapons",
  Case: "Cases",
  Sticker: "Stickers",
  Gloves: "Gloves",
}

export default function Store() {
  const storeItems = useStore((s) => s.storeItems)
  const currentUser = useStore((s) => s.currentUser)
  const purchaseItem = useStore((s) => s.purchaseItem)
  const [active, setActive] = useState<Filter>("All")

  const visible = useMemo(
    () =>
      active === "All"
        ? storeItems
        : storeItems.filter((i) => i.category === active),
    [storeItems, active],
  )

  const handleBuy = (item: StoreItem) => {
    if (!currentUser) {
      toast.error("Please sign in first")
      return
    }
    const res = purchaseItem(item.id)
    if (res.ok) toast.success(res.message)
    else toast.error(res.message)
  }

  return (
    <PageMotion className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">
            Store
          </h1>
          <p className="mt-2 text-zinc-400">
            Collect legendary CS2 items with your JTORE Points.
          </p>
        </div>
        {currentUser ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">Bakiyen:</span>
            <PointsBadge points={currentUser.jtorePoints} />
          </div>
        ) : (
          <Link
            to="/auth"
            className="inline-flex w-fit items-center rounded-lg border border-orange-500/40 px-4 py-2 text-sm font-semibold text-orange-400 transition hover:bg-orange-500/10"
          >
            Sign in to purchase
          </Link>
        )}
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              active === f
                ? "border-orange-500 bg-orange-500 text-zinc-950"
                : "border-white/10 bg-white/5 text-zinc-300 hover:border-orange-500/40 hover:text-orange-400",
            )}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      {/* Grid / Empty */}
      {storeItems.length === 0 ? (
        <EmptyState message="No items are currently available." />
      ) : visible.length === 0 ? (
        <EmptyState message="No items found in this category." />
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onBuy={() => handleBuy(item)}
              canAfford={
                !!currentUser && currentUser.jtorePoints >= item.price
              }
            />
          ))}
        </div>
      )}
    </PageMotion>
  )
}

function ItemCard({
  item,
  onBuy,
  canAfford,
}: {
  item: StoreItem
  onBuy: () => void
  canAfford: boolean
}) {
  const [imgError, setImgError] = useState(false)
  const soldOut = item.stock <= 0

  return (
    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent transition hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
        {imgError ? (
          <div className="flex h-full items-center justify-center text-zinc-700">
            <ImageOff className="h-10 w-10" />
          </div>
        ) : (
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            crossOrigin="anonymous"
            onError={() => setImgError(true)}
            className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-110"
          />
        )}
        <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-zinc-950/80 px-2 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur">
          {item.category}
        </span>
        {soldOut ? (
          <span className="absolute right-3 top-3 rounded-md bg-red-500/90 px-2 py-1 text-[11px] font-bold text-white">
            SOLD OUT
          </span>
        ) : (
          <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-zinc-950/80 px-2 py-1 text-[11px] font-medium text-emerald-400 backdrop-blur">
            Stock: {item.stock}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 min-h-[2.5rem] font-semibold leading-snug">
          {item.name}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <PointsBadge points={item.price} />
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBuy}
          disabled={soldOut}
          className={cn(
            "mt-4 flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-bold transition",
            soldOut
              ? "cursor-not-allowed bg-zinc-800 text-zinc-500"
              : "bg-orange-500 text-zinc-950 hover:bg-orange-400 hover:glow-orange",
          )}
        >
          {soldOut ? (
            "SOLD OUT"
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" /> Purchase
            </>
          )}
        </motion.button>
        {!soldOut && !canAfford && (
          <p className="mt-2 text-center text-[11px] text-zinc-500">
            You do not have enough points for this item
          </p>
        )}
      </div>
    </motion.div>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] py-20 text-center">
      <PackageX className="h-14 w-14 text-zinc-700" />
      <p className="mt-4 text-lg font-medium text-zinc-400">{message}</p>
    </div>
  )
}
