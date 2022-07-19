import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  vipSeat: {
    cursor: 'pointer',
    color: 'rgba(255,200,133,0.72)',
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
    seatInfoContainer: { width: '100%', display: 'block' },
    seatInfo: { marginTop: theme.spacing(2) }
  }
}));

export default function BookingSeats(props) {
  const classes = useStyles(props);
  const { vipSeats, onSelectVipSeat } = props;

  return (
    <Fragment>
      <Box width={1} pt={15}>
        {vipSeats.map((vipSeatRows, indexRow) => (
            <div key={indexRow} className={classes.row}>
              {vipSeatRows.map((vipSeat, index) => (
                <Box
                  key={`vipSeat-${index}`}
                  onClick={() => onSelectVipSeat(indexRow, index)}
                  className={classes.vipSeat}
                  bgcolor={
                    vipSeat === 1
                      ? 'rgb(240,165,0)'
                      : vipSeat === 2
                      ? 'rgb(107,1,31)'
                      : vipSeat === 3
                      ? 'rgb(56,66,89)'
                      : 'rgb(247,56,89)'
                  }>
                  {index + 1}
                </Box>
              ))}
            </div>
          ))}
      </Box>
    
    </Fragment>
  );
}
