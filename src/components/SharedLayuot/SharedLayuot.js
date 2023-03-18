import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import styles from './SharedLayuot.module.scss';
import { Header } from 'components/Header/Header';
import { useStore } from 'Store/Store';
import { Suspense } from 'react';

export const SharedLayuot = () => {
  const visibleModal = useStore(state => state.visibleModal);
  const curretSection = visibleModal ? 'section-with-open-modal' : 'section';
  return (
    <>
      <Header />
      <main>
        <section className={styles[`${curretSection}`]}>
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
    </>
  );
};
