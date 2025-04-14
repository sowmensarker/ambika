import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://prdncygaxhkdoagbucxy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByZG5jeWdheGhrZG9hZ2J1Y3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MDEyMTUsImV4cCI6MjA1ODQ3NzIxNX0.pybIOhzaVjPKpTuCZGQjSAGdld1v6WUf8-NPn3DdisA";
export const supabase = createClient(supabaseUrl, supabaseKey);
