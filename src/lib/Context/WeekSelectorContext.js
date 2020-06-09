import React, { useReducer, useEffect } from 'react';

import { reducer, initialState } from '../Reducers/WeekSelectorReducer';

const WeekSelectorContext = React.createContext();

function WeekSelectorContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ initialState });

  useEffect(() => {
    console.log('selected date', state.selectedDate);
  }, [state]);

  return (
    <WeekSelectorContext.Provider value={{ state, dispatch }}>
      {children}
    </WeekSelectorContext.Provider>
  );
}

export function getStoredState(repo, initState) {
  return (selectedDate) => {
    console.log('in getstored state', { selectedDate, repo });
    return repo.getTodaysState(selectedDate) || initState;
  };
}

export { WeekSelectorContext, WeekSelectorContextProvider };
