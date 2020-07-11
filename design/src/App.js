import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Banner from './components/Banner';
import MobileBanner from './components/mobileBanner';
import './App.css';

const useStyles = makeStyles({
  root: {
      height: '100vh',
  }
});

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={classes.root}>
          {matches ? <MobileBanner /> : <Banner />}
        </div>
    )
  }

export default App;
