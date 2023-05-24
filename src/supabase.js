import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ihfbixlasyxinwhlkizu.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZmJpeGxhc3l4aW53aGxraXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NjU1MzksImV4cCI6MTk5NzI0MTUzOX0.wj0mEOArlF0yYODSUETvxGi2vS43a7_49DZICZWhZHQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
