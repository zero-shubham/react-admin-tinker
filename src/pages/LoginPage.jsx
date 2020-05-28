import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const CustomLoginForm = withStyles({
  button: { background: '#F15922' },
})(LoginForm);

export const CustomLoginPage = (props) => (
  <Login loginForm={<CustomLoginForm />} {...props} />
);
