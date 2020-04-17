import React, { useReducer, useEffect } from 'react';

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
  console.log(state);

  return (
    <TimerStackContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerStackContext.Provider>
  );
}

export { TimerStackContext, TimerStackContextProvider };
