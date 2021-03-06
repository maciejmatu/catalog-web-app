import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';
import Logo from '../../components/Logo';
import { loginUser } from '../../services/users/actions';
import AuthSceneWrapper from '../../components/AuthSceneWrapper';

class LoginForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };

  _handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.actions.loginUser(values);
      } else {
        console.log(err);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <AuthSceneWrapper>
        <Form onSubmit={this._handleSubmit} className="LoginForm">
          <div className="LoginForm__logo">
            <Logo color="#000" />
          </div>
          <Form.Item className="LoginForm__item">
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }]
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
            )}
          </Form.Item>
          <Form.Item className="LoginForm__item">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <div className="LoginForm__error">
            {this.props.user.authErrorMessage}
          </div>
          <Form.Item className="LoginForm__item">
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="LoginForm__button" loading={this.props.user.isLoading}>Log in</Button>
            <Button type="default" className="LoginForm__button">
              <Link to="/register">Register</Link>
            </Button>
            <Link to="/forgot-password" className="LoginForm__link">Forgot Password</Link>
          </Form.Item>
        </Form>
      </AuthSceneWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loginUser: bindActionCreators(loginUser, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginForm));
