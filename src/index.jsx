import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import { DevTools } from './components';
import * as serviceWorker from './serviceWorker';
import './reset.scss';
import './index.scss';
import App from './App';

const Main = ({ state }) => (
  <div>
    <Provider store={state}>
      <App />
    </Provider>
  </div>
);

Main.defaultProps = {
  state: null,
};

Main.propTypes = {
  state: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }),
};

ReactDOM.render(
  <div>
    <Main state={store} />
    {!process?.env?.NODE_ENV.startsWith('prod') && <DevTools store={store} />}
  </div>,
  document.getElementById('root'),
);

serviceWorker.unregister();
