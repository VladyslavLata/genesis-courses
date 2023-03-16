import { Routes, Route } from 'react-router-dom';
import { SharedLayuot } from './SharedLayuot/SharedLayuot';
import { Courses } from 'pages/Courses/Courses';
import { CurrentCourse } from 'pages/CurrentCourse/CurrentCourse';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayuot />}>
        <Route index element={<Courses />} />
        <Route path=":courseId" element={<CurrentCourse />} />
      </Route>
    </Routes>
  );
};
