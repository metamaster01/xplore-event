// components/RegisterForm.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { createClient } from "@supabase/supabase-js"
// import SupabaseClient from "@supabase/supabase-js"
// import { supabase } from "@/lib/supabase"
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs" // optional if using auth-helpers; otherwise use your supabase client import
// import { Database } from "@/lib/types" // optional typed DB, if you have it
import { supabase } from "@/lib/supabase"; // <-- your existing client
import clsx from "clsx";

type UserType = "artist" | "club" | "promoter" | "influencer";

interface Prefill {
  userType?: UserType;
  name?: string;
  insta?: string;
  email?: string;
  city?: string;
  profession?: string;
  status?: "Student" | "Working" | "";
  collab?: string;
}

export default function RegisterForm({
  initialType,
}: {
  initialType?: UserType;
}) {
  const [open, setOpen] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [form, setForm] = useState<Prefill>({
    userType: initialType ?? "artist",
    name: "",
    insta: "",
    email: "",
    city: "",
    profession: "",
    status: "",
    collab: "",
  });

  // Example common profession options for select (editable)
  const professionOptions = [
    "DJ",
    "Singer",
    "Musician",
    "Photographer",
    "Venue Owner",
    "Event Manager",
    "PR / Marketing",
    "Other",
  ];

  useEffect(() => {
    if (initialType) {
      setForm((f) => ({ ...f, userType: initialType }));
    }
  }, [initialType]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  // quick client-side validation
  function validate() {
    setErrorMsg(null);
    if (!form.name?.trim()) return "Name is required.";
    if (!form.email?.trim()) return "Email is required.";
    // very simple email regex
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Enter a valid email.";
    if (!form.insta?.trim()) return "Instagram link/handle is required.";
    if (!form.city?.trim()) return "City is required.";
    if (form.userType !== "club" && !form.profession?.trim())
      return "Profession is required.";
    if (!form.status) return "Select Student or Working.";
    if (!form.collab?.trim()) return "Tell us how you'd like to collab.";
    return null;
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault?.();
    setSuccessMsg(null);
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      // your lib/supabase.ts should export supabase client; using it directly
      const { data, error } = await supabase.from("register-xplore").insert([
        {
          name: form.name,
          insta_link: form.insta,
          email: form.email,
          city: form.city,
          profession: form.userType === "club" ? null : form.profession,
          student_or_working: form.status,
          collab_details: form.collab,
          user_type: form.userType,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setSuccessMsg("Thanks! Your registration was submitted successfully.");
      setForm({
        userType: form.userType,
        name: "",
        insta: "",
        email: "",
        city: "",
        profession: "",
        status: "",
        collab: "",
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // small helper to change user type and auto-fill some example content (client-side)
  function chooseUserType(t: UserType) {
    setForm((f) => ({
      ...f,
      userType: t,
      // auto-fill some placeholders / suggestions — editable by user
      profession:
        t === "club"
          ? ""
          : f.profession ||
            (t === "artist"
              ? "DJ"
              : t === "promoter"
              ? "Event Manager"
              : "Content Creator"),
      collab: f.collab || `I want to collaborate as a ${t}.`,
    }));
    // ensure form is open
    setOpen(true);
    setSuccessMsg(null);
    setErrorMsg(null);
  }

  return (
    <div className="relative z-20">
      {/* Controls for choosing type (this can be placed anywhere) */}
      <div className="flex flex-wrap gap-3 mb-6">
        {(["artist", "club", "promoter", "influencer"] as UserType[]).map(
          (t) => (
            <button
              key={t}
              onClick={() => chooseUserType(t)}
              className={clsx(
                "px-4 py-2 rounded-full text-sm font-medium transition",
                form.userType === t
                  ? "bg-primary text-white shadow-md"
                  : "bg-white/6 text-white/90 hover:bg-white/10"
              )}
            >
              {t === "artist"
                ? "Artist"
                : t === "club"
                ? "Club"
                : t === "promoter"
                ? "Promoter"
                : "Influencer"}
            </button>
          )
        )}
      </div>

      {/* Slide-in form panel */}
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <motion.div
            key="form-panel"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="w-full md:w-[680px] bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl p-6 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    Register as{" "}
                    <span className="capitalize text-primary">
                      {form.userType}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill details below — no redirect, animated panel.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-sm px-3 py-1 rounded-md bg-white/6 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full rounded-lg border border-white/10 px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Insta */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Insta link / handle
                  </label>
                  <input
                    name="insta"
                    value={form.insta}
                    onChange={handleChange}
                    placeholder="@yourhandle or https://instagram.com/yourhandle"
                    className="w-full rounded-lg border border-white/10 px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* City */}
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    className="w-full rounded-lg border border-white/10 px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                </div>

                {/* Student / Working */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Student / Working
                  </label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 px-4 py-3 bg-black focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Working">Working</option>
                  </select>
                </div>
              </div>

              {/* Profession: hide for clubs */}
              {form.userType !== "club" && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Profession
                  </label>

                  <div className="flex gap-3">
                    <select
                      name="profession"
                      value={
                        professionOptions.includes(form.profession || "")
                          ? form.profession
                          : "Other"
                      }
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "Other") {
                          setForm((f) => ({ ...f, profession: "" }));
                        } else {
                          setForm((f) => ({ ...f, profession: val }));
                        }
                      }}
                      className="rounded-lg border border-black/20 px-4 py-3 bg-black  focus:outline-none focus:ring-2 focus:ring-primary transition w-1/2"
                    >
                      <option value="">Choose profession</option>
                      {professionOptions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>

                    {/* free text so user can type custom if Other */}
                    <input
                      name="profession"
                      value={form.profession}
                      onChange={handleChange}
                      placeholder="Or type your profession"
                      className="rounded-lg border border-white/10 px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition flex-1"
                    />
                  </div>
                </div>
              )}

              {/* How you wanna collab */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  How you want to collab with us
                </label>
                <textarea
                  name="collab"
                  value={form.collab}
                  onChange={handleChange}
                  rows={4}
                  placeholder="E.g., I can perform live sets, promote events, host giveaways..."
                  className="w-full rounded-lg border border-white/10 px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  required
                />
              </div>

              {/* Error / Success messages */}
              <div>
                {errorMsg && (
                  <div className="text-sm text-red-400">{errorMsg}</div>
                )}
                {successMsg && (
                  <div className="text-sm text-green-400">{successMsg}</div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  disabled={submitting}
                  className={clsx(
                    "px-5 py-3 rounded-lg font-medium transition",
                    submitting
                      ? "bg-primary/60 text-white cursor-wait"
                      : "bg-primary text-white hover:bg-primary/90"
                  )}
                >
                  {submitting ? "Submitting..." : "Submit Registration"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({
                      userType: form.userType,
                      name: "",
                      insta: "",
                      email: "",
                      city: "",
                      profession: "",
                      status: "",
                      collab: "",
                    });
                    setErrorMsg(null);
                    setSuccessMsg(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10"
                >
                  Reset
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
