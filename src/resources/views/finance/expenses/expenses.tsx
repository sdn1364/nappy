import { formattedDate } from "@/lib/dayjs";
import DataGrid from "@/resources/components/DataGrid";
import DataGridActions from "@/resources/components/DataGridActions";
import NewExpenseForm from "@/resources/views/finance/expenses/NewExpenseForm";
import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
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
          created_at: dayjs(),
        }))}
        columns={[
          { accessor: "id", width: 40, textAlign: "center", title: "#" },
          { accessor: "name" },
          { accessor: "category", textAlign: "center", width: 130 },
          {
            accessor: "created_at",
            textAlign: "center",
            title: "Created",
            render: ({ created_at }) => formattedDate(created_at),
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
            render: () => <DataGridActions />,
          },
        ]}
      />
    </>
  );
};

export default FinanceExpenses;
