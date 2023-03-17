// import { useParams } from 'react-router-dom';
import styles from './Container.module.scss';

export const Container = ({ children }) => {
  // const { courseId } = useParams();
  // const containerBgColor = courseId ? 'container-bg' : '';
  return <div className={`${styles.container}`}>{children}</div>;
};
