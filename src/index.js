import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { OptimizelyProvider, createInstance, setLogLevel } from '@optimizely/react-sdk';

setLogLevel('debug');

const optimizely = createInstance({
  sdkKey: 'K6jmeE7TPoqZqQnENE55P',
});

optimizely.onReady().then(() => {
  // optimizelyClient is ready to use, with datafile downloaded from the Optimizely CDN

//optimizely.setUser({
//  id: 'user123'
//});

//optimizely.setForcedVariation('experiment','variation_1');


ReactDOM.render(
  <React.StrictMode>
  <OptimizelyProvider
optimizely={optimizely} user={{id: "user123"}}
timeout={1000}
>
    <App />
</OptimizelyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
