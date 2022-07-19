import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bannerTitle: {
    fontSize: theme.spacing(1.4),
    textTransform: 'uppercase',
    color: 'rgb(93, 93, 97)',
    marginBottom: theme.spacing(1)
  },
  bannerContent: {
    fontSize: theme.spacing(2),
    textTransform: 'capitalize',
    color: theme.palette.common.white
  },
  [theme.breakpoints.down('sm')]: {
    hideOnSmall: {
      display: 'none'
    }
  }
}));

export default function BookingCheckout(props) {
  const classes = useStyles(props);
  const {
    user,
    ticketPrice,
    vipPrice,
    selectedSeats,
    selectedVipSeats,
    seatsAvailable,
    seatsVipAvailable,
    onBookSeats,
    // onBookVipSeats,
  } = props;

  return (
    <Box marginTop={2} bgcolor="rgb(18, 20, 24)">
      <Grid container>
        <Grid item xs={8} md={10}>
          <Grid container spacing={3} style={{ padding: 20 }}>
            {user && user.name && (
              <Grid item className={classes.hideOnSmall}>
                <Typography className={classes.bannerTitle}>Name</Typography>
                <Typography className={classes.bannerContent}>
                  {user.name}
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Typography className={classes.bannerTitle}>Tickets</Typography>
              {selectedSeats > 0 ? (
                <Typography className={classes.bannerContent}>
                  {selectedSeats} tickets
                </Typography>
              ) : (
                <Typography className={classes.bannerContent}>0</Typography>
              )}
            </Grid>

            <Grid item>
              <Typography className={classes.bannerTitle}>VIP Tickets</Typography>
              {selectedVipSeats > 0 ? (
                <Typography className={classes.bannerContent}>
                  {selectedVipSeats} VIP tickets
                </Typography>
              ) : (
                <Typography className={classes.bannerContent}>0</Typography>
              )}
            </Grid>

            <Grid item>
              <Typography className={classes.bannerTitle}>Total Tickets</Typography>
              {selectedVipSeats > 0 || selectedSeats > 0 ? (
                <Typography className={classes.bannerContent}>
                  {selectedVipSeats + selectedSeats} Total tickets
                </Typography>
              ) : (
                <Typography className={classes.bannerContent}>0</Typography>
              )}
            </Grid>

            <Grid item>
              <Typography className={classes.bannerTitle}>Price</Typography>
              <Typography className={classes.bannerContent}>
                {ticketPrice * selectedSeats} Birr
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.bannerTitle}>VIP Price</Typography>
              <Typography className={classes.bannerContent}>
                {vipPrice * selectedVipSeats} Birr
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.bannerTitle}>Total Price</Typography>
              <Typography className={classes.bannerContent}>
                {(vipPrice * selectedVipSeats) + (ticketPrice * selectedSeats)} Birr
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          md={2}
          style={{
            color: 'rgb(120, 205, 4)',
            background: 'black',
            display: 'flex'
          }}>
          <Button
            color="inherit"
            fullWidth
            disabled={seatsAvailable <= 0 || seatsVipAvailable <= 0 || selectedSeats <=0 || selectedVipSeats <= 0}
            onClick={() => onBookSeats()}>
            Checkout
          </Button>
        </Grid>
        {/* <Grid
          item
          xs={4}
          md={2}
          style={{
            color: 'rgb(255, 239, 130)',
            background: 'black',
            display: 'flex'
          }}>
          <Button
            color="inherit"
            fullWidth
            disabled={seatsVipAvailable <= 0}
            onClick={() => onBookVipSeats()}>
            Checkout
          </Button>
        </Grid> */}
      </Grid>
    </Box>
  );
}
