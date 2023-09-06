import React, { useState, useEffect, Fragment } from 'react';
import Facecam from './facecam';
import Screen from './screen';
import { Button, Typography, Grid, GridProps, styled } from '@mui/material';
import { withTheme } from '@emotion/react';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';



const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
}));

const Model = () => {

  const [showFacecam, setShowFacecam] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  const [hovered, setHovered] = useState(false);

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
  };

  return (
    <>
      <StyledGrid>
        <h1>Model</h1>
      </StyledGrid>
      <StyledGrid>
        {!showFacecam && !showScreen && (
          <>
            <Button 
            variant="contained"
            onClick={showFacecamComponent}
            sx={{
              padding: '30px',
              color:'white',
              width: '40%',
              height: '40%',
              marginBottom: '40px',
              backgroundColor: 'black',
              transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
              borderRadius: '8px',
              transform:'scale(1)', 
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                transform:'scale(1.05)' ,
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
                            Show Facecam
                         </Typography>
                </div>
              </div>
            </Button>
            <Button 
            variant="contained"
            onClick={showScreenComponent}
            sx={{
              padding: '30px',
              color:'white',
              width: '40%',
              height: '40%',
              backgroundColor: 'black',
              transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
              borderRadius: '8px',
              transform:'scale(1)', 
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                transform:'scale(1.05)' ,
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
                            Show Screen
                         </Typography>
                </div>
              </div>
            </Button>
          </>
        )}
        {showFacecam && (
          <>
            <Button 
            variant="contained"
            onClick={showScreenComponent}
            sx={{
              padding: '30px',
              color:'white',
              width: '70%',
              backgroundColor: 'black',
              transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
              borderRadius: '8px',
              transform:'scale(1)', 
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                transform:'scale(1.05)' ,
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
                            Show Screen
                         </Typography>
                </div>
              </div>
            </Button>
            <Facecam />
          </>
        )}
        {showScreen && (
          <>
            <Button 
            variant="contained"
            onClick={showFacecamComponent}
            sx={{
              padding: '30px',
              color:'white',
              width: '70%',
              backgroundColor: 'black',
              transition: 'background-color 0.3s, color 0.3s , transform 0.3s',
              borderRadius: '8px',
              transform:'scale(1)', 
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                transform:'scale(1.05)' ,
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
        '&:hover': {
          backgroundColor: 'gray',
          color: 'black',
          transform:'scale(1.05)' ,
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
