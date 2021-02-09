import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import useStyles from './Home.styles';

// eslint-disable-next-line no-unused-vars
const Home = ({ themeClasses }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.main} display="flex" flexDirection="column">
          <Typography variant="h6">Hello World!</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  themeClasses: PropTypes.shape(),
};

Home.defaultProps = {
  themeClasses: {},
};

export default Home;
