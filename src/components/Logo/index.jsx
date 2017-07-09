import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Logo = ({ color }) => (
  <h1 style={{ color }} className="Logo">CATALOG</h1>
);

Logo.defaultProps = {
  color: '#fff'
};

Logo.propTypes = {
  color: PropTypes.string.isRequired
};

export default Logo;
