import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Banner from './components/Banner';
import MobileBanner from './components/MobileBanner';
import Main from './components/Main';
import MainMobile from './components/MainMobile';

import './App.css';

const useStyles = makeStyles({
  root: {
      height: '100vh',
  }
});

function App() {
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <div className={classes.root}>
          {matches ? <MobileLayout /> : <DesktopLayout />}
        </div>
      </ThemeProvider>
    )
  }

const MobileLayout = () => {
const classes = useStyles();
return (
 <div className={classes.root}>
  <MobileBanner />
  <MainMobile />
 </div>
)
}

const DesktopLayout = () => {
const classes = useStyles();
return (
 <div className={classes.root}>
  <Banner />
  <Main />
 </div>
)
}

export default App;
