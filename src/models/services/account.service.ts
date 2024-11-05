import { all, insert } from "../orm";

const TABLE_NAME = "finance_account";

export const getAllAccounts = async () => {
  const { data, error } = await all(TABLE_NAME);
  if (error) throw error;
  return data;
};

export const createAccount = async (account) => {
  const { data, error } = await insert(TABLE_NAME, account);
  if (error) throw error;
  return data;
};
