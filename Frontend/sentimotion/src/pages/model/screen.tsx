import { Prediction } from "@/utils/types";
import { Card, CardContent, CardHeader, CardProps, Grid, Typography, styled } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";

function fetchData(url: RequestInfo | URL) {
    return fetch(url).then(response => response.json());
}
const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

export default function Screen() {

    const [prediction, setPrediction] = useState<Prediction>();

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



    // useEffect(() => {
    //     const interval = setInterval(async () => {
    //         try {
    //             const predictionList = await fetchData('http://localhost:5000/value');
    //             setPrediction(predictionList);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }, 500);

    //     return () => clearInterval(interval);
    // }, []);


    return (
        <Grid container direction="row" justifyContent={'center'} style={{ paddingTop: '64px' }}>
            <Grid item xs={6}>
                <StyledCard style={{ maxWidth: '100%', }}>
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
                                You are Feeling
                            </Typography>
                        }
                    />
                    <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img src="http://localhost:5000/screen" alt="Video Stream" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </CardContent>
                </StyledCard>
            </Grid>
            <Grid item xs={6}>
                <Grid container direction="row" justifyContent={'center'}>
                    <Grid item xs={12}>
                        <StyledCard>
                            <CardHeader
                                title={
                                    <Typography
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
                                    </Typography>
                                }
                                subheader={
                                    prediction ? (
                                        <Fragment>
                                            <Typography
                                                variant='h6'
                                                align='center'
                                                color={'#5A5A5A'}
                                                style={{
                                                    fontSize: '20px',
                                                    fontFamily: 'monospace',
                                                }}>
                                                Prediction: {prediction.label}
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
                                    ) : null
                                }
                            />
                        </StyledCard>

                    </Grid>
                    <Grid item xs={12}>
                        <StyledCard>
                            <CardHeader
                                title={
                                    <Typography
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
                                        Confidence Meter
                                    </Typography>
                                }
                            />
                            <CardContent>
                                {prediction && (
                                    <div
                                        style={{
                                            borderRadius: '10px',
                                            padding: '20px',
                                        }}
                                    >
                                        <div style={{ position: 'relative' }}>
                                            <GaugeChart
                                                id="gauge-chart2"
                                                nrOfLevels={30}
                                                colors={["#03fc8c", "#03adfc", "#9403fc"]}
                                                arcWidth={0.3}
                                                percent={prediction.percentage / 100}
                                                textColor={'#000000'}
                                            />

                                        </div>
                                    </div>
                                )}
                            </CardContent>

                        </StyledCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    )
}