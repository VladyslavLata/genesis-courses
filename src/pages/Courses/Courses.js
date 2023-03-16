import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCourses } from 'API/API';
// import { Container } from 'components/Container/Container';
import { CoursesList } from 'components/CoursesList/CoursesList';
import { PaginationPanel } from 'components/PaginationPanel/PaginationPanel';

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');

  useEffect(() => {
    if (!currentPage) {
      setSearchParams({ page: 1 });
    }
  }, [currentPage, searchParams, setSearchParams]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const allCourses = await getAllCourses();
        setCourses(() => [...allCourses.courses]);
      } catch (error) {
        console.log(error?.message);
      }
    };

    getCourses();
  }, []);

  const visibleCourses = courses.slice(
    10 * (Number(currentPage) - 1),
    10 * Number(currentPage)
  );

  console.log(courses);
  return (
    <>
      {courses.length !== 0 && <CoursesList courses={visibleCourses} />}
      {courses.length !== 0 && <PaginationPanel />}
    </>
  );
};
