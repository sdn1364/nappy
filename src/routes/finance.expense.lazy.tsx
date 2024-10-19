import FinanceExpenses from "@/resources/views/finance/expenses/expenses";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/finance/expense")({
  component: () => <FinanceExpenses />,
});
