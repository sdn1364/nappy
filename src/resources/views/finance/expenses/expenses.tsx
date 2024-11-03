import { formattedDate } from "@/lib/dayjs";
import { useGetAllExpenses } from "@/models/api/expenses";
import DataGrid from "@/resources/components/DataGrid";
import DataGridActions from "@/resources/components/DataGridActions";
import Loading from "@/resources/components/Loading";
import NewExpenseForm from "@/resources/views/finance/expenses/NewExpenseForm";
import {
  Box,
  Button,
  ColorSwatch,
  Group,
  Modal,
  rem,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCurrencyDollar, IconPlus } from "@tabler/icons-react";

const FinanceExpenses = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { data, isPending } = useGetAllExpenses();

  if (isPending) return <Loading />;

  const columns = [
    {
      accessor: "index",
      title: "#",
      width: 50,
      textAlign: "center",
      render: (record: any) => data!.indexOf(record) + 1,
    },
    { accessor: "description", title: "Description" },
    {
      accessor: "finance_category.name",
      title: "Category",
      textAlign: "center",
      width: 150,
    },
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
    {
      accessor: "date",
      textAlign: "center",
      title: "Created",
      render: ({ date }: { date: Date }) => formattedDate(date),
      width: 120,
    },
    {
      accessor: "finance_account.name",
      title: "Account",
      textAlign: "center",
      width: 150,
      render: ({ finance_account }) => {
        return (
          <Group gap="xs" justify="center">
            <ColorSwatch size={15} color={finance_account.color} />
            <Text>{finance_account.name}</Text>
          </Group>
        );
      },
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
      render: ({ isDefault, id }: { isDefault: boolean; id: number }) => (
        <DataGridActions />
      ),
    },
  ];

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
      <DataGrid records={data ?? []} columns={columns} />
    </>
  );
};

export default FinanceExpenses;
