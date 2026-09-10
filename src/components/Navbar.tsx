import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Crosshair, LogOut, Menu, ShieldCheck, User, X } from "lucide-react"
import toast from "react-hot-toast"
import { useStore } from "../store/useStore"
import { cn } from "../lib/cn"
import PointsBadge from "./PointsBadge"

const navLinks = [
  { to: "/store", label: "Store" },
  { to: "/tasks", label: "Tasks" },
  { to: "/plugins", label: "Plugins" },
]

export default function Navbar() {
  const navigate = useNavigate()
  const currentUser = useStore((s) => s.currentUser)
  const logout = useStore((s) => s.logout)
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setOpen(false)
    toast.success("Signed out successfully.")
    navigate("/")
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      isActive
        ? "text-orange-400"
        : "text-zinc-300 hover:text-white hover:bg-white/5",
    )

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-500/50 bg-orange-500/10 text-orange-500 transition group-hover:glow-orange">
              <Crosshair className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">
              J<span className="text-orange-500">TORE</span>
            </span>
          </Link>

          {/* Center links (desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right (desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            {currentUser ? (
              <>
                {currentUser.role === "SUPER_ADMIN" && (
                  <Link
                    to="/admin-hq"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-orange-500/30 px-3 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-500/10"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Admin
                  </Link>
                )}
                <PointsBadge points={currentUser.jtorePoints} />
                <Link
                  to="/profile"
                  title={currentUser.displayName || currentUser.email}
                  className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-orange-500/50 hover:text-orange-400"
                >
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt={currentUser.displayName || currentUser.email} className="h-full w-full object-cover" />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:text-red-400"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="inline-flex items-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-zinc-950 shadow-lg shadow-orange-500/20 transition hover:bg-orange-400 hover:glow-orange"
              >
                Register / Sign in
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {currentUser && (
              <div className="mb-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                <span className="truncate text-sm text-zinc-300">
                  {currentUser.email}
                </span>
                <PointsBadge points={currentUser.jtorePoints} />
              </div>
            )}
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-base font-medium",
                    isActive
                      ? "bg-orange-500/10 text-orange-400"
                      : "text-zinc-200 hover:bg-white/5",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}

            {currentUser ? (
              <>
                {currentUser.role === "SUPER_ADMIN" && (
                  <NavLink
                    to="/admin-hq"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-orange-400 hover:bg-orange-500/10"
                  >
                    Admin HQ
                  </NavLink>
                )}
                <NavLink
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/5"
                >
                  My Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="mt-1 rounded-lg px-3 py-3 text-left text-base font-medium text-red-400 hover:bg-red-500/10"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-orange-500 px-4 py-3 text-center text-base font-bold text-zinc-950"
              >
                Register / Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
