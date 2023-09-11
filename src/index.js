import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThirdwebProvider } from '@thirdweb-dev/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThirdwebProvider clientId='257f4b53dac37846d75cdf4a1c5076fa' activeChain='goerli'>
    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);


