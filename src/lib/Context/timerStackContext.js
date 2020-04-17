import React, { useReducer, useEffect } from 'react';
import PropTypes from "prop-types"
import { reducer, initialState } from '../Reducers/timerStackReducer';
import timerStackRepo from '../Storage/TimerStackRepo';

const TimerStackContext = React.createContext();

function TimerStackContextProvider({ children }) {
  function getStoredState() {
    return timerStackRepo.getTodaysState(new Date());
  }

  const [state, dispatch] = useReducer(
    reducer,
    getStoredState() || initialState
  );

  useEffect(() => {
    timerStackRepo.updateStored(new Date(), state);
  }, [state]);


  return (
    <TimerStackContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerStackContext.Provider>
  );
}

TimerStackContextProvider.propTypes ={
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export { TimerStackContext, TimerStackContextProvider };
