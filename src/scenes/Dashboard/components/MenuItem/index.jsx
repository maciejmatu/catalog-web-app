import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ path, title }) => (
  <Menu.Item key={path}>
    <Link to={path}>{title}</Link>
  </Menu.Item>
);

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MenuItem;
