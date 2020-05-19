import React, { useRef, useEffect, useContext } from 'react';
import Chart from 'chart.js';

import { MorningRoutineContext } from '../../../lib/Context/MorningRoutineContext';

function RatingsChart() {
  const chartNodeRef = useRef(null);
  const { ratingsValues } = useContext(MorningRoutineContext);

  const options = {
    legend: { display: false },
    scales: {
      xAxes: [
        {
          display: false,
          type: 'time',
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          type: 'linear',
          ticks: {
            min: 0.5,
            max: 5,
            stepSize: 1,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  let ctx;
  if (chartNodeRef.current) {
    ctx = chartNodeRef.current.getContext('2d');
  }

  function createCanvasGradient(rgbaArray) {
    const gradient = ctx.createLinearGradient(200, 0, 200, 150);
    gradient.addColorStop(
      0,
      `rgba(${rgbaArray[0]}, ${rgbaArray[1]}, ${rgbaArray[2]}, ${rgbaArray[3]})`
    );
    gradient.addColorStop(
      1,
      `rgba(${rgbaArray[0]}, ${rgbaArray[1]}, ${rgbaArray[2]}, 0)`
    );
    return gradient;
  }
  useEffect(() => {
    try {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ratingsValues.y,
          datasets: [
            {
              label: 'Daily Rating',
              data: ratingsValues.x.day,
              borderColor: 'rgba(45,30,256,0.3)',
              fill: true,
              backgroundColor: createCanvasGradient([45, 30, 256, 0.3]),
            },
            {
              label: 'Sleep Rating',
              data: ratingsValues.x.sleep,
              borderColor: 'rgba(256,35,100,0.3)',
              fill: true,
              backgroundColor: createCanvasGradient([256, 35, 100, 0.3]),
            },
          ],
        },
        options,
      });
    } catch (error) {}
  }, [ratingsValues, options]);

  return <canvas id="myChart" ref={chartNodeRef} />;
}

export default RatingsChart;
