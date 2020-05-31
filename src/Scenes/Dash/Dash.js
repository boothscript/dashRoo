import React, { useContext } from 'react';
import styled from 'styled-components';

import Timer from './Components/Timer';
import Stack from './Components/Stack';
import TodaysGoal from './Components/TodaysGoal';
import HabitTracker from './Components/HabitTracker';
import Visualizer from './Components/Visualizer';
import KPIPanel from './Components/KPIPanel';

import { MorningRoutineContext } from '../../lib/Context/MorningRoutineContext';
import { calculate7DayRollingMean } from '../../Utils/statsHelper';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr) max(1200px) minmax(0, 1fr);
  background: #828282;
`;

const DashGrid = styled.div`
  grid-column: 2/-2;
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: repeat(9, minmax(0, 1fr));
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 20px;
  padding: 10px;
  background: #0f1115;
  border-radius: 16px;
`;

const TimerStackWrapper = styled.div`
  grid-column: -3/-1;
  grid-row: 2 / span 6;
  background: ${(props) => props.theme.panel};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5em 0;
`;

function Dash() {
  const ratingsValues = [
    3,
    4,
    4,
    3,
    4,
    1,
    5,
    5,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    3,
    3,
    3,
    1,
    2,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    3,
    4,
    4,
    3,
    3,
    1,
    1,
    1,
    1,
    2,
    3,
    3,
    1,
    4,
    4,
    3,
  ];
  const yData = calculate7DayRollingMean(ratingsValues);
  const xData = [
    '2020-04-17',
    '2020-04-18',
    '2020-04-19',
    '2020-04-20',
    '2020-04-21',
    '2020-04-22',
    '2020-04-23',
    '2020-04-24',
    '2020-04-25',
    '2020-04-26',
    '2020-04-27',
    '2020-04-28',
    '2020-04-29',
    '2020-04-30',
    '2020-05-01',
    '2020-05-02',
    '2020-05-03',
    '2020-05-04',
    '2020-05-05',
    '2020-05-06',
    '2020-05-07',
    '2020-05-08',
    '2020-05-09',
    '2020-05-10',
    '2020-05-11',
    '2020-05-12',
    '2020-05-13',
    '2020-05-14',
    '2020-05-15',
    '2020-05-16',
    '2020-05-17',
    '2020-05-18',
    '2020-05-19',
    '2020-05-20',
    '2020-05-21',
    '2020-05-22',
    '2020-05-23',
    '2020-05-24',
    '2020-05-25',
    '2020-05-26',
    '2020-05-27',
    '2020-05-28',
    '2020-05-29',
    '2020-05-30',
    '2020-05-31',
  ];

  return (
    <>
      <Container>
        <DashGrid>
          <HabitTracker />
          <TodaysGoal />
          <KPIPanel title="Daily Rating" chartData={{ x: xData, y: yData }} />

          <TimerStackWrapper>
            <Timer />
            <Stack />
          </TimerStackWrapper>
        </DashGrid>
      </Container>
    </>
  );
}

export default Dash;
