import React, { useState } from 'react';
import Loader from '../common/Loader';

const EmiCalculatorTab: React.FC = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div style={{ width: '100%', height: 'calc(100vh - 60px)', overflow: 'hidden', position: 'relative' }}>
            {loading && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f9fafb'
                }}>
                    <Loader />
                </div>
            )}
            <iframe
                src="/emi_calculator/index.html"
                title="EMI Calculator"
                width="100%"
                height="100%"
                style={{ border: 'none', opacity: loading ? 0 : 1, transition: 'opacity 0.3s' }}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};

export default EmiCalculatorTab;
