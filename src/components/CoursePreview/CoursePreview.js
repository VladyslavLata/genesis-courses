import styles from './CoursePreview.module.scss';
import { useEffect } from 'react';
import { useBufferingCounter } from 'hooks/useBufferingCounter';
import { videoPlayerInit } from 'utils/videoPlayerInit';
import { VideoLoader } from 'components/VideoLoader/VideoLoader';
import { CoursesInfo } from 'components/CoursesInfo/CoursesInfo';

export const CoursePreview = ({ course }) => {
  const { bufferCounter, onBufferCounter } = useBufferingCounter();
  const { id, title, lessonsCount, rating, meta, previewImageLink } = course;

  useEffect(() => {
    const videoElement = document.getElementById(id);
    if (!videoElement) {
      return;
    }
    const hls = videoPlayerInit(
      meta.courseVideoPreview?.link,
      videoElement,
      -1
    );

    return () => {
      hls.destroy();
    };
  }, [id, meta.courseVideoPreview?.link]);

  const togglePlayVideo = e => {
    e.stopPropagation();
    const videoPlayer = e.target;
    switch (e.type) {
      case 'mouseover':
        if (!videoPlayer.buffered?.length) {
          return;
        }
        videoPlayer.play();
        break;
      case 'mouseleave':
        if (!videoPlayer.buffered?.length) {
          return;
        }
        videoPlayer.pause();
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles['course-content-wrapp']}>
        <div
          className={styles['video-player-wrapp']}
          onMouseOver={togglePlayVideo}
          onMouseLeave={togglePlayVideo}
        >
          <video
            id={id}
            muted
            width="100%"
            poster={`${previewImageLink}/cover.webp`}
            onProgress={e => onBufferCounter(e)}
          ></video>
          <VideoLoader currentBufferingPercent={bufferCounter} />
        </div>
        <CoursesInfo
          lessonsCount={lessonsCount}
          rating={rating}
          metaInfo={meta}
        />
      </div>
    </>
  );
};
