import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function Bar({ labelData = [], bmiData = [] }) {
  const data = {
    labels: labelData ?? [],
    datasets: [
      {
        label: "BMI",
        data: bmiData ?? [],
        borderColor: "#3F51B5",
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: { size: 18 },
          color: "white",
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          font: { size: 16 },
        },
      },
      y: {
        title: {
          display: true,
          text: "BMI",
          font: { size: 18 },
          color: "white",
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          font: { size: 16 },
          beginAtZero: true,
        },
      },
    },
    plugins: {
      tooltip: {
        titleFont: { size: 13 },
        bodyFont: { size: 13 },
      },
    },
  };

  return <Line data={data} options={options} />;
}

Bar.propTypes = {
  labelData: PropTypes.array,
  bmiData: PropTypes.array,
};

export default Bar;