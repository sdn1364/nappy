import Categories from "@/resources/views/finance/categories/Categories";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/finance/categories")({
  component: Categories,
});
