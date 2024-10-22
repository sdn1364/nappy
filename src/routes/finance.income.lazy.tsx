import Incomes from "@/resources/views/finance/income/incomes";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/finance/income")({
  component: Incomes,
});
