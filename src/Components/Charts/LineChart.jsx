// ECGRecharts.jsx
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const ecgData = [
    { time: 0, voltage: 0 },
    { time: 1, voltage: 1 },
    { time: 2, voltage: -1 },
    { time: 3, voltage: 0.5 },
    { time: 4, voltage: -0.5 },
    { time: 5, voltage: 0 },
    { time: 6, voltage: 1 },
    { time: 7, voltage: -1 },
    { time: 8, voltage: 0 },
];

const LineChartRender = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={ecgData}>
                    <XAxis dataKey="time" />
                    <YAxis domain={[-2, 2]} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="voltage"
                        stroke="#ff0000"
                        dot={false}
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartRender;

