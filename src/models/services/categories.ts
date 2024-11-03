import { all, insert, remove, update } from "../orm";

const TABLE_NAME = "finance_category";

export type Category = {
  id?: string;
  name: string;
  type: string;
};

export const getAllCategories = async () => {
  const { data, error } = await all(TABLE_NAME);
  if (error) throw error;
  return data;
};

export const createCategory = async (category: Category) => {
  const { data, error } = await insert<Category>(TABLE_NAME, category);
  if (error) throw error;
  return data;
};

export const updateCategory = async (category: Category, id: number) => {
  const { error } = await update<Category>(TABLE_NAME, category, id);
  if (error) throw error;
};

export const deleteCategory = async (id: number) => {
  const { error } = await remove(TABLE_NAME, id);
  if (error) throw error;
};
