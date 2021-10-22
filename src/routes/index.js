import { Suspense, lazy } from 'react';
import OpenRoute from 'routes/OpenRoutes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ConverterPage = lazy(() => import('pages/ConverterPage'));
const CurrentRatesPage = lazy(() => import('pages/CurrentRatesPage'));

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={null}>
        <Switch>
          <OpenRoute exact path="/" Component={ConverterPage} />
          <OpenRoute path="/current-rates" Component={CurrentRatesPage} />
          <Route render={() => <h1>Page Not Found</h1>} />;
        </Switch>
      </Suspense>
    </Router>
  );
};
export default Routes;
