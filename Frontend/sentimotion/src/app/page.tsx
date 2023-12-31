"use client"
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import './styles/globals.css';
import _app from '@/pages/_app';
import NavBar from '@/pages/navigation/NavBar';
import Footer from '@/pages/common/Footer';
import { Card, CardContent, CardActions, Button, styled, CardProps, CardHeader, Typography, Grid, Tooltip, IconButton, IconButtonProps, CardMedia, Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import homeimg from './img/home.jpg';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import AnimatedTextWord from '@/pages/test/TextAnimation1';
import AnimatedTextCharacter from '@/pages/test/TextAnimation2';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

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


export default function Home() {

  const router = useRouter();
  const homeUrl = homeimg.src;
  const [hovered, setHovered] = useState(false);

  const handleModelPage = async () => {
    try {
      await router.push('/model');
    } catch (error) {
      console.error("Error navigating to model page:", error);
    }
  };

  const handleGithub = async () => {
    try {
      window.location.href = 'https://github.com/Kakarrxt/SentiMotion';
    } catch (error) {
      console.error("Error navigating to Github page:", error);
    }
  };

  const videoRef = useRef(null);


  return (
    <main style={{ backgroundColor: '#f5f5f5' }}>
      {
        <>
          <NavBar />
          <Grid container direction="row" justifyContent={'center'} style={{ paddingTop: '64px' }}>

            <Grid item xs={12}>
              <StyledCard>
                <CardHeader
                  title={
                    <motion.div style={{ display: 'flex', justifyContent: 'center' }}>
                      <AnimatedTextWord text="Welcome to SentiMotion" />
                    </motion.div>
                  }

                  subheader={
                    <Fragment>
                      <motion.div style={{ display: 'flex', justifyContent: 'center' }}>
                        <AnimatedTextCharacter text="Made by: Kanav, Keshav and Abhiram" />
                      </motion.div>
                    </Fragment>}
                />
                <CardMedia>
                  <video ref={videoRef} style={{
                    padding: '5px',
                    width: '100%',
                    height: '600px',
                    objectFit: 'cover',
                  }} autoPlay loop muted>
                    <source src="videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </CardMedia>

              </StyledCard>
            </Grid>
            <Grid item xs={11}>
              <Grid container direction="row" justifyContent={'center'}>
                <Grid item xs={4} style={{ padding: '10px' }}>

                  <Button
                    variant="contained"
                    onClick={handleModelPage}
                    sx={{
                      padding: '30px',
                      color: 'white',
                      width: '100%',
                      backgroundColor: 'black',
                      transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
                      boxShadow: hovered ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                      borderRadius: '8px',
                      transform: 'scale(1)',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        transform: 'scale(1.05)',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                        <VideoCameraFrontIcon style={{ fontSize: '40px', opacity: hovered ? 0.8 : 1 }} />
                      </div>
                      <div style={{ flex: '4', display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="h1"
                          component="div"
                          align="left"
                          style={{
                            fontWeight: 'bold',
                            fontFamily: 'sans-serif',
                          }}
                        >
                          Model
                        </Typography>
                        <Typography
                          variant="h6"
                          align="left"
                          color="#5A5A5A"
                          style={{
                            fontFamily: 'monospace',
                          }}
                        >
                          You can test our Emotion Recognizer from here
                        </Typography>
                      </div>
                    </div>
                  </Button>
                </Grid>
                <Grid item xs={4} style={{ padding: '10px' }}>

                  <Button
                    variant="contained"
                    onClick={handleGithub}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    sx={{
                      padding: '30px',
                      color: hovered ? 'black' : 'white',
                      width: '100%',
                      backgroundColor: hovered ? 'white' : 'black',
                      transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
                      boxShadow: hovered ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                      borderRadius: '8px',
                      transform: hovered ? 'scale(1.05)' : 'scale(1)',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                        <GitHubIcon style={{ fontSize: '40px', opacity: hovered ? 0.8 : 1 }} />
                      </div>
                      <div style={{ flex: '4', display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="h1"
                          component="div"
                          align="left"
                          style={{
                            fontWeight: 'bold',
                            fontFamily: 'sans-serif',
                          }}
                        >
                          GitHub
                        </Typography>
                        <Typography
                          variant="h6"
                          align="left"
                          color="#5A5A5A"
                          style={{
                            fontFamily: 'monospace',
                          }}
                        >
                          Check out our GitHub repository
                        </Typography>
                      </div>
                    </div>
                  </Button>

                </Grid>

                <Grid item xs={12}>
                  <Grid container direction="row" justifyContent={'center'}>

                    <Grid item xs={12}>
                      <StyledCard>
                        <CardHeader
                          title={
                            <Typography gutterBottom variant="h1" component="div" align='center'>
                              About SentiMotion
                            </Typography>
                          }
                        />
                      </StyledCard>
                    </Grid>
                    <Grid item xs={4}>
                      <StyledCard style={{background:'black'}}>
                        <CardHeader style={{background:'black'}}
                          title={
                            <Typography gutterBottom component="div" align='center'>
                              <OpenInBrowserIcon style={{ fontSize: '40px' , color:'white'}} />
                            </Typography>
                          }
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component={motion.div}
                            align="center"
                            style={{
                              fontSize: '15px',
                              fontFamily: 'monospace',
                              overflow: 'hidden',
                              display: 'flex',
                              color: '#86b6c6',
                            }}

                          >
                           Innovative website that uses webcam to capture video to detect emotions.
                          </Typography>
                        </CardContent>
                      </StyledCard>
                    </Grid>
                    <Grid item xs={4}>
                      <StyledCard style={{background:'black'}}>
                        <CardHeader style={{background:'black'}}
                          title={
                            <Typography gutterBottom component="div" align='center'>
                              <CameraAltIcon style={{ fontSize: '40px' , color:'white' }} />
                            </Typography>
                          }
                        />
                        <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component={motion.div}
                            align="center"
                            style={{
                              fontSize: '15px',
                              fontFamily: 'monospace',
                              overflow: 'hidden',
                              display: 'flex',
                              color: '#86b6c6',
                            }}

                          >
                          Detects faces with precision and provides output with different types of visual representation.
                          </Typography>
                        </CardContent>
                      </StyledCard>
                    </Grid>

                    <Grid item xs={4}>
                      <StyledCard style={{background:'black'}}>
                        <CardHeader style={{background:'black'}}
                          title={
                            <Typography gutterBottom component="div" align='center'>
                              <GroupAddIcon style={{ fontSize: '40px', color:'white' }} />
                            </Typography>
                          }
                        />
                        <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component={motion.div}
                            align="center"
                            style={{
                              fontSize: '15px',
                              fontFamily: 'monospace',
                              overflow: 'hidden',
                              display: 'flex',
                              color: '#86b6c6',
                            }}

                          >
                           A minimalist web design which also allows the user to capture their screen.
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
    </main >
  )
}
