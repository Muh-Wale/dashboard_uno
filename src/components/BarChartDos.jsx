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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChartDos = () => {
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
            barThickness: 20  // Adjust the bar thickness as needed
        }))
    };

    return (
        <div className=' '>
            <Bar options={options} data={data} className='h-full'/>
        </div>
    );
};

export default BarChartDos;
