import Page from "@/resources/components/Page";
import { Button, Divider, Group, Stack, Title } from "@mantine/core";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";

export const Route = createFileRoute("/finance")({
  component: Finance,
});

function Finance() {
  const { pathname } = useLocation();

  const pages = [
    { name: "Dashboard", href: "/finance" },
    {
      name: "Expenses",
      href: "/finance/expense",
    },
    {
      name: "Income",
      href: "/finance/income",
    },
    {
      name: "Savings",
      href: "/finance/savings",
    },
    undefined, // add to create a divider
    {
      name: "Categories",
      href: "/finance/categories",
    },
    {
      name: "Accounts",
      href: "/finance/accounts",
    },
  ];

  return (
    <Page>
      <Stack>
        <Group justify="space-between" align="flex-start" mb="lg">
          <Title order={5}>Finances</Title>
          <Group gap="xs">
            {pages.map((p, i) => {
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
        </Group>
        <Outlet />
      </Stack>
    </Page>
  );
}
