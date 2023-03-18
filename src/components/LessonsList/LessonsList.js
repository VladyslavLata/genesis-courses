import styles from './LessonsList.module.scss';
import { LockedMessage } from 'components/LockedMessage/LockedMessage';
import { Title } from 'components/Title/Title';

export const LessonsList = ({ lessons, onChangeCurrenLesson }) => {
  return (
    <ul className={styles['lessons-list']}>
      {lessons.map(lesson => {
        const { id, previewImageLink, status, title, order } = lesson;
        // console.log(`${previewImageLink}/${order}.webp`);
        return (
          <li
            key={id}
            className={styles.lesson}
            onClick={() => onChangeCurrenLesson(lesson)}
          >
            <p className={styles['lesson-number-wrapp']}>
              <span className={styles['lesson-number']}>{order}</span>
            </p>
            <div>
              <div className={styles['img-wrapp']}>
                <img
                  className={styles.image}
                  src={`${previewImageLink}/${order}.webp`}
                  alt="Preview of the lesson"
                />{' '}
                {status === 'locked' && <LockedMessage>Locked</LockedMessage>}
              </div>
            </div>
            {/* <h3 className={styles.title}>{title}</h3> */}
            <Title tag="h3">{title}</Title>
          </li>
        );
      })}
    </ul>
  );
};
