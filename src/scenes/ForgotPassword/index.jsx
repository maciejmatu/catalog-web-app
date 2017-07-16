import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';

import './styles.scss';
import Logo from '../../components/Logo';

class ForgotPassword extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired
  };

  _handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        return true;
      } else {
        console.log(err);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="ForgotPassword__scene">
        <Form onSubmit={this._handleSubmit} className="ForgotPassword__form">
          <header className="ForgotPassword__form__header">
            <div className="ForgotPassword__logo">
              <Logo color="#000" />
            </div>
            <p>Pass the e-mail that you registered with, so
              that we can send you a reset password link.
            </p>
          </header>
          <Form.Item className="ForgotPassword__form__input">
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'The input is not valid E-mail!' },
                { required: true, message: 'Please input your E-mail!' }
              ]
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="RegisterForm__button">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Form.create()(ForgotPassword);
