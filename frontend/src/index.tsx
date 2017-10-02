
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
// import registerServiceWorker from './lib/registerServiceWorker';

import rootReducer from './reducers';
import App from './components/App/App';
import { AppContainer } from 'react-hot-loader';
const history = createBrowserHistory({basename: (window as any).location.pathname.split( '/' )[1]});

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeData = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={storeData}>
        <App history={history}/>
      </Provider>
    </AppContainer>, 
    document.getElementById('root'));
};

render();
// registerServiceWorker();

// Hot reloading
if (module.hot) {
  // Reload components
  module
    .hot
    .accept('./components/App/App', () => {
      render();
    });

  // Reload reducers
  module
    .hot
    .accept('./reducers', () => {
      storeData.replaceReducer(connectRouter(history)(rootReducer));
    });
}