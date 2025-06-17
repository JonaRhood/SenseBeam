'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    ReactDOM.prefetchDNS('https://dummyjson.com');
    ReactDOM.preconnect('https://dummyjson.com',{ crossOrigin: 'anonymous' });
    ReactDOM.prefetchDNS('https://telemetry-ws-mock-api.onrender.com');
    ReactDOM.preconnect('https://telemetry-ws-mock-api.onrender.com',{ crossOrigin: 'anonymous' });

    return <></>;
};