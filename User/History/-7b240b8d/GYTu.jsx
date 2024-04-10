import React from "react";
import { ArcElement, Chart as ChartJS, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
export const Chart = ({ first, second, third, others, fourth, fifth }) => {
  ChartJS.register(ArcElement, Legend, ChartDataLabels);
  const data = {
    labels: [first.label, second.label, third.label, others.label, fourth.label, fifth.label],
    datasets: [
      {
        label: "# of Votes",
        data: [first.value, second.value, third.value, others.value, fourth.value, fifth.value],
        backgroundColor: [
          "#df77c6",
          "#47bdd5",
          "#813bd9",
          "#cbcd32",
          "#1dce4a",
          "#feaf5e",
        ],
        borderColor: [
          "#df77c6",
          "#47bdd5",
          "#813bd9",
          "#cbcd32",
          "#1dce4a",
          "#feaf5e",
        ],
        borderWidth: 1,
        cutout: "80%",
      },
    ],
  };
  const doughnutLabelsLine = {
    id: "doughnutLabelsLine",
    afterDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;

      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const { x, y } = datapoint.tooltipPosition();
          ctx.fillStyle = dataset.backgroundColor[index];
          ctx.fillRect(x, y, 1, 1);
          const halfwidth = width / 2;
          const halfheight = height / 2;
          const xLine = x >= halfwidth ? x + 15 : x - 15;
          const yLine = y >= halfheight ? y + 15 : y - 15;
          const extraLine = x >= halfwidth ? 15 : -15;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(xLine, yLine);
          ctx.lineTo(xLine + extraLine, yLine);
          ctx.strokeStyle = "transparent";
          ctx.stroke();
          const textWidth = ctx.measureText(chart.data.labels[index]).width;
          ctx.font = "14px, sans-serif";
          const textXPosition = x >= halfwidth ? "left" : "right";
          ctx.textAlign = textXPosition;
          ctx.textBaseline = "middle";
          ctx.fillStyle = dataset.borderColor[index];
          ctx.fillText(
            chart.data.labels[index] + "  " + dataset.data[index] + "%",
            xLine + extraLine,
            yLine
          );
        });
      });
    },
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: [
        "#df77c6",
        "#47bdd5",
        "#813bd9",
        "#cbcd32",
        "#1dce4a",
        "#feaf5e"
      ],
      formatter: function(value, context) {
        return context.chart.data.labels[context.dataIndex];
      },
        padding: 50,
        anchor: "end",
        scale: "radial",
        clamp: true,
        align: "end",
        labels: {
          title: {
            font: {
              weight: 'bold'
            }
          }
        }
      }
    }
  };
  const plugins = [doughnutLabelsLine];
  const setData = () => {
    if (!first && !second && !third && !fourth && !fifth && !others) {
      let newData = { ...data };
      newData.datasets[0].data = ["10", "10", "10"];
      return newData;
    } else {
      return data;
    }
  };
  return <Doughnut data={setData()} options={options} plugins={ChartDataLabels}/>;
};
