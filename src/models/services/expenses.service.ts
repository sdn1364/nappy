import { all } from "../orm";
import { supabase } from "../supabase_client";

const TABLE_NAME = "transactions";

export type Expense = {
  id?: string;
  description: string;
  account: string;
  type?: "expense";
  date: Date;
  category: string;
  is_mine?: boolean;
  is_private: boolean;
};

export const getAllExpenses = async () => {
  const { data, error } = await all(
    TABLE_NAME,
    [
      {
        field: "type",
        value: "expense",
      },
    ],
    ["finance_account (id, name, color)", "finance_category (id, name)"]
  );

  if (error) throw error;
  return data;
};

export const createExpense = async (expense: Expense) => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(expense)
    .single();

  if (error) throw error;
  return data;
};

export const sumExpense = async () => {
  const { data, error } = await supabase.rpc("expense_sum");
  if (error) throw error;
  return data;
};
