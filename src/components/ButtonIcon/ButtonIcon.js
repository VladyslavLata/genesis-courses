import styles from './ButtonIcon.module.scss';

export const ButtonIcon = ({ onClick, children }) => {
  return (
    <button type="button" className={styles['btn-icon']} onClick={onClick}>
      {children}
    </button>
  );
};
