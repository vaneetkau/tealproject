import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ pieChartData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;
    if (ctx && chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const newChartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: pieChartData.labels,
        datasets: [
          {
            label: pieChartData.label,
            data: pieChartData.data,
            backgroundColor: pieChartData.backgroundColor,
            borderColor: pieChartData.borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    chartInstanceRef.current = newChartInstance;

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [pieChartData]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
