import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

import useStyles from './Login.styles';
import LoginForm from '../../components/LoginForm';

// eslint-disable-next-line no-unused-vars
const Login = ({ themeClasses }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Box className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <LoginForm classes={classes} />
      </Box>
    </Container>
  );
};

Login.propTypes = {
  themeClasses: PropTypes.shape(),
};

Login.defaultProps = {
  themeClasses: {},
};

export default Login;
