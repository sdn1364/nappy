import { getAllCategories } from "@/services/categories";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategories = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  return { ...query };
};
