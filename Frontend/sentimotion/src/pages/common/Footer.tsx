import { Grid, Typography } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';


const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: '#000000',
        borderRadius: 0,
        '& .MuiGrid-root': {
            margin: theme.spacing(1),
            '& .MuiTypography-root': {
                color: "#FFFFFF",
                marginLeft: theme.spacing(1),
            }
        }
    },
}));

export default function Footer() {
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <StyledBox sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 ,zIndex:5}} elevation={1}>
                <Grid container justifyContent="center" alignItems="center">
                 
                    <Typography variant="h5">
                        Powered by SentiMotion. &#169; 2023 All rights reserverd.
                    </Typography>
                </Grid>
            </Paper>
        </StyledBox>
    );
}