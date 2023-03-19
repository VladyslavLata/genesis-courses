import styles from './CoursecInfo.module.scss';
import { useParams } from 'react-router-dom';

export const CoursesInfo = ({ lessonsCount, rating, metaInfo, children }) => {
  const { courseId } = useParams();
  const styleCourseInfoWrapp = courseId ? '' : 'footer-course';
  const skillListStyle = courseId ? '' : 'skills-list';
  const ratingStyles = rating >= 4 ? 'rating-l' : 'rating-m';
  return (
    <div className={styles[styleCourseInfoWrapp]}>
      <div className={styles['leson-rating-wrapp']}>
        <p>
          <span className={styles['characteristics-accent']}>Lesons:</span>
          {` ${lessonsCount}`}
        </p>
        <p className={`${styles.rating} ${styles[ratingStyles]}`}>{rating}</p>
      </div>
      {children}
      <p className={styles['characteristics-accent']}>Skills:</p>
      <ul className={styles[skillListStyle]}>
        {metaInfo?.skills?.map((skill, i) => (
          <li key={`${skill}${i}`}>
            <p>&#9733; {skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
