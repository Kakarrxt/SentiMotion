import { Backdrop, CircularProgress, Typography } from '@mui/material';
import React from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    color: "#fff",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: "1.3rem",
                    fontStyle: "italic",
                },
            },

        }
    },
});

interface BackDropProps {
    open: boolean;
    info?:string;

}

export default function BackDrop(props: BackDropProps) {

    const [t] = useTranslation();
    const { open , info} = props;

    return (
        <ThemeProvider theme={theme}>
            <Backdrop open={open}>
            <CircularProgress variant='indeterminate' color="inherit" />
                <div>
                    <Typography pl={2} display={"inline-block"}>{info || "loading.."}</Typography>
                </div>
            </Backdrop>
        </ThemeProvider>
    );
}
