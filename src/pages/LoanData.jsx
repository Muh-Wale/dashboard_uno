import { DateTime } from 'luxon';
import { useMemo } from 'react';
import BasicTable from '../components/BasicTable';
import { movies } from '../data/dummy';

const LoanData = () => {
    const data = useMemo(() => movies, []);

    const movieColumns = [
        {
        header: 'ID',
        accessorKey: 'id',
        },
        {
        header: 'Name',
        accessorKey: 'name',
        },
        {
        header: 'Genre',
        accessorKey: 'genre',
        },
        {
        header: 'Rating',
        accessorKey: 'rating',
        },
    ];

    return (
        <div>
        <h1>React-table</h1>
        <BasicTable data={data} columns={movieColumns} />
        </div>
    );
};

export default LoanData;
