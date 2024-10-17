import FinanceDashboard from "@/resources/views/finance/dashboard/dashboard";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/finance/")({
  component: FinanceDashboard,
});
