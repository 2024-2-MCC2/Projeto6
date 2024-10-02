import React from 'react';

const VideoLoop = () => {
  return (
    <div>
      <video 
        src="../imgs/ny4k.mp4" 
        loop 
        autoPlay 
        muted 
        playsInline 
        style={{ pointerEvents: 'none', width: '100%', height: 'auto' }} 
      />
    </div>
  );
};

export default VideoLoop;
