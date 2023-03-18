import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { getCourse } from 'API/API';
// import { videoPlayerInit } from 'utils/videoPlayerInit';
import { useVideoPlayer } from 'hooks/useVideoPlayer';
import { Title } from 'components/Title/Title';
import { CoursesInfo } from 'components/CoursesInfo/CoursesInfo';
import { LessonsList } from 'components/LessonsList/LessonsList';
import { LockedMessage } from 'components/LockedMessage/LockedMessage';
// import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { useStore } from 'Store/Store';
import { VscMultipleWindows } from 'react-icons/vsc';
import { ButtonIcon } from 'components/ButtonIcon/ButtonIcon';
import styles from './CurrentCourse.module.scss';

const CurrentCourse = () => {
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  // const [startVideoWith, setstartVideoWith] = useState(-1);
  // const [time, setTime] = useState(0);
  const { courseId } = useParams();
  // const th = throttle();
  const onOpenModal = useStore(state => state.openModal);
  const addLessonOnModalVideo = useStore(state => state.addLesson);

  useEffect(() => {
    const getDataCourse = async () => {
      try {
        const course = await getCourse(courseId);
        const sortCourse = [...course.lessons].sort(
          (a, b) => a.order - b.order
        );
        setCourse({ ...course, lessons: [...sortCourse] });
      } catch (error) {
        console.log(error.message);
      }
    };

    getDataCourse();
  }, [courseId]);

  useEffect(() => {
    if (!course) {
      return;
    }
    setCurrentLesson(course.lessons[0]);
  }, [course]);

  const { saveCurrentTimeVideo } = useVideoPlayer(currentLesson);

  return (
    <>
      {course && currentLesson && (
        <>
          <div className={styles['video-wrapp']}>
            <video
              className={styles.video}
              id={courseId}
              controls={currentLesson.status === 'unlocked'}
              width="100%"
              poster={`${currentLesson?.previewImageLink}/${currentLesson.order}.webp`}
              onTimeUpdate={throttle(e => saveCurrentTimeVideo(e), 1000)}
            ></video>
            {currentLesson && currentLesson.status === 'locked' && (
              <LockedMessage>This video is blocked</LockedMessage>
            )}
          </div>
          <Title tag="h2">
            {`Current lesson: ${currentLesson.order} - ${currentLesson.title}`}{' '}
            {currentLesson.status === 'unlocked' && (
              <ButtonIcon
                onClick={() => {
                  onOpenModal();
                  addLessonOnModalVideo(currentLesson);
                }}
              >
                <VscMultipleWindows />
              </ButtonIcon>
            )}{' '}
          </Title>
          <div>
            {course && <Title main>{`Course: ${course.title}`}</Title>}
            <CoursesInfo
              lessonsCount={course.lessons.length}
              rating={course.rating}
              metaInfo={course.meta}
              // skillListStyle="main-skills-list"
            >
              <b className={styles.description}>{course.description}</b>
            </CoursesInfo>
          </div>
        </>
      )}
      {course && (
        <LessonsList
          lessons={course.lessons}
          onChangeCurrenLesson={setCurrentLesson}
        />
      )}
      {!course && <Loader />}
    </>
  );
};

export default CurrentCourse;
