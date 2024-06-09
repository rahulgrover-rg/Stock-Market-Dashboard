import React from 'react' ;
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS , CategoryScale , LinearScale , PointElement , LineElement , Title ,Tooltip , Legend, } from 'chart.js';

ChartJS.register(CategoryScale , LinearScale , PointElement , LineElement , Title ,Tooltip , Legend) ;

const LineChart = ({data}) => {
    const options = {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
    }
  return (
    <div>
        <Line options={options} data={data}/>
    </div>
  )
}

export default LineChart ;