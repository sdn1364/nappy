import { formattedDate } from "@/lib/dayjs";
import DataGrid from "@/resources/components/DataGrid";
import DataGridActions from "@/resources/components/DataGridActions";
import { Box, Button, Modal, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCurrencyDollar, IconPlus } from "@tabler/icons-react";
import dayjs from "dayjs";
import NewIncomeForm from "./NewIncomeForm";

const Incomes = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        title="New Income"
        size="xs"
        opened={opened}
        onClose={close}
      >
        <NewIncomeForm />
      </Modal>
      <DataGrid
        records={[...Array(50)].map((_, i) => ({
          id: i + 1,
          name: `test ${i + 1}`,
          amount: "21.22",
          category: `cat ${i + 1}`,
          description: "lorem",
          date: dayjs(),
        }))}
        columns={[
          { accessor: "id", width: 40, textAlign: "center", title: "#" },
          { accessor: "name" },
          {
            accessor: "amount",
            width: 130,
            textAlign: "center",
            render: ({ amount }: { amount: string }) => (
              <Box component="span">
                <IconCurrencyDollar
                  style={{
                    width: rem("14px"),
                    height: "auto",
                    verticalAlign: rem("-1.5px"),
                    marginRight: rem("2px"),
                  }}
                />
                <span>{amount}</span>
              </Box>
            ),
          },
          { accessor: "category", textAlign: "center", width: 130 },
          { accessor: "Account", textAlign: "center", width: 100 },
          {
            accessor: "created_at",
            textAlign: "center",
            title: "Created",
            render: ({ date }: { date: Date }) => formattedDate(date),
            width: 130,
          },
          {
            accessor: "",
            title: (
              <Button
                size="compact-xs"
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

export default Incomes;
