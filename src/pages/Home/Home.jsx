import { fetchToAllPopularMovies } from '../../API/Api';
import { useEffect, useState } from 'react';
import styles from './home.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const haveMovies = async () => {
      try {
        const myData = await fetchToAllPopularMovies();
        setState(myData.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    haveMovies();
  }, []);
  const ElementsMoviesList = state.map(el => (
    <li key={el.id} className={styles.link}>
      <Link to={`/movies/${el.id}`} state={{ from: location }}>
        {el.original_title}
      </Link>
    </li>
  ));
  return (
    <>
      <Loader loading={loading} />
      {error && <p className={styles.error}>{error}</p>}
      <h2 className={styles.title}>Trending today</h2>
      <ul>{ElementsMoviesList}</ul>
    </>
  );
};
export default Home;
