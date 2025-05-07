import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const pulseData = [
    { time: '12:00', bpm: 72 },
    { time: '12:05', bpm: 75 },
    { time: '12:10', bpm: 70 },
];

<ResponsiveContainer width="100%" height={300}>
    <LineChart data={pulseData}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="bpm" stroke="#ff4d4f" strokeWidth={2} />
    </LineChart>
</ResponsiveContainer>
