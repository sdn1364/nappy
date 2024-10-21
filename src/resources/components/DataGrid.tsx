/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";

const PAGE_SIZES = [10, 15, 20, 30, 50];

type DataGridProps = {
  records: any[];
  columns: any[];
  rowColor?: any;
};

const DataGrid = ({ records, columns, rowColor, ...rest }: DataGridProps) => {
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
