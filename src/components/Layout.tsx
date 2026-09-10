import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { AnnouncementBar, Navbar, Footer, MaintenanceGate, AdSlot } from "./PlatformChrome"

export default function Layout() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }) }, [pathname]); return <div className="flex min-h-screen flex-col bg-zinc-950"><AnnouncementBar /><Navbar /><main className="flex-1"><AdSlot /><MaintenanceGate><Outlet /></MaintenanceGate></main><AdSlot variant="sticky" /><Footer /></div> }
