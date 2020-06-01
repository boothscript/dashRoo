import React, { useReducer, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { reducer, initialState } from '../Reducers/timerStackReducer';
import TimerStackRepo from '../Storage/TimerStackRepo';

const TimerStackContext = React.createContext();

function TimerStackContextProvider({ children }) {
  function getStoredState() {
    return TimerStackRepo.getTodaysState(new Date());
  }
  const [stackValues, setStackValues] = useState({ x: [], y: [0, 0, 0, 0] });

  const [state, dispatch] = useReducer(
    reducer,
    getStoredState() || initialState
  );

  useEffect(() => {
    TimerStackRepo.updateStored(new Date(), state);
  }, [state]);

  // FOR DEBUGGING

  // useEffect(() => {

  // }, [state]);

  // ==============

  useEffect(() => {
    setStackValues(TimerStackRepo.getStackValues());
  }, []);

  return (
    <TimerStackContext.Provider value={{ state, dispatch, stackValues }}>
      {children}
    </TimerStackContext.Provider>
  );
}

TimerStackContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { TimerStackContext, TimerStackContextProvider };
