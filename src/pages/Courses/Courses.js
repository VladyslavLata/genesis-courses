import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCourses } from 'API/API';
// import { Container } from 'components/Container/Container';
import { CoursesList } from 'components/CoursesList/CoursesList';
import { PaginationPanel } from 'components/PaginationPanel/PaginationPanel';

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');

  useEffect(() => {
    if (!currentPage) {
      setSearchParams({ page: page });
    } else {
      setPage(Number(currentPage));
    }
  }, [currentPage, page, searchParams, setSearchParams]);

  useEffect(() => {
    // const findToken = async () => {
    //   const localStorageToken = localStorage.getItem('genesisToken');
    //   if (localStorageToken) {
    //     return localStorageToken;
    //   } else {
    //   const token = await getToken();
    //   console.log(token);
    //   return token;
    //   }
    // };
    // findToken();
    const getCourses = async () => {
      try {
        // const token = await findToken();
        // console.log(token);
        const allCourses = await getAllCourses();
        const reverseCourses = allCourses.courses.reverse();
        setCourses(() => [...reverseCourses]);
      } catch (error) {
        console.log(error?.message);
      }
    };

    getCourses();
  }, []);

  const visibleCourses = () =>
    courses.slice(10 * (Number(page) - 1), 10 * Number(page));

  console.log(courses);
  const numberOfCourses = courses.length;
  return (
    <>
      <p>adas</p>
      {numberOfCourses !== 0 && <CoursesList courses={visibleCourses()} />}
      {numberOfCourses !== 0 && (
        <PaginationPanel currentPage={page} numberOfCourses={numberOfCourses} />
      )}
    </>
  );
};
