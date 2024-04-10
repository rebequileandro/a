import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement,Tooltip ,Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Statistics.scss'
export const Chart = ({wiskola, ginTonic, fernet, otros, cubaLibre, campar}) => {
    const [xLine, yLine] = useState([])
    
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
    labels: ['WISKOLA', 'GIN TONIC', 'FERNET', 'OTROS', 'CUBA LIBRE', 'CAMPARI'],
    datasets: [
        {
        label: '# of Votes',
        data: [wiskola, ginTonic, fernet, otros, cubaLibre, campar],
        backgroundColor: [
            '#df77c6',
            '#47bdd5',
            '#813bd9',
            '#cbcd32',
            '#1dce4a',
            '#feaf5e',
        ],
        borderColor: [
            '#df77c6',
            '#47bdd5',
            '#813bd9',
            '#cbcd32',
            '#1dce4a',
            '#feaf5e',
        ],
        borderWidth: 1,
        cutout: '80%',
        },
    ],
    };
    const doughnutLabelsLine = {
        id:'doughnutLabelsLine',
        afterDraw(chart, args, options) {
            const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart
          // console.log(ctx)

            chart.data.datasets.forEach((dataset, i) => {
                chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
                    const {x, y} = datapoint.tooltipPosition();
                    ctx.fillStyle = dataset.backgroundColor[index];
                    ctx.fillRect(x, y, 1, 1)
                    const halfwidth = width / 2;
                    const halfheight = height / 2;
                    const xLine = x >= halfwidth ? x + 15 : x - 15;
                    const yLine = y >= halfheight ? y + 15 : y - 15;
                    const extraLine = x >= halfwidth ? 15 : - 15;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(xLine, yLine);
                    ctx.lineTo(xLine + extraLine, yLine);
                    ctx.strokeStyle = 'transparent';
                    ctx.stroke();
               
                    ctx.font = '14px, sans-serif';
                    const textXPosition = x >= halfwidth ? 'left' : 'right'
                    ctx.textAlign = textXPosition;
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = dataset.borderColor[index];
                    ctx.fillText(chart.data.labels[index] + '  ' + dataset.data[index] + '%', xLine + extraLine, yLine)
                    console.log(xLine, yLine)
                })
            })
        }
    }
    const options = {
        maintainAspectRatio: false,
        layout:{
            // padding: {
            //     top: 100,
            //     bottom: 100,   
            // },
        },
        plugins: {
            legend:{
                display: false
            }
        }
    }
    const plugins = [doughnutLabelsLine]
  return ( <Doughnut
            data={data} 
            options={options}
            plugins={plugins}
            />
  )
}
