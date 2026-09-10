import { Navigate, useLocation } from "react-router-dom"
import { useStore } from "../store/useStore"

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const currentUser = useStore((state) => state.currentUser)
  const location = useLocation()
  if (!currentUser) return <Navigate to="/auth" replace state={{ from: location.pathname }} />
  return <>{children}</>
}
