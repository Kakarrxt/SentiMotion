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
    background: '#fff',
    '& .MuiTypography-root': {
      color: '#000',
    },
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
    backgroundColor: theme.palette.common.black,
    marginLeft: theme.spacing(1),
    '& svg': {
      fontSize: 34,
      color: theme.palette.common.white,
    }
  },
  '& svg': {
    fontSize: 24,
    color: theme.palette.common.black,
  }
}));


export default function Home() {

  const router = useRouter();

  const handleModelPage = () => {
    router.push(appRoute.model)
  }
  return (
    <main style={{ backgroundColor: '#f5f5f5' }}>
      {
        <>
          <NavBar  />
          <Grid container direction="row" justifyContent={'center'} style={{ paddingTop: '64px' }}>
            <Grid item xs={12}>
            <StyledCard>
                    <CardHeader
                      title={
                        <Typography gutterBottom variant="h2" component="div" align='center'>
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
              <Grid container direction="row" justifyContent={'center'}>
                <Grid item xs={6} >
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
                      <StyledCard>
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
                      </StyledCard>
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

                      <StyledCard>
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
                      </StyledCard>
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
