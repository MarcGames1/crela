'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'

const VideoPlayer = ({...props}:ReactPlayerProps) => {
  return (
    <ReactPlayer {...props} />
  )
}

export default dynamic(() => Promise.resolve(VideoPlayer), {
  ssr: false,
});
