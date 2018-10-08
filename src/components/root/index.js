import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Base } from 'components';

const Root = props =>
  (<Provider store={props.store}>
    <Base />
  </Provider>);


Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
