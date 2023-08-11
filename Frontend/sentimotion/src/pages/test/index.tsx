import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Test() {

  return (
    <div style={{ margin: '64px' }}>
      <h1>Test Page</h1>
      <div>
      <img src="http://localhost:5000/predict" alt="Video Stream" />
    </div>
    </div>
  );
}