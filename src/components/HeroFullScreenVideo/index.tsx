import React from 'react'
import dynamic from 'next/dynamic';

import HeroFullScreenVideoContainer from './HeroFullScreenVideoContainer';
const HeroFullScreenVideoComponent = dynamic(
  () => import('./HeroFullScreenVideoComponent')
);

const HeroFullScreenVideo = () => {

return (
  <HeroFullScreenVideoContainer><HeroFullScreenVideoComponent /></HeroFullScreenVideoContainer>
);
}

export default HeroFullScreenVideo




