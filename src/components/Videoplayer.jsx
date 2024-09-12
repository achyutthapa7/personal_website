// components/VideoPlayer.js
import React from "react";

const Videoplayer = ({ src, controls = true }) => {
  return (
    <div className="video-container">
      <video src={src} controls={controls} className="w-full h-auto">
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videoplayer;
