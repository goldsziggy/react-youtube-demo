import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import './base.scss';
import { NavBar, Footer } from 'components';

const Base = (props) =>
  <div>
    <Helmet
      title="YouTube Explorer"
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <NavBar />
    <main className="container">
      <div className="row">
        {props.children}
      </div>
    </main>
    <Footer />
  </div>;

Base.propTypes = {
  children: PropTypes.node,
};

export default Base;
