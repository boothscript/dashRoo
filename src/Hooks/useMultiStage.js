import { useState, useEffect } from 'react';

const useMultiStage = (steps) => {
  const [stepsList] = useState(steps);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('start');

  // State
  const [formValues, setFormValues] = useState(steps);

  const setValue = (stepIndex, key, value) => {
    setFormValues((prevValues) => {
      return prevValues.map((stepValues, prevValuesStepIndex) => {
        if (stepIndex === prevValuesStepIndex) {
          return { ...stepValues, [key]: value };
        }
        return { ...stepValues };
      });
    });
  };

  // Navigation

  const next = () => {
    setIndex((prevIndex) => {
      if (prevIndex < stepsList.length - 1) {
        setDirection('fwd');
        return prevIndex + 1;
      }
      // index has reached end of array - can not move
      setDirection('none');
      return prevIndex;
    });
  };
  const back = () => {
    setIndex((prevIndex) => {
      if (prevIndex > 0) {
        setDirection('back');
        return prevIndex - 1;
      }
      // index has reached start of array - con not move
      setDirection('none');
      return prevIndex;
    });
  };

  //   steps completed
  const [stepsCompleted, setStepsCompleted] = useState(
    formValues.map(() => false)
  );
  useEffect(() => {
    setStepsCompleted(() => {
      return formValues.map((step) => {
        return Object.values(step).every((value) => !!value === true);
      });
    });
  }, [formValues]);

  return {
    stepIndex: index,
    steps: stepsList.length,
    navigation: { next, back },
    formValues,
    setValue,
    stepsCompleted,
    direction,
  };
};

export default useMultiStage;
