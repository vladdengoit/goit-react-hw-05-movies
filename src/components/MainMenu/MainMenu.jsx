import styles from './main-menu.module.css';
import { Link } from 'react-router-dom';
const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/movies">
          Movies
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
