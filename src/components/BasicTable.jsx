import PropTypes from 'prop-types';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { setSorting, setFiltering } from '../store/slices/uiSlice';
import { setIsMediumScreen } from '../store/slices/screenSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function BasicTable({ data, columns }) {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.ui.activeMenu);
  const filtering = useSelector((state) => state.ui.filtering);
  const sorting = useSelector((state) => state.ui.sorting);
  const isMediumScreen = useSelector((state) => state.screen.isMediumScreen);

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

  useEffect(() => {
    const handleResize = () => {
        dispatch(setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div className='w3-container w-[100%] bg-white rounded-3xl lg:p-8 md:p-5 p-4'>
      <div className='mb-3 hidden lg:block'>
        <input
          type='text'
          value={filtering}
          onChange={e => setFiltering(e.target.value)}
          className='placeholder:text-[#718EBF] border-[#718EBF] border-2 px-2 py-1 focus:outline-[#718EBF] rounded-xl w-2/5 xl:w-1/4'
        />
      </div>
      <table className='w3-table-all w-[100%]'>
        <thead className='border-b-[2px] border-[#E6EFF5] rounded'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={`
                    ${(header.column.columnDef.accessorKey !== 'loanmoney' && header.column.columnDef.accessorKey !== 'lefttorepay' && header.column.columnDef.accessorKey !== 'repay') ? (isMediumScreen && activeMenu ? 'hidden-sm' : 'hidden-md') : ''}
                  `}
                >
                  {header.isPlaceholder ? null : (
                    <div className='text-[#718EBF] font-medium pb-1 flex'>
                      {flexRender(header.column.columnDef.header, header.getContext())}
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
                <td
                  key={cell.id}
                  className={`font-light py-3
                    ${(cell.column.columnDef.accessorKey !== 'loanmoney' && cell.column.columnDef.accessorKey !== 'lefttorepay' && cell.column.columnDef.accessorKey !== 'repay') ? (isMediumScreen && activeMenu ? 'hidden-sm' : 'hidden-md') : ''}
                    ${cell.column.columnDef.accessorKey === 'repay' ? 'custom-repay-cell' : ''}
                  `}
                >
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

