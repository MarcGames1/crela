'use client';
import { Button } from 'react-daisyui';
import { FaVolumeUp, FaVolumeOff } from 'react-icons/fa';

import React, { useState } from 'react';

const HeroFullScreenVideoComponent = () => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="max-w-screen relative   ">
      <Video isMuted={isMuted} />
      <Button
        variant="outline"
        onClick={(e) => {
          setIsMuted(!isMuted);
        }}
        role="button"
        aria-label="sounds volume"
        className="rounded-full btn-secondary shadow-2xl bg-white absolute bottom-1 right-10 "
      >
        {isMuted ? <FaVolumeOff /> : <FaVolumeUp />}
      </Button>
    </div>
  );
};

export default HeroFullScreenVideoComponent;

const Video = ({ isMuted = true }) => {
  return (
    <video
      className=""
      playsInline
      autoPlay
      muted={isMuted}
      loop
      src="/videos/hero-video.mp4"
    ></video>
  );
};
