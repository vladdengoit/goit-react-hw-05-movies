import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const SingleMovie = lazy(() => import('../pages/SingleMovie/SingleMovie'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const SharedLayot = lazy(() => import('./SharedLayot/SharedLayot'));

function AppRoute() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayot />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<SingleMovie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default AppRoute;
