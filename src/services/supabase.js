import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gnkyxnhyapqjlhhvuptu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdua3l4bmh5YXBxamxoaHZ1cHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NTk1MjYsImV4cCI6MjAxOTQzNTUyNn0.4tvdhkbNz8yqAAgP11qL36sQpo_bcROSl-dw71giFyU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
