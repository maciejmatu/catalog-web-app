import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './styles.scss';
import AuthSceneWrapper from '../../components/AuthSceneWrapper';

const NotFound = () => (
  <AuthSceneWrapper>
    <div className="NotFound__wrapper">
      <blockquote className="NotFound__quote">
        <h1>“Not all those who wander are lost.”</h1>
        <footer>~ J. R. R. Tolkien</footer>
      </blockquote>
      <Button className="NotFound__button" type="primary">
        <Link to="/">
          <Icon className="NotFound__arrow" type="arrow-left" />
          Back to homepage
        </Link>
      </Button>
    </div>
  </AuthSceneWrapper>
);

export default NotFound;
