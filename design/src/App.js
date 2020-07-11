import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Banner from './components/Banner';
import MobileBanner from './components/MobileBanner';

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
          {matches ? <MobileLayout /> : <DesktopLayout />}
        </div>
    )
  }

const MobileLayout = () => {
const classes = useStyles();
return (
 <div className={classes.root}>
  <MobileBanner />
 </div>
)
}

const DesktopLayout = () => {
const classes = useStyles();
return (
 <div className={classes.root}>
  <Banner />
 </div>
)
}

export default App;
