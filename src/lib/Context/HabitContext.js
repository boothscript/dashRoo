import React, { useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from '../Reducers/HabitReducer';
import HabitsRepo from '../Storage/HabitsRepo';

const HabitContext = React.createContext();

function HabitContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [habitValues, setHabitValues] = useState({
    x: [0, 0],
    y: [0, 0],
  });

  useEffect(() => {
    HabitsRepo.updateStored(state);
  }, [state]);

  useEffect(() => {
    setHabitValues(HabitsRepo.getCompletionData());
  }, [state]);

  return (
    <HabitContext.Provider value={{ state, dispatch, habitValues }}>
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
