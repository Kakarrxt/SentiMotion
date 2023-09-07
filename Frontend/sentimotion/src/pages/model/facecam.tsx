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
    showCamera: boolean;
  }

export default function Facecam( props: FacecamProps ) {
    const appContext = React.useContext(AppContext);
    const { state, dispatch } = appContext;
    const { predictions} = state;
    const { showCamera } = props;


    const defaultBackgroundColor = 'white';

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
                    <Value />
                </Grid>
            </Grid>
        </Grid>


    )
}