import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import videoData from '../../data/videoData'; // Importa los datos de videoData
import '../../styles/video/VideoPlayer.css'; // Importa el archivo CSS

const VideoPlayer = () => {
  const { live, url, recordedUrl, imagePath, imageStyle, nextStreamTime } = videoData;
  const [timeUntilNextStream, setTimeUntilNextStream] = useState(null);
  const [showImageAndCountdown, setShowImageAndCountdown] = useState(false);

  useEffect(() => {
    if (!live && nextStreamTime) {
      const intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(nextStreamTime) - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeUntilNextStream(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

        if (distance < 0) {
          clearInterval(intervalId);
          setShowImageAndCountdown(false);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setShowImageAndCountdown(!live && !recordedUrl);
    }
  }, [live, nextStreamTime, recordedUrl]);

  const handlePlayRecordedVideo = () => {
    setShowImageAndCountdown(false);
  };

  return (
    <div className='video-player-wrapper'>
      {showImageAndCountdown ? (
        <div className='no-stream'>
          <img src={imagePath} alt='No hay transmisión en vivo' style={imageStyle} />
          {timeUntilNextStream && (
            <div className='countdown'>{timeUntilNextStream}</div>
          )}
          <div className='next-stream'>
            Próxima transmisión
          </div>
        </div>
      ) : (
        <>
          {live ? (
            <ReactPlayer
              url={url}
              playing={true}
              controls={true}
              width='100%'
              height='100%'
            />
          ) : (
            <ReactPlayer
              url={recordedUrl}
              playing={true}
              controls={true}
              width='100%'
              height='100%'
              onStart={handlePlayRecordedVideo}
            />
          )}
        </>
      )}
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  recordedUrl: PropTypes.string.isRequired,
};

export default VideoPlayer;
