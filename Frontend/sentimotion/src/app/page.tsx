"use client"
import React, { Fragment } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import './styles/globals.css';
import _app from '@/pages/_app';
import NavBar from '@/pages/navigation/NavBar';
import Footer from '@/pages/common/Footer';
import { Card, CardContent, CardActions, Button, styled, CardProps, CardHeader, Typography, Grid, Tooltip, IconButton, IconButtonProps, CardMedia, Box } from '@mui/material';
import { appRoute } from '@/utils/routeConfig';
import BackDrop from '@/pages/common/BackDrop';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import InfoIcon from '@mui/icons-material/Info';

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: theme.spacing(1),
  '& .MuiCardHeader-root': {
    background: 'linear-gradient(90deg, rgba(100,194,255,1) 48%, rgba(32,43,143,1) 96%)',
    '& .MuiTypography-root': {
      color: '#fff',
    },
  },
  '& .MuiCardContent-root': {
    paddingBottom: 0,
    marginBottom: 0,
    paddingTop: 0,
    marginTop: theme.spacing(1),
  },
}));

const StyledCardMain = styled(Card)<CardProps>(({ theme }) => ({
  margin: theme.spacing(1),
  position: 'relative',
  '& .MuiCardHeader-root': {
    background: 'linear-gradient(270deg, rgba(100,194,255,1) 48%, rgba(32,43,143,1) 96%)',
    '& .MuiTypography-root': {
      color: '#fff',
    },
  },
  '& .MuiCardMedia-root': {
    background: 'linear-gradient(270deg, rgba(32, 43, 143, 1) 48%, rgba(50, 59, 182, 1) 96%)',
  },

  '& .MuiCardContent-root': {
    background: 'linear-gradient(90deg, rgba(100, 194, 255, 1) 48%, rgba(50, 59, 182, 1) 96%)',
    '& .MuiTypography-root': {
      color: '#fff',
    },
  },
}));

const StyledCardRight = styled(Card)<CardProps>(({ theme }) => ({
  margin: theme.spacing(1),
  position: 'relative',
  '& .MuiCardHeader-root': {
    background: 'linear-gradient(270deg, rgba(100,194,255,1) 48%, rgba(32,43,143,1) 96%)',
    '& .MuiTypography-root': {
      color: '#fff',
    },
  },
  '& .MuiCardMedia-root': {
    background: 'linear-gradient(270deg, rgba(32, 43, 143, 1) 48%, rgba(50, 59, 182, 1) 96%)',
  },

  '& .MuiCardContent-root': {
    paddingBottom: 0,
    marginBottom: 0,
    paddingTop: 0,
    marginTop: theme.spacing(1),
  },
}));



const StyledIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(1),
    '& svg': {
      fontSize: 34,
      color: theme.palette.common.white,
    }
  },
  '& svg': {
    fontSize: 24,
    color: theme.palette.common.white,
  }
}));


export default function Home() {

  const router = useRouter();

  const handleModelPage = () => {
    router.push(appRoute.model)
  }
  return (
    <main>
      {
        <>
          <NavBar />
          <Grid container direction="row" justifyContent={'center'}>
            <Grid item xs={10}>
            <StyledCard>
                    <CardHeader
                      title={
                        <Typography gutterBottom variant="h2" component="div">
                          Welcome to SentiMotion
                        </Typography>
                      }
                      subheader={
                        <Fragment>
                          <Typography>
                          Made by: Kanav, Abhiram and Keshav
                          </Typography>
                        </Fragment>}
                    />
                  </StyledCard>
            </Grid>
            <Grid item xs={11}>
              <Grid container direction="row" alignContent={'center'} >
                <Grid item xs={6}>
                  <StyledCard>
                    <CardHeader
                      title={
                        <Typography gutterBottom variant="h2" component="div">
                          Click Here to go to Our Product
                        </Typography>
                      }
                      subheader={
                        <Fragment>
                          <Typography>
                          You can test our Emotion Recognizer from here
                          </Typography>
                        </Fragment>}
                      action={
                        <Grid container alignItems="center">
                          <Tooltip title="Go to Model">
                            <StyledIconButton
                              size="small"
                              onClick={handleModelPage}
                              sx={{ color: "#fff" }}
                            >
                              <ArrowForwardIcon />
                            </StyledIconButton>
                          </Tooltip>
                        </Grid>}
                    />
                  </StyledCard>
                </Grid>
                <Grid item xs={6}>
                  <StyledCardRight>
                    <CardHeader
                      title={
                        <Grid container alignItems="center">
                          <Grid item>
                            <AccountCircleIcon style={{ fontSize: '40px' }} />
                          </Grid>
                          <Grid item>
                            <Typography gutterBottom variant="h2" component="div">
                              Your Profile
                            </Typography>
                          </Grid>
                        </Grid>
                      }
                      subheader={
                        <Fragment>
                          <Typography>
                            Basic Info
                          </Typography>
                        </Fragment>}
                    />
                  </StyledCardRight>

                </Grid>

                <Grid item xs={12}>
                  <Grid container direction="row" justifyContent={'center'}>
                    <Grid item xs={12}>
                      <StyledCard>
                        <CardHeader
                          title={
                            <Typography gutterBottom variant="h1" component="div" align='center'>
                              Features
                            </Typography>
                          }
                          subheader={
                            <Fragment>
                              <Typography align='center'>
                                More info
                              </Typography>
                            </Fragment>
                          }
                        />
                      </StyledCard>
                    </Grid>
                    <Grid item xs={3}>
                      <StyledCard>
                        <CardHeader
                          title={
                            <Typography gutterBottom component="div" align='center'>
                              <AddBoxIcon style={{ fontSize: '40px' }} />
                            </Typography>
                          }
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h3" sx={{ color: 'rgba(32, 43, 143, 1)' }} component="div">
                            1
                          </Typography>
                        </CardContent>
                      </StyledCard>
                    </Grid>
                    <Grid item xs={3}>
                      <StyledCardRight>
                        <CardHeader
                          title={
                            <Typography gutterBottom component="div" align='center'>
                              <InsertDriveFileIcon style={{ fontSize: '40px' }} />
                            </Typography>
                          }
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h3" sx={{ color: 'rgba(32, 43, 143, 1)' }} component="div">
                            2
                          </Typography>
                        </CardContent>
                      </StyledCardRight>
                    </Grid>

                    <Grid item xs={3}>
                      <StyledCard>
                        <CardHeader
                          title={
                            <Typography gutterBottom component="div" align='center'>
                              <DonutLargeIcon style={{ fontSize: '40px' }} />
                            </Typography>
                          }
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h3" sx={{ color: 'rgba(32, 43, 143, 1)' }} component="div">
                            3
                          </Typography>
                        </CardContent>
                      </StyledCard>
                    </Grid>
                    <Grid item xs={3}>

                      <StyledCardRight>
                        <CardHeader
                          title={
                            <Typography gutterBottom component="div" align='center'>
                              <InfoIcon style={{ fontSize: '40px' }} />
                            </Typography>
                          }
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h3" sx={{ color: 'rgba(32, 43, 143, 1)' }} component="div">
                          4
                          </Typography>
                        </CardContent>
                      </StyledCardRight>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Footer />
        </>
      }
    </main>
  )
}
