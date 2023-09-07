import { Card, CardContent, CardHeader, CardProps, Grid, Typography, styled } from "@mui/material";

import Value from "./values";
import AppContext from "@/app/providers/AppContext";
import React from "react";



const emotionToColor: { [key: string]: string } = {
    angry: "red",
    disgust: "green",
    fear: "purple",
    happy: "yellow",
    neutral: "gray",
    sad: "blue",
    surprise: "orange",
};

const labelToEmoji: { [key: string]: string } = {
    angry: "😡",
    disgust: "🤢",
    fear: "😨",
    happy: "😄",
    neutral: "😐",
    sad: "😢",
    surprise: "😲",
};

interface FacecamProps {
    open: boolean;
}

export default function Facecam(props: FacecamProps) {
    const [hovered, setHovered] = useState(false);
    const appContext = React.useContext(AppContext);
    const { state, dispatch } = appContext;
    const { predictions} = state;
    const { showCamera } = props;


    const defaultBackgroundColor = 'white';
  
    const startWebcam = () => {
      fetch('http://localhost:5000/predict')
        .then((response) => {
          if (response.ok) {
            console.log('Webcam started');
          } else {
            console.error('Failed to start webcam');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    
    const stopWebcam = () => {
      fetch('http://localhost:5000/stopcam')
        .then((response) => {
          if (response.ok) {
            console.log('Webcam stopped');
          } else {
            console.error('Failed to stop webcam');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    


    const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
        margin: theme.spacing(1),
        background: `linear-gradient(to top left, ${defaultBackgroundColor} 50%, ${emotionToColor[predictions?.label] || defaultBackgroundColor} 100%)`,
        '& .MuiCardContent-root': {
            paddingBottom: 0,
            marginBottom: "15px",
            paddingTop: 0,
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }));

    return (
        <Grid container direction="row" justifyContent={'center'} style={{ paddingTop: '64px' }} >
            <Grid item xs={8}>
                <StyledCard>
                    <CardHeader
                        title={
                            <Typography
                                gutterBottom
                                variant="h3"
                                component="div"
                                align="center"
                                style={{
                                    fontWeight: 'bold',
                                    fontFamily: 'sans-serif',
                                    fontSize: '50px',
                                }}
                            >
                                {predictions && predictions.label !== null ? (
                                    `You are Feeling ${labelToEmoji[predictions.label]}`
                                ) : (
                                    'You are Feeling'
                                )}

                            </Typography>
                        }
                    />
                    <CardContent>
                        <img src="http://localhost:5000/predict" alt="Video Stream" />
                    </CardContent>
                </StyledCard>
            </Grid>
            <Grid item xs={4}>
                <Grid container direction="row" justifyContent={'center'}>
                    <Grid item xs={12}>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={4}>
                    <Button
                        variant="contained"
                        onClick={handleReport}
                        sx={{
                            margin: '-100px',
                            padding: '30px',
                            color: '#86b6c6',
                            width: '90%',
                            height: '100%',
                            backgroundColor: 'black',
                            transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
                            borderRadius: '8px',
                            transform: 'scale(1)',
                            '&:hover': {
                                backgroundColor: '#86b6c6',
                                color: 'black',
                                transform: 'scale(1.05)',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                                <AssessmentIcon style={{ fontSize: '40px', opacity: hovered ? 0.8 : 1 }} />
                            </div>
                            <div style={{ flex: '4', display: 'flex', flexDirection: 'column' }}>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    align="left"
                                    style={{
                                        fontWeight: 'bold',
                                        fontFamily: 'sans-serif',
                                    }}
                                >
                                    View Report
                                </Typography>
                            </div>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    </Grid>

        </Grid>



    )
}

