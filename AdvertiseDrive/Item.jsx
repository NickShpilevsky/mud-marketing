import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },

  image: {
    position: 'relative',
    width: '100%',

    '&:hover': {
      '& $imageTitle': {
        border: '1px solid transparent',
      },

      '& $imageSrc': {
        opacity: 0.4,
        transition: theme.transitions.create(['opacity'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.short,
        }),
      },
    },
  },

  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },

  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: ({ imagePath }) => `url(${imagePath});`,
  },

  imageTitle: {
    fontSize: '2.8rem',
    padding: theme.spacing(3, 5),
    border: '1px solid currentColor',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: theme.transitions.create(['all'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),

    '& > br': {
      content: '" "',
      display: 'block',
      margin: '-1.2rem 0',
    },
  },
}));

const Item = ({ buttonTitle1, buttonTitle2, imagePath, link }) => {
  const classes = useStyles({ imagePath });

  return (
    <Grid className={classes.root} xs={12} sm={6} item>
      <ButtonBase
        focusRipple
        className={classes.image}
        component={NavLink}
        to={link}
      >
        <div className={classes.imageSrc} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {buttonTitle1}
            <br />
            {buttonTitle2}
          </Typography>
        </span>
      </ButtonBase>
    </Grid>
  );
};

Item.propTypes = {
  buttonTitle1: PropTypes.string.isRequired,
  buttonTitle2: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Item;
