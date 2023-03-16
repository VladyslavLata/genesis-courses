import styles from './Button.module.scss';

export const Button = ({ children, onClickBtn }) => {
  return (
    <button className={styles.btn} onClick={onClickBtn}>
      {children}
    </button>
  );
};
