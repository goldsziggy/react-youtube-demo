
import React from 'react';
import ReactDom from 'react-dom';
import jquery from 'jquery';
import { renderIntoDocument, Simulate } from 'react-addons-test-utils';

import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from 'reducers';


function renderComponent(ComponentClass, props, children) {
  const Component = (() => {
    if (children) {
      return () => <ComponentClass {...props}>{children}</ComponentClass>;
    }
    return () => <ComponentClass {...props} />;
  })();
  const middleware = compose(
    applyMiddleware(routerMiddleware(browserHistory))
  );
  const store = createStore(
    rootReducer,
    middleware
  );
  const componentInstance = renderIntoDocument(
    <Provider store={store} key="provider">
      <Component />
    </Provider>
  );
  return ReactDom.findDOMNode(componentInstance);
}

export default renderComponent;
