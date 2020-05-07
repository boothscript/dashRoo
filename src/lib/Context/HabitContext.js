import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from '../Reducers/HabitReducer';
import HabitsRepo from '../Storage/HabitsRepo';

const HabitContext = React.createContext();

function HabitContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    HabitsRepo.updateStored(state);
  }, [state]);

  return (
    <HabitContext.Provider value={{ state, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
}

HabitContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { HabitContext, HabitContextProvider };
