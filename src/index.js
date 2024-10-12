import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root with React 18's createRoot
const root = ReactDOM.createRoot(container);

// Render the app
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
