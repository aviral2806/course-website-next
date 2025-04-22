import { createClient } from "@supabase/supabase-js";

const supabaseProject = "https://fyszgqadbioycgyjqeju.supabase.co"
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabaseClient = createClient(supabaseProject, supabaseKey)