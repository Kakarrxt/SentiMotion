import React, { useState, useEffect, Fragment } from 'react';
import Facecam from './facecam';
import Screen from './screen';
import { Button, Typography, Grid, GridProps, styled, Paper } from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ThreeDModel from '../common/3dmodel';
import TorusModel from '../common/torusModel';
import AnimatedTextWord from '../test/TextAnimation1';
import '../styles/globals.css'






const Model = () => {
  const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",

  }));

  const [showFacecam, setShowFacecam] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  const [hovered, setHovered] = useState(false);


  const stopWebAndShowFace = () => {
    setShowFacecam(false); // Update state to show the Facecam component
    setShowScreen(true);
    fetch('http://localhost:5000/stopcam')
      .then((response) => {
        if (response.ok) {
          console.log('Webcam stopped');

        } else {
          console.error('Failed to stop webcam');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const startWebAndShowFace = () => {
    setShowFacecam(true); // Update state to show the Facecam component
    setShowScreen(false);
    fetch('http://localhost:5000/predict')
      .then((response) => {
        if (response.ok) {
          console.log('Webcam Started');

        } else {
          console.error('Failed to start webcam');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const showFacecamComponent = () => {
    setShowFacecam(true);
    setShowScreen(false);
  };

  const showScreenComponent = () => {
    setShowFacecam(false);
    setShowScreen(true);
  };

  const resetComponents = () => {
    setShowFacecam(false);
    setShowScreen(false);
    window.location.reload();
  };

  return (
    <>


      <StyledGrid>
        {!showFacecam && !showScreen && (
          <div style={{ marginTop: "64px" }}>
            <Typography
              gutterBottom
              variant="h1"
              align="center"
              style={{
                fontWeight: 'bold',
                fontFamily: 'sans-serif',
                fontSize: '50px',
                overflow: 'hidden',
                display: 'flex',
              }}
            >
              Models
            </Typography>
          </div>)}
      </StyledGrid>
      <StyledGrid>
        {!showFacecam && !showScreen && (
          <>
            <TorusModel />
            <Grid container direction="row" justifyContent={'center'} style={{ paddingTop: '64px' }} >
              <Grid item xs={6}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Button
                    variant="contained"
                    onClick={showFacecamComponent}
                    sx={{
                      padding: '30px',
                      color: 'white',
                      width: '90%',
                      height: '120%',
                      backgroundColor: 'black',
                      transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
                      borderRadius: '8px',
                      transform: 'scale(1)',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        transform: 'scale(1.05)',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
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
                          Use Facecam
                        </Typography>
                      </div>
                    </div>
                  </Button></div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Button
                    variant="contained"
                    onClick={showScreenComponent}
                    sx={{
                      padding: '30px',
                      color: 'white',
                      width: '90%',
                      height: '120%',
                      backgroundColor: 'black',
                      transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
                      borderRadius: '8px',
                      transform: 'scale(1)',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        transform: 'scale(1.05)',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                        <LaptopChromebookIcon style={{ fontSize: '40px', opacity: hovered ? 0.8 : 1 }} />
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
                          Use Screen Capture
                        </Typography>
                      </div>
                    </div>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </>
        )}
        {showFacecam && (
          <>
            <ThreeDModel />
            <Button
              variant="contained"
              onClick={stopWebAndShowFace}
              sx={{
                padding: '30px',
                color: 'white',
                width: '40%',
                backgroundColor: 'black',
                transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
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
                  <LaptopChromebookIcon style={{ fontSize: '40px', opacity: hovered ? 0.8 : 1 }} />
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
                    Show Screen
                  </Typography>
                </div>
              </div>
            </Button>
            <Facecam open={showFacecam} />
          </>
        )}
        {showScreen && (
          <>
            <ThreeDModel />
            <Button
              variant="contained"
              onClick={startWebAndShowFace}
              sx={{
                padding: '30px',
                color: 'white',
                width: '40%',
                backgroundColor: 'black',
                transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
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
                    Show Facecam
                  </Typography>
                </div>
              </div>
            </Button>
            <Screen />
          </>
        )}
      </StyledGrid>
      <Button
        onClick={resetComponents}
        sx={{
          backgroundColor: 'maroon',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '700px',
          marginTop: '50px',
          '&:hover': {
            backgroundColor: 'gray',
            color: 'black',
            transform: 'scale(1.05)',
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
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
              Reset
            </Typography>
          </div>
        </div>
      </Button>
    </>

  );
};
export default Model;
