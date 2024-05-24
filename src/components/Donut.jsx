import React from 'react';
import { Pie } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { CreditcardPie } from '../data/dummy';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
);

const Donut = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                align: "start",
            }
        },
        cutout: '55%',
    };

    return (
        <div className=' w-full md:w-[280px] lg:w-[300px] h-full md:h-[237px] lg:h-[300px] m-auto'>
            <Pie options={options} data={CreditcardPie} />
        </div>
    );
};

export default Donut;
