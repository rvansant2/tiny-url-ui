import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';

import LoginSchema from './LoginSchema';

const LoginForm = (props) => {
  const { classes } = props;
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, handleChange, touched }) => (
        <Form className={classes.form}>
          <Grid container spacing={2}>
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
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.shape(),
};

LoginForm.defaultProps = {
  classes: {},
};

export default LoginForm;
