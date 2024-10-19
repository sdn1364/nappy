import { supabase } from "@/api/supabase_client";

export const getAllCategories = async () => {
  const { data, error } = await supabase.from("finance_category").select("*");
  if (error) throw error;
  return data;
};
