import React, { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';

const EcgDataChart = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const currentBPM = 72;
    const maxBPM = 200;

    // Update number of levels based on screen width
    const getNrOfLevels = () => {
        if (windowWidth < 640) return 6;      // mobile
        if (windowWidth < 1024) return 8;     // tablet
        return 10;                            // desktop
    };

    // Listen for window resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 card-shadow w-full max-w-sm mx-auto">
            <h4 className="text-base sm:text-lg font-medium text-gray-800 mb-4 text-center">Pulse</h4>

            <div className="flex flex-col items-center justify-center w-full">
                <GaugeChart
                    id="pulse-gauge"
                    nrOfLevels={getNrOfLevels()}
                    arcsLength={[0.3, 0.4, 0.3]}
                    colors={['#10B981', '#F59E0B', '#EF4444']}
                    percent={currentBPM / maxBPM}
                    textColor="#111827"
                    arcPadding={0.03}
                    needleColor="#1F2937"
                    needleBaseColor="#6B7280"
                    animate={true}
                    style={{ width: '100%', maxWidth: '100%' }}
                />
                <p className="text-sm sm:text-base font-medium text-gray-700 mt-3">{currentBPM} bpm</p>
            </div>
        </div>
    );
};

export default EcgDataChart;
