import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

import useStyles from './TinyUrl.styles';
import { TinyUrlForm, TinyUrlList } from '../../components/TinyUrl';

// eslint-disable-next-line no-unused-vars
const TinyUrl = ({ match, themeClasses }) => {
  const classes = useStyles();
  let tinyUrlComponent = <TinyUrlForm classes={classes} />;
  if (match.path === '/') {
    tinyUrlComponent = <TinyUrlList classes={classes} />;
  } else if (match.path === '/create') {
    tinyUrlComponent = <TinyUrlForm classes={classes} />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box className={classes.paper}>
        <Typography component="h1" variant="h5">
          Tiny URLs
        </Typography>
        {tinyUrlComponent}
      </Box>
    </Container>
  );
};

TinyUrl.propTypes = {
  match: PropTypes.shape(),
  themeClasses: PropTypes.shape(),
};

TinyUrl.defaultProps = {
  match: {},
  themeClasses: {},
};

export default TinyUrl;
