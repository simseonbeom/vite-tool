import { renderMemo, type MemoData } from "../card"
import { main } from "../main"
// import type { Database, Tables } from "../supabase/database.types"
import { supabase } from "../supabase/supabase"



export async function fetchMemo(){

  const {data, error} = await supabase.from('memo').select()

  
  // let a:Database['public']['Tables']['memo']['Row']
  // let a:Tables<'memo'>['priority']
 
  data && data.forEach((d)=>{
    renderMemo(main,d)
  })
}


