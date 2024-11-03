import { supabase } from "./supabase_client";

export const all = async (
  table: string,
  fields?: Record<string, string>[],
  related?: string[]
) => {
  const relation = related?.join(", ");

  let query = supabase.from(table).select(relation ? `* , ${relation}` : "*");

  if (fields && fields.length > 0) {
    fields.forEach((f) => {
      if (f.field && f.value) {
        query = query.eq(f.field, f.value);
      }
    });
  }

  return query;
};

export const insert = async <T>(table: string, data: T) =>
  supabase.from(table).insert(data).single();

export const update = async <T>(table: string, data: T, id: number) =>
  supabase.from(table).update(data).eq("id", id);

export const remove = async (table: string, id: number) =>
  supabase.from(table).delete().eq("id", id);

export const allByField = async (table: string) =>
  supabase.from(table).select("*");
