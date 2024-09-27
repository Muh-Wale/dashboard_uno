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
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

export default function TransactionTable({ data, columns }) {
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
        initialState: {
            pagination: {
                pageSize: 5, 
            },
        },
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
        <>
            <div className={`w3-container w-[100%] bg-white rounded-3xl ${activeMenu ? 'lg:p-8 p-4' : 'lg:p-8 md:p-2 p-4'}`}>
                <div className='mb-3 hidden lg:block'>
                    <input
                        type='text'
                        value={filtering}
                        onChange={e => dispatch(setFiltering(e.target.value))}
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
                                    ${(header.column.columnDef.accessorKey !== 'Amount' && header.column.columnDef.accessorKey !== 'description') ? (isMediumScreen && activeMenu ? 'hidden-sm' : 'hidden-md') : ''}
                                `}
                                >
                                {header.isPlaceholder ? null : (
                                    <div className='text-[#718EBF] font-semibold text-lg pb-1 flex'>
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
                                    className={` font-medium py-3 ${activeMenu ? ' text-base' : ' text-base md:text-sm lg:text-base'}
                                        ${(cell.column.columnDef.accessorKey !== 'Amount' && cell.column.columnDef.accessorKey !== 'description') ? (isMediumScreen && activeMenu ? 'hidden-sm' : 'hidden-md') : ''}
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

            <div className='flex justify-between items-center mt-4'>
                <div className='text-[#123288]'>
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </div>
                <div className='flex gap-6'>
                    <button
                        className='cursor-pointer flex items-center gap-1 text-[#123288]'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <FaLessThan />
                        Previous
                    </button>
                    <button
                        className='cursor-pointer flex items-center gap-1 text-[#123288]'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                        <FaGreaterThan/>
                    </button>
                </div>
            </div>
        </>
    );
}

TransactionTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            accessorKey: PropTypes.string.isRequired,
            cell: PropTypes.func,
        })
    ).isRequired,
};
