import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { DashboardAreaChart } from '../data/dummy'; // Adjust the path to where your data is located

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const AreaChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                align: 'end'
            },
            title: {
                display: true,
                text: 'Sales Over Time',
            },
        }
    };

    const data = {
        ...DashboardAreaChart,
        datasets: DashboardAreaChart.datasets.map(dataset => ({
            ...dataset,
            barThickness: 20  // Adjust the bar thickness as needed
        }))
    };

    return (
        <div className=' xs:h-44 sm:h-44 w-full md:h-72'>
            <Line options={options} data={data} className='h-full w-full'/>
        </div>
    );
};

export default AreaChart;
