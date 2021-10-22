import { Route } from 'react-router-dom';
import AppLayout from 'components/AppLayout';

const NonProtectedRoutes = ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <>
          <AppLayout>
            <Component {...props} />
          </AppLayout>
        </>
      );
    }}
  />
);

export default NonProtectedRoutes;
