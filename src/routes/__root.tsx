import MainMenu from "@/components/MainMenu";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <MainMenu />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
