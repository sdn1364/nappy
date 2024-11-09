import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "@/models/services/categories.data";
import {
  skipToken,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const queryKey = ["categories"];

export const useGetAllCategories = () => {
  return useQuery({
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
      await queryClient.refetchQueries({ queryKey });
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
    },
    onError: (error) => {
      console.error("Deleting failed:", error);
    },
  });
};

export const useGetCategoryById = (id: string | null) => {
  return useQuery({
    queryKey: [...queryKey, id],
    queryFn: id ? async () => await getCategoryById(id!) : skipToken,
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
