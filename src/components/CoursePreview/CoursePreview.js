import styles from './CoursePreview.module.scss';
import { useEffect } from 'react';
import { useBufferingCounter } from 'hooks/useBufferingCounter';
// import Hls from 'hls.js';
// import { useVideoPlayer } from 'hooks/useVideoPlayer';
import { videoPlayerInit } from 'utils/videoPlayerInit';
// import { useVideoPlayer } from 'hooks/useVideoPlayer';
import { VideoLoader } from 'components/VideoLoader/VideoLoader';
import { CoursesInfo } from 'components/CoursesInfo/CoursesInfo';

export const CoursePreview = ({ course }) => {
  // const [bufferCounter, SetBufferCounter] = useState(0);
  const { bufferCounter, onBufferCounter } = useBufferingCounter();
  const {
    id,
    title,
    // description,
    lessonsCount,
    rating,
    meta,
    previewImageLink,
  } = course;

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

  // const onBufferCounter = e => {
  //   const duration = e.target.duration;
  //   const currentBufferingPercent = Math.ceil(
  //     e.target.buffered.end(0) / (duration / 100)
  //   );
  //   if (currentBufferingPercent > 100) {
  //     SetBufferCounter(100);
  //   } else {
  //     SetBufferCounter(currentBufferingPercent);
  //   }
  // };

  return (
    <>
      {/* <h2 className={styles.title}>Course</h2> */}
      <h2 className={styles.title}>{title}</h2>
      {/* <img src={`${courseVideoPreview.link}`} /> */}
      <div className={styles['course-content-wrapp']}>
        <div
          className={styles['video-player-wrapp']}
          onMouseOver={togglePlayVideo}
          onMouseLeave={togglePlayVideo}
        >
          <video
            id={id}
            controls
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
