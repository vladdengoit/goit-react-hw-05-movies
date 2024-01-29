import { Route, Routes } from 'react-router-dom';
import MainMenu from './MainMenu/MainMenu';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import SingleMovie from '../pages/SingleMovie/SingleMovie';
import Reviews from '../pages/Reviews/Reviews';
import Cast from '../pages/Cast/Cast';
import AppRoute from './AppRoute';

function App() {
  return (
    <>
      <div className="App">
        <AppRoute />
        {/* <MainMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<SingleMovie />} />
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      <Route path="*" element={<Home />} />
    </Routes> */}
      </div>
    </>
  );
}

export default App;
