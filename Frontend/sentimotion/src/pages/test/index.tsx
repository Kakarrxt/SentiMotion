import React, { useState, useEffect, useRef } from 'react';
import homeimg from './home.jpg';
// import video from './video.mp4';
import ReactPlayer from 'react-player'


export default function Test() {
  const homeUrl = homeimg.src;

  const videoRef = React.useRef(null);


  return (
    <div style={{ margin: '64px' }}>
      <h1>Test Page</h1>
      <div>
        <img src={homeUrl} alt="Video Stream" />
        <ReactPlayer
          className='react-player fixed-bottom'
          url='videos/video.MP4'
          width='100%'
          height='100%'
          controls={true}

        />

      </div>
    </div>
  );
}