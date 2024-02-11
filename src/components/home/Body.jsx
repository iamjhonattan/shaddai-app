import React from 'react';
import VideoPlayer from '../video/VideoPlayer'; // Importa el componente VideoPlayer
import '../../styles/home/Body.css';

const Body = () => {
  //const facebookLiveUrl = 'https://www.facebook.com/shaddai.live/videos/1103600610770299/';

  return (
    <div className="body">
      <div className="video-player">
        <VideoPlayer /> {/*url={facebookLiveUrl}*/}
      </div>
    </div>
  );
};

export default Body;
