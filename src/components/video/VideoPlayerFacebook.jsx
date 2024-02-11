import React, { useRef, useState } from 'react';

const VideoPlayerFacebook = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullScreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    } else {
      console.error('Fullscreen is not supported');
    }
  };

  const handleVolumeChange = (event) => {
    const value = parseFloat(event.target.value);
    setVolume(value);
    videoRef.current.volume = value;
  };

  return (
    <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden', paddingTop: '56.25%' }}>
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000000' }}
      >
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: '#b88917' }}>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={toggleFullScreen}>Fullscreen</button>
      </div>
    </div>
  );
};

export default VideoPlayerFacebook;