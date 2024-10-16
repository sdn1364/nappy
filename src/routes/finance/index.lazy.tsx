import Page from "@/components/Page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/finance/")({
  component: Finance,
});

function Finance() {
  return <Page>Dashboard</Page>;
}
