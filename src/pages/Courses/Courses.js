import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCourses } from 'API/API';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';
import { CoursesList } from 'components/CoursesList/CoursesList';
import { PaginationPanel } from 'components/PaginationPanel/PaginationPanel';

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');

  useEffect(() => {
    if (currentPage) {
      setPage(Number(currentPage));
    } else if (!currentPage) {
      setPage(1);
    }
  }, [currentPage, page, searchParams, setSearchParams]);

  useEffect(() => {
    const getCourses = async () => {
      setStatus('pending');
      try {
        const allCourses = await getAllCourses();
        setCourses(() => [...allCourses.courses]);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error?.message);
      }
    };

    getCourses();
  }, []);

  const visibleCourses = () =>
    courses.slice(10 * (Number(page) - 1), 10 * Number(page));

  const numberOfCourses = courses.length;
  return (
    <>
      {status === 'pending' && <Loader />}
      {numberOfCourses !== 0 && status === 'resolved' && (
        <CoursesList courses={visibleCourses()} />
      )}
      {numberOfCourses !== 0 && status === 'resolved' && (
        <PaginationPanel currentPage={page} numberOfCourses={numberOfCourses} />
      )}
      {status === 'rejected' && (
        <Message>Sorry, something went wrong. Try reloading the page</Message>
      )}
    </>
  );
};
