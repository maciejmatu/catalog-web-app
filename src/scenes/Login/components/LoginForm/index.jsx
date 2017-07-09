import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import './styles.scss';
import Logo from '../../../../components/Logo';

class LoginForm extends Component {
  _handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) console.log('Received values of form: ', values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this._handleSubmit} className="LoginForm">
        <div className="LoginForm__logo">
          <Logo color="#000" />
        </div>
        <Form.Item className="LoginForm__item">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item className="LoginForm__item">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item className="LoginForm__item">
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="LoginForm__button">Log in</Button>
          <Button type="default" className="LoginForm__button">
            <Link to="/register">Register</Link>
          </Button>
          <Link to="/forgot-password" className="LoginForm__link">Forgot Password</Link>
        </Form.Item>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object.isRequired
};

export default Form.create()(LoginForm);
