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

    return (
        <div>
            <Line options={options} data={DashboardAreaChart} className=" w-fit lg:w-full max-w-[350px] lg:max-w-2xl h-96"/>
        </div>
    );
};

export default AreaChart;
