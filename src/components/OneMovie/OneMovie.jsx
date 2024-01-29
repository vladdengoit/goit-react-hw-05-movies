import { getMoviebyId } from '../../API/Api';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import styles from './OneMovie.module.css';
import { Link, Outlet } from 'react-router-dom';
const thaglushka =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const urlForMovie = 'https://image.tmdb.org/t/p/w500';

const OneMovie = () => {
  const navigateMovie = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const { movieId } = useParams();
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const haveSingleMovie = async () => {
      try {
        const myData = await getMoviebyId(movieId);

        setState(myData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    haveSingleMovie();
  }, [movieId]);
  const goBack = () => navigateMovie(from);

  return (
    <>
      <button className={styles.Button} type="button" onClick={goBack}>
        Go back
      </button>
      <Loader loading={loading} />
      {state && (
        <>
          <div className={styles.conteiner}>
            <div className={styles.image} key={state.id}>
              <img
                src={
                  state.poster_path
                    ? urlForMovie + state.poster_path
                    : thaglushka
                }
                alt={state.original_title}
              />
            </div>
            <div className={styles.content}>
              <h2>
                {state.original_title} ({state.release_date})
              </h2>
              <h2>User score : {state.vote_average}</h2>
              <h3>
                Overview : <div className={styles.htree}>{state.overview}</div>{' '}
              </h3>
              <div>
                <h3 className={styles.genres}>
                  Genres :{' '}
                  {state.genres &&
                    state.genres?.map(el => (
                      <li className={styles.lishka}>{el.name}</li>
                    ))}
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.addinfo}>
            <p className={styles.paragraph}>Additional information :</p>

            <ul>
              <li>
                <Link to="cast" state={{ from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from }}>
                  Reviews
                </Link>
              </li>
              <Outlet />
            </ul>
          </div>
        </>
      )}
    </>
  );
};
export default OneMovie;
