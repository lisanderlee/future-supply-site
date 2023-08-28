'use client'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({videoUrl}) => {

  return (
    <div>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={videoUrl}
          width="100%"
          height="100%"
          controls="true"
        />
      </div>
    </div>
  )
}

export default VideoPlayer
