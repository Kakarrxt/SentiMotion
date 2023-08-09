import Box, { BoxProps } from "@mui/material/Box";
import Fab, { FabProps } from '@mui/material/Fab';
import Grid, { GridProps } from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import WebcamVideo from "./webcam-video";




export default function Model() {
    return (

        <div className="App">
        <WebcamVideo/>
      </div>
     
    );
}
