import { formattedDate } from "@/lib/dayjs";
import DataGrid from "@/resources/components/DataGrid";
import DataGridActions from "@/resources/components/DataGridActions";
import NewExpenseForm from "@/resources/views/finance/expenses/NewExpenseForm";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import dayjs from "dayjs";

const FinanceExpenses = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        opened={opened}
        onClose={close}
        title="New Expense"
        size="xs"
      >
        <NewExpenseForm />
      </Modal>
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
            render: ({ created_at }: { created_at: Date }) =>
              formattedDate(created_at),
            width: 130,
          },
          {
            accessor: "",
            title: (
              <Button
                size="compact-xs"
                s
                variant="light"
                onClick={open}
                leftSection={<IconPlus size="1rem" />}
              >
                New
              </Button>
            ),
            width: 100,
            textAlign: "center",
            render: () => <DataGridActions />,
          },
        ]}
      />
    </>
  );
};

export default FinanceExpenses;
