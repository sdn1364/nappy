import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createExpense, Expense, getAllExpenses } from "../services/expenses";

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
