import styles from './Searchbar.module.css';
import { useState } from 'react';

const Searchbar = ({ handleForGet }) => {
  const [valueInput, setValueText] = useState('');

  const handleInput = ({ target }) => {
    const { value } = target;
    setValueText(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    handleForGet(valueInput);
    setValueText('');
  };

  return (
    <div className={styles.out}>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search movies"
            onChange={handleInput}
            value={valueInput}
          />
        </form>
      </header>
    </div>
  );
};

export default Searchbar;
