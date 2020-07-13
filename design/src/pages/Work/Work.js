import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme';
import Desktop from './DesktopWork';
import Mobile from './MobileWork';

function Work() {
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <div>
          {matches ? <Mobile /> : <Desktop />}
        </div>
      </ThemeProvider>
    )
  };

  export default Work;