import { ActionIcon, Group } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

const FinanceExpenses = () => {
  return (
    <div>
      <DataTable
        withTableBorder
        borderRadius="sm"
        withColumnBorders
        striped
        highlightOnHover
        records={[
          { id: 1, name: "Test" },
          { id: 2, name: "Test 1" },
          { id: 3, name: "Test 2" },
        ]}
        columns={[
          { accessor: "id", width: 40, textAlign: "center", title: "#" },
          { accessor: "name" },
          {
            accessor: "",
            width: 80,
            textAlign: "center",
            render: () => (
              <Group gap={4} justify="right" wrap="nowrap">
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
    </div>
  );
};

export default FinanceExpenses;
