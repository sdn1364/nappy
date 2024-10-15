import MainMenu from "@/components/MainMenu";
import { Flex } from "@mantine/core";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

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
