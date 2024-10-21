import { ActionIcon, Divider, Stack, Tooltip } from "@mantine/core";
import {
  IconHome,
  IconHomeDollar,
  IconSettings,
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
    undefined,
    {
      name: "settings",
      href: "/settings",
      icon: IconSettings,
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
      {menus.map((m, i) => {
        if (!m) {
          return <Divider key={i} />;
        }

        const { name, icon, href } = m;
        const Icon = icon;

        return (
          <Tooltip
            key={i}
            position="right"
            label={name!.charAt(0)?.toUpperCase() + name!.slice(1)}
          >
            <ActionIcon
              size="lg"
              variant="subtle"
              component={Link}
              to={href}
              disabled={pathname === href}
            >
              <Icon style={{ width: "70%", height: "70%" }} strokeWidth={1} />
            </ActionIcon>
          </Tooltip>
        );
      })}
    </Stack>
  );
};

export default MainMenu;
