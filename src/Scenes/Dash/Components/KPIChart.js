import React, { useRef, useEffect } from 'react';

import Chart from 'chart.js';

function KPIChart({ xData, yData, containerDimensions, yRange }) {
  const chartNodeRef = useRef();

  let ctx;
  if (chartNodeRef.current) {
    ctx = chartNodeRef.current.getContext('2d');
  }

  useEffect(() => {
    const options = {
      animation: false,
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
              min: yRange.min,
              max: yRange.max,
              stepSize: 1,
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };

    try {
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
  }, [xData, yData, yRange]);

  return <canvas id="myChart" ref={chartNodeRef} />;
}

export default KPIChart;
