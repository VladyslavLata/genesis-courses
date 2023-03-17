import styles from './Title.module.scss';

export const Title = ({ tag: Tag = 'h1', main, children }) => {
  const titleStyles = main ? 'title-main' : 'title-seccond';
  return <Tag className={styles[titleStyles]}>{children}</Tag>;
};
