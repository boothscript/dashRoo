import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MorningRoutineContext } from '../../../lib/Context/MorningRoutineContext';
import { TimerStackContext } from '../../../lib/Context/timerStackContext';
import { HabitContext } from '../../../lib/Context/HabitContext';

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
  const { ratingsValues } = useContext(MorningRoutineContext);
  const { stackValues } = useContext(TimerStackContext);
  const { habitValues } = useContext(HabitContext);

  const [chartData, setChartData] = useState({
    dayXData: [0, 0, 0, 0],
    dayYData: [0, 0, 0, 0],
    sleepXData: [0, 0, 0, 0],
    sleepYData: [0, 0, 0, 0],
    stackXData: [0, 0, 0, 0],
    stackYData: [0, 0, 0, 0],
    dayKpiValue: 0,
    sleepKpiValue: 0,
    stackKpiValue: 0,
    dayDelta: 0,
    sleepDelta: 0,
    stackDelta: 0,
    habitXData: [0, 0, 0, 0],
    habitYData: [0, 0, 0, 0],
    habitKpiValue: 0,
    habitDelta: 0,
  });

  useEffect(() => {
    const dayYData = calculate7DayRollingMean(ratingsValues.y.day);
    const dayXData = ratingsValues.x;
    const dayKpiValue = dayYData[dayYData.length - 1].toFixed(2);
    const dayDelta = (
      ((dayKpiValue - dayYData[dayYData.length - 8]) /
        dayYData[dayYData.length - 8]) *
      100
    ).toFixed(1);

    const sleepYData = calculate7DayRollingMean(ratingsValues.y.sleep);
    const sleepXData = ratingsValues.x;
    const sleepKpiValue = sleepYData[sleepYData.length - 1].toFixed(2);
    const sleepDelta = (
      ((sleepKpiValue - sleepYData[sleepYData.length - 8]) /
        sleepYData[sleepYData.length - 8]) *
      100
    ).toFixed(1);
    // load in data
    // process data
    console.log({ stackValues: stackValues.y });
    // temp data
    const stackTempArray = [
      0,
      3,
      8,
      0,
      0,
      9,
      8,
      0,
      4,
      8,
      0,
      7,
      7,
      0,
      8,
      7,
      3,
      0,
    ];

    const stackYData = calculate7DayRollingMean(
      // stackValues.y.slice(0, stackValues.y.length - 1)
      stackTempArray
    );
    const stackXData = stackValues.x;
    const stackKpiValue = stackYData[stackYData.length - 1].toFixed(2);
    const stackDelta = (
      ((stackKpiValue - stackYData[stackYData.length - 8]) /
        stackYData[stackYData.length - 8]) *
      100
    ).toFixed(1);

    const habitYData = calculate7DayRollingMean(
      habitValues.y.slice(0, habitValues.y.length - 1)
    );
    const habitXData = habitValues.x;
    const habitKpiValue = habitYData[habitYData.length - 1].toFixed(2);
    const habitDelta = (
      ((habitKpiValue - habitYData[habitYData.length - 8]) /
        habitYData[habitYData.length - 8]) *
      100
    ).toFixed(1);

    setChartData({
      dayXData,
      dayYData,
      sleepXData,
      sleepYData,
      stackXData,
      stackYData,
      dayKpiValue,
      sleepKpiValue,
      stackKpiValue,
      dayDelta,
      sleepDelta,
      stackDelta,
      habitXData,
      habitYData,
      habitKpiValue,
      habitDelta,
    });
  }, [ratingsValues, stackValues, habitValues]);

  return (
    <Div>
      <KPIPanel
        title="Stacks Rate"
        chartData={{ x: chartData.stackXData, y: chartData.stackYData }}
        kpiValue={chartData.stackKpiValue}
        delta={chartData.stackDelta}
        yRange={{ min: -0.05, max: 15 }}
      />
      <KPIPanel
        title="Habit Completion"
        chartData={{ x: chartData.habitXData, y: chartData.habitYData }}
        kpiValue={chartData.habitKpiValue}
        delta={chartData.habitDelta}
        yRange={{ min: 0, max: 105 }}
      />
      <KPIPanel
        title="Daily Rating"
        chartData={{ x: chartData.dayXData, y: chartData.dayYData }}
        kpiValue={chartData.dayKpiValue}
        delta={chartData.dayDelta}
        yRange={{ min: 0.5, max: 5.5 }}
      />
      <KPIPanel
        title="Sleep Quality"
        chartData={{ x: chartData.sleepXData, y: chartData.sleepYData }}
        kpiValue={chartData.sleepKpiValue}
        delta={chartData.sleepDelta}
        yRange={{ min: 0.5, max: 5.5 }}
      />
    </Div>
  );
}

export default KPIChartsContainer;
