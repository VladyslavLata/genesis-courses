import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles['loader-wrapp']}>
      <ColorRing width="80" height="80" />
    </div>
  );
};
