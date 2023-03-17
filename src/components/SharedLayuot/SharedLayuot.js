import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import styles from './SharedLayuot.module.scss';

export const SharedLayuot = () => {
  return (
    <>
      <main>
        <section className={styles.section}>
          <Container>
            <Outlet />
          </Container>
        </section>
      </main>
    </>
  );
};
