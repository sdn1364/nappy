import MainMenu from "@/components/MainMenu";
import { Flex } from "@mantine/core";
import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRoute({
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
