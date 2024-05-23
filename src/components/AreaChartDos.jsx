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
import { InvestmentAreaChartUno } from '../data/dummy'; // Adjust the path to where your data is located
import { useStateContext } from '../contexts/ContextProvider';

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

const AreaChartDos = () => {
    const { activeMenu } = useStateContext();
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false  // Hide the grid line on the x-axis
                },
            },
            y: {
                beginAtZero: true,
                stepSize: 10000,
                ticks: {
                    callback: function(value) {
                        return '$' + value.toLocaleString(); // Formats the y-axis labels as dollars
                    }
                }
            },
        }
    };

    const data = {
        ...InvestmentAreaChartUno,
        datasets: InvestmentAreaChartUno.datasets.map(dataset => ({
            ...dataset,
        }))
    };

    return (
        <div className={`xs:h-44 sm:h-44 w-full ${activeMenu ? ' md:h-fit xl:h-72 ' : 'md:h-40 lg:h-52 xl:h-72 '}`}>
            <Line options={options} data={data} className='h-full w-full' />
        </div>
    );
};

export default AreaChartDos;
