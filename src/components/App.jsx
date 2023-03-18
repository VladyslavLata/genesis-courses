import { Routes, Route } from 'react-router-dom';
import { SharedLayuot } from './SharedLayuot/SharedLayuot';
import { Courses } from 'pages/Courses/Courses';
import { CurrentCourse } from 'pages/CurrentCourse/CurrentCourse';
import { Modal } from './Modal/Modal';
import { useStore } from 'Store/Store';

export const App = () => {
  const visibleModal = useStore(state => state.visibleModal);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayuot />}>
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<CurrentCourse />} />
        </Route>
      </Routes>
      {visibleModal && <Modal />}
    </>
  );
};
