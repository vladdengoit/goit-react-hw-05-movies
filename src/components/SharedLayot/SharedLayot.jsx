import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import MainMenu from '../MainMenu/MainMenu';

const SharedLayot = () => {
  return (
    <>
      <MainMenu />
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayot;
