import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  seat: {
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.7)',
    borderRadius: 2,
    padding: theme.spacing(2),
    margin: theme.spacing(0.5),
    fontWeight: 600,
    '&:hover': {
      background: 'rgb(120, 205, 4)'
    }
  },
  
  vipSeat: {
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.7)',
    borderRadius: 2,
    padding: theme.spacing(2),
    margin: theme.spacing(0.5),
    fontWeight: 600,
    '&:hover': {
      background: 'rgb(97, 72, 28)'
    }
  },
  

  seatInfoContainer: {
    width: '50%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#eee'
  },

  seatInfo: { marginRight: theme.spacing(2) },

  seatInfoLabel: {
    marginRight: theme.spacing(1),
    display: 'inline-block',
    width: 10,
    height: 10
  },

  [theme.breakpoints.down('sm')]: {
    seat: { padding: theme.spacing(1.2), margin: theme.spacing(0.5) },
    vipSeat: { padding: theme.spacing(1.2), margin: theme.spacing(0.5) },
    seatInfoContainer: { width: '100%', display: 'block' },
    seatInfo: { marginTop: theme.spacing(2) }
  }
}));

export default function BookingSeats(props) {
  const classes = useStyles(props);
  const { seats, vipSeats, onSelectSeat, onSelectVipSeat } = props;

  return (
    <Fragment>
      <Box width={1} pt={15}>
        {seats.length > 0 &&
          seats.map((seatRows, indexRow) => (
            <div key={indexRow} className={classes.row}>
              {seatRows.map((seat, index) => (
                <Box
                  key={`seat-${index}`}
                  onClick={() => onSelectSeat(indexRow, index)}
                  className={classes.seat}
                  bgcolor={
                    seat === 1
                      ? 'rgb(65, 66, 70)'
                      : seat === 2
                      ? 'rgb(120, 205, 4)'
                      : seat === 3
                      ? 'rgb(14, 151, 218)'
                      : 'rgb(96, 93, 169)'
                  }>
                  {index + 1}
                </Box>
              ))}
            </div>
          ))}
      </Box>

      <Box width={1} pt={15}>
        {vipSeats.length > 0 &&
          vipSeats.map((vipSeatRows, indexRow) => (
            <div key={indexRow} className={classes.row}>
              {vipSeatRows.map((vipSeat, index) => (
                <Box
                  key={`vipSeat-${index}`}
                  onClick={() => onSelectVipSeat(indexRow, index)}
                  className={classes.vipSeat}
                  bgcolor={
                    vipSeat === 1
                      ? 'rgb(230, 179, 37)'
                      : vipSeat === 2
                      ? 'rgb(97, 72, 28)'
                      : vipSeat === 3
                      ? 'rgb(255, 239, 130)'
                      : 'rgb(186, 189, 66)'
                  }>
                  {index + 1}
                </Box>
              ))}
            </div>
          ))}
      </Box>


      <Box width={1} mt={10}>
        <div className={classes.seatInfoContainer}>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(96, 93, 169)' }}></div>
            Seat Available
          </div>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(65, 66, 70)' }}></div>
            Reserved Seat
          </div>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(120, 205, 4)' }}></div>
            Selected Seat
          </div>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(14, 151, 218)' }}></div>
            Recommended Seat
          </div>




          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(186, 189, 66)' }}></div>
            VIP Seat Available
          </div>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(230, 179, 37)' }}></div>
            VIP Reserved Seat
          </div>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(97, 72, 28)' }}></div>
            Selected VIP Seat
          </div>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(255, 239, 130)' }}></div>
            Recommended VIP Seat
          </div>
        </div>
      </Box>
    </Fragment>
  );
}
