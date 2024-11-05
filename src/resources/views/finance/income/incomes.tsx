import { formattedDate } from "@/lib/dayjs";
import DataGrid from "@/resources/components/DataGrid";
import DataGridActions from "@/resources/components/DataGridActions";
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
import dayjs from "dayjs";
import NewIncomeForm from "./NewIncomeForm";

const Incomes = () => {
  const [opened, { open, close }] = useDisclosure(false);
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
        columns={columns}
      />
    </>
  );
};

export default Incomes;
