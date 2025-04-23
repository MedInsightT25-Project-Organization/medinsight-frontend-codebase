// PulseGauge.jsx
import React from 'react';
import GaugeChart from 'react-gauge-chart';

const PulseGauge = () => {
    const pulse = 78; // current pulse in BPM
    const normalized = (pulse - 60) / (100 - 60); // normalize to 0-1 range

    return (
        <div className="w-full flex flex-col items-center">
            <GaugeChart
                id="pulse-gauge"
                nrOfLevels={4}
                colors={['#34d399', '#60a5fa', '#f59e0b', '#ef4444']}
                arcWidth={0.3}
                percent={normalized}
                textColor="#000"
                needleColor="#111"
                animate={false}
            />
            <p className="mt-2 text-xl font-bold text-gray-800">{pulse} BPM</p>
        </div>
    );
};

export default PulseGauge;
