import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/time-tracker")({
  component: () => <div>Hello /time!</div>,
});
