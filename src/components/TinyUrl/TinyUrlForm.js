import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';

import TinyUrlSchema from './TinyUrlSchema';
import { createTinyUrls } from '../../services/TinyUrlService';

const TINY_URL_API = process.env.REACT_APP_TINY_URL_API;

const TinyUrlForm = (props) => {
  const { classes } = props;
  const history = useHistory();
  const handleRedirect = () => history.push('/');
  const createToast = (message, type) => {
    if (type === 'error') {
      toast.error(message);
    } else {
      toast.success(message, {
        onClose: () => {
          handleRedirect();
        },
      });
    }
  };
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Formik
          initialValues={{
            url: '',
            slug: '',
          }}
          validationSchema={TinyUrlSchema}
          onSubmit={async (values) => {
            const submitTinyUrl = await createTinyUrls(values, TINY_URL_API);
            if (submitTinyUrl) {
              if (submitTinyUrl.status === 422) {
                const response = submitTinyUrl.data;
                createToast(`Error: This URL ${response.errors.url[0]}.`, 'error');
              } else {
                createToast(`Success: This short URL has been created.`, 'sucesss');
              }
            }
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={errors.url && touched.url}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="url"
                    label="URL"
                    name="url"
                    helperText={errors.url && touched.url ? errors.url : null}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.slug && touched.slug}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    name="slug"
                    label="Slug"
                    id="slug"
                    helperText={errors.slug && touched.slug ? errors.slug : null}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Get tiny URL
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
      <ToastContainer autoClose={4000} position={toast.POSITION.TOP_RIGHT} />
    </Grid>
  );
};

TinyUrlForm.propTypes = {
  classes: PropTypes.shape(),
};

TinyUrlForm.defaultProps = {
  classes: {},
};

export default TinyUrlForm;
