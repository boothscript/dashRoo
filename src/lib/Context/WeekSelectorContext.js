import React, { useReducer } from 'react';

import { reducer, initialState } from '../Reducers/WeekSelectorReducer';

const WeekSelectorContext = React.createContext();

function WeekSelectorContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ initialState });
  return (
    <WeekSelectorContext.Provider value={{ state, dispatch }}>
      {children}
    </WeekSelectorContext.Provider>
  );
}

export { WeekSelectorContext, WeekSelectorContextProvider };
