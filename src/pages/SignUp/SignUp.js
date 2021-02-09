import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import useStyles from './SignUp.styles';
import SignUpForm from '../../components/SignUpForm';

// eslint-disable-next-line no-unused-vars
const SignUp = ({ themeClasses }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Box className={classes.paper}>
        <Typography component="h2" variant="h5">
          Sign up
        </Typography>
        <SignUpForm classes={classes} />
      </Box>
    </Container>
  );
};

SignUp.propTypes = {
  themeClasses: PropTypes.shape(),
};

SignUp.defaultProps = {
  themeClasses: {},
};

export default SignUp;
