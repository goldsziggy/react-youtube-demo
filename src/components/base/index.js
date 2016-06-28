import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavBar, Footer, Detail, List } from 'components';
import { updateSearchQuery } from 'src/actions';
import * as config from 'src/actions/config';
import './base.scss';

class Base extends Component {
  componentWillMount() {
    this.props.updateSearchQuery(config.INITAL_QUERY);
  }
  render() {
    return (
      <react>
        <Helmet
          title="YouTube Explorer"
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />
        <NavBar />
        <main>
          <Detail />
          <List />
        </main>
        <Footer />
      </react>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateSearchQuery,
  }, dispatch);
}

Base.propTypes = {
  updateSearchQuery: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Base);
