"use server";

import { supabase } from "./supabaseClient";

export async function addAssignment(formData: FormData) {
  try {
    const name = formData.get("assignment")?.toString();
    const date = formData.get("date")?.toString();

    if (!name || !date) return;

    console.log(name, date);

    // Directly insert data into Supabase
    const { error } = await supabase
      .from("assignments")
      .insert({ assignment_name: name, due_date: date });

    if (error) {
      console.error("Error adding assignment:", error.message);
      return;
    }

    console.log("Assignment added successfully");
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}
