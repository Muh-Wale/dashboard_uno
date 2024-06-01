import { DateTime } from 'luxon';
import { useMemo } from 'react';
import TransactionTable from '../components/TransactionTable';
import { loansData } from '../data/dummy';

const LoanData = () => {
    const data = useMemo(() => loansData, []);

    const movieColumns = [
        {
        header: 'SL No',
        accessorKey: 'id',
        },
        {
        header: 'Loan Money',
        accessorKey: 'loanmoney',
        },
        {
        header: 'Left To Repay',
        accessorKey: 'lefttorepay',
        },
        {
        header: 'Duration',
        accessorKey: 'duration',
        },
        {
            header: 'Interest Rate',
            accessorKey: 'interestrate',
        },
        {
            header: 'Installment',
            accessorKey: 'installmentno',
        },
        {
            header: 'Repay',
            accessorKey: 'repay',
        },
    ];

    return (
        <section className=' p-5 mt-14 md:mt-0'>
            <h1 className=' font-semibold text-2xl'>Active Loans Overview</h1>
            <TransactionTable data={data} columns={movieColumns} />
        </section>
    );
};

export default LoanData;
