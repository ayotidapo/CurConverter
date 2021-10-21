import { Suspense, lazy } from 'react';
import { PageLoader } from 'components/Loader';

import './App.scss';

const Main = lazy(() => import('./Main'));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Main />
    </Suspense>
  );
}
export default App;
