import PropTypes from 'prop-types';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

export default function BasicTable({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className='w3-container w-[100%] bg-white rounded-3xl lg:px-8 md:px-5 p-0'>
      <input
        type='text'
        value={filtering}
        onChange={e => setFiltering(e.target.value)}
      />
      <table className='w3-table-all w-[100%]'>
        <thead className=' border-b-[2px] border-[#E6EFF5] rounded'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div className='text-[#718EBF] font-medium pb-1 flex '>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: '🔼',
                        desc: '🔽',
                      }[header.column.getIsSorted() ?? null]}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='border-b-[0.5px] border-[#E6EFF5] rounded'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className=' font-light py-3'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

BasicTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessorKey: PropTypes.string.isRequired,
      cell: PropTypes.func,
    })
  ).isRequired,
};
