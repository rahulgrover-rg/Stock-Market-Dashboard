import React from 'react' ;
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS , CategoryScale , LinearScale , BarElement , Title ,Tooltip , Legend, } from 'chart.js';

ChartJS.register(CategoryScale , LinearScale , BarElement , Title ,Tooltip , Legend) ;


const BarChart = ({data}) => {
    const options = {
        scales: {
            x : {
                grid :{
                    drawOnChartArea : false
                }
            } ,
            y : {
                grid :{
                    drawOnChartArea : false
                }
            } ,
        } ,
        title: {
            display: true,
            text: "Bar Graph"
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
    }
  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart ;