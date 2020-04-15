import React, { useReducer } from "react";

import { reducer, initialState } from "../Reducers/MorningRoutineReducer";

const MorningRoutineContext = React.createContext();

function MorningRoutineContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MorningRoutineContext.Provider value={{ state, dispatch }}>
      {children}
    </MorningRoutineContext.Provider>
  );
}

export { MorningRoutineContext, MorningRoutineContextProvider };
