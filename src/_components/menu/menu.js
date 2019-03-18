import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Menu(props) {
  const { classes, resetCallback } = props;
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Simon Says Notepad
          </Typography>
          <Button color="inherit" onClick={() => resetCallback()} >Reset</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);