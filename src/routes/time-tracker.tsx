import TimeTrackerDashboard from "@/resources/views/time-tracker/Dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/time-tracker")({
  component: TimeTrackerDashboard,
});
