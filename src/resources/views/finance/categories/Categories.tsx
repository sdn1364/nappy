import { formattedDate } from "@/lib/dayjs";
import {
  useDeleteCategory,
  useGetAllCategories,
} from "@/models/api/categories";
import DataGrid from "@/resources/components/DataGrid";
import DataGridActions from "@/resources/components/DataGridActions";
import Loading from "@/resources/components/Loading";
import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import NewCategoryForm from "./NewCategoryForm";

const Categories = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { data, isPending } = useGetAllCategories();
  const { mutate: deleteCategory } = useDeleteCategory();

  if (isPending) return <Loading />;

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        title="New Category"
      >
        <NewCategoryForm />
      </Drawer>
      <DataGrid
        rowColor={({ type }: { type: string }) => {
          if (type === "expense") return { dark: "red.5", light: "red.9" };
          if (type === "income") return { dark: "blue.5", light: "blue.9" };
        }}
        records={data ?? []}
        columns={[
          {
            accessor: "index",
            title: "#",
            width: 50,
            textAlign: "center",
            render: (record) => data.indexOf(record) + 1,
          },
          { accessor: "name", title: "Name" },
          {
            accessor: "created_at",
            textAlign: "center",
            title: "Created",
            render: ({ created_at }: { created_at: Date }) =>
              formattedDate(created_at),
            width: 120,
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
            width: "0%",
            textAlign: "center",
            render: ({ isDefault, id }: { isDefault: boolean; id: number }) => (
              <DataGridActions
                onDelete={() => deleteCategory(id)}
                disabled={{ edit: isDefault, delete: isDefault }}
              />
            ),
          },
        ]}
      />
    </>
  );
};

export default Categories;
