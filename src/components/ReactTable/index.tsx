import React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { useTable, useExpanded } from 'react-table';
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from "@tanstack/react-table";

import {
  Column,
  Table,
  ExpandedState,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
} from '@tanstack/react-table'

type ReactTableProps<D extends unknown> = {
  data: D[];
  // columns: ColumnDef<D, string>[];
  columns: any,
  headerProps?: {};
  bodyProps?: {};
  rowDataProps?: { className: string };

  [x: string]: any;
};


const ReactTable = <D extends unknown>({
  columns,
  data = [],
  headerProps = {},
  bodyProps = {},
  className = "bg-white",
  rowDataProps = { className: "" },

  ...restConfig
}: ReactTableProps<D>) => {
  const [expanded, setExpanded] = React.useState<ExpandedState>({})

  const tableConfig = {
    columns,
    data,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: row => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...restConfig,
  };

  const table = useReactTable(tableConfig);

  // Render the UI for your table
  return (
    <table className={className} style={{ width: '70%' }}>
      <thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th style={header ? {} : { border: 'none' }} key={header.id} {...header.column.columnDef?.meta}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...bodyProps}>
        {table.getRowModel().rows.map((row) => (
          <tr onClick={() => console.info(row)} {...rowDataProps} className={`${rowDataProps?.className}`} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {/* <pre>{JSON.stringify(expanded, null, 2)}</pre> */}
    </table>

  );
};

export { ReactTable };
