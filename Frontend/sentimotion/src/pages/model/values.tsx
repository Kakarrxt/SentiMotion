import { Prediction } from "@/utils/types";
import { Card, CardContent, CardHeader, CardProps, Grid, Typography, styled } from "@mui/material";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useState } from "react";
import AppContext from "@/app/providers/AppContext";
import React from "react";
import RadarGraph from "../common/radarGraph";

function fetchData(url: RequestInfo | URL) {
    return fetch(url).then(response => response.json());
}

const labelToEmoji: { [key: string]: string } = {
    angry: "😡",
    disgust: "🤢",
    fear: "😨",
    happy: "😄",
    neutral: "😐",
    sad: "😢",
    surprise: "😲",
};


const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
    margin: theme.spacing(1),
    '& .MuiCardHeader-root': {
        background: '#fff',
        '& .MuiTypography-root': {

        },
    },
    '& .MuiCardContent-root': {
        paddingBottom: 0,
        marginBottom: 0,
        paddingTop: 0,
        marginTop: theme.spacing(1),
    },
}));

export default function Value() {
    const [prediction, setPrediction] = useState<Prediction>();
    const appContext = React.useContext(AppContext);
    const { state, dispatch } = appContext;

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const predictionList = await fetchData('http://localhost:5000/value');
                setPrediction(predictionList);
                if (predictionList !== undefined) {
                    dispatch({ type: "setPredictions", value: predictionList });
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }, 750);

        return () => clearInterval(interval);
    }, []);



    return (
        <>

            <Grid item xs={12}>
                <StyledCard>
                    <CardHeader
                        title={<Typography
                            gutterBottom
                            variant="h1"
                            component="div"
                            align="center"
                            style={{
                                fontWeight: 'bold',
                                fontFamily: 'sans-serif',
                                fontSize: '50px',
                            }}
                        >
                            Predictions
                        </Typography>}
                        subheader={prediction ? (
                            <Fragment>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    color={'#5A5A5A'}
                                    style={{
                                        fontSize: '20px',
                                        fontFamily: 'monospace',
                                    }}>
                                    Prediction: {labelToEmoji[prediction.label] || prediction.label} {prediction.label}
                                </Typography>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    color={'#5A5A5A'}
                                    style={{
                                        fontSize: '20px',
                                        fontFamily: 'monospace',
                                    }}>
                                    Confidence: {prediction.percentage.toFixed(2)}%
                                </Typography>
                            </Fragment>
                        ) : null} />
                </StyledCard>
            </Grid>
            <Grid item xs={12}>

                <RadarGraph />

            </Grid>
        </>

    )
}