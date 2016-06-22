import React from 'react';
import './footer.scss';

const Footer = () =>
  <footer className="footer footer-basic-centered">
    <p className="footer-company-name">Anthony Grove © {new Date().getFullYear()}</p>
  </footer>;

export default Footer;
