import React, { useState, useEffect, Fragment } from 'react';
import Facecam from './facecam';
import Screen from './screen';
import { Grid, GridProps, styled } from '@mui/material';
import ThreeDModel from '../common/3dmodel';


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
   <ThreeDModel />
      <StyledGrid>
        <h1>Model</h1>
        {!showFacecam && !showScreen && (
          <>
            <button onClick={showFacecamComponent}>Show Facecam</button>
            <button onClick={showScreenComponent}>Show Screen</button>
          </>
        )}
        {showFacecam && (
          <>
            <button onClick={showScreenComponent}>Show Screen</button>
            <Facecam />
          </>
        )}
        {showScreen && (
          <>
            <button onClick={showFacecamComponent}>Show Facecam</button>
            <Screen />
          </>
        )}
      </StyledGrid>
      <button onClick={resetComponents}>Reset</button>
    </>
    
  );
};
export default Model;


