import { createClient } from '@supabase/supabase-js'


const projectURL: any = process.env.REACT_APP_DB_URL
const projectAPIKey: any = process.env.REACT_APP_DB_API

export const supabase = createClient(projectURL, projectAPIKey)