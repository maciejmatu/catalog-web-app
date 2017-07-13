import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Route } from 'react-router-dom';

import './styles.scss';
import MyLibrary from './scenes/MyLibrary';
import Settings from './scenes/Settings';
import MenuItem from './components/MenuItem';
import Logo from '../../components/Logo';

const { Header, Content, Sider } = Layout;

const Dashboard = ({ match, location }) => {
  const routes = [
    { path: `${match.url}`, title: 'My Library' },
    { path: `${match.url}/settings`, title: 'Settings' }
  ];

  return (
    <Layout className="Dashboard">
      <Header className="header">
        <Logo />
      </Header>
      <Layout>
        <Sider className="Dashboard__side-bar">
          <Menu
            selectedKeys={[location.pathname]}
            className="Dashboard__menu"
            mode="inline"
          >
            {routes.map(MenuItem)}
          </Menu>
        </Sider>
        <Layout className="Dashboard__content">
          <Content className="Dashboard__content--inner">
            <Route exact path={`${match.url}`} component={MyLibrary} />
            <Route exact path={`${match.url}/settings`} component={Settings} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

Dashboard.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Dashboard;
