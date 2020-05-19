import React, { useRef, useEffect, useContext } from 'react';
import Chart from 'chart.js';

import { MorningRoutineContext } from '../../../lib/Context/MorningRoutineContext';

function RatingsChart() {
  const chartNodeRef = useRef(null);
  const { ratingsValues } = useContext(MorningRoutineContext);

  useEffect(() => {
    const ctx = chartNodeRef.current.getContext('2d');

    try {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ratingsValues.y,
          datasets: [
            {
              label: 'Daily Rating',
              data: ratingsValues.x.day,
            },
          ],
        },
        options: {},
      });
    } catch (error) {}
  }, [ratingsValues]);

  return <canvas id="myChart" ref={chartNodeRef} width="200" height="200" />;
}

export default RatingsChart;
