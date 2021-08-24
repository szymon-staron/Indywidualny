import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {history} from './_helpers/history';
import store from './store/store';
import Loading from './components/pages/load/load';

const App = lazy(() => {
  //Add a deliberate delay
  return Promise.all([
    import('./App'),
    new Promise(resolve =>setTimeout(resolve,3000))
  ]).then(([moduleExports])=>moduleExports);});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Suspense fallback={<Loading/>}>
        <App />
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById('root')
);
