import MainMenu from "@/resources/components/MainMenu";
import { Breadcrumb } from "@/resources/components/ui/breadcrumb";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <div className="h-screen flex flex-col">
        <MainMenu />
        <Breadcrumb></Breadcrumb>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
