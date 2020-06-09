import React, { useReducer, useContext, useEffect } from 'react';

import { reducer, initialState } from '../Reducers/JournalReducer';
import JournalRepo from '../Storage/JournalRepo';
import { WeekSelectorContext, getStoredState } from './WeekSelectorContext';
import { reloadState } from '../Actions/JournalActions';

const JournalContext = React.createContext();

function JournalContextProvider({ children }) {
  console.log('in journal context');
  const weekSelector = useContext(WeekSelectorContext);
  const { selectedDate } = weekSelector.state;

  const [state, dispatch] = useReducer(
    reducer,
    selectedDate,
    getStoredState(JournalRepo, initialState)
  );

  useEffect(() => {
    dispatch(reloadState(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    JournalRepo.updateStored(selectedDate, state);
  }, [state]);

  return (
    <JournalContext.Provider value={{ state, dispatch }}>
      {children}
    </JournalContext.Provider>
  );
}

export { JournalContext, JournalContextProvider };
