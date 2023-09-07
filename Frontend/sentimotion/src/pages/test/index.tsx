import React, { useState, useEffect, useRef } from 'react';
import homeimg from './home.jpg';
import "./styles.css";
// import video from './video.mp4';
import ReactPlayer from 'react-player'
import {
  motion, useMotionValue,
  useTransform,
} from 'framer-motion';
import AnimatedTextWord from './TextAnimation1';
import AnimatedTextCharacter from './TextAnimation2';
import ThreeDModel from '../common/3dmodel';
import TorusModel from '../common/torusModel';
import RadarGraph from '../common/radarGraph';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function Test() {
return(

      <div>
        <RadarGraph/>
      </div>

)
}