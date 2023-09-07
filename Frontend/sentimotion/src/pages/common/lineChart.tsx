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

    const emotionCounts: { [key: string]: number } = {};

    // Create cumulativeData with cumulative counts
    const cumulativeData = data.map((entry, index) => {
      const { label, timestamp } = entry;
      if (!emotionCounts[label]) {
        emotionCounts[label] = 1;
      } else {
        emotionCounts[label]++;
      }
    
      // Create a new data structure with cumulative counts.
      const cumulativeEntry = {
        timestamp,
        counts: { ...emotionCounts },
      };
    
      return cumulativeEntry;
    });

  console.log(cumulativeData, "heloooooooo");
  // Extract unique emotion labels
  const uniqueLabels = Array.from(new Set(cumulativeData.flatMap((item) => (item.counts ? Object.keys(item.counts) : []))))
  .filter((label) => label !== 'neutral');

  // Generate random colors for each label

  const labelColors: { [key: string]: string } = {};

  uniqueLabels.forEach((label) => {
    labelColors[label] = getRandomColor();
  });

 

  // Prepare chart data
  const chartData = {
    labels: cumulativeData.map((entry) => entry.timestamp), // Use timestamps from cumulativeData
    datasets: uniqueLabels.map((label) => ({
      label: label,
      data: cumulativeData.map((entry) => entry.counts[label] || 0), // Use cumulative counts
      fill: false,
      borderColor: labelColors[label],
      borderWidth: 2,
    })),
  };

  // Configure chart options
  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'second',
          displayFormats: {
            second: 'HH:mm:ss', 
          },
          parser: 'HH:mm:ss', 
        },
        title: {
          display: true,
          text: 'Time ', 
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  } as ChartOptions<'line'>;

  console.log(chartData, "heloooooooo");

  return (
    <div>
      <h2>Emotion Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default EmotionOverTimeLineChart;
