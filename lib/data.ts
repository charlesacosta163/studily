import { supabase } from "./supabaseClient";

export async function getAssignments() {
    try {

        const { data, error } = await supabase
            .from('assignments')
            .select()

            return data
    } catch(err) {

    }
}
