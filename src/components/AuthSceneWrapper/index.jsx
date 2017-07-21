import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const AuthSceneWrapper = ({ children }) => (
  <div className="AuthSceneWrapper">
    {children}
  </div>
);

AuthSceneWrapper.propTypes = {
  children: PropTypes.object.isRequired
};

export default AuthSceneWrapper;
