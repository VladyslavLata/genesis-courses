import styles from './LockedMessage.module.scss';

export const LockedMessage = ({ children }) => {
  return <b className={styles['locked-message']}>{children}</b>;
};
