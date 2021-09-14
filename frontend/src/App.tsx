import React from 'react';
import './App.css';

import Routes from './Routes';
import { MUIThemeProvider } from './themes/MUITheme';

function App() {
  return (
    <MUIThemeProvider>
      <div className="App">
        <Routes />
      </div>
    </MUIThemeProvider>
  );
}

export default App;
