// app/register/[type]/page.tsx
"use client"

import React from "react"
import { useParams, useRouter } from "next/navigation"
import RegisterForm from "@/components/registerForm"
import Link from "next/link"
import { motion } from "framer-motion"

export default function RegisterPage() {
  const params = useParams() as { type?: string }
  const router = useRouter()
  const typeParam = (params?.type || "artist").toLowerCase()

  // normalize type - fallback to artist
  const allowed = ["artist", "club", "promoter", "influencer"]
  const normalized = allowed.includes(typeParam) ? (typeParam as any) : "artist"

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold">Register on Xplore</h1>
            <p className="text-muted-foreground max-w-xl">
              Quick registration panel. Choose one of the types on the right or open this page directly with
              <code className="ml-1 px-2 py-1 rounded bg-white/6 text-xs">/register/artist</code>, <code className="px-2 py-1 rounded bg-white/6 text-xs">/register/club</code>, etc.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/register/artist" className="px-4 py-2 rounded-full bg-white/6 hover:bg-white/10">
                Open Artist
              </Link>
              <Link href="/register/club" className="px-4 py-2 rounded-full bg-white/6 hover:bg-white/10">
                Open Club
              </Link>
              <Link href="/register/promoter" className="px-4 py-2 rounded-full bg-white/6 hover:bg-white/10">
                Open Promoter
              </Link>
              <Link href="/register/influencer" className="px-4 py-2 rounded-full bg-white/6 hover:bg-white/10">
                Open Influencer
              </Link>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/3 border border-white/6">
              <p className="text-sm">
                Tip: When the form opens it will auto-fill suggested values for the selected type. You can modify anything
                before submit. Clubs do not need a profession field (hidden automatically).
              </p>
            </div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <RegisterForm initialType={normalized} />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
