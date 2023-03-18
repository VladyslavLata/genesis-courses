import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import styles from './SharedLayuot.module.scss';
import { useStore } from 'Store/Store';

export const SharedLayuot = () => {
  const visibleModal = useStore(state => state.visibleModal);
  const curretSection = visibleModal ? 'section-with-open-modal' : 'section';
  return (
    <>
      <main>
        <section className={styles[`${curretSection}`]}>
          <Container>
            <Outlet />
          </Container>
        </section>
      </main>
    </>
  );
};
