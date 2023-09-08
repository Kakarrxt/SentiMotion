import { Box, Card, CardHeader, CardProps, Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment } from "react";
import AnimatedTextCharacter from "../test/TextAnimation2";


function getTipOfTheDay(emotion: string): string {
    switch (emotion) {
      case 'Happy':
        return "Tip of the day for happiness: Practice gratitude by listing three things you're thankful for.";
      case 'Sad':
        return "Tip of the day for sadness: Try taking a walk in nature to lift your spirits.";
      case 'Angry':
        return "Tip of the day for anger: Take deep breaths and count to ten before reacting to a frustrating situation.";
      case 'Suprise':
        return "Tip of the day for surprise: Embrace life's unexpected moments with an open heart.";
      case 'Fear':
        return "Tip of the day for fear: Face your fears gradually and seek support from a trusted friend or therapist.";
      case 'Disgust':
        return "Tip of the day for disgust: Practice mindfulness to better understand and manage your reactions.";
      default:
        return "Tip of the day: Embrace your emotions and remember that they are a natural part of being human.";
    }
  }

interface SuggestionProps {
    emotion: string;
}
export default function Suggestion(props: SuggestionProps) {



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
                Tips!

            </Typography>}
            subheader={<Fragment>
                <Typography
            gutterBottom
            variant="h6"
            component={motion.div}
            align="center"
            style={{
                fontSize: '20px',
                fontFamily: 'monospace',
                overflow: 'hidden',
                display: 'flex',
                color: '#5A5A5A',
            }}
        >
             {getTipOfTheDay(props.emotion)} 
        </Typography>
            </Fragment>}
            />
    </StyledCard>
    )

}   