import { ResponsiveLine } from '@nivo/line';

const vitalsData = [
    {
        id: 'Heart Rate (BPM)',
        color: 'hsl(0, 70%, 50%)', // Red
        data: [
            { x: '08:00', y: 72 },
            { x: '09:00', y: 75 },
            { x: '10:00', y: 78 },
            { x: '11:00', y: 76 },
            { x: '12:00', y: 80 },
        ],
    },
    {
        id: 'Oxygen (SpO₂%)',
        color: 'hsl(200, 70%, 50%)', // Blue
        data: [
            { x: '08:00', y: 97 },
            { x: '09:00', y: 98 },
            { x: '10:00', y: 96 },
            { x: '11:00', y: 97 },
            { x: '12:00', y: 99 },
        ],
    },
    {
        id: 'Temperature (°C)',
        color: 'hsl(45, 90%, 55%)', // Yellow
        data: [
            { x: '08:00', y: 36.6 },
            { x: '09:00', y: 36.8 },
            { x: '10:00', y: 37 },
            { x: '11:00', y: 37.2 },
            { x: '12:00', y: 37 },
        ],
    },
];

const PulseCard = () => (
    <div style={{ height: '400px' }}>
        <ResponsiveLine
            data={vitalsData}
            margin={{ top: 40, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: false,
                reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                legend: 'Time',
                legendOffset: 36,
                legendPosition: 'middle',
            }}
            axisLeft={{
                orient: 'left',
                legend: 'Vitals',
                legendOffset: -40,
                legendPosition: 'middle',
            }}
            colors={{ scheme: 'category10' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            enableGridX={false}
            enableGridY={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 8,
                    itemDirection: 'left-to-right',
                    itemWidth: 100,
                    itemHeight: 20,
                    symbolSize: 12,
                    symbolShape: 'circle',
                },
            ]}
            tooltip={({ point }) => (
                <div className="p-2 text-sm bg-white border rounded shadow">
                    <strong>{point.serieId}</strong><br />
                    {point.data.yFormatted} at {point.data.x}
                </div>
            )}
        />
    </div>
);

export default PulseCard;
