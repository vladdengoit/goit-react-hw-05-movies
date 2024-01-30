import styles from './ImageGallery.module.css';
import { Link, useLocation } from 'react-router-dom';

const ImageGallery = ({ movieList }) => {
  const location = useLocation();
  const movies = movieList.map(el => (
    <li key={el.id} className={styles.link}>
      <Link to={`/movies/${el.id}`} state={{ from: location }}>
        {el.original_title}
      </Link>
    </li>
  ));
  return (
    <div className={styles.ulka}>
      <ul>{movies}</ul>
    </div>
  );
};
export default ImageGallery;
