import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "td-0", name: "Eat", completed: true },
  { id: "td-1", name: "Sleep", completed: false },
  { id: "td-2", name: "Cum", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);


