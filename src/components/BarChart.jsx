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
            <Bar options={options} data={DashboardBar}/>
        </div>
    )
}

export default BarChart
