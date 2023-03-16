import ReactPlayer from 'react-player';
import styles from './CoursePreview.module.scss';

export const CoursePreview = ({ course }) => {
  const {
    // id,
    title,
    // description,
    lessonsCount,
    rating,
    meta,
    previewImageLink,
  } = course;

  const ratingStyles = rating >= 4 ? 'rating-l' : 'rating-m';
  return (
    <>
      {/* <h2 className={styles.title}>Course</h2> */}
      <h2 className={styles.title}>{title}</h2>
      {/* <img src={`${courseVideoPreview.link}`} /> */}
      <div className={styles['course-content-wrapp']}>
        <div className={styles['video-player-wrapp']}>
          <video
            // controls
            muted
            width="100%"
            poster={`${previewImageLink}/cover.webp`}
            src={
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
            // src={meta.courseVideoPreview?.link}
          >
            {/* <source src={meta.courseVideoPreview?.link} type="video/mp4" />
        <source src={meta.courseVideoPreview?.link} type="video/m3u" />
        <source src={meta.courseVideoPreview?.link} type="video/ogg" /> */}
          </video>
        </div>

        <div className={styles['footer-course']}>
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
            {meta?.skills?.map((skil, i) => (
              <p key={`${skil}${i}`}>{skil}</p>
            ))}
          </ul>
        </div>
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
