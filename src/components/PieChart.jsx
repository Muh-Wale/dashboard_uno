import React from 'react'
import { Pie } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'
import { DashboardPie } from '../data/dummy';
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
);

const BarChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                align: "end",
            }
        }
    }
    return (
        <div>
            <Pie options={options} data={DashboardPie}/>
        </div>
    )
}

export default BarChart
