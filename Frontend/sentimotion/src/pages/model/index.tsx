import React, { useRef, useEffect } from "react";
import axios from "axios";

const Model = () => {
  const videoRef = useRef(null);
  const predictRef = useRef(null);

  useEffect(() => {
    const setupWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    setupWebcam();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      fetchPredict();
    }
  }, []);

  const fetchPredict = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        new URLSearchParams({
          video: videoRef.current.srcObject,
        })
      );
      if (predictRef.current) {
        predictRef.current.src = URL.createObjectURL(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(videoRef.current,"videoRef.current");

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        width="600"
        height="500"
      />
      {predictRef.current !== null && (
        <video
          ref={predictRef}
          autoPlay
          playsInline
          muted
          width="600"
          height="500"
        />
      )}
    </div>
  );
};

export default Model;