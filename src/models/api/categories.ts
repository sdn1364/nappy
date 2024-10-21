import {
  Category,
  createCategory,
  deleteCategory,
  getAllCategories,
} from "@/models/services/categories";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../queryClient";

const queryKey = ["categories"];

export const useGetAllCategories = () => {
  return useQuery<Category[]>({
    queryKey,
    queryFn: getAllCategories,
  });
};

export const useSaveCategory = () => {
  return useMutation({
    mutationFn: (data: Category) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: (id: number) => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
