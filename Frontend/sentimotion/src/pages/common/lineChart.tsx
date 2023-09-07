import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend, TimeScale, CategoryScale ,LinearScale,PointElement,LineElement, ChartOptions} from 'chart.js';
import 'chartjs-adapter-luxon'; // Import the Luxon date adapter

Chart.register(ArcElement, Title, Tooltip, Legend, TimeScale, CategoryScale,LinearScale,PointElement,LineElement);


interface EmotionData {
  timestamp: string;
  label: string;
}

interface LineChartProps {
  data: EmotionData[];
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const EmotionOverTimeLineChart = ({ data }: LineChartProps) => {
  const uniqueLabels = Array.from(new Set(data.map((item) => item.label)));
  const labelColors: { [key: string]: string } = {};

  uniqueLabels.forEach((label) => {
    labelColors[label] = getRandomColor();
  });

  const chartData = {
    labels: data.map((item) => item.timestamp),
    datasets: uniqueLabels.map((label) => ({
      label: label,
      data: data
        .filter((item) => item.label === label)
        .map((item) => item.timestamp), 
      fill: false,
      borderColor: labelColors[label],
      borderWidth: 2,
    })),
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          displayFormats: {
            minute: 'mm:ss',
          },
        },
        title: {
          display: true,
          text: 'Time (mm:ss)',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Emotion',
        },
      },
    },
  }as ChartOptions<'line'>;

  console.log(chartData);
  return (
    <div>
      <h2>Emotion Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default EmotionOverTimeLineChart;
