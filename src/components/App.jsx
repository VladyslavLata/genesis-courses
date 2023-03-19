import { Routes, Route } from 'react-router-dom';
import { SharedLayuot } from './SharedLayuot/SharedLayuot';
import { Courses } from 'pages/Courses/Courses';
import { Modal } from './Modal/Modal';
import { useStore } from 'Store/Store';
import { lazy } from 'react';

const CurrentCourse = lazy(() =>
  import('../pages/CurrentCourse/CurrentCourse')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const visibleModal = useStore(state => state.visibleModal);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayuot />}>
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<CurrentCourse />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {visibleModal && <Modal />}
    </>
  );
};
