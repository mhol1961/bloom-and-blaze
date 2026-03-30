import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ooaolhxjtaljsqwfnyov.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vYW9saHhqdGFsanNxd2ZueW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxOTU5MTgsImV4cCI6MjA3MDc3MTkxOH0.uRc1Dnhune9h5KknKZkNQZ1ojVIjzgVuLS3oUEvHxB0'

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Using fallback values.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to get current user
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) {
    console.error('Error getting user:', error)
    return null
  }
  return user
}
