import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {
  const [data, setCharts] = useState({
    series: [
      {
        name: 'Sales',
        data: [31, 40, 51, 42, 82, 56],
      },
      {
        name: 'Revenue',
        data: [45, 55, 67, 83, 99, 74],
      },
      {
        name: 'Expenses',
        data: [25, 33, 48, 52, 77, 61],
      },
    ],
    options: {
      chart: {
        type: 'area', 
        height: 350,
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3, 
          opacityTo: 0.4, 
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime', 
        categories: [
          '2024-09-19T00:00:00.000Z',
          '2024-09-19T01:30:00.000Z',
          '2024-09-20T02:30:00.000Z',
          '2024-09-21T03:30:00.000Z',
          '2024-09-22T04:30:00.000Z',
          '2024-09-23T05:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yyyy HH:mm', 
        },
      },
    },
  });

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
}

export default ReportCharts;

