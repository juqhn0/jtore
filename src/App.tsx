import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Layout from "./components/Layout"
import AdminRoute from "./components/AdminRoute"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Store from "./pages/Store"
import Tasks from "./pages/Tasks"
import Plugins from "./pages/Plugins"
import Profile from "./pages/Profile"
import AdminPanel from "./pages/AdminPanel"
import NotFound from "./pages/NotFound"

export default function App() { return <><Toaster position="top-right" toastOptions={{ style: { background: "#18181b", color: "#fff", border: "1px solid #3f3f46" } }} /><Routes><Route element={<Layout />}><Route path="/" element={<Home />} /><Route path="/store" element={<Store />} /><Route path="/tasks" element={<Tasks />} /><Route path="/plugins" element={<Plugins />} /><Route path="/profile" element={<Profile />} /><Route path="/admin-hq" element={<AdminRoute><AdminPanel /></AdminRoute>} /><Route path="*" element={<NotFound />} /></Route><Route path="/auth" element={<Auth />} /></Routes></> }
