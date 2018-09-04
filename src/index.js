import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppV1 from './components/v1/app';
import AppV2 from './components/v2/app';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={AppV1} />
        <Route path="/v1" component={AppV1} />
        <Route path="/v2" component={AppV2} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('.app'));
