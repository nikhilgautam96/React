import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode is used for development purpose only, and not intended for use in production.
    // Using Strict Mode in React, intentionally double-invokes certain functions and hooks to help.
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
