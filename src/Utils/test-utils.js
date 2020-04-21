import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from 'styled-components';
import colors from '../Themes/colors';
import { MorningRoutineContextProvider } from '../lib/Context/MorningRoutineContext';
import { TimerStackContextProvider } from '../lib/Context/timerStackContext';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders = ({ children }) => {
  return (
    // <ThemeProvider theme={colors}>
    <Router>
      <MorningRoutineContextProvider>
        <TimerStackContextProvider>{children}</TimerStackContextProvider>
      </MorningRoutineContextProvider>
    </Router>
    // </ThemeProvider>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
