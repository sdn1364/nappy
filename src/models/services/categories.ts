import { supabase } from "@/models/supabase_client";

const TABLE_NAME = "finance_category";
export type Category = {
  id?: string;
  name: string;
  type: string;
};

export const getAllCategories = async () => {
  const { data, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) throw error;
  return data;
};

export const createCategory = async (category: Category) => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(category)
    .single();
  if (error) throw error;
  return data;
};

export const deleteCategory = async (id: number) => {
  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);
  if (error) throw error;
};
