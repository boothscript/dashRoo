import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MorningRoutineContextProvider } from '../lib/Context/MorningRoutineContext';
import { TimerStackContextProvider } from '../lib/Context/timerStackContext';

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

AllTheProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
