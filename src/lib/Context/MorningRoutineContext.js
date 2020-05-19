import React, { useReducer, useEffect, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import morningRoutineRepo from '../Storage/MornigRoutineRepo';

import { reducer, initialState } from '../Reducers/MorningRoutineReducer';

const MorningRoutineContext = React.createContext({ test: 'test' });

function MorningRoutineContextProvider({ children }) {
  // check for stored state

  function getStoredState() {
    return morningRoutineRepo.getTodaysState(new Date());
  }

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

  const ratingsValues = {};
  useLayoutEffect(() => {
    Object.assign(ratingsValues, morningRoutineRepo.getRatingData());
  }, [state, ratingsValues]);

  return (
    <MorningRoutineContext.Provider value={{ state, dispatch, ratingsValues }}>
      {children}
    </MorningRoutineContext.Provider>
  );
}

MorningRoutineContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { MorningRoutineContext, MorningRoutineContextProvider };
