import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBjJKGHI9dtephq0VTt9mTQFEiqR2veSsQ",
  authDomain: "jtore-a114e.firebaseapp.com",
  projectId: "jtore-a114e",
  storageBucket: "jtore-a114e.firebasestorage.app",
  messagingSenderId: "178303485022",
  appId: "1:178303485022:web:98b2a4a6ffe340b1d8e0cf",
  measurementId: "G-ENM4CELLCK",
}

export const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
export const firestore = getFirestore(app)
export const isFirebaseConfigured = true
export default app
