import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Test() {
  const [outputText, setOutputText] = useState('');
  const videoRef = useRef(null);

console.log(videoRef.current,"videoRef.current");
  return (
    <div style={{ margin: '64px' }}>
      <h1>Test Page</h1>
      <div>
      <img src="http://localhost:5000/test" alt="Video Stream" />
    </div>
    </div>
  );
}
