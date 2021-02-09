import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    width: '100%',
    textDecoration: 'inherit',
  },
  menuLinkContainer: {
    flexGrow: 1,
    width: '100%',
  },
  menuLink: {
    flexGrow: 1,
    width: '100%',
    textDecoration: 'inherit',
    marginRight: theme.spacing(2),
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" className={classes.title}>
            <Link to="/">Tiny Urls</Link>
          </Typography>
          <Grid className={classes.menuLinkContainer}>
            <Typography variant="button" className={classes.menuLink}>
              {/* <Link to="/tiny-urls">Tiny URLs</Link> */}
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
