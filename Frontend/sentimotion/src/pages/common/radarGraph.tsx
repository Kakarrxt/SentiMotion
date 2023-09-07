import {
    Card,
    CardContent,
    CardHeader,
    CardProps,
    Grid,
    Typography,
    styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import {
    Chart,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    ChartType,
    ChartOptions
} from "chart.js";

// Register the components and the RadialLinearScale
Chart.register(
  ArcElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement
);

function fetchData(url: RequestInfo | URL) {
  return fetch(url).then((response) => response.json());
}

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: theme.spacing(1),
  "& .MuiCardHeader-root": {
    background: "#fff",
    "& .MuiTypography-root": {},
  },
  "& .MuiCardContent-root": {
    paddingBottom: 0,
    marginBottom: 0,
    paddingTop: 0,
    marginTop: theme.spacing(1),
  },
}));

const emotionToColor: { [key: string]: string } = {
  angry: "red",
  disgust: "green",
  fear: "purple",
  happy: "yellow",
  neutral: "gray",
  sad: "blue",
  surprise: "orange",
};

interface MultiData {
  angry: number;
  disgust: number;
  fear: number;
  happy: number;
  neutral: number;
  sad: number;
  surprise: number;
}

export default function RadarGraph() {
  const [data, setData] = useState<MultiData | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await fetchData("http://localhost:5000/pred");
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 750);

    return () => clearInterval(interval);
  }, []);

  const maxEmotionValue = Math.max(
    data ? (data.angry >= 0 ? data.angry * 10 : 0) : 0,
    data ? (data.disgust >= 0 ? data.disgust * 10 : 0) : 0,
    data ? (data.fear >= 0 ? data.fear * 10 : 0) : 0,
    data ? (data.happy >= 0 ? data.happy * 10 : 0) : 0,
    data ? (data.neutral >= 0 ? data.neutral * 10 : 0) : 0,
    data ? (data.sad >= 0 ? data.sad * 10 : 0) : 0,
    data ? (data.surprise >= 0 ? data.surprise * 10 : 0) : 0
  );



  const chartData = {
    labels: ["Angry", "Disgust", "Fear", "Happy", "Neutral", "Sad", "Surprise"],
    datasets: [
      {
        label: "Emotion Data",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: emotionToColor[maxLabel(maxEmotionValue)],
        borderWidth: 2,
        pointBackgroundColor: emotionToColor[maxLabel(maxEmotionValue)],
        pointBorderColor: emotionToColor[maxLabel(maxEmotionValue)],
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75,192,192,1)",
        data: [
          data ? (data.angry >= 0 ? data.angry * 10 : 0) : 0,
          data ? (data.disgust >= 0 ? data.disgust * 10 : 0) : 0,
          data ? (data.fear >= 0 ? data.fear * 10 : 0) : 0,
          data ? (data.happy >= 0 ? data.happy * 10 : 0) : 0,
          data ? (data.neutral >= 0 ? data.neutral * 10 : 0) : 0,
          data ? (data.sad >= 0 ? data.sad * 10 : 0) : 0,
          data ? (data.surprise >= 0 ? data.surprise * 10 : 0) : 0,
        ],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      r: {
        type: "radialLinear",
        beginAtZero: true, 
        ticks: {
          display: true, 
          beginAtZero: true, 
        },
      },
    },
  } as ChartOptions<'radar'>;

  function maxLabel(maxValue: number) {
    if (data) {
      const valueToLabel = {
        [data.angry * 10]: "angry",
        [data.disgust * 10]: "disgust",
        [data.fear * 10]: "fear",
        [data.happy * 10]: "happy",
        [data.neutral * 10]: "neutral",
        [data.sad * 10]: "sad",
        [data.surprise * 10]: "surprise",
      };

      return valueToLabel[maxValue] || "";
    }
    return "";
  }

  return (
    <div >
      <StyledCard>
        <CardHeader
          title={
            <Typography
              gutterBottom
              variant="h1"
              component="div"
              align="center"
              style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "50px",
              }}
            >
              Analysis
            </Typography>
          }
        />
        <CardContent>
          {data && (
            <Radar data={chartData} options={chartOptions} />
          )}
        </CardContent>
      </StyledCard>
    </div>
    
  );
}
