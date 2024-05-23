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
import { useStateContext } from '../contexts/ContextProvider';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
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

    const data = {
        ...DashboardBar,
        datasets: DashboardBar.datasets.map(dataset => ({
            ...dataset,
            barThickness: isLargeScreen ? 18 : 13   // Adjust the bar thickness as needed
        }))
    };

    return (
        <div className=' xs:h-44 sm:h-44 w-full md:h-[300px]'>
            <Bar options={options} data={data}  className='h-full w-full'/>
        </div>
    )
}

export default BarChart
