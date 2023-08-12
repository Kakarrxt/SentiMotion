import { Prediction } from '@/utils/types';
import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });


const Model = () => {
  const [prediction, setPrediction] = useState<Prediction>();


  // const { data: predictionList, isLoading: predictionLoading } = useQuery<Prediction>(
  //   [dataFetchKeys.predictions],  
  //   async () => {
  //     const result = await getData('http://localhost:5000/value');
  //     return result.json();

  //   }
  // );

  function fetchData(url) {
    return fetch(url).then(response => response.json());
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const predictionList = await fetchData('http://localhost:5000/value');
        setPrediction(predictionList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  console.log(prediction, "hellloooo");

  return (
    <><div style={{ margin: '100px' }}>
      <img src="http://localhost:5000/predict" alt="Video Stream" />

      {prediction && (
        <div>
          <p>Prediction: {prediction.label}</p>
          <p>Confidence: {prediction.percentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
    {prediction && (
      <div style={{ maxWidth: '1000px', background: 'black' }}>
        <GaugeChart id="gauge-chart2"
          nrOfLevels={20}
          percent= {prediction.percentage/100}
        />
      </div>)}
    </>
  );
};

export default Model;


