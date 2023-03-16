import { Link } from 'react-router-dom';
import { CoursePreview } from 'components/CoursePreview/CoursePreview';
import styles from './CoursesList.module.scss';

export const CoursesList = ({ courses }) => {
  return (
    <ul className={styles['courses-list']}>
      {courses.map(course => {
        const { id, meta } = course;
        return (
          <li key={id} className={styles['course-item']}>
            <Link
              to={`${id}?course=${meta.slug.toLowerCase()}`}
              className={styles.link}
            >
              <CoursePreview course={course} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
