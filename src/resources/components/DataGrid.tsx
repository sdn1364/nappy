import { MantineColor } from "@mantine/core";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { useEffect, useState } from "react";

const PAGE_SIZES = [10, 15, 20, 30, 50];

interface DataGridProps<T> {
  records: T[];
  columns: DataTableColumn;
  rowColor?: (
    record: T,
    index: number
  ) => MantineColor | undefined | { light: MantineColor; dark: MantineColor };
}

const DataGrid = <T,>({
  records,
  columns,
  rowColor,
  ...rest
}: DataGridProps<T>) => {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);

  const [page, setPage] = useState(1);
  const [data, setData] = useState(records.slice(0, pageSize));

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setData(records.slice(from, to));
  }, [page, pageSize]);

  if (!records) return <div>Loading ...</div>;

  return (
    <DataTable
      // height={records.length > 0 ? "auto" : 300}
      height="90dvh"
      minHeight={400}
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      pinLastColumn
      records={data}
      columns={columns}
      totalRecords={records.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      paginationSize="md"
      loadingText="Loading..."
      noRecordsText="No records found"
      paginationText={({ from, to, totalRecords }) =>
        `Records ${from} - ${to} of ${totalRecords}`
      }
      paginationActiveBackgroundColor="green"
      paginationActiveTextColor="#e6e348"
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
      rowColor={rowColor}
      {...rest}
    />
  );
};

export default DataGrid;
