import DataGrid from "@/resources/components/DataGrid";
import NewExpenseForm from "@/resources/views/finance/expenses/NewExpenseForm";
import { ActionIcon, Button, Drawer, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import dayjs from "dayjs";

const FinanceExpenses = () => {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        title="New Expense"
      >
        <NewExpenseForm />
      </Drawer>
      <DataGrid
        records={[...Array(50)].map((_, i) => ({
          id: i + 1,
          name: `test ${i + 1}`,
          category: `cat ${i + 1}`,
          created_at: dayjs().format("MMM D YYYY"),
        }))}
        columns={[
          { accessor: "id", width: 40, textAlign: "center", title: "#" },
          { accessor: "name" },
          { accessor: "category", textAlign: "center", width: 130 },
          {
            accessor: "created_at",
            textAlign: "center",
            title: "Created",
            width: 130,
          },
          {
            accessor: "",
            title: (
              <Button
                size="compact-xs"
                variant="subtle"
                onClick={open}
                leftSection={<IconPlus size="1rem" />}
              >
                New
              </Button>
            ),
            width: 90,
            textAlign: "center",
            render: () => (
              <Group gap={4} justify="center" wrap="nowrap">
                <ActionIcon size="sm" variant="subtle" color="blue">
                  <IconEdit size={16} />
                </ActionIcon>
                <ActionIcon size="sm" variant="subtle" color="red">
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            ),
          },
        ]}
      />
    </>
  );
};

export default FinanceExpenses;
