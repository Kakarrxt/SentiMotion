import { Prediction } from "@/utils/types";
import { Button, Card, CardContent, CardHeader, CardProps, Grid, Typography, Zoom, styled } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Value from "./values";
import router from "next/router";
import AssessmentIcon from '@mui/icons-material/Assessment';



function fetchData(url: RequestInfo | URL) {
    return fetch(url).then(response => response.json());
}
const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

export default function Screen() {
    const [prediction, setPrediction] = useState<Prediction>();
    const [hovered, setHovered] = useState(false);

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

    const handleReport = async () => {
        try {
            await router.push('/result');
        } catch (error) {
            console.error("Error navigating to result page:", error);
        }
    };

    return (
        <Grid container direction="row" justifyContent={'center'} style={{ paddingTop: '64px' }}>
            <Grid item xs={6}>
                <StyledCard style={{ maxWidth: '100%', border: '2px solid black' }}>
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
                                Place Your Screen Here
                            </Typography>
                        }
                    />
                    <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <div style={{
                            width: '100%',
                            height: '50%',
                            backgroundColor: 'lightgray',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            visibility: "hidden",

                        }}>
                            <img src="http://localhost:5000/screen" alt="Video Stream" style={{ maxWidth: '100%', maxHeight: '100%' }} />

                        </div>
                    </CardContent></StyledCard>
            </Grid>
            <Grid item xs={6}>
                <Grid container direction="row" justifyContent={'center'}>
                    <Grid item xs={6}>
                        <StyledCard style={{ maxWidth: '100%' }}>
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
                                        Output
                                    </Typography>
                                }
                            />
                            <CardContent style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                height: '50%',

                            }}>
                                <div>
                                    <img src="http://localhost:5000/screen" alt="Video Stream" style={{ maxWidth: '100%', maxHeight: '50%' }} />
                                </div>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={6}>
                        <Value />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                <Button
                    variant="contained"
                    onClick={handleReport}
                    sx={{
                        margin: '10px',
                        padding: '30px',
                        color: '#86b6c6',
                        width: '150%',
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
        </Grid>


    )
}