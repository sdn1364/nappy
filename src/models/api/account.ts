import { useQuery } from "@tanstack/react-query";
import { getAllAccounts } from "../services/account.data";

const queryKey = ["accounts"];

export const useGetAllAccounts = () => {
  return useQuery({
    queryKey,
    queryFn: getAllAccounts,
  });
};
