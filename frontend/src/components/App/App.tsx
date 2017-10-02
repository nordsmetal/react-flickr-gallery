import * as React from 'react';
import CustomRoutes from '../../routes';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

interface AppProps {
  history: History;
}

const App = ({history}: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <CustomRoutes/>
    </ConnectedRouter>
  );
};

export default App;