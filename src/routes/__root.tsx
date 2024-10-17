import MainMenu from "@/resources/components/MainMenu";
import { Flex } from "@mantine/core";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <Flex direction="row" h="100vh">
        <MainMenu />
        <Outlet />
      </Flex>
      <TanStackRouterDevtools />
    </>
  ),
});
