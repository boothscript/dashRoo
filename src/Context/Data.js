import React, { useState, useEffect } from "react";

const UserDataContext = React.createContext();

function UserDataContextProvider({ children }) {
  const [morningRoutineData, setMorningRoutineData] = useState([]);
  const [stackData, setStackData] = useState([]);
  const [projects, setProjects] = useState([]);

  // init local state with dummy data
  useEffect(() => {
    localStorage.setItem(
      "morningRoutineData",
      JSON.stringify([{ date: 1 }, { date: 2 }])
    );
    localStorage.setItem(
      "projects",
      JSON.stringify([
        { title: "project rooter", id: 1, color: "#B3F8F1" },
        { title: "job search", id: 2, color: "#EBEE89" },
        { title: "project dashroo", id: 3, color: "#EE9FD3" },
      ])
    );
    localStorage.setItem(
      "stackData",
      JSON.stringify([{ item: 1 }, { item: 2 }])
    );
  }, []);

  useEffect(() => {
    // update states from local storage on init
    setMorningRoutineData(
      JSON.parse(localStorage.getItem("morningRoutineData")) || []
    );
    setStackData(JSON.parse(localStorage.getItem("stackData")) || []);
    setProjects(JSON.parse(localStorage.getItem("projects")) || []);
  }, []);

  // useEffect(() => {
  //   //   update localStorage on state changes
  //   localStorage.setItem(
  //     "morningRoutineData",
  //     JSON.stringify(morningRoutineData)
  //   );
  //   localStorage.setItem("stackData", JSON.stringify(stackData));
  //   localStorage.setItem("projects", JSON.stringify(projects));
  // }, [morningRoutineData, stackData, projects]);

  function submitRoutineObject(routineObject) {
    //   example object - {date: datetime, ratings:{day: 5, sleep: 4}, gratitude{1:"dhsfhkdgfhs", 2: "dshhf", 3:"ksdhfkh"}, goal, {text: "hdkfsd"}}
    //   update state
    setMorningRoutineData((prevState) => {
      return [...prevState, routineObject];
    });
  }

  return (
    <UserDataContext.Provider
      value={{ morningRoutineData, submitRoutineObject }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export { UserDataContext, UserDataContextProvider };
