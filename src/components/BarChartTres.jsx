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
import { useStateContext } from '../contexts/ContextProvider';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChartTres = () => {
    const { isLargeScreen } = useStateContext();

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                align: "end",
            },
            title: {
                display: isLargeScreen,
                text: '$7,560 Debited & $5,420 Credited in this Week',
                position: "top",
                align: "start",
                font: {
                    size: 18,// Change the title text size here
                },
                color: '#718EBF'
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
            barThickness: isLargeScreen ? 23 : 10 // Adjust the bar thickness as needed
        }))
    };

    return (
        <div className='xs:h-44 sm:h-56 w-full md:h-[280px] lg:h-[300px] xl:h-[355px]'>
            <Bar options={options} data={data} className='h-full w-full cursor-pointer'/>
        </div>
    )
}

export default BarChartTres
