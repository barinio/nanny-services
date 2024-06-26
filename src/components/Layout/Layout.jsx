import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
