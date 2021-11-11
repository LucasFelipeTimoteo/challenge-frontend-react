import React from 'react';
import './App.css';
import { SelectedCharacterProvider } from './contexts/selectedCharacter';
import { MUIThemeProvider } from './themes/MUITheme';
import Routes from './Routes';
import { FavoriteCharactersProvider } from './contexts/favoritedCharacters';

function App() {
  return (
    <MUIThemeProvider>
      <SelectedCharacterProvider>
        <FavoriteCharactersProvider>
        <div className="App">
          <Routes />
        </div>
        </FavoriteCharactersProvider>
      </SelectedCharacterProvider>
    </MUIThemeProvider>
  );
}

export default App;
