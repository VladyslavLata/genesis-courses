import styles from './Button.module.scss';

export const Button = ({ children, disabled, onClickBtn }) => {
  return (
    <button className={styles.btn} disabled={disabled} onClick={onClickBtn}>
      {children}
    </button>
  );
};
