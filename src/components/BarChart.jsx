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
        }
    }
    return (
        <div>
            <Bar options={options} data={DashboardBar} className=" w-fit lg:w-full max-w-[320px] md:max-w-2xl 2xl:max-w-none h-96"/>
        </div>
    )
}

export default BarChart
