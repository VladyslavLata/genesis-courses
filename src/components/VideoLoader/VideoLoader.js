import styles from './VideoLoader.module.scss';

export const VideoLoader = ({ currentBufferingPercent }) => {
  return (
    <p className={styles['video-loader']}>{`${currentBufferingPercent}%`}</p>
  );
};
