import { Card, CardContent, CardHeader, CardProps, Grid, Typography, styled } from "@mui/material";
import dynamic from "next/dynamic";
import ThreeDModel from "../common/3dmodel";
import { useState } from "react";
import { Prediction } from "@/utils/types";
import Value from "./values";
import AppContext from "@/app/providers/AppContext";
import React from "react";





export default function Facecam() {
    const [prediction, setPrediction] = useState<Prediction>();
    const appContext = React.useContext(AppContext);
    const { state, dispatch } = appContext;
    const { predictions } = state;


    const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
        margin: theme.spacing(1),
        '& .MuiCardHeader-root': {
            background: '#fff',
            '& .MuiTypography-root': {

            },
        },
        '& .MuiCardContent-root': {
            paddingBottom: 0,
            marginBottom: "15px",
            paddingTop: 0,
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the content vertically
            justifyContent: 'center',
        },
    }));

    

    console.log(predictions,"hello")

    return (
        
        <Grid container direction="row" justifyContent={'center'} style={{ paddingTop: '64px' }}>
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
                                You are Feeling
                            </Typography>
                        }
                    />
                    <CardContent>
                        <img src="http://localhost:5000/predict" alt="Video Stream" />
                    </CardContent></StyledCard>
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