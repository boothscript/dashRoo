import React, { useReducer, useEffect } from "react";

import { reducer, initialState } from "../Reducers/timerStackReducer";
import timerStackRepo from "../Storage/TimerStackRepo";

const TimerStackContext = React.createContext();

function TimerStackContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    timerStackRepo.updateData(new Date(), state.data);
  }, [state.data]);
  console.log(state);

  return (
    <TimerStackContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerStackContext.Provider>
  );
}

export { TimerStackContext, TimerStackContextProvider };
