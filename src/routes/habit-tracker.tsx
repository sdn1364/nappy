import Dashboard from "@/resources/views/habit-tracker/Dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/habit-tracker")({
  component: Dashboard,
});
