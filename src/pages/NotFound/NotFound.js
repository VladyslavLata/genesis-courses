import { Title } from 'components/Title/Title';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <Title main tag="h2">
        Page not found!
      </Title>
    </div>
  );
};

export default NotFound;
