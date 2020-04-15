import React, { useReducer, useEffect } from "react";
import morningRoutineRepo from "../Storage/MornigRoutineRepo";

import { reducer, initialState } from "../Reducers/MorningRoutineReducer";

const MorningRoutineContext = React.createContext();

function MorningRoutineContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    morningRoutineRepo.updateData(new Date(), state.data);
  }, [state.data]);

  return (
    <MorningRoutineContext.Provider value={{ state, dispatch }}>
      {children}
    </MorningRoutineContext.Provider>
  );
}

export { MorningRoutineContext, MorningRoutineContextProvider };
