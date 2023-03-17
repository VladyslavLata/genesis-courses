import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { getCourse } from 'API/API';
import { videoPlayerInit } from 'utils/videoPlayerInit';
import { Title } from 'components/Title/Title';
import { CoursesInfo } from 'components/CoursesInfo/CoursesInfo';
import styles from './CurrentCourse.module.scss';

export const CurrentCourse = () => {
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [startVideoWith, setstartVideoWith] = useState(-1);
  // const [time, setTime] = useState(0);
  const { courseId } = useParams();
  // const th = throttle();

  useEffect(() => {
    const getDataCourse = async () => {
      try {
        const course = await getCourse(courseId);
        setCourse(course);
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

  useEffect(() => {
    if (!currentLesson) {
      return;
    }
    const videoElement = document.getElementById(courseId);
    const time = JSON.parse(
      localStorage.getItem(`Lesson-id-${currentLesson.id}`)
    );
    console.log(time);
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
  }, [currentLesson, courseId, startVideoWith]);

  const saveCurrentTimeVideo = e => {
    if (!e.target.currentTime) {
      return;
    }
    localStorage.setItem(
      `Lesson-id-${currentLesson.id}`,
      JSON.stringify(Math.floor(e.target.currentTime))
    );
  };

  return (
    <>
      {course && currentLesson && (
        <>
          <div>
            <video
              id={courseId}
              controls
              width="100%"
              poster={`${currentLesson?.previewImageLink}/lesson.order.webp`}
              onTimeUpdate={throttle(e => saveCurrentTimeVideo(e), 1000)}
            ></video>
          </div>
          <Title tag="h2">
            {`Current lesson: ${currentLesson.order} - ${currentLesson.title}`}
          </Title>
          <div>
            {course && <Title main>{`Course: ${course.title}`}</Title>}
            <CoursesInfo
              lessonsCount={course.lessons.length}
              rating={course.rating}
              metaInfo={course.meta}
              // skillListStyle="main-skills-list"
            >
              <p className={styles.description}>{course.description}</p>
            </CoursesInfo>
          </div>
        </>
      )}
    </>
  );
};
