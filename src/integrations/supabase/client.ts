// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wihtcqxiledpufidlufp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpaHRjcXhpbGVkcHVmaWRsdWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNjYwOTgsImV4cCI6MjA2MTk0MjA5OH0.CMn6O_iNz7zkT35U-_CN-QqaA0H5A_GAfNT3xJdkOqs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);