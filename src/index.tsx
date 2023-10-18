import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/main';
import { Settings } from './components/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Main placesCount={Settings.PlacesCount} />
  </React.StrictMode>
);
