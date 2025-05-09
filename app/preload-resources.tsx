'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    ReactDOM.prefetchDNS('https://dummyjson.com');
    ReactDOM.preconnect('https://dummyjson.com',{ crossOrigin: 'anonymous' });
    ReactDOM.prefetchDNS('https://sensebeam.azurewebsites.net');
    ReactDOM.preconnect('https://sensebeam.azurewebsites.net',{ crossOrigin: 'anonymous' });

    return <></>;
};