import { useGetAllCategories } from "@/api/categories";
import DataGrid from "@/resources/components/DataGrid";
import Loading from "@/resources/components/Loading";

const Categories = () => {
  const { data, isPending } = useGetAllCategories();

  if (isPending) return <Loading />;

  console.log(data);

  return (
    <>
      <DataGrid
        records={data ?? []}
        columns={[{ accessor: "id", title: "#" }]}
      />
    </>
  );
};

export default Categories;
