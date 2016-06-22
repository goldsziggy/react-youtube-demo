import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Base from 'components/base';
import Search from 'components/search';

export default(
  <Route path="/" component={Base} >
    <IndexRoute component={Search} />
  </Route>
);
