import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./page/Home/Home'));
const NanniesPage = lazy(() => import('./page/Nannies/Nannies'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/nannies" element={<NanniesPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
