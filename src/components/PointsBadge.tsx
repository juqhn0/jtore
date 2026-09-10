import { Coins } from "lucide-react"
import { cn } from "../lib/cn"

export default function PointsBadge({
  points,
  className,
}: {
  points: number
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1.5 text-sm font-semibold text-orange-400",
        className,
      )}
    >
      <Coins className="h-4 w-4 shrink-0" strokeWidth={2.4} />
      <span className="tabular-nums">{points.toLocaleString("tr-TR")}</span>
    </span>
  )
}
