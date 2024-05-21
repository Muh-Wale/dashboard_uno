import React from 'react'
import { Bar } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { AccountsBar } from '../data/dummy';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChartTres = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                align: "end",
            },
            title: {
                display: true,
                text: '$7,560 Debited & $5,420 Credited in this Week',
                position: "top",
                align: "start",
            },
        },
        scales: {
            x: {
                grid: {
                    display: false  // Hide the grid line on the x-axis
                },
                // Configure other x-axis settings here if needed
            },
            y: {
                display: false  // Hide the y-axis
            }
        }
    };

    const data = {
        ...AccountsBar,
        datasets: AccountsBar.datasets.map(dataset => ({
            ...dataset,
            barThickness: 20  // Adjust the bar thickness as needed
        }))
    };

    return (
        <div className='xs:h-44 sm:h-44 w-full md:h-[355px]'>
            <Bar options={options} data={data} className='h-full w-full cursor-pointer'/>
        </div>
    )
}

export default BarChartTres
