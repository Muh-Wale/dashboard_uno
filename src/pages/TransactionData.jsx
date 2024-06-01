import { useMemo } from 'react';
import BasicTable from '../components/BasicTable';
import { transaction } from '../data/dummy';

const TransactionData = () => {
    const data = useMemo(() => transaction, []);

    const movieColumns = [
        {
            header: 'Description',
            accessorKey: 'description',
            cell: ({ row }) => (
                <div className="flex items-center">
                    <div className=' border-2 p-1 rounded-full text-[#718EBF] border-[#718EBF]'>
                        {row.original.EmployeeImage}
                    </div>
                    <span className="ml-2">{row.original.Name}</span>
                </div>
            ),
        },
        {
            header: 'Transaction ID',
            accessorKey: 'TransactionID',
        },
        {
            header: 'Type',
            accessorKey: 'Title',
        },
        {
            header: 'Card',
            accessorKey: 'Card',
        },
        {
            header: 'Date',
            accessorKey: 'Date',
        },
        {
            header: 'Amount',
            accessorKey: 'Amount',
            cell: ({ row }) => (
                <span style={{ color: row.original.Textcolor }}>
                {row.original.Amount}
                </span>
            ),
        },
        {
            header: 'Receipt',
            accessorKey: 'Receipt',
            cell: ({ row }) => (
                <button className='border rounded-full border-[#123288] text-[#123288] hover:text-[#1814F3] py-1 px-2'>
                    {row.original.Receipt}
                </button>
            ),
        },
    ];

    return (
        <div>
            <section className=' p-5 mt-14 md:mt-0'>
                <h1 className='font-semibold text-2xl'>Recent Transactions</h1>
                <BasicTable data={data} columns={movieColumns} />
            </section>
        </div>
    );
};

export default TransactionData;
