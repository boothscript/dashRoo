import React, { useRef, useEffect } from 'react';

import Chart from 'chart.js';

function KPIChart({ xData, yData, containerDimensions }) {
  const chartNodeRef = useRef();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
  console.log({ xData, yData });
  useEffect(() => {
    try {
      console.log('in effect', xData, yData);
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: xData,
          datasets: [
            {
              label: 'Daily Rating',
              data: yData,
              borderColor: 'rgba(256,256,256,0.3)',
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options,
      });
    } catch (error) {}
  }, [xData, yData, options]);

  return <canvas id="myChart" ref={chartNodeRef} />;
}

export default KPIChart;
