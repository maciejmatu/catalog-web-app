import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';
import Logo from '../../components/Logo';
import { registerUser } from '../../services/users/actions';
import AuthSceneWrapper from '../../components/AuthSceneWrapper';

class RegisterForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };

  state = {
    confirmDirty: false
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        delete values.confirm;
        this.props.actions.registerUser(values);
      } else {
        console.log(err);
      }
    });
  }

  _comparePasswords = (rule, value, callback) => {
    if (value && value !== this.props.form.getFieldValue('password')) {
      callback('The passwords that you entered are not the same!');
    } else {
      callback();
    }
  }

  _checkConfirm = (rule, value, callback) => {
    if (value && this.state.confirmDirty) {
      this.props.form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <AuthSceneWrapper>
        <Form onSubmit={this._handleSubmit} className="RegisterForm">
          <div className="RegisterForm__logo">
            <Logo color="#000" />
          </div>
          <Form.Item
            className="RegisterForm__item"
            {...formItemLayout}
            label="E-mail"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'The input is not valid E-mail!' },
                { required: true, message: 'Please input your E-mail!' }
              ],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            className="RegisterForm__item"
            {...formItemLayout}
            label="Password"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your password!' },
                { validator: this._checkConfirm }
              ],
            })(
              <Input type="password" />
            )}
          </Form.Item>
          <Form.Item
            className="RegisterForm__item"
            {...formItemLayout}
            label="Confirm Password"
            hasFeedback
          >
            {getFieldDecorator('confirm', {
              rules: [
                { required: true, message: 'Please confirm your password!' },
                { validator: this._comparePasswords }
              ],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          <Form.Item
            className="RegisterForm__item"
            {...formItemLayout}
            label={(
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('displayName', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <div className="LoginForm__error">
            {this.props.user.registerErrorMessage}
          </div>
          <Button type="primary" htmlType="submit" className="RegisterForm__button" loading={this.props.user.isLoading}>Submit</Button>
          <Link to="/login" className="RegisterForm__link">Back to login page</Link>
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
      registerUser: bindActionCreators(registerUser, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(RegisterForm));
