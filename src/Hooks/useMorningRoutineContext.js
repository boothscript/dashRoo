import { useContext } from 'react';

import { MorningRoutineContext } from '../lib/Context/MorningRoutineContext';

export const useMorningRoutineContext = () => {
  return useContext(MorningRoutineContext);
};

export default MorningRoutineContext;
