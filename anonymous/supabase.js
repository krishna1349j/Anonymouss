// Connect your Supabase project
const { createClient } = supabase;

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key'; // Use anon key from Supabase
const supabaseClient = createClient(supabaseUrl, supabaseKey);
