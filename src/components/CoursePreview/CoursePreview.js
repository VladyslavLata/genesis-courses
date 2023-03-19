import styles from './CoursePreview.module.scss';
import { useEffect } from 'react';
// import Hls from 'hls.js';
// import { useVideoPlayer } from 'hooks/useVideoPlayer';
import { videoPlayerInit } from 'utils/videoPlayerInit';
// import { useVideoPlayer } from 'hooks/useVideoPlayer';
import { CoursesInfo } from 'components/CoursesInfo/CoursesInfo';

export const CoursePreview = ({ course }) => {
  const {
    id,
    title,
    // description,
    lessonsCount,
    rating,
    meta,
    previewImageLink,
  } = course;

  // useVideoPlayer(toString(meta.courseVideoPreview?.link), id);
  // useVideoPlayer()
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

  // const ratingStyles = rating >= 4 ? 'rating-l' : 'rating-m';
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
            // controls
            muted
            width="100%"
            poster={`${previewImageLink}/cover.webp`}
          ></video>
        </div>
        <CoursesInfo
          lessonsCount={lessonsCount}
          rating={rating}
          metaInfo={meta}
          // skillListStyle={'skills-list'}
        />
        {/* <div className={styles['footer-course']}>
          <div className={styles['leson-rating-wrapp']}>
            <p>
              <span className={styles['characteristics-accent']}>Lesons:</span>
              {` ${lessonsCount}`}
            </p>
            <p className={`${styles.rating} ${styles[ratingStyles]}`}>
              {rating}
            </p>
          </div>
          <p className={styles['characteristics-accent']}>Skills:</p>
          <ul className={styles['skills-list']}>
            {meta?.skills?.map((skill, i) => (
              <li key={`${skill}${i}`}>
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <ReactPlayer
        url={meta.courseVideoPreview?.link}
        width={200}
        height={200}
      /> */}
        {/* <div></div> */}
      </div>
    </>
  );
};
