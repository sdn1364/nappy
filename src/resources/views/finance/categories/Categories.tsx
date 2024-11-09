import { formattedDate } from "@/lib/dayjs";
import {
  useDeleteCategory,
  useGetAllCategories,
} from "@/models/api/categories";
import DataGrid from "@/resources/components/DataGrid";
import DataGridActions from "@/resources/components/DataGridActions";
import Loading from "@/resources/components/Loading";
import Modal from "@/resources/components/Modal";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import NewCategoryForm from "./CategoryForm";

const Categories = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { data, isPending } = useGetAllCategories();

  const [editing, setEditing] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const { mutate: deleteCategory, isPending: deleteIsPending } =
    useDeleteCategory();

  if (isPending) return <Loading />;

  const columns = [
    {
      accessor: "index",
      title: "#",
      width: 50,
      textAlign: "center",
      render: (record: any) => data.indexOf(record) + 1,
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
          variant="light"
          onClick={open}
          leftSection={<IconPlus size="1rem" />}
        >
          New
        </Button>
      ),
      width: 100,
      textAlign: "center",
      render: ({ isDefault, id }: { isDefault: boolean; id: string }) => (
        <DataGridActions
          loading={deleteIsPending && isDeleting === id}
          onDelete={() => {
            deleteCategory(id);
            setIsDeleting(id);
          }}
          onEdit={() => {
            setEditing(id);
            open();
          }}
          disabled={{ edit: isDefault, delete: isDefault }}
        />
      ),
    },
  ];

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={editing ? "Edit Category" : "New Category"}
      >
        <NewCategoryForm editing={editing} />
      </Modal>

      <DataGrid
        rowColor={({ type }: { type: string }) => {
          if (type === "expense") return { dark: "red.5", light: "red.9" };
          if (type === "income") return { dark: "blue.5", light: "blue.9" };
        }}
        rowBackgroundColor={({ type }: { type: string }) => {
          if (type === "expense") return { dark: "red.5", light: "red.9" };
          if (type === "income") return { dark: "blue.5", light: "blue.9" };
        }}
        records={data ?? []}
        columns={columns}
      />
    </>
  );
};

export default Categories;
