import { Navigate } from "react-router-dom"
import { type ReactNode, useEffect, useRef } from "react"
import toast from "react-hot-toast"
import { useStore, isSuperAdmin } from "../store/useStore"

export default function AdminRoute({ children }: { children: ReactNode }) { const user = useStore(s => s.currentUser); const warned = useRef(false); const allowed = isSuperAdmin(user); useEffect(() => { if (!allowed && !warned.current) { warned.current = true; toast.error("Unauthorized access") } }, [allowed]); return allowed ? <>{children}</> : <Navigate to="/" replace /> }
