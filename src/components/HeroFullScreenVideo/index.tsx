import React from 'react'

const HeroFullScreenVideo = () => {
  return (
    <video
      className="w-screen"
      playsInline
      autoPlay
      muted
      loop
      src="/videos/hero-video.mp4"
    ></video>
  );
}

export default HeroFullScreenVideo