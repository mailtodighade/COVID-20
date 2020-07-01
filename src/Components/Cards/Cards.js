import React from 'react';
import styles from './Cards.module.css';
import { Card, Typography, CardContent, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className='container'>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              INFECTED
            </Typography>
            <Typography color='error' variant='h5' gutterBottom>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' gutterBottom>
              No of Active Cases Of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              RECOVERED
            </Typography>
            <Typography color='error' variant='h5' gutterBottom>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' gutterBottom>
              No of People Recovered From COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              DEATHS
            </Typography>
            <Typography color='error' variant='h5' gutterBottom>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' gutterBottom>
              No of Deaths from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
