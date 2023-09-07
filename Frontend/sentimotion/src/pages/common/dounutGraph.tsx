import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";
Chart.register(ArcElement, Title, Tooltip, Legend);


interface DounutProps {
    labelCounts: { [key: string]: number };
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
export default function DoughnutGraph(props: DounutProps) {

    const { labelCounts } = props;
    const labels = Object.keys(labelCounts);
    const data = {
      labels,
      datasets: [
        {
          data: Object.values(labelCounts),
          backgroundColor: labels.map(() => getRandomColor()),
        },
      ],
    };
  
    
    const options: ChartOptions<'doughnut'> = {
        plugins: {
          title: {
            display: true,
            text: "Emotion Distribution",
            position: "bottom",
            font: {
              size: 16,
            },
          },
        },
        responsive: true,
      };
      
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <Doughnut data={data} options={options} />
        </div>
      );



}
