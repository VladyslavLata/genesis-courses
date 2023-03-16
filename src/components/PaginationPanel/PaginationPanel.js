import { useSearchParams } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import styles from './PaginationPanel.module.scss';

export const PaginationPanel = ({ currentPage, numberOfCourses }) => {
  const [, setSearchParams] = useSearchParams();

  const onPagination = incrementPage => {
    if (!currentPage) {
      return;
    } else setSearchParams({ page: currentPage + incrementPage });
  };

  return (
    <div className={styles['wrapp-btns']}>
      <Button disabled={currentPage <= 1} onClickBtn={() => onPagination(-1)}>
        Prev
      </Button>
      <Button
        disabled={!(numberOfCourses > currentPage * 10)}
        onClickBtn={() => onPagination(1)}
      >
        Next
      </Button>
    </div>
  );
};
