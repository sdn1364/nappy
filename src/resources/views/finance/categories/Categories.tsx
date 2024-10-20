import { useGetAllCategories } from "@/api/categories";
import { formattedDate } from "@/lib/dayjs";
import DataGrid from "@/resources/components/DataGrid";
import DataGridActions from "@/resources/components/DataGridActions";
import Loading from "@/resources/components/Loading";

const Categories = () => {
  const { data, isPending } = useGetAllCategories();

  if (isPending) return <Loading />;

  return (
    <>
      <DataGrid
        records={data ?? []}
        columns={[
          { accessor: "id", title: "#" },
          { accessor: "name", title: "Name" },
          {
            accessor: "created_at",
            textAlign: "center",
            title: "Created",
            render: ({ created_at }) => formattedDate(created_at),
            width: 130,
          },
          {
            accessor: "",
            width: 90,
            textAlign: "center",
            render: ({ isDefault }: { isDefault: boolean }) => (
              <DataGridActions disabled={{ edit: isDefault }} />
            ),
          },
        ]}
        rowBackgroundColor={({ type }: { type: string }) => {
          if (type === "expense") return { dark: "red.9", light: "red.1" };
          if (type === "income") return { dark: "green.9", light: "green.1" };
          if (type === "saving") return { dark: "blue.9", light: "blue.1" };
        }}
      />
    </>
  );
};

export default Categories;
