import React from 'react';
import { PropTypes } from 'prop-types';
import { Formik, Form } from 'formik';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import SignUpSchema from './SignUpSchema';

const SignUpForm = (props) => {
  const { classes } = props;
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, handleChange, touched }) => (
        <Form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={errors.firstName && touched.firstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                id="firstName"
                label="First Name"
                autoFocus
                helperText={errors.firstName && touched.firstName ? errors.firstName : null}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={errors.lastName && touched.lastName}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                helperText={errors.lastName && touched.lastName ? errors.lastName : null}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errors.email && touched.email}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={errors.email && touched.email ? errors.email : null}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errors.password && touched.password}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={errors.password && touched.password ? errors.password : null}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errors.confirmPassword && touched.confirmPassword}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

SignUpForm.propTypes = {
  classes: PropTypes.shape(),
};

SignUpForm.defaultProps = {
  classes: {},
};

export default SignUpForm;
