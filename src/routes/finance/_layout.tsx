import Page from "@/components/Page";
import { Button, Divider, Group, Stack, Title } from "@mantine/core";
import { Link, Outlet } from "@tanstack/react-router";

const _layout = () => {
  const pages = [
    { name: "dashboard", href: "/finance" },
    {
      name: "Expenses",
      href: "/finance/expenses",
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
        <Group justify="space-between">
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
};

export default _layout;
