import styles from './review.module.css';
import { getReviewsbyId } from '../../API/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
// import { Link, Outlet } from 'react-router-dom';

const Review = () => {
  const { movieId } = useParams();
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const haveSingleMovie = async () => {
      try {
        const myData = await getReviewsbyId(movieId);
        setState(myData.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    haveSingleMovie();
  }, []);
  const ElementsReviewsList = state.map(el => (
    <li key={el.id} className={styles.lishka}>
      <div className={styles.image}>
        <h3 className={styles.genres}>Author : {el.author_details.name} </h3>
        <p>{el.content}</p>
      </div>
    </li>
  ));
  const noReviews = <li>We do not have reviews for this movie. Sorry!!!</li>;

  return (
    <>
      <Loader loading={loading} />
      {error && <p className={styles.error}>{error}</p>}
      <div>
        <ol className={styles.htree}>
          {state.length ? ElementsReviewsList : noReviews}
        </ol>
      </div>
    </>
  );
};
export default Review;
