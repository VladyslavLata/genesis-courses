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
  const videoElement = document.getElementById(id);
  // useVideoPlayer(toString(meta.courseVideoPreview?.link), id);
  // useVideoPlayer()
  useEffect(() => {
    if (!videoElement) {
      console.log(videoElement);
      return;
    }
    const hls = videoPlayerInit(
      meta.courseVideoPreview?.link,
      videoElement,
      -1
    );
    // let hls = null;
    // if (Hls.isSupported()) {
    //   hls = new Hls();
    //   hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    //     console.log('video and hls.js are now bound together !');
    //   });
    //   hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
    //     console.log(
    //       'manifest loaded, found ' + data.levels.length + ' quality level'
    //     );
    //   });
    //   hls.loadSource(`${meta.courseVideoPreview?.link}`);
    //   // bind them together
    //   hls.attachMedia(videoElement);
    // }

    return () => {
      hls.destroy();
    };
  }, [id, meta.courseVideoPreview?.link, videoElement]);

  const togglePlayVideo = e => {
    console.log(e);
    e.stopPropagation();
    if (e.type === 'mouseover') {
      videoElement?.play();
    } else if (e.type === 'mouseleave') {
      videoElement?.pause();
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
            controls
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
