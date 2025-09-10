import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://hoptwsvqjzijrqxgzfgg.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvcHR3c3ZxanppanJxeGd6ZmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MDY4NzIsImV4cCI6MjA3MzA4Mjg3Mn0.OImpTeI8tRm-j6Pa6NskNu-lVC7Q3L4qMEf4ew2BcD4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormData = {
  name: string
  email: string
  phone?: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  const { error } = await supabase.from("contact").insert([data])

  if (error) {
    throw error
  }

  return { success: true }
}
