import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, CardProps, Grid, Typography, styled } from "@mui/material";
import { Fragment, useRef } from "react";
import AnimatedTextCharacter from "../test/TextAnimation2";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import DoughnutGraph from "../common/dounutGraph";
import "./styles.css";
import VideoRecommendations from "./card";
import EmotionOverTimeLineChart from "../common/lineChart";
import Suggestion from "./suggestion";

interface HappyProps {
    labelCounts: { [key: string]: number };
    filteredData: any;
    emotion: string;
}
export default function Happy(props: HappyProps) {

    const { labelCounts, filteredData } = props;

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


    return (
        <><Grid container direction="row" justifyContent={'center'} style={{ paddingTop: '64px' }}>
            <Grid item xs={10}>
                <StyledCard>
                    <CardHeader
                        title={<Typography
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
                            You are feeling {props.emotion}

                        </Typography>}
                        subheader={<Fragment>
                            <motion.div style={{ display: 'flex', justifyContent: 'center' }}>
                                <AnimatedTextCharacter text="At least thats what we have predicted " />
                            </motion.div>
                        </Fragment>}
                        action={<Grid container alignItems="center">

                            <Box sx={{ width: 250, height: 250 }}>
                                <DoughnutGraph labelCounts={labelCounts} />
                            </Box>
                        </Grid>} />
                </StyledCard>
            </Grid>
            <Grid item xs={4}>
                <EmotionOverTimeLineChart data={filteredData} />
            </Grid>
            <Grid item xs={4} style={{paddingLeft:"10px"}}>
                <Suggestion emotion={props.emotion} />
            </Grid>

            <Grid item xs={10}>
                <Grid container direction="row" justifyContent={'center'} spacing={2}>
                    <Grid item xs={10}>
                        <StyledCard>
                            <CardHeader
                                title={<Typography
                                    gutterBottom
                                    variant="h3"
                                    component="div"
                                    align="center"
                                    style={{
                                        fontWeight: 'bold',
                                        fontFamily: 'sans-serif',
                                        fontSize: '20px',
                                    }}
                                >
                                    Recommended Videos Based on Your Emotion

                                </Typography>}
                            />
                        </StyledCard>
                    </Grid>
                    <VideoRecommendations emotion={props.emotion} />
                        
                </Grid>

            </Grid>

        </Grid></>
    )
}