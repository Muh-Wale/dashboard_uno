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
                align: "end",
            }
        },
        cutout: '50%',
    };

    return (
        <div>
            <Pie options={options} data={CreditcardPie} />
        </div>
    );
};

export default Donut;
