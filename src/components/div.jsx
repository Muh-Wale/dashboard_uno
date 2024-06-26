<div className=' xl:h-80 w-full'>
    <Bar options={options} data={DashboardBar} className=" h-full w-full"/>
</div>

<div className=' w-fit md:w-fit xl:w-fit bg-white p-2 xl:p-5 rounded-2xl my-4'>
<BarChart/>
</div>

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
import { DashboardBar } from '../data/dummy';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
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

    const data = {
        ...DashboardBar,
        datasets: DashboardBar.datasets.map(dataset => ({
            ...dataset,
            barThickness: 15  // Adjust the bar thickness as needed
        }))
    };

    return (
        <div className=' xs:h-44 sm:h-44 w-full md:h-[300px]'>
            <Bar options={options} data={data}  className='h-full w-full'/>
        </div>
    )
}

export default BarChart
