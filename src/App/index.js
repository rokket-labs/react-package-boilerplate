import React from 'react';
import ReactDOM from 'react-dom';

import Span from '../span';
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Span);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../span', () => {
    render(Span)
  });
}