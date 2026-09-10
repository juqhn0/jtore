import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Crosshair, Eye, EyeOff, Loader2 } from "lucide-react"
import toast from "react-hot-toast"
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { firebaseAuth } from "../lib/firebase"
import { useStore } from "../store/useStore"
import { motion } from "../components/MotionPrimitives"

export default function Auth() {
  const navigate = useNavigate()
  const login = useStore((s) => s.login)
  const [mode, setMode] = useState<"login" | "register">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [busy, setBusy] = useState(false)

  const completeLogin = (firebaseUser: { uid: string; email: string | null; emailVerified?: boolean; displayName?: string | null; photoURL?: string | null }) => {
    if (!firebaseUser.email) throw new Error("No email address was returned by Firebase.")
    const isSuperAdmin = firebaseUser.email.toLowerCase() === "oyunbulucu300@gmail.com"
    if (!firebaseUser.emailVerified && !isSuperAdmin) {
      throw Object.assign(new Error("Email not verified"), { code: "auth/email-not-verified" })
    }
    const user = login(firebaseUser.email, "email", {
      id: firebaseUser.uid,
      displayName: firebaseUser.displayName || firebaseUser.email.split("@")[0],
      avatar: firebaseUser.photoURL,
      photoURL: firebaseUser.photoURL,
    })
    toast.success("Giriş başarılı.")
    navigate(user.role === "SUPER_ADMIN" ? "/admin-hq" : "/store")
  }

  const handleEmailAuth = async (event: React.FormEvent) => {
    event.preventDefault()
    if (busy) return
    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail) {
      toast.error("Geçerli bir e-posta adresi giriniz.")
      return
    }
    if (mode === "register" && !normalizedEmail.endsWith("@gmail.com")) {
      toast.error("Sadece @gmail.com uzantılı e-posta adresleri ile kayıt olabilirsiniz.")
      return
    }
    if (password.length < 8) {
      toast.error("Şifre en az 8 karakter olmalıdır.")
      return
    }
    setBusy(true)
    try {
      if (mode === "register") {
        const result = await createUserWithEmailAndPassword(firebaseAuth, normalizedEmail, password)
        await sendEmailVerification(result.user)
        await signOut(firebaseAuth)
        toast.success("Kayıt başarılı! Lütfen JTORE'a girmek için Gmail adresinize gönderilen doğrulama linkine tıklayın.", { duration: 7000 })
        setMode("login")
        setPassword("")
        return
      }

      const result = await signInWithEmailAndPassword(firebaseAuth, normalizedEmail, password)
      completeLogin(result.user)
    } catch (error) {
      const code = error && typeof error === "object" && "code" in error ? String((error as { code?: string }).code) : ""
      if (code === "auth/email-not-verified") {
        await signOut(firebaseAuth).catch(() => undefined)
      }
      const messages: Record<string, string> = {
        "auth/email-not-verified": "Giriş başarısız. Lütfen önce Gmail adresinize gönderilen onay linkine tıklayarak hesabınızı doğrulayın.",
        "auth/email-already-in-use": "Bu e-posta zaten kayıtlı. Siteyi görmek için Giriş Yap sekmesine geçip mevcut şifrenizi kullanın.",
        "auth/invalid-credential": "Incorrect email or password.",
        "auth/weak-password": "Şifre en az 8 karakter olmalıdır",
        "auth/invalid-email": "Enter a valid email address.",
        "auth/operation-not-allowed": "Enable the Email/Password provider in Firebase Console.",
      }
      toast.error(messages[code] || "Authentication failed.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4 py-12">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative w-full max-w-md">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-orange-400"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
          <div className="mb-7 flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/50 bg-orange-500/10 text-orange-500 glow-orange"><Crosshair className="h-7 w-7" strokeWidth={2.5} /></span>
            <h1 className="mt-4 font-display text-2xl font-extrabold">JTORE'a Giriş Yap</h1>
            <p className="mt-2 text-sm text-zinc-400">Use your real Firebase account to sign in securely.</p>
          </div>
          <div className="mb-4 grid grid-cols-2 rounded-xl border border-white/10 bg-white/[0.03] p-1">
            <button type="button" onClick={() => setMode("login")} className={`rounded-lg py-2 text-sm font-semibold ${mode === "login" ? "bg-orange-500 text-zinc-950" : "text-zinc-400"}`}>Giriş Yap</button>
            <button type="button" onClick={() => setMode("register")} className={`rounded-lg py-2 text-sm font-semibold ${mode === "register" ? "bg-orange-500 text-zinc-950" : "text-zinc-400"}`}>Kayıt Ol</button>
          </div>
          <form onSubmit={handleEmailAuth} className="space-y-4">
            <label className="block text-sm text-zinc-300">E-posta<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-white outline-none focus:border-orange-500" placeholder="ornek@mail.com" /></label>
            <label className="block text-sm text-zinc-300">Şifre<div className="relative mt-2"><input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 pr-11 text-white outline-none focus:border-orange-500" placeholder="En az 8 karakter" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" aria-label="Show or hide password">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div></label>
            <motion.button whileTap={{ scale: 0.95 }} type="submit" disabled={busy} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 font-bold text-zinc-950 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70">{busy && <Loader2 className="h-4 w-4 animate-spin" />}{mode === "login" ? "Giriş Yap" : "Kayıt Ol"}</motion.button>
          </form>
          <button type="button" disabled className="mt-3 flex h-11 w-full cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-zinc-500">Steam ile Giriş Yap (Yakında)</button>
        </div>
      </div>
    </div>
  )
}

