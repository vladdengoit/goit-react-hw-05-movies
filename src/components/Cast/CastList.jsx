import styles from './cast.module.css';
import { getCastbyId } from '../../API/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';

const CastList = () => {
  const { movieId } = useParams();
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const urlForMovie = 'https://image.tmdb.org/t/p/w500';
  const thaglushka =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const haveCast = async () => {
      try {
        const myData = await getCastbyId(movieId);
        setState(myData.data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    haveCast();
  }, [movieId]);

  const ElementsCastList = state.map(el => (
    <li key={el.id} className={styles.lishka}>
      <div className={styles.image}>
        <img
          src={el.profile_path ? urlForMovie + el.profile_path : thaglushka}
          alt={el.original_name}
        />
        <h3 className={styles.genres}>{el.original_name} </h3>
        <p>Character: {el.character}</p>
      </div>
    </li>
  ));
  console.log(state);
  const noCasts = (
    <li>We do not have picters of cast for this movie. Sorry!!!</li>
  );
  return (
    <>
      <Loader loading={loading} />
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.htree}>
        <ol className={styles.olka}>
          {state.length ? ElementsCastList : noCasts}
        </ol>
      </div>
    </>
  );
};
export default CastList;
