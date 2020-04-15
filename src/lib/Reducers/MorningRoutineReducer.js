import { useHistory } from "react-router-dom";

const initialState = {
  date: new Date(),
  step: "rate",
  direction: "fwd",
  data: {
    ratings: { day: null },
    gratitude: { 1: null, 2: null, 3: null },
    goal: { text: "" },
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.dataKey]: {
            ...state.data[action.dataKey],
            [action.field]: action.value,
          },
        },
      };
    case "SUBMIT_RATE":
      return {
        ...state,
        step: "gratitude",
        direction: "fwd",
      };
    case "SUBMIT_GRATITUDE":
      return {
        ...state,
        step: "goal",
        direction: "fwd",
      };
    case "SUBMIT_GOAL":
      // form has bee completed, redirects to dashboard
      return {
        ...state,
      };
    case "GO_BACK":
      return {
        ...state,
        step: state.step === "goal" ? "gratitude" : "rate",
        direction: "back",
      };
    default:
      throw new Error();
  }
}

export { reducer, initialState };
