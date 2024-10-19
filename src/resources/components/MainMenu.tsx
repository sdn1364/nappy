import { ActionIcon, Stack, Tooltip } from "@mantine/core";
import {
  IconHome,
  IconHomeDollar,
  IconSquareCheck,
  IconStopwatch,
} from "@tabler/icons-react";
import { Link, useLocation } from "@tanstack/react-router";

const MainMenu = () => {
  const { pathname } = useLocation();
  const menus = [
    {
      name: "home",
      href: "/",
      icon: IconHome,
    },
    {
      name: "finance",
      href: "/finance",
      icon: IconHomeDollar,
    },
    {
      name: "time tracker",
      href: "/time-tracker",
      icon: IconStopwatch,
    },
    {
      name: "habit tracker",
      href: "/habit-tracker",
      icon: IconSquareCheck,
    },
  ];
  return (
    <Stack
      mah="100vh"
      w={50}
      py="md"
      justify="flex-start"
      align="center"
      gap="xs"
      style={{
        borderRight: "1px solid var(--mantine-color-dark-9)",
      }}
    >
      {menus.map(({ name, icon: Icon, href }) => (
        <Tooltip
          key={name}
          position="right"
          label={name.charAt(0)?.toUpperCase() + name.slice(1)}
        >
          <ActionIcon
            size="lg"
            variant="subtle"
            component={Link}
            to={href}
            disabled={pathname.includes(href)}
          >
            <Icon style={{ width: "70%", height: "70%" }} strokeWidth={1} />
          </ActionIcon>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default MainMenu;
