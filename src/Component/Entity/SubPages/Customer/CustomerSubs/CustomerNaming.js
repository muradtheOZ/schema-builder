import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../../../../Columns";
import mock_data from "../../../../mock_data.json";

const CustomerNaming = () => {
  const colmuns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => mock_data, []);

  const tableInstance = useTable({
    colmuns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}> {column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                  {
                      row.cells.map((cell)=>{
                        <td  {...cell.getCellProps()}> {cell.render("Cell")}</td>

                      })}
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerNaming;
