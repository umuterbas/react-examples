import React from 'react';
import Main from './Main';
import store from './store';
import { Provider } from 'react-redux';

export default function Redux() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Main />
      </div>
    </Provider>
  );
}
