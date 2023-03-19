import styles from './Message.module.scss';

export const Message = ({ children }) => {
  return <p className={styles.message}>{children}</p>;
};
