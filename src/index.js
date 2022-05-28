import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// ReactDOM.createRoot(<App />, document.getElementById("root"))

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)