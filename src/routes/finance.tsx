import Finance from "@/resources/views/finance";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/finance")({
  component: Finance,
});
