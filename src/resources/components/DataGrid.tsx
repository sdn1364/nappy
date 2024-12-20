/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";

const PAGE_SIZES = [10, 15, 20, 30, 50];

type DataGridProps = {
  records: any[];
  columns: any[];
  rowColor?: any;
  rowBackgroundColor?: any;
};

const DataGrid = ({
  records,
  columns,
  rowColor,
  rowBackgroundColor,
  ...rest
}: DataGridProps) => {
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
  }, [page, pageSize, records]);

  if (!records) return <div>Loading ...</div>;

  return (
    <DataTable
      rowColor={rowColor}
      rowBackgroundColor={rowBackgroundColor}
      height="90dvh"
      minHeight={400}
      withTableBorder
      withColumnBorders
      highlightOnHover
      pinLastColumn
      records={data}
      columns={columns}
      totalRecords={records.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={setPage}
      paginationSize="xs"
      loadingText="Loading..."
      noRecordsText="No records found"
      paginationText={({ from, to, totalRecords }) =>
        `Records ${from} - ${to} of ${totalRecords}`
      }
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
      {...rest}
    />
  );
};

export default DataGrid;
