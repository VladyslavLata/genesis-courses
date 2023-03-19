import styles from './Header.module.scss';
import { Container } from 'components/Container/Container';
import { Link } from 'react-router-dom';
import { Title } from 'components/Title/Title';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapp}>
          <Link to="/">
            <Title tag="h3" main>
              GENESIS COURSES
            </Title>
          </Link>
        </div>
      </Container>
    </header>
  );
};
