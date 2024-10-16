import Page from "@/components/Page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/finance/expenses")({
  component: Expenses,
});

function Expenses() {
  return <Page>Expenses</Page>;
}
