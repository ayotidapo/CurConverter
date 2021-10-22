import Routes from 'routes';

import store from 'store';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}
export default App;
