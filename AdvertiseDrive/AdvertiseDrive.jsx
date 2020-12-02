import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

import images from './images';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const AdvertiseDrive = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {images.map(({ buttonTitle1, buttonTitle2, imagePath, link }) => (
        <Item
          key={buttonTitle1}
          imagePath={imagePath}
          buttonTitle1={buttonTitle1}
          buttonTitle2={buttonTitle2}
          link={link}
        />
      ))}
    </Grid>
  );
};

export default AdvertiseDrive;
