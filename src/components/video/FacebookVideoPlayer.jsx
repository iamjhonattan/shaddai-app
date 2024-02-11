import React from 'react';
import ReactPlayer from 'react-player';
import '../../styles/video/FacebookVideoPlayer.css'; // Importa el archivo CSS

const VideoPlayer = ({ url }) => {
  return (
    <div className='video-player-wrapper'>
      <ReactPlayer
        url={url}
        playing={true}
        controls={true}
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default VideoPlayer;
