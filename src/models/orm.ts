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
        query = query.eq(f.field, f.value).order("created_at");
      }
    });
  }

  return query;
};

export const insert = async <T>(table: string, data: T) =>
  supabase.from(table).insert(data).single();

export const update = async <T>(table: string, data: T & { id: string }) =>
  supabase.from(table).update(data).eq("id", data?.id);

export const remove = async (table: string, id: string) =>
  supabase.from(table).delete().eq("id", id);

export const allByField = async (table: string) =>
  supabase.from(table).select("*");

export const selectOneById = async (table: string, id: string) =>
  supabase.from(table).select().limit(1).eq("id", id).single();
