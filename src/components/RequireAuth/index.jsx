import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static propTypes = {
      history: PropTypes.object.isRequired,
      authenticated: PropTypes.bool.isRequired
    }

    componentWillMount() {
      if (!this.props.authenticated) this._redirectToLoginPage();
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) this._redirectToLoginPage();
    }

    _redirectToLoginPage() {
      this.props.history.push('/login');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
