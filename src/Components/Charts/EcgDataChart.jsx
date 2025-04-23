// ECGChartJS.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const ecgData = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [
        {
            label: 'ECG Reading',
            data: [0, 1, -1, 0.5, -0.5, 0, 1, -1, 0],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            fill: false,
            tension: 0.3,
            pointRadius: 0
        }
    ]
};

const options = {
    responsive: true,
    scales: {
        y: {
            min: -2,
            max: 2
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

const ECGChartJS = () => {
    return <Line data={ecgData} options={options} />;
};

export default ECGChartJS;
