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
  const homeUrl = homeimg.src;

  const videoRef = React.useRef(null);
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)"
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <><div style={{ margin: '64px' }}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <h1>Test Page</h1>
      </motion.div>
    </div>
      {/* <div>
        <img src={homeUrl} alt="Video Stream" />
        <ReactPlayer
          className='react-player fixed-bottom'
          url='videos/video.MP4'
          width='100%'
          height='100%'
          controls={true}

        />

      </div> */}
      <div style={{ margin: '64px' }}>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <h1>Test Page</h1>
        </motion.div>
      </div>
      <div style={{ maxHeight: '50px', maxWidth: '400px', justifyContent: 'center', alignItems: 'center', marginLeft: '500px' }}>
        <motion.div className="example-container" style={{ background }}>
          <motion.div
            className="box"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
          >
            <svg className="progress-icon" viewBox="0 0 50 50">
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ translateX: 5, translateY: 5 }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M14,26 L 22,33 L 35,16"
                strokeDasharray="0 1"
                style={{ pathLength: tickPath }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M17,17 L33,33"
                strokeDasharray="0 1"
                style={{ pathLength: crossPathA }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M33,17 L17,33"
                strokeDasharray="0 1"
                style={{ pathLength: crossPathB }}
              />
            </svg>
          </motion.div>
        </motion.div></div>
      <div>
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            variants={draw}
            custom={1}
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            variants={draw}
            custom={3}
          />
          <motion.circle
            cx="100"
            cy="300"
            r="80"
            stroke="#0099ff"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="230"
            x2="360"
            y2="370"
            stroke="#ff0055"
            custom={3}
            variants={draw}
          />
          <motion.line
            x1="220"
            y1="370"
            x2="360"
            y2="230"
            stroke="#ff0055"
            custom={3.5}
            variants={draw}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="230"
            rx="20"
            stroke="#00cc88"
            custom={4}
            variants={draw}
          />
          <motion.circle
            cx="100"
            cy="500"
            r="80"
            stroke="#00cc88"
            variants={draw}
            custom={3}
          />
          <motion.line
            x1="220"
            y1="430"
            x2="360"
            y2="570"
            stroke="#0099ff"
            variants={draw}
            custom={4}
          />
          <motion.line
            x1="220"
            y1="570"
            x2="360"
            y2="430"
            stroke="#0099ff"
            variants={draw}
            custom={4.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="430"
            rx="20"
            stroke="#ff0055"
            variants={draw}
            custom={5}
          />
        </motion.svg>
      </div>
      <div style={{margin:'10px'}}>
        <AnimatedTextWord text="Testing the animation" />
        <AnimatedTextCharacter text="Testing the animation" />

      </div>

      <div>
        <ThreeDModel />
      </div>
    </>
  );
}