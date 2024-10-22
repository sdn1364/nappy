import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Stack,
  Tooltip,
} from "@mantine/core";
import {
  IconHome,
  IconHomeDollar,
  IconSettings,
  IconSquareCheck,
  IconStopwatch,
} from "@tabler/icons-react";
import { Link, useLocation } from "@tanstack/react-router";
import ThemeToggle from "./theme-toggle";

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
    <Box
      mah="100vh"
      w={50}
      py="md"
      style={{
        borderRight:
          "1px solid light-dark(var(--mantine-color-dark-0),var(--mantine-color-dark-9))",
      }}
    >
      <Stack align="center" gap="xs">
        <Avatar
          size="sm"
          src="https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F70a23294beb91b4ad5a439e2c6ea5a6d.png&w=280&q=75"
        ></Avatar>
        <Divider w="40%" />
        {menus.map((m, i) => {
          if (!m) {
            return <Divider w="40%" key={i} />;
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
        <ThemeToggle />
      </Stack>
    </Box>
  );
};

export default MainMenu;
