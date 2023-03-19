import { useState } from 'react';

export const useBufferingCounter = () => {
  const [bufferCounter, SetBufferCounter] = useState(0);

  const onBufferCounter = e => {
    const duration = e.target.duration;
    const currentBufferingPercent = Math.ceil(
      e.target.buffered.end(0) / (duration / 100)
    );
    if (currentBufferingPercent > 100) {
      SetBufferCounter(100);
    } else {
      SetBufferCounter(currentBufferingPercent);
    }
  };

  return { bufferCounter, onBufferCounter };
};
