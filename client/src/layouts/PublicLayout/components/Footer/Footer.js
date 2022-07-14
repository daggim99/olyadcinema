import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Daggim Hailu. 2022
      </Typography>
      <Typography variant="caption">
        Crafted with love |{' '}
        <Link href="http://https://github.com/daggim99/Olyad-Cinema/" target="_blank" rel="noopener">
          Daggim Hailu
        </Link>
      </Typography>
    </div>
  );
}
