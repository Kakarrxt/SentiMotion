'use client';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import baseTheme from '../themes/baseTheme';

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <ThemeProvider theme={baseTheme}>
            {children}
        </ThemeProvider>
    )
}

export default AppThemeProvider