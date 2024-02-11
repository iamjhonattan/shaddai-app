import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import videoData from '../../data/videoData'; // Importa los datos de videoData
import '../../styles/video/VideoPlayer.css'; // Importa el archivo CSS

const VideoPlayer = () => {
  const { live, url, imagePath, imageStyle } = videoData;
  const [timeUntilNextStream, setTimeUntilNextStream] = useState(null);

  useEffect(() => {
    if (!live && videoData.nextStreamTime) {
      const intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(videoData.nextStreamTime) - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeUntilNextStream(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

        if (distance < 0) {
          clearInterval(intervalId);
          setTimeUntilNextStream(null);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [live]);

  return (
    <div className='video-player-wrapper'>
      {live ? (
        <ReactPlayer
          url={url}
          playing={true}
          controls={true}
          width='100%'
          height='100%'
        />
      ) : (
        <div className='no-stream'>
          <img src={imagePath} alt='No hay transmisión en vivo' style={imageStyle} />
          {timeUntilNextStream && (
            <div className='countdown'>{timeUntilNextStream}</div>
          )}
          <div className='next-stream'>
            Próxima transmisión
          </div>
        </div>
      )}
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;
