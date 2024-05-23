import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { TransactionsBar } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

/////

const BarChartDos = () => {
    const { isLargeScreen } = useStateContext();

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                align: "end",
            }
        },
        scales: {
            x: {
                // Configure the x-axis settings here
            },
            y: {
                // Configure the y-axis settings here
            }
        }
    };

    // Clone the TransactionsBar data to modify the barThickness
    const data = {
        ...TransactionsBar,
        datasets: TransactionsBar.datasets.map(dataset => ({
            ...dataset,
            barThickness: isLargeScreen ? 25 : 15 // Adjust the bar thickness as needed
        }))
    };

    return (
        <div className=' xs:h-44 sm:h-44 w-full md:h-56'>
            <Bar options={options} data={data} className='h-full w-full'/>
        </div>
    );
};

export default BarChartDos;
