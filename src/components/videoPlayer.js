import React from 'react'
import ReactPlayer from 'react-player'
import './video.css';

const VideoPlayer = () => {
  return (
    <div className="player-wrapper">

      <ReactPlayer
        playing
        muted
        loop
        className="react-player"
        url='https://www.youtube.com/watch?v=exuO3zYSzbY&t=4s&ab_channel=WonderGirl'
        width="100%"
        height="1000px"
      />
    </div>
  );
}

export default VideoPlayer;
