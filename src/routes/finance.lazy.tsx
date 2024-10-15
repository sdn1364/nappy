import Page from "@/components/Page";
import { Button, Divider, Group, Stack, Title } from "@mantine/core";
import { createLazyFileRoute, useParams } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/finance")({
  component: Finance,
});

function Finance() {
  const path = useParams({ strict: false });
  console.log(path);
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
              if (!p) return <Divider orientation="vertical" />;
              return (
                <Button key={i} variant="subtle" size="compact-xs">
                  {p.name}
                </Button>
              );
            })}
          </Group>
        </Group>
      </Stack>
    </Page>
  );
}
