import { useEffect, useState } from 'react';
import { videoPlayerInit } from 'utils/videoPlayerInit';
import { useParams } from 'react-router-dom';

export const useVideoPlayer = (currentLesson, visibleModal) => {
  const [startVideoWith, setstartVideoWith] = useState(-1);
  const { courseId } = useParams();

  const currentId = visibleModal ? currentLesson.id : courseId;

  useEffect(() => {
    if (!currentLesson) {
      return;
    }
    const videoElement = document.getElementById(currentId);
    const time = JSON.parse(
      localStorage.getItem(`Lesson-id-${currentLesson.id}`)
    );
    if (time) {
      setstartVideoWith(time);
    }
    const hls = videoPlayerInit(
      currentLesson.link,
      videoElement,
      startVideoWith
    );

    return () => {
      hls.destroy();
    };
  }, [currentLesson, currentId, startVideoWith]);

  const saveCurrentTimeVideo = e => {
    if (!e.target.currentTime) {
      return;
    }
    localStorage.setItem(
      `Lesson-id-${currentLesson.id}`,
      JSON.stringify(Math.floor(e.target.currentTime))
    );
  };

  return { saveCurrentTimeVideo };
};
