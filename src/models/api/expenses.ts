import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createExpense,
  Expense,
  getAllExpenses,
  sumExpense,
} from "../services/expenses.data";

const queryKey = ["expenses"];

export const useGetAllExpenses = () => {
  return useQuery<Expense[]>({
    queryKey,
    queryFn: getAllExpenses,
  });
};

export const useCreateExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createExpense,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey });
    },
    onError: (error) => {
      console.error("Creating expense failed", error);
    },
  });
};

export const useSumAllExpenses = () => {
  return useQuery<number>({
    queryKey: ["expenses_sum"],
    queryFn: sumExpense,
  });
};
