import React, { useReducer, useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { reducer, initialState } from '../Reducers/timerStackReducer';
import TimerStackRepo from '../Storage/TimerStackRepo';
import { WeekSelectorContext, getStoredState } from './WeekSelectorContext';
import { reloadState } from '../Actions/timerStackActions';
const TimerStackContext = React.createContext();

function TimerStackContextProvider({ children }) {
  const weekSelector = useContext(WeekSelectorContext);
  const { selectedDate } = weekSelector.state;

  const [stackValues, setStackValues] = useState({ x: [], y: [0, 0, 0, 0] });

  const [state, dispatch] = useReducer(
    reducer,
    selectedDate,
    getStoredState(TimerStackRepo, initialState)
  );

  // updates timer data when date selected changes
  useEffect(() => {
    dispatch(reloadState(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    TimerStackRepo.updateStored(selectedDate, state);
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
