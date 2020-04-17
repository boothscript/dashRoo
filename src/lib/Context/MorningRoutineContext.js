import React, { useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import morningRoutineRepo from '../Storage/MornigRoutineRepo';

import { reducer, initialState } from '../Reducers/MorningRoutineReducer';

const MorningRoutineContext = React.createContext();

function MorningRoutineContextProvider({ children }) {
  // check for stored state

  function getStoredState() {
    console.log('in getstored', morningRoutineRepo.getTodaysState(new Date()));
    return morningRoutineRepo.getTodaysState(new Date());
  }
  console.log('getStoredState', getStoredState());
  const [state, dispatch] = useReducer(
    reducer,
    getStoredState() || initialState
  );
  const history = useHistory();
  useEffect(() => {
    if (state.step === 'complete') {
      history.push('/dash');
    }
  }, [state.step, history]);

  useEffect(() => {
    morningRoutineRepo.updateStored(new Date(), state);
  }, [state]);
  console.log({ state });
  return (
    <MorningRoutineContext.Provider value={{ state, dispatch }}>
      {children}
    </MorningRoutineContext.Provider>
  );
}

export { MorningRoutineContext, MorningRoutineContextProvider };
