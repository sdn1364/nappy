import { Button, Divider, Group } from "@mantine/core";
import { Link, useLocation } from "@tanstack/react-router";
import { Route } from "./HeaderWithMenu";

const TopMenu = ({ routes }: { routes: Route[] }) => {
  const { pathname } = useLocation();

  return (
    <Group gap="xs">
      {routes.map((p, i) => {
        if (!p) return <Divider key={i} orientation="vertical" />;
        return (
          <Button
            key={i}
            variant="subtle"
            size="compact-xs"
            component={Link}
            to={p.href}
            disabled={pathname === p.href}
          >
            {p.name}
          </Button>
        );
      })}
    </Group>
  );
};

export default TopMenu;
