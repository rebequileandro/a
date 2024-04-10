import React from 'react'
import { Chart as ChartJS, ArcElement ,Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
export const Chart = ({ firsts, seconds , third, others, fourth , fifth}) => {
    ChartJS.register(ArcElement, Legend);
    const data = {
    labels: [ third, others, fourth, fifth],
    datasets: [
        {
        label: '# of Votes',
        data: [ third, others, fourth, fifth],
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
                    const textWidth = ctx.measureText(chart.data.labels[index]).width;
                    ctx.font = '14px, sans-serif';
                    const textXPosition = x >= halfwidth ? 'left' : 'right'
                    ctx.textAlign = textXPosition;
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = dataset.borderColor[index];
                    ctx.fillText(chart.data.labels[index] + '  ' + dataset.data[index] + '%', xLine + extraLine, yLine)
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
    const setData = () => {
        if(data.datasets[0].data.length) {
            return data
        }
        else {
           let newData = {...data}
           newData.datasets[0].data = ["10", "10", "10"]
           return newData
        }
    }
  return ( <Doughnut
            data={setData()} 
            options={options}
            />
  )
}
