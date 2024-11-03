import {
  Category,
  createCategory,
  deleteCategory,
  getAllCategories,
} from "@/models/services/categories";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const queryKey = ["categories"];

export const useGetAllCategories = () => {
  return useQuery<Category[]>({
    queryKey,
    queryFn: getAllCategories,
  });
};

export const useSaveCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey });
    },
    onError: (error) => {
      console.error("Creating category failed:", error);
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      queryClient.refetchQueries({ queryKey });
    },
    onError: (error) => {
      console.error("Deleting failed:", error);
    },
  });
};
