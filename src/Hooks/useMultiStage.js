import { useState } from 'react';

const useMultiStage = (steps) => {
  const [stepsList, setStepsList] = useState(steps);
  const [index, setIndex] = useState(0);

  // State
  const formStates = {};
  stepsList.forEach((step) => {
    //   for each item in dictionary create state
  });

  // Navigation

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex < stepsList.length - 1 ? prevIndex + 1 : prevIndex
    );
  };
  const back = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return { index, steps: stepsList.length, navigation: { next, back }, data };
};

export default useMultiStage;
