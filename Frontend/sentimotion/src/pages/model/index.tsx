import React, { useRef, useEffect } from "react";
import axios from "axios";

const Model = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const webcamPromise = navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      });

    Promise.all([webcamPromise])
      .then(() => {
        detectFrame();
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const detectFrame = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const videoStream = canvas.captureStream();
      const videoTrack = videoStream.getVideoTracks()[0];
      const mediaRecorder = new MediaRecorder(videoStream);
      const chunks = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const formData = new FormData();
        formData.append("video", blob, "video.webm");
        
        try {
          const response = await axios.post("http://localhost:5000/predict", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          console.log(response.data);

          response.data.frames.forEach((frame) => {
            const { x, y, width, height, label } = frame;
            ctx.strokeStyle = "#00FFFF";
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);
            ctx.font = "16px sans-serif";
            ctx.fillStyle = "#00FFFF";
            ctx.fillText(label, x, y - 5);
          });

          requestAnimationFrame(detectFrame);
        } catch (error) {
          console.error(error);
        }
      };

      setTimeout(() => {
        mediaRecorder.stop();
      }, 2000); // Stop recording after 2 seconds

      mediaRecorder.start();
    }
  };

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
      <canvas
        ref={canvasRef}
        width="600"
        height="500"
        style={{ border: "2px solid #00FFFF" }}
      />
    </div>
  );
};

export default Model;
