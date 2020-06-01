import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MorningRoutineContext } from '../../../lib/Context/MorningRoutineContext';
import { calculate7DayRollingMean } from '../../../Utils/statsHelper';
import KPIPanel from './KPIPanel';

const Div = styled.div`
  grid-row: 3 / span 7;
  grid-column: 5 / span 3;
  display: grid;
  grid-template-rows: repeat(4, minmax(0px, 1fr));
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;

function KPIChartsContainer() {
  const { state, ratingsValues } = useContext(MorningRoutineContext);

  const dayYData = calculate7DayRollingMean(ratingsValues.y.day);
  const dayXData = ratingsValues.x;
  const dayKpiValue = dayYData[dayYData.length - 1].toFixed(2);
  const dayDelta = (
    ((dayKpiValue - dayYData[dayYData.length - 8]) / 5) *
    100
  ).toFixed(1);

  const sleepYData = calculate7DayRollingMean(ratingsValues.y.sleep);
  const sleepXData = ratingsValues.x;
  const sleepKpiValue = sleepYData[sleepYData.length - 1].toFixed(2);
  const sleepDelta = (
    ((sleepKpiValue - sleepYData[sleepYData.length - 8]) / 5) *
    100
  ).toFixed(1);
  // load in data
  // process data

  return (
    <Div>
      <KPIPanel
        title="Daily Rating"
        chartData={{ x: dayXData, y: dayYData }}
        kpiValue={dayKpiValue}
        delta={dayDelta}
      />
      <KPIPanel
        title="Sleep Quality"
        chartData={{ x: sleepXData, y: sleepYData }}
        kpiValue={sleepKpiValue}
        delta={sleepDelta}
      />
      {/* <KPIPanel title="Stacks Rate" chartData={{ x: xData, y: yData }} />
      <KPIPanel title="Habit Completion" chartData={{ x: xData, y: yData }} /> */}
    </Div>
  );
}

export default KPIChartsContainer;
