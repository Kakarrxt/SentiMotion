
import { AppBar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { AppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/navigation";

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: '#0086A8',
    '& .MuiTypography-root, svg': {
        color: theme.palette.common.white,
    }
}));

export default function NavBar() {
    const [t] = useTranslation(["navigation"]);
    const router = useRouter();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    

    return (
        <React.Fragment>
            <StyledAppBar position="sticky" color='default'>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 550,
                                fontSize: 20,
                                letterSpacing: '-.02rem',
                                wordSpacing: '-.3rem',
                                color: 'GrayText',
                                textDecoration: 'none',
                                mt: 1.6
                            }}
                        >
                            SentiMotion
                        </Typography>
                        {/* <NavBreadcrumbs/> */}
                    </Box>


                </Toolbar>
            </StyledAppBar>

        </React.Fragment>
    );
}