import Searchbar from '../Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviebySearch } from 'API/Api';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import styles from '../Searchbar/Searchbar.module.css';

const SearchMovie = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [searchMovie, setSearchMovie] = useSearchParams();
  const valueInput = searchMovie.get('valueInput');
  const page = searchMovie.get('page');

  useEffect(() => {
    const handlerFetch = async () => {
      try {
        setloading(true);
        const myData = await getMoviebySearch(valueInput, page);
        const { total_results } = myData.data;
        setMovieList(prevMovies => [...prevMovies, ...myData.data.results]);
        setShowButton(page < Math.ceil(total_results / 20));
      } catch (error) {
        setError(error.message);
      } finally {
        setloading(false);
      }
    };
    if (valueInput) {
      handlerFetch();
    }
  }, [valueInput, page]);

  const handleForGet = valueInput => {
    setSearchMovie({ valueInput, page: 1 });
    setMovieList([]);
  };

  const changePage = () =>
    setSearchMovie({ valueInput, page: Number(page) + 1 });

  return (
    <div>
      <Loader loading={loading} />
      {error && <p className={styles.error}>{error}</p>}
      <Searchbar handleForGet={handleForGet} />
      {movieList && <ImageGallery movieList={movieList} />}
      {showButton && <Button changePage={changePage} />}
    </div>
  );
};

export default SearchMovie;
